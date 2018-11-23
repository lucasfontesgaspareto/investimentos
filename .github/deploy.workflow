workflow "Deploy" {
  on = "push"
  resolves = ["GitHub Action for AWS"]
}

action "GitHub Action for AWS" {
  uses = "actions/aws@8d31870"
  secrets = ["GITHUB_TOKEN"]
}
