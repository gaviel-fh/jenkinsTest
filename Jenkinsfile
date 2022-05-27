pipeline {
  agent {label 'Linux'}
  stages {
    stage('Init') {
      steps {
        currentBuild.description = "Building on ${env.NODE_NAME}"
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