/**
 * Created by Super on 2017/4/13.
 */
//�ֲ�
var product=document.getElementById("product");
var pro = product.getElementsByTagName('div')[0];
var div = pro.getElementsByTagName("div");
var li = product.getElementsByTagName("li");
var i=index=0; //�м�����ͳһ������
var play=null;
console.log(product,pro,div,li);//��ȡ
//ͼƬ�л������뵭��Ч�������ã�transition: opacity .s linear������,�����ᡢ�� ��css����
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
//�Զ��ֲ�
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
