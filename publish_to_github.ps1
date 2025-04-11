
# PowerShell Script to Create GitHub Repo and Upload Files
param (
    [string]$RepoName = "VirtualModelsWebsite",
    [string]$GitUser = "YourGitHubUsername",
    [string]$GitEmail = "youremail@example.com"
)

# Setup local repo
git init
git config user.name $GitUser
git config user.email $GitEmail
git remote add origin https://github.com/$GitUser/$RepoName.git

# Stage and commit
git add .
git commit -m "Initial upload"

# Create repo (optional if already created)
gh repo create $RepoName --public --source=. --remote=origin --push
