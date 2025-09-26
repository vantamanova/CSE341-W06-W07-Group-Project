CSE341 Group Project

This repository contains the CSE341 Group Project API.
Follow the instructions below to set up the project on your local machine and work with the team.

Getting Started
1. Clone the repository

2. Install dependencies

After cloning the repo, you will already have a package.json file in the project.
You only need to run one command to install everything:

npm install

This will create a node_modules folder and install all dependencies listed in package.json (Express, MongoDB, dotenv, express-validator, passport, swagger, nodemon, etc.).

⚠️ Do NOT run npm init -y or install packages one by one, because that would overwrite or duplicate the configuration.

3. Environment Variables (.env file)

Create a file named .env in the project root. Add your configuration values

4. Create your own branch

⚠️ Important: Never push directly to the main branch. Always work in your own branch.

# Create and switch to a new branch
git checkout -b your-branch-name
example: git checkout -b antamanova_W05

# Commit and push to your branch:
git add .
git commit -m "Added users controller"
git push origin your-branch-name


⚠️ Do NOT push changes directly to main.
⚠️ Instead, send a merge request


JSON Files and MongoDB Setup

The following files are included in JSON folder:

users.json
games.json
characters.json
platforms.json

These contain data you should import into your MongoDB database/collection.

# MongoDB Setup

Use your existing Cluster
Create a new Database called:

CSE341_Group

⚠️ Do NOT put this inside another databases you created for other projects

Inside this database, create the following collections:

users
games
characters
platforms

Import data from the provided JSON files into their matching collections.
