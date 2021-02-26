pipeline{
    agent {
        docker { image "diogooliveiratech/node-wd" }
    }
    stages {
        stage('Build') {
            steps{
                sh "npm install"
            }
            
        }
        stage('Tests') {
            steps{
                sh "npm run test:ci"
            }
            
        }
    }
}