# Learn Database tutorial

I am following the Founders and Coders `learn-database` tutorial, to learn about working with SQLite databases.

You can find and follow the tutorial [here](!https://learn.foundersandcoders.com/learn/database/).

Note: if you're using Windows Powershell (like me), the tutorial doesn't include the correct commands to set environment variables. You can use the below instead:

```terminal
$env:DB_FILE='db.sqlite'; node database/db.js
$env:DB_FILE='test.sqlite'; node test/tasks.test.js
```
