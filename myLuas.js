module.exports = (function() {
   
    const axios = require('axios');
    
    const parseXml = require('xml2js').parseString;
    
    return {

        getNextLuas: function(station) {

            return new Promise( (resolve, reject) => {  
      
                axios.get(`https://luasforecasts.rpa.ie/xml/get.ashx?stop=${station}&action=forecast&encrypt=false`)
                .then(response => {
                
            
                    parseXml(response.data, { mergeAttrs: true, explicitArray: false }, (err, result) => {
                
                        if (err) console.log(' ⚠️ XML_PARSE_ERROR');
                        
                        let when = result.stopInfo.direction[1].tram[0].dueMins;

                        resolve( (when === "DUE") ? 0 : when );
                
                    });
                                
                })
                .catch(error =>  reject(error) );
    
            })
        }
    };
  
  }());

  
