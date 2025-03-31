pipeline{
    agent any
    environment {
        NETLIFY_SITE_ID = '8943b822-9ef4-4dfb-8598-7852a6b1c124'
        NETLIFY_AUTH = credentials('NETLIFY_AUTH')
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
    post {
        always {
            echo 'This will always run after the stages.'
        }
    }
}