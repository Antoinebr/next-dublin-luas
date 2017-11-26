# When the next Dublin Luas ? 

It's only one function that returns a promise : 

```JavaScript 

let myLuas = require('./myLuas.js');

let station = 'tpt';

myLuas.getNextLuas(station).then( next =>  console.log(`The next luas at ${station} is in ${next}`) );

```

### When the next Luas at the Point 

https://radiant-plains-56277.herokuapp.com/

### To run

```
npm install
npm start
```