pipeline {
    agent any

    environment {
        NETLIFY_SITE_NAME = '8943b822-9ef4-4dfb-8598-7852a6b1c124' // ✅ ใช้ชื่อที่อยู่ใน Netlify dashboard
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH') // ✅ token จาก Jenkins Credentials
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-slim'
                    args '-v C:ProgramData/Jenkins/.jenkins/workspace/kitti:/workspace'
                    reuseNode true
                }
            }
            steps {
                echo "✅ Checking required files..."
                sh '''
                    test -f index.html || (echo "❌ Missing index.html" && exit 1)
                    echo "✅ Build check passed."
                    echo "NETLIFY_AUTH_TOKEN: $NETLIFY_AUTH_TOKEN"
                    echo "NETLIFY_SITE_NAME: $NETLIFY_SITE_NAME"
                    docker pull node:18-slim
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-slim'
                    reuseNode true
                }
            }
            steps {
                echo "🧪 Testing quote function load..."
                sh 'echo "⚠️ No test implemented yet"'
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-slim'
                    reuseNode true
                }
            }
            steps {
                echo "🚀 Deploying to Netlify..."
                sh '''
                    npm install netlify-cli
                    npx netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_NAME
                '''
            }
        }

        stage('Post Deploy') {
            steps {
                echo "🎉 Deployment complete! Your app is live."
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD pipeline finished successfully."
        }
        failure {
            echo "❌ Pipeline failed. Check logs for details."
        }
    }
}