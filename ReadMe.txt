Install NodeJs from website
Create a nodejs project
	npm init  
		(This will create package.json file)
	npm install express --save

Create a express server

####Git Versioning System and deploy to heroku#####
Install Git

git init
	Initialized empty Git repository in /Users/Maitreyi/Desktop/Workspace/nodeJs/todo-app/.git/

Set Git config:

git config --global user.name "Ashish Singh"
git config --global user.email ashish19jan@gmail.com
git config --global push.default matching
git config --global alias.co checkout

git status
	to know the files that are not saved yet. Not tracked by Git

To save
	git add .

	then "git status", will give green bordered file names that are saved.

We dont want to save "node_modles/". 
This we can keep it in file ".gitignore"
