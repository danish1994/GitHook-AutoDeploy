# GitHook-AutoDeploy

## A lightweight webhook server to autodeploy on webhooks or whenever a new code is pushed.

### Steps run the webhook server.

* Install Node on your machine.
* Run the following script with "PORT" Number for Webhook server and the "Path to your Deploy Script" as command line arguments.

Example:

`
bash start.sh 8080 ~/.deploy.sh
`

It will start a webhook server at PORT: 8080 which you can add over your Git Webhook.

*PS: You need to open port 8080 for the webhook to work.*
