# When the next Dublin Luas ? 

It's only one function that returns a promise : 

```JavaScript 

let myLuas = require('./myLuas.js');

let station = 'tpt';

myLuas.getNextLuas(station).then( next =>  console.log(`The next luas at ${station} is in ${next.data.next}`) );

```

### When the next Luas leaving from "the Point" 

https://radiant-plains-56277.herokuapp.com/

NB : This free Heroku server can be sloooow... 😅

### To run

```
npm install
npm start
```