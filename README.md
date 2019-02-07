# Dublin Luas API wrapper 

## Get the infos for a given station

```JavaScript
/** 
 * 
 * @method get /info/:stationsCode
 * @param {string} station the station code 
 * @returns {object}
 * @example GET http://localhost:7777/info/SDK 
 */
 ``` 


 ```
 curl -X GET \
  http://localhost:7777/info/tpt \
  -H 'Content-Type: application/json'
``` 

Returns 

```json
{
    "code": 200,
    "stationInfo": {
        "stopInfo": {
            "created": "2019-02-07T19:01:03",
            "stop": "The Point",
            "stopAbv": "TPT",
            "message": "Red Line services operating normally",
            "direction": [{
                "name": "Inbound",
                "tram": {
                    "destination": "No trams forecast",
                    "dueMins": ""
                }
            }, {
                "name": "Outbound",
                "tram": [{
                    "dueMins": "3",
                    "destination": "Saggart"
                }, {
                    "dueMins": "13",
                    "destination": "Saggart"
                }, {
                    "dueMins": "18",
                    "destination": "Tallaght"
                }]
            }]
        }
    }
}
```

## Get the stations with their name and code

```JavaScript 
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