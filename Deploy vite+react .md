# Deploy Steps

- Step 1

```
npm install --save-dev gh-pages
```

- Step 2 : Package.json

```
"homepage": "https://username.github.io/my-react-app"
```

- Step 3 : Scrpits

```
"predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
```

- Step 4: vite.config

```
base : "/repo name/",
```

- Step 4: push on git by using following commanad
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Muhammadtalha97/Stop-Watch-React.git
git push -u origin main
```

- Step 4: vite.config

```

```
