# Nottify-node

Backend server for [Nottify](https://github.com/namnv2001/nottify-react-native)

## Local run

* First you need to have a MongoDB's database.

* Need an env file to start this app 
```
    MONGO_URL = Your MongoDB's url
    PASS_SEC = Depend on you
    JWT_SEC = Depend on you
```

* To run this app locally, clone the project, navigate to the root directory with a command prompt or terminal(where the package.json file is located), and run this below code to download the neccesary dependencies onto your local machine (You can use npm instead of yarn).

```
    yarn install
```


* Inside the root directory, you can run this built-in command to start the local server:
```
    yarn start
```
* If you see `Connected to the Database!` in the terminal then you are good to go.


## Libraries and Frameworks

* `express-js`
* `mongoose`
* `nodemon`
* `crypto-js`
* `jsonwebtoken`
* `zingmp3-api-full`

## Contributors

* [Nguyễn Văn Nam](https://github.com/namnv2001)
* [Trần Hải Ninh](https://github.com/NinhTH01)
