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
    }
}
//遍历侧边锚点
for(i=0;i<liall.length;i++) {
    liall[i].index = i;
    //console.log(i);
    liall[i].onclick = function () {
        seed(this.index);
        //clearInterval(play);
        index=this.index;
    }
}
console.log(index);
//滚轮播放
//绑定事件
var scrollFunc=function(e){
    //var =0;
    e=e ||window.event;
    if(e.wheelDelta ){//判断浏览器IE，谷歌滑轮事件
        if(e.wheelDelta==120){//当滑轮向上滚动时
            console.log("up");
        }
        if(e.wheelDelta==-120){//当滑轮向下滚动时
            console.log("down");
        }
    }else if(e.detail){//Firefox滑轮事件
        if(e.detail==120){
            console.log("up");
        }
        if(e.detail==-120){
            console.log("down");
        }
    }
};
//给页面绑定滑轮事件
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel=document.onmousewheel=scrollFunc;














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
body.onmouseover=function(){
    clearInterval(play);
};
body.onmouseout=function(){
    autoPlay();
};*/