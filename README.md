# Learn Database tutorial

I am following the Founders and Coders `learn-database` tutorial, to learn about working with SQLite databases.

You can find and follow the tutorial [here](!https://learn.foundersandcoders.com/learn/database/).

Note: if you're using Windows Powershell (like me), the tutorial doesn't include the correct commands to set environment variables. The easiest way to deal with this is by installing the `cross-env` package which allows you to set environment variables across platforms.

You can install and run it as below:

```terminal
npm i cross-env
cross-env DB_FILE=db.sqlite node index.js
```

And set it up as a script as below:

```json
{
	"scripts": {
		"dev": "cross-env DB_FILE=db.sqlite node index.js"
	}
}
```
