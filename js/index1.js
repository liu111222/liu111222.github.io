/**
 * Created by Super on 2017/4/16.
 */
var body=document.querySelector("body");
var divall=body.querySelectorAll("body>div");
var liall=body.querySelectorAll("body>div.anchor>ul>li");
console.log(body,divall,liall);
var i=index=0; //
var play=null;
//定义一个方法
function seed(b){
    for(i=0;i<liall.length;i++){
        liall[i].className="";
        liall[b].className="curt1";
        console.log(b);
    }
    for(i=0;i<divall.length-1;i++){
        divall[i].className="";
        divall[b].className="curt";
        console.log(b);
    }
    console.log(divall[5]);
}
//遍历锚点
for(i=0;i<liall.length;i++){
    liall[i].index=i;
    //console.log(i);
    //console.log(li[i].index);
    liall[i].onclick=function(){
        seed(this.index);
        //console.log(this.index);
        //clearInterval(play);
    }
}
//鼠标滚轮跳转
/*function autoPlay(){
    play=setInterval(function(){
        index++;
        //index<=div.length&&(index=i);
        if(index>6){index=0}
        //console.log(index);
        seed(index);
    },3000);
}
autoPlay();
.onmouseover=function(){
    clearInterval(play);
};
.onmouseout=function(){
    autoPlay();
};*/