pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN') // เก็บ Token ใน Jenkins Credentials
        NETLIFY_SITE_ID = "your-netlify-site-id" // เปลี่ยนเป็น Site ID ของคุณ
        GIT_CREDENTIALS = credentials('GITHUB_ACCESS_TOKEN') // ใช้ GitHub Token สำหรับ Push
        GITHUB_REPO = "https://github.com/kittipongrks/Chipskai.git" // เปลี่ยนเป็น Repo ของคุณ
    }

    stages {
        stage('Build') {
            steps {
                // ใส่คำสั่งสำหรับการ Build เช่น คำสั่ง npm หรืออื่นๆ
                echo 'Building the project...'
                sh 'npm install'  // ติดตั้ง Dependencies ถ้าเป็น Node.js
            }
        }

        stage('Test') {
            steps {
                // ใส่คำสั่งทดสอบ เช่นการรัน unit tests หรืออื่นๆ
                echo 'Running tests...'
                sh 'npm test'  // รัน Unit Tests ถ้าเป็น Node.js
            }
        }

        stage('Deploy') {
            steps {
                // ขั้นตอนสำหรับการ Deploy ไปยัง Netlify
                echo 'Deploying to Netlify...'
                sh 'netlify deploy --prod --dir=./'  // Deploy เว็บไป Netlify
            }
        }

        stage('Post Deploy') {
            steps {
                // ขั้นตอนหลังการ Deploy เช่นตรวจสอบผลการ Deploy หรือการแจ้งเตือน
                echo 'Running post deploy tasks...'
                sh 'curl -X POST https://api.example.com/deploy-success'  // ส่งการแจ้งเตือนหรือทำงานอื่นๆ
            }
        }
    }

    post {
        success {
            // ทำงานที่ต้องทำหลังจาก pipeline สำเร็จ
            echo 'Pipeline executed successfully!'
        }
        failure {
            // ทำงานที่ต้องทำหลังจาก pipeline ล้มเหลว
            echo 'Pipeline failed!'
        }
    }
}
