'use strict';
module.exports = function(Payments){

    Payments.greet = function(res,cb ) {
      cb(null, 'Greetings... ' + res);
    }

    Payments.remoteMethod('greet', {
      accepts: {arg: 'req', type: 'object', 'http': {source: 'req'}},
      returns:   {arg: 'res', type: 'string', 'http': {source: 'res'}},
      http: {path: '/sayhi', verb: 'get'}
    });
};
