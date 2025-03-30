pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '8943b822-9ef4-4dfb-8598-7852a6b1c124'
        NETLIFY_AUTH = credentials('NETLIFY_AUTH')
    }

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "================Building the project================"
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }


        stage('Test')   {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    echo "================Testing the project================"
                    test -f build/index.html
                    npm test
                '''
            }
        }

        stage('Deploy') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli --save-dev
                    node_modules/.bin/netlify --version
                    echo "================Deploying the project================"
                    echo "Deploying to Netlify Site ID: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify deploy --dir=build --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH
                '''
            }
        }


    }
    post {
        always{
            junit 'test-results/junit.xml'
        }
    }
}