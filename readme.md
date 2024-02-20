# UI5 Walkthrough

1. Install extension pack in VS Code - SAP Fiori - Extension Pack 
2. Install the Command Line Interface for UI. (CLI)
    `npm i -g @ui5/cli'
3. Created a Git Repository 
        git init -> Initialize the repository 
        git add . -> Stage the files 
        git commit -m "Hello World exercise" 
        git push -u origin master 

4. Initialize the node package 
    `npm init`
5. Initialize the UI5 module 
    `ui5 init` -> pre-requisite for this is we need to have a folder named webapp/src

6. Inside the web app folder we create index.html page. 

7. Created a script to serve the ui5 application. 
    `ui5 serve -o index.html`

    scripts: {
        "start" : "ui5 serve -o index.html" 
    }

8. Created a manifest file. manifest.json 
    
