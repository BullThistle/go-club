# Go Club

##### _Epicodus Solo Project in Angular_

## About

_Go Club is a site which demonstrates crud functionality using angular and firebase_

![Player Page](https://user-images.githubusercontent.com/13779974/32714726-0f6650e8-c804-11e7-9cd8-19d23e0adc7e.png)

## Building the App or Contributing

* Clone this repository
* Install required dependencies
  ```
  npm install
  ```
* Create a [Firebase Database](https://firebase.google.com/)
* Set your database's ```".read"``` and ```".write"``` rules to ```"true"```
* Create a ```/src/app/api-keys.ts``` file. Add the following information from your Firebase project to the file:
  ```typescript
  export var masterFirebaseConfig = {
    apiKey: "[YOUR-FIREBASE-API-KEY]",
    authDomain: "[YOUR-FIREBASE-NAME].firebaseapp.com",
    databaseURL: "[YOUR-FIREBASE-URL]",
    projectId: "[YOUR-FIREBASE-ID]",
    storageBucket: "",
    messagingSenderId: "[YOUR-SENDER-ID]"
  };
  ```
  
  * To run local server
  ```
  $ ng serve
  ```

## Support and Contact Details

Please contact [Rafael Furry](rfurry@gmail.com) with questions or comments.


## Technologies Used

* [JavaScript](https://www.javascript.com/)
* [Angular](https://angular.io/)
* [Firebase](https://firebase.google.com/)
* [Clarity](https://vmware.github.io/clarity/)


## Contributors

| [<img alt="Rafa" src="https://avatars0.githubusercontent.com/u/13779974?s=460&v=4" width="117">](https://github.com/bullthistle) |
|:---:|
|[Rafa](https://github.com/bullthistle)

### License

Copyright (c) 2017 **Rafael Furry**

*This software is licensed under the MIT license.*
