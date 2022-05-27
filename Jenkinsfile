pipeline {
  agent Linux
  stages {
    stage('Init') {
      steps {
        echo "Installing"
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo 'Building the node Project'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }

      post {
        success {
          echo "Archiving the project"
          archiveArtifacts artifacts: 'src/*'
        }
      }
    }

    stage('Deploy for Staging') {
      steps {
        echo 'Deploying in Staging Area'
      }
    }

    stage('Deploy for Production') {
      steps {
        timeout(time: 5, unit: 'DAYS') {
          input message: 'Approve PRODUCTION Deployment?'
        }

        echo 'Deploying in Staging Area'
      }
    }
  }
}