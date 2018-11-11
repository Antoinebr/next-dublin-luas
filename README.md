# Dublin Luas API wrapper 

## Get the infos for a given station

```
/** 
 * 
 * @method get /info/:stationsCode
 * @param {string} station the station code 
 * @returns {object}
 * @example GET http://localhost:7777/info/SDK 
 */
 ``` 

## Get the stations with their name and code

```
/** 
 * Get the stations code / number and name 
 * @method get /list
 * @returns {object}
 * @example GET http://localhost:7777/list
 */
 ``` 


### To run

```
npm install
npm start
```