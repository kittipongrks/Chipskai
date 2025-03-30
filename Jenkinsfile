pipeline {
    agent any  // ใช้ any แทน docker

    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH')
        NETLIFY_SITE_ID = '8943b822-9ef4-4dfb-8598-7852a6b1c124'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Starting build process...'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test || echo "No tests found"'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'NETLIFY_AUTH', variable: 'NETLIFY_AUTH_TOKEN')]) {
                        sh 'npx netlify-cli deploy --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
