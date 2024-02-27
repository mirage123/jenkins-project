@Library('sb-shared-jenkins') _

pipeline{

    agent any

    tools {
            maven 'maven3'
            jdk 'jdk17'
        }
    environment {
            // Define a variable to hold the JAR file name
            JAR_FILE = ""
            WAR_FILE = ""
            adminFrontendChanged = false
            adminBackendChanged = false
            adminFrontend = "angluer-test"
            adminBackend = "spring-test"
            
        }

    parameters{

        choice(name: 'action', choices: 'create\ndelete', description: 'Choose create/Destroy')
    }

    stages{
        stage('Git Checkout'){
                    when { expression {  params.action == 'create' } }
            steps{
            echo "::: GIT CHECKOUT GOING TO HAPPEN ${env.BRANCH_NAME}"
            gitCheckout(
                branch: env.BRANCH_NAME,
                url: "https://github.com/mirage123/jenkins-project.git"
            )
            }
        }
        stage('Check for Project Changes') {
            steps {
                script {
                    sh(script: "git diff --name-only HEAD HEAD~1 | grep '^angluer-test/'", returnStdout: true).trim()
                    echo "::: Changes in angular frontend admin"

                }
            }
        }

        stage('COMPILE MAVEN'){

                 when { expression {  params.action == 'create' } }

                    steps{
                       script{
                           mvnCompile(dir : "spring-test")

                       }
                    }
                }
         stage('Unit Test maven'){
         
         when { expression {  params.action == 'create' } }

            steps{
               script{
               mvnTest(dir : "spring-test")
               }
            }
        }
         stage('Integration Test maven'){
         when { expression {  params.action == 'create' } }
            steps{
               script{

                   script{
                      mvnIntegrationTest(dir : "spring-test")

                  }
               }
            }
        }

        stage('Owasp Dependency check') {
            when { expression {  params.action == 'create' } }
                    steps {
                        dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'dependency-check'
                        dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
                    }
                }

        stage('JAR MAVEN BUILD'){
         when { expression {  params.action == 'delete' } }
            steps{
               script{
                   
                   mvnBuild()
                   def fullPath = sh(script: "ls target/*.jar", returnStdout: true).trim()
                   JAR_FILE = fullPath.tokenize('/').last()
                                       echo "JAR file is ${JAR_FILE}"
               }
            }
            post{
                                    success{
                                    echo "::: ARCHIVING THE JAR ARTIFACTS"
                                    archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
                                    }
                                }
        }

        stage('WAR MAVEN BUILD'){
                 when { expression {  params.action == 'create' } }
                    steps{
                       script{

                           mvnBuild(dir : "spring-test")
                           def fullPath = sh(script: "ls **/target/*.war", returnStdout: true).trim()
                           WAR_FILE = fullPath.tokenize('/').last()
                                               echo "WAR file is ${WAR_FILE}"
                       }
                    }
                    post{
                        success{
                        echo "::: ARCHIVING THE WAR ARTIFACTS"
                        archiveArtifacts artifacts: '**/target/*.war', fingerprint: true
                        }
                    }
                }

         stage('Deploy JAR TO UNIX') {
         when { expression {  params.action == 'delete' } }
                     steps {
                         script {
                             sshagent(credentials : ['103.187.8.39-server']) {
                                sh "scp -o StrictHostKeyChecking=no target/*.jar spadmin@103.187.8.39:/home/spadmin/"
                                echo "::: DELETING ${JAR_FILE} "
//                                 sh "ssh spadmin@103.187.8.39 'pkill -f ${JAR_FILE}'"


                                sleep(10)
                                echo "::: DELETED ${JAR_FILE} "
                                sh "ssh spadmin@103.187.8.39 'nohup java -jar /home/spadmin/${JAR_FILE} &'"

                             }
                         }
                     }
                 }
        stage ('DEPLOY WAR TO WINDOWS') {
            when { expression { params.action == 'create' } } // Check if this condition is correct. Should it be 'deploy' instead of 'delete'?
            steps {
                script{
                    echo "::: DEPLOYING WAR TO WINDOWS"
                    if (env.BRANCH_NAME == 'main') {
                         echo 'Deploying 2 Main server...'
                         deployWARToWindows(
                            contextPath: '',
                            url: "http://103.187.8.39:8010/",
                            war: '**/*.war'
                         )
                    /*
                    Even if server has tomcat10, we using tomcat9 adapters because no tomcat10 adapters yet. And It works.
                    For springboot 3X, we need tomcat10 server.
                    */
                        // deploy adapters: [tomcat9(credentialsId: 'tomcat-unix-server-8080',
                        //         path: '',
                        //         url: 'http://103.187.8.39:8010/')],
                        //         contextPath: '', 
                        //         war: '**/*.war'
                    }
                    else if (env.BRANCH_NAME == 'qa') {
                        echo 'Deploying to QA server...'
                        // Add your deployment steps for QA server here
                    }
                }
            }
            post {
                success {
                    script {
                        def message = "Deployment to server was successful."
                        def teamsWebhookUrl = 'https://sbsolutionsnepal.webhook.office.com/webhookb2/d8327b70-7d29-45a0-9300-8f3eabbe7f07@e041cff3-8260-4f83-8167-00748d3468e3/IncomingWebhook/30fcb4010b1d48c7b827ccfc20620e86/f7cd51e8-e46d-46da-8322-813f78c871bc'
                        def payload = "{\"text\": \"${message}\"}"
                        sh "curl -H 'Content-Type: application/json' -d '${payload}' ${teamsWebhookUrl}"
                    }
                }
                failure {
                    script {
                        def message = "Deployment to server failed."
                        def teamsWebhookUrl = 'https://sbsolutionsnepal.webhook.office.com/webhookb2/d8327b70-7d29-45a0-9300-8f3eabbe7f07@e041cff3-8260-4f83-8167-00748d3468e3/IncomingWebhook/30fcb4010b1d48c7b827ccfc20620e86/f7cd51e8-e46d-46da-8322-813f78c871bc'
                        def payload = "{\"text\": \"${message}\"}"
                        sh "curl -H 'Content-Type: application/json' -d '${payload}' ${teamsWebhookUrl}"
                    }
                }
            }
        }




    }
}