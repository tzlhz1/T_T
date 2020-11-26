var translate = require('google-translate-api');

translate('中国',{to:'en'}).then(res=>{
    console.log(res)
})