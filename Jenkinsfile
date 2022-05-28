pipeline {
  agent any
  tools {nodejs "NodeJs"}

  // environment {
  //   SSH_KEY = credentials('ssh_key_server1')
  // }

  stage("Test connecting to remote server") {
    def dockerRun = 'docker run hello-world'
    sshagent(['ssh_key_server1']) {
      sh "ssh -o StrictHostKeyChecking=no root@134.122.76.203 ${dockerRun}"
    }
  }
  // stages {
  //   stage('Init') {
  //     steps {
  //       echo "Building on ${env.NODE_NAME}"
  //       echo "Installing"
  //       sh 'npm install'
  //     }
  //   }

  //   stage('Build') {
  //     steps {
  //       echo 'Building the node Project'
  //     }
  //   }

  //   stage('Test') {
  //     steps {
  //       sh 'npm test'
  //     }

  //     post {
  //       success {
  //         echo "Archiving the project"
  //         archiveArtifacts artifacts: 'src/*'
  //       }
  //     }
  //   }

  //   stage('Deploy for Staging') {
  //     steps {
  //       echo 'Deploying in Staging Area'
  //       sh 'echo New Deployment [$(date +"%d-%m-%Y %H:%M:%S")] >> /home/jenkins/deployments.txt'
  //     }
  //   }

  //   stage('Deploy via Docker on remote server') {
  //     steps {
  //       echo 'Deploying remote via docker'
  //       sh 'ssh root@134.122.76.203 docker run hello-world'
  //     }
  //   }

    // stage('Deploy for Production') {
    //   steps {
    //     timeout(time: 5, unit: 'DAYS') {
    //       input message: 'Approve PRODUCTION Deployment?'
    //     }

    //     echo 'Deploying in Staging Area'
    //   }
    // }
  }
}