# restaurant-reviews

This restaurant-reviews application is an exercise following [Beau Carnes's](https://github.com/beaucarnes) MERN stack [tutorial](https://www.youtube.com/watch?v=mrHNSanmqQ4).

There are 3 major parts in the tutorial:
* Backend with Express 🙂
* Frontend with React :angry:
* Mongodb Realm deployment 😢

However, some features in the original tutorials are deprecated and must be coped with. 😞
Some workarounds are listed below by subtopics (Backend, Frontend, Mongodb Realm):

* Backend:
  * A deprecated function `substr()`
```javascript
// cuisine.substr(0,20)
cuisine.substring(0,20)
```

* Frontend:
  * <Switch> is deprecated in `react-router-dom` version 6 in favor of <Routes>. The document provides the  (supposed to be) solution "change the <Switch> import to <Routes>, change the component to element, etc.". But those solution introduces new error (the web page can't be rendered because of invalid hook call). The easiest solution is to downgrade the `react-router-dom` to version 5 by using the command line.
```
$ cd <pathto>/restaurant-reviews/frontend
$  # npm install react-router-dom
$ npm install react-router-dom@5  
```

* Mongodb Realm:
  * 3rd Party Services are deprecated 💢😧. Use the Http Endpoints instead. The configuration interfaces are changed, especially the authentication configuration.

## Todo next:
  
more explanation and screen captures.

