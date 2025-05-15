#!/bin/bash

# Get the username of the current Linux/Mac user
USERNAME=$(whoami)

# Define the branch name using the username
BRANCH_NAME="feature/$USERNAME"

# Create the new branch
git checkout -b "$BRANCH_NAME"

# Output the created branch name
echo "Branch '$BRANCH_NAME' created and checked out."