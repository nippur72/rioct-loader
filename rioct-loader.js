var rioctCli = require('rioct-cli/webpack').webpack;
var url = require('url');
var queryString = require('querystring');

module.exports = function(source) {
	var query = queryString.parse(url.parse(this.query).query);
	this.cacheable && this.cacheable();

   const options = {
      trace: query.trace ? true : false,
      brackets: query.brackets || '{ }',
      useRioctRuntime: query.useRioctRuntime ? true : false
   }
	return rioctCli(source, options, this.resourcePath);
};