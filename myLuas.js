const fetch = require('node-fetch');
const parseXml = require('xml2js').parseString;


exports.getNextLuas = station => {

    return new Promise((resolve, reject) => {

        fetch(`https://luasforecasts.rpa.ie/xml/get.ashx?stop=${station}&action=forecast&encrypt=false`)
            .then(response => response.text())
            .then(response => {

                // if the API raises an exception
                if (response.includes('Exception')) {
                    return reject({
                        code: 500,
                        response
                    });
                }

                parseXml(response, {
                    mergeAttrs: true,
                    explicitArray: false
                }, (err, result) => {


                    if (err) {
                        return reject(`XML error ${err}`);
                    }

                    return resolve(result);

                });

            })
            .catch(error => reject(error));

    });
}



exports.luasList = () => require('./luasList.json');