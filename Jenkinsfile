pipeline {
  agent any
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
    }

    stage('Deploy') {
      steps {
        echo 'Deploying in Staging Area'
      }
    }
  }
}