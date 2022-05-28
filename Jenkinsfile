def dockerRun = 'docker run hello-world'

pipeline {
  agent any
  tools {nodejs "NodeJs"}

  stages {
    stage("Test connecting to remote server") {
      steps {
        sshagent(credentials: ['ssh_key_server1']) {
          sh "ssh -o StrictHostKeyChecking=no root@134.122.76.203 ${dockerRun}"
        }
      }
    }
  }
}