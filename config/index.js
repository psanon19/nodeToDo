//Hold method for fetching cfg values

const configValues = require("./config.json");

module.exports =
{
  getDbConnectionString: function ()
  {
      
      return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
          '@ds157740.mlab.com:57740/nodetodo';
  }

};