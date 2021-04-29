const axios = require('axios');


 
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
    
    

    var aa=function(){
      
        var j = randomString();
    
    const url = 'https://script.baertt.com/count2/callback?si='+j+'&a4c2af1f273a84205dd29e4cf15abb75&referer=https%253A%252F%252Ffocus.youth.cn%252Farticle%252Fs%253Fsignature%253DKAn0BpeXzg3WkQRaAY9K69ULn9xkIXvE2qeawr9G5ZDV6ldJ2N%2526uid%253D47917487%2526phone_code%253Df366260adcd3a6e11e53babb137a325c%2526scid%253D37769779%2526time%253D1619700087%2526app_version%253D1.8.0%2526sign%253D02d11be436a40dfa5bc9fca303f86b2d&_=1619700160663&jsonpcallback=jsonp6';
    
    
    
     return axios.get(url, {
    
      headers: {'Referer' : 'https://focus.youth.cn/',
    'Host' : 'script.baertt.com',
    'User-Agent' : 'Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.5(0x18000522) NetType/WIFI Language/zh_CN'} //设置header信息
    }).then((res) => { 
      //then 成功
      console.log(j);
    }).catch((err) => {
      //catch 失败
      console.log("失败")
    
    });
  }


const sleep = function (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
const request = async function(){
  for(let i=0;i<50;i++){
    aa();
    await sleep(2000);
  }
}
request();
