const express = require('express');
const cors = require('cors');
const app = express();
const myLuas = require('./myLuas.js');


app.use(cors());

/** 
 * 
 * @method get /info/stations
 * @param {string} station the station code 
 * @returns {object}
 * @example GET http://localhost:7777/info/SDK 
 */
app.get('/info/:station', async (req, res, next) => {

    const stationInfo = await myLuas.getNextLuas(req.params.station).catch(e => res.json(e))

    res.json({
      code: 200,
      stationInfo
    })

});


/** 
 * Get the stations code / number and name 
 * @method get /list
 * @returns {object}
 * @example GET http://localhost:7777/list
 */
app.get('/list', (req, res, next) => res.json(myLuas.luasList()));



app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});