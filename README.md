# LINGUALYTICS
![Build and Deploy](https://github.com/lingualytics/website/workflows/Build%20and%20Deploy/badge.svg?branch=master)
![Events](https://img.shields.io/github/issues/lingualytics/website/event?color=green&label=events)
## 🚀 Super fast setup
Run the code locally for testing and development purposes by following steps mentioned below.

You'll need [git](https://git-scm.com) and [node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer
```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### 1. From your command line, clone and run the repo:
```bash
# Clone this repository
$ git clone https://github.com/lingualytics/lingualytics.git

# Go into the repository
$ cd website

# Install dependencies
$ npm install
```

### 2. Generate a Github Personal Access Token
Generate a Github personal access token using these [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

`Note: Make sure you don't select any scope just generate a simple token without any scope`

After that copy your generated token and then encode your token into base 64 using this [website](http://www.utilities-online.info/base64/)

`Note: Save your base64 converted token for next step`

### 3. Change `/src/config.js`
Go to your cloned repository and make the following changes in `/src/config.js`
```javascript
export const config = {
  githubConvertedToken: "Your token here",
  githubUserName: "Your username here",
  githubRepo: "Your issues repo name here",
  title : "Title of your site",
  description: "Your meta description"
};
```
### 4. Write content
After doing following changes now you just need to write an issue on repository that you have mentioned in your `config.js`

- Open your repository [github issues](https://github.com/kalyanisamriddhi/website/issues)
- Create a new issue 
- Now write your content in github issue in markdown. You can also use [SlackEdit](https://stackedit.io/app#) or [Dillinger](https://dillinger.io/) to write your markdown
- Add a label `event` on your github issue to make it different from other standard issues. Keep in mind `event` label is mandatory otherwise it won't show on the website

### 5. **Start Your React App.**
That's it now you just need to start your react application, from your command line run
```bash
# Run
$ npm start
```
## License
MIT
