let cheerio = require('cheerio')
const axios = require('axios');

axios.get('https://coinmarketcap.com/')
  .then(function (response) {
    // handle success
    // console.log(response.data);
    var $ = cheerio.load(response.data); //cheerio模块开始处理 DOM处理
    var dom = $("#currencies");
    // console.log($.html().indexOf("currencies"))
    console.log(dom.html())
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });




let $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

console.log($.html())
//=> <h2 class="title welcome">Hello there!</h2>