/**
 * Created by Super on 2017/4/13.
 */
 //满屏轮播




//技能
var skill=document.getElementById("skill");
var d1=skill.getElementsByTagName("div")[1];
var d2=d1.getElementsByTagName("div");
console.log(d2);
function rc1(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function rc2(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function rc3(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function rc4(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function rc5(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function rc6(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
function rc7(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
skill.onmouseover=function(){
    for(var i=0;i<d2.length;i++) {
        if (d2[i].className == "h5") {
            d2[i].style.width = "85%";
            d2[i].style.background = rc1();
        } else if (d2[i].className == "c3") {
            d2[i].style.width = "85%";
            d2[i].style.transition="width 2s linear;";
            d2[i].style.background = rc2();
        } else if (d2[i].className == "js") {
            d2[i].style.width = "80%";
            d2[i].style.background = rc3();
        } else if (d2[i].className == "jq") {
            d2[i].style.width = "75%";
            d2[i].style.background = rc4();
        } else if (d2[i].className == "rct") {
            d2[i].style.width = "60%";
            d2[i].style.background = rc5();
        } else if (d2[i].className == "bsp") {
            d2[i].style.width = "70%";
            d2[i].style.background = rc6();
        } else {
            d2[i].style.width = "45%";
            d2[i].style.background = rc7();
        }
    }
}



//�ֲ�
var product=document.getElementById("product");
var pro = product.getElementsByTagName('div')[0];
var div = pro.getElementsByTagName("div");
var li = product.getElementsByTagName("li");
var img=product.getElementsByTagName("img");
console.log(img);
var i=index=0; //�м�����ͳһ������
var play=null;
console.log(product,pro,div,li);//��ȡ
//
function show(a) {
    for (i = 0; i < li.length; i++) {
        li[i].className = '';
        li[a].className = "current";
    }
    for (i = 0; i < div.length; i++) {
        //console.log(div.length);
        div[i].className = "";
        div[a].className = "current";
    }
}
   /* for(var r=0;r<img.length;r++){
        img[r]=img[a];
        img[r].onmouseover=function(){
            img[a].style.width="1100px";
            img[a].style.height="500px";
        };
        img[r].onmouseout=function(){
            img[a].style.width="900px";
            img[a].style.height="360px";
        }
    }
}*/
//�л���ť���ܣ���Ӧ��ӦͼƬ
for(i=0;i<li.length;i++){
    li[i].index=i;
    //console.log(i);
    li[i].onmouseover=function(){
        show(this.index);
       // console.log(this.index);
        clearInterval(play);
    }
}
//自动播放
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
};
