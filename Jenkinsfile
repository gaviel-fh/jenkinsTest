def dockerRun = 'docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d'
def projectName = 'jenkinsTest'

pipeline {
  agent any
  // agent {label 'Linux'}
  tools {nodejs "NodeJs"}

  stages {
    // stage('Init') {
    //   steps {
    //     echo "Building on ${env.NODE_NAME}"
    //     echo "Installing"
    //     sh 'npm install'
    //   }
    // }

    // stage('Test') {
    //   steps {
    //     sh 'npm test'
    //   }

    //   post {
    //     success {
    //       echo "Archiving the project"
    //       archiveArtifacts artifacts: 'src/*'
    //     }
    //   }
    // }

    // stage('Build') {
    //   steps {
    //     echo 'Building the node Project'
    //   }
    // }

    // stage('Deploy for Staging') {
    //   steps {
    //     echo 'Deploying in Staging Area'
    //     // sh 'echo New Deployment [$(date +"%d-%m-%Y %H:%M:%S")] >> /home/jenkins/deployments.txt'
    //   }
    // }

    stage("Deploy on production Server") {
      steps {
        // timeout(time: 5, unit: 'DAYS') {
        //   input message: 'Approve PRODUCTION Deployment?'
        // }

        sshagent(credentials: ['ssh_key_server1']) {
          sh "ssh -o StrictHostKeyChecking=no root@134.122.76.203 'cd /root/app/${projectName}; git pull; ${dockerRun}'"
        }
      }
    }
  }
}