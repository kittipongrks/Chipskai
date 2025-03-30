pipeline {
    agent any

    environment {
        NETLIFY_SITE_NAME = '8943b822-9ef4-4dfb-8598-7852a6b1c124' // ✅ ใช้ชื่อที่อยู่ใน Netlify dashboard
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH') // ✅ token จาก Jenkins Credentials
        GIT_CREDENTIALS = credentials('GITHUB_CREDENTIALS') // ✅ token จาก Jenkins Credentials
        GIT_REPO = 'https://github.com/kittipongrks/Chipskai.git'
    }

    stages {
        stage('Commit and Push GitHub'){
          script{
            bat '''
              git config --global user.name "kittipongrks"
              git config --global user.email "icafez4444@gmail.com"
              git add .
              git commit -m "Automated commit from Jenkins"
              git push origin main
            '''
          }
        }
        stage('Build') {
            steps {
                echo "✅ Checking required files..."
                bat '''
                    test -f index.html || (echo "❌ Missing index.html" && exit 1)
                    echo "✅ Build check passed."
                    echo "NETLIFY_AUTH_TOKEN: $NETLIFY_AUTH_TOKEN"
                    echo "NETLIFY_SITE_NAME: $NETLIFY_SITE_NAME"
                    docker pull node:18-slim
                '''
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Testing quote function load..."
                bat 'echo "⚠️ No test implemented yet"'
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Deploying to Netlify..."
                bat '''
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