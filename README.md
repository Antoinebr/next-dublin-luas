# When the next Dublin Luas ? 

It's only one function that returns a promise : 

```JavaScript 

let myLuas = require('./myLuas.js');

let station = 'tpt';

myLuas.getNextLuas(station)
        .then( next =>  res.json({code:200, next}) )
        .catch( error => res.json( {code: 500, error: error} ) );

```

If the service is over for the day, this will still return a ```200``` code but with the message ```!``` ( because I use a one digit display to show this information ¯\_(ツ)_/¯ )


### When the next Luas leaving from "the Point" 

https://radiant-plains-56277.herokuapp.com/

NB : This free Heroku server can be sloooow... 😅

### To run

```
npm install
npm start
```