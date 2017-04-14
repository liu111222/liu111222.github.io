/**
 * Created by Super on 2017/4/13.
 */
//轮播
var product=document.getElementById("product");
var pro = product.getElementsByTagName('div')[0];
var div = pro.getElementsByTagName("div");
var li = product.getElementsByTagName("li");
var i=index=0; //中间量，统一声明；
var play=null;
console.log(product,pro,div,li);//获取
//图片切换，淡入淡出效果我是用（transition: opacity .s linear）做的,不纠结、简单 在css里面
function show(a){
    for(i=0;i<li.length;i++) {
        li[i].className = '';
        li[a].className = "current";
    }
    for(i=0;i<div.length;i++){
        //console.log(div.length);
        div[i].style.opacity=0;
        div[a].style.opacity=1;
    }
}
//切换按钮功能，响应对应图片
for(i=0;i<li.length;i++){
    li[i].index=i;
    //console.log(i);
    li[i].onmouseover=function(){
        show(this.index);
       // console.log(this.index);
        clearInterval(play);
    }
}
//自动轮播
function autoPlay(){
    play=setInterval(function(){
        index++;
        //index<=div.length&&(index=i);
        if(index>4){index=0}
        //console.log(index);
        show(index);
    },3000);
}
autoPlay();
product.onmouseover=function(){
    clearInterval(play);
};
product.onmouseout=function(){
    autoPlay();
}
