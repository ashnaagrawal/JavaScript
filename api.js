var fs = require('fs')
var request = require('request');

// The parameters.
var token = '0F7T8XK60DILDECJACUWKSPC0Z3QXSWF';
var url = encodeURIComponent('https://github.com');
var width = 1920;
var height = 1080;
var output = 'image';

// Create the query URL.
var query = "https://screenshotapi.net/api/v1/screenshot";
query += `?token=${token}&url=${url}&width=${width}&height=${height}&output=${output}`;

// Call the API and save the screenshot.
request.get({url: query, encoding: 'binary'}, (err, response, body) => {
    fs.writeFile("screenshot.png", body, 'binary', err => {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
});