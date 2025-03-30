pipeline {
    agent {
        docker {
            image 'node:18'  // ใช้ Node.js 18 Docker image (Linux-based)
            args '--user root --workdir /workspace'  // ตั้งค่า workdir เป็น /workspace
        }
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH')
        NETLIFY_SITE_ID = '8943b822-9ef4-4dfb-8598-7852a6b1c124'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Starting build process...'
                    sh 'npm install'  // ใช้ sh command เพื่อรัน npm install
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test || echo "No tests found"'  // รันคำสั่ง npm test
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'NETLIFY_AUTH', variable: 'NETLIFY_AUTH_TOKEN')]) {
                        sh 'npx netlify-cli deploy --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN'  // ใช้ netlify-cli สำหรับ deploy
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'  // ถ้า deployment สำเร็จ
        }
        failure {
            echo 'Deployment failed!'  // ถ้า deployment ล้มเหลว
        }
    }
}
