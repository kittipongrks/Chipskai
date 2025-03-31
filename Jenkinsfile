pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '8943b822-9ef4-4dfb-8598-7852a6b1c124'
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🔧 Checking required files..."
                sh '''
                    test -f index.html || (echo "❌ Missing index.html" && exit 1)
                    test -f aboutUs.html || (echo "❌ Missing AboutUs.html" && exit 1)
                    test -f menu.html || (echo "❌ Missing menu.html" && exit 1)
                    test -f promotion.html || (echo "❌ Missing promotion.html" && exit 1)
                    test -f sighupandlogin.html || (echo "❌ Missing signupandlogin.html" && exit 1)
                    echo "✅ Build check passed."
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🧪 Running tests..."
                sh '''
                    # Install dependencies
                    npm install
                    
                    # Run unit tests
                    npm test
                    
                    # Optional: Run linting
                    npm run lint || echo "⚠️ Linting issues found, but continuing..."
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🚀 Deploying to Netlify..."
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify deploy \
                      --auth=$NETLIFY_AUTH_TOKEN \
                      --site=$NETLIFY_SITE_ID \
                      --dir=. \
                      --prod
                '''
            }
        }

        stage('Post Deploy') {
            steps {
                echo "✅ Deployment complete! Your app is live."
            }
        }
    }

    post {
        success {
            echo "🎉 CI/CD pipeline finished successfully."
        }
        failure {
            echo "❌ Pipeline failed. Check logs for details."
        }
    }
}
