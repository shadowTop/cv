let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
let string = `/*你好，我是一名前端新人
 *接下来我演示一下我的前端功底
 *首先我们要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把变成一个八卦
 *注意看好了
 *首先，把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
                                       rgba(255,255,255,1) 50%,
                                       rgba(0,0,0,1) 50%, 
                                       rgba(0,0,0,1) 100%);
}
/*加两个神秘小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);

}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
// string = string.replace(/\n/g, "<br>");
// demo.innerHTML = string.substring(0, n);
let step = () => {
  if (string[n] === "\n") {
    string2 += "<br>";
  } else if (string[n] === " ") {
    string2 += "&nbsp";
  } else {
    string2 += string[n];
  }
  //上面代码的简化
  //   string2 += string[n] === "\n" ? "<br>" : string[n];
  html.innerHTML = string2;
  style.innerHTML = string.substring(0, n);
  window.scrollTo(0, 99999);
  html.scrollTo(0, 9999);
  setTimeout(() => {
    if (n < string.length) {
      step();
    } else {
    }
  }, 50);
  n = n + 1;
};
step();
