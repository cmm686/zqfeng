const axios = require('axios');


 //随机si
    function randomString() {
      let len = 32;
      let $chars = "abcdefhijkmnprstwxyz123456789";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
    
    
    
    //获取分享时间字符串
    var q=Date.parse(new Date())/1000;
    
//get 函数
    var aa=function(){
      
        var j = randomString();
 var p = new Date().getTime();
    const url = 'https://script.baertt.com/count2/callback?si='+j+'&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DKAn0BpeXzg3WkQRaAYVWoGhLn9xkIXvemoQawr9G5ZDV6ldJ2N%2526uid%253D47917487%2526phone_code%253Ddf9ea038b6107276234b0c6a2cfaaea4%2526scid%253D38492101%2526time%253D '+q+'%2526app_version%253D2.0.2%2526sign%253Dae6e9e7dd0cde65a67bae354f5102057%2526from%253Dsinglemessage%2526isappinstalled%253D0&_= '+p+'&jsonpcallback=jsonp6 ';
