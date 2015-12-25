Install NodeJs from website
Create a nodejs project
	npm init  
		(This will create package.json file)
	npm install express --save

Create a express server

#############
Git Versioning System
##############

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

To remove from git
	git rm --cached -r node_modules

To Commit
	git commit -a -m "Init Commit"

################
HEROKU - Deploy To Github/Heroku
################
1) Generate ssh key
	In Command Prompt, type
		ssh-keygen -t rsa -b 4096 -C "ashish19jan@gmail.com"

		This will create the ssh key
		To confirm: 
			ls -al ~/.ssh

2) Go to github, add the ssh key by copying the contents of "id_rsa.pub"

3) pushing a existing repository from command line
	git remote add origin https://github.com/kumarsas/todo-api.git

	To Check: 
		git remote (o/p : version)
		git remote -v

	git push -u origin master
		This will push the code to github

4) Login to Heroku, click on your username --> Manage Account
	Add ssh key

5)Install "Heroku toolbelt"

	To test: heroku --version

6) Create/Add heroku app
	heroku --create

7) heroku open

8) Push to heroku:
	git push
	git push heroku master


9) POST Menthod -- To add item
  we will require the body-parser module
  
