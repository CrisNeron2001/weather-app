# Create a new branch and switch to it
param (
	[string]$user
)

if (-not $user) {
	Write-Host "Please provide a username as a parameter." -ForegroundColor Red
	exit 1
}

# Define the branch name
$branchName = "feature/$user"

# Create and switch to the new branch
git checkout -b $branchName

Write-Host "Branch '$branchName' created and checked out successfully." -ForegroundColor Green