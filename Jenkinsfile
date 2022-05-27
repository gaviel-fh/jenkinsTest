pipeline {
  agent any
  stages {
    stage('Init') {
      steps {
        npm install
      }
    }

    stage('Build') {
      steps {
        echo 'Building the node Project'
      }
    }

    stage('Test') {
      steps {
        npm test
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying in Staging Area'
      }
    }
  }
}