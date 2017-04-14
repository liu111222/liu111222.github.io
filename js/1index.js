$('.nav_li').mouseover(function () {
  $('.dw').show();
});
$('.nav_li').mouseout(function () {
  $('.dw').hide();
});

$('#add').click(function () {
  $('#reduce').removeAttr("disabled");
  var num = $('#num').val();
  num++;
  $('#num').val(num);
});
$('#reduce').click(function () {
  var num = $('#num').val();
  if(num=='0'){
    $('#reduce').attr("disabled",true);
  }else{
    num--;
    $('#num').val(num);
  }
});

$('#add1').click(function () {
  $('#reduce1').removeAttr("disabled");
  var num = $('#num1').val();
  num++;
  $('#num1').val(num);
});
$('#reduce0').click(function () {
  var num = $('#num1').val();
  if(num=='1'){
    $('#reduce1').attr("disabled",true);
  }else{
    num--;
    $('#num1').val(num);
  }
});


/*$('.la1').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a1 = document.getElementsByClassName('la1');
  var div1 = document.getElementsByClassName('sec1');
  $('.la1').removeClass('active');
  $('.sec1').css({display: "none"});
  for (var i = 0; i < a1.length; i++) {
    if (target == a1[i]) {
      div1[i].style.display = "block";
      a1[i].className += " active";
    }
  }
});*/
$('.la2').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a2 = document.getElementsByClassName('la2');
  var div2 = document.getElementsByClassName('sec2');
  $('.la2').removeClass('active');
  $('.sec2').css({display: "none"});
  for (var i = 0; i < a2.length; i++) {
    if (target == a2[i]) {
      div2[i].style.display = "block";
      a2[i].className += " active";
    }
  }
});
$('.la3').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a3 = document.getElementsByClassName('la3');
  var div3 = document.getElementsByClassName('sec3');
  $('.la3').removeClass('active');
  $('.sec3').css({display: "none"});
  for (var i = 0; i < a3.length; i++) {
    if (target == a3[i]) {
      div3[i].style.display = "block";
      a3[i].className += " active";
    }
  }
});
$('.la4').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la4');
  var div = document.getElementsByClassName('sec4');
  $('.la4').removeClass('active');
  $('.sec4').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
      a[i].className += " active";
    }
  }
});
$('.la5').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la5');
  var div = document.getElementsByClassName('sec5');
  $('.la5').removeClass('active');
  $('.sec5').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
      a[i].className += " active";
    }
  }
});
$('.la11').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la11');
  var div = document.getElementsByClassName('bod1');
  $('.bod1').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
    }
  }
});
$('.la21').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la21');
  var div = document.getElementsByClassName('bod2');
  $('.bod2').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
    }
  }
});
$('.la31').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la31');
  var div = document.getElementsByClassName('bod3');
  $('.bod3').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
    }
  }
});
$('.la41').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la41');
  var div = document.getElementsByClassName('bod4');
  $('.bod4').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
    }
  }
});
$('.la51').click(function (e) {
  e = window.event || e;
  var target = e.srcElement || e.target;
  var a = document.getElementsByClassName('la51');
  var div = document.getElementsByClassName('bod5');
  $('.bod5').css({display: "none"});
  for (var i = 0; i < a.length; i++) {
    if (target == a[i]) {
      div[i].style.display = "block";
    }
  }
});

    var t = n = 0,
    count;
    var sx=1;
    $(document).ready(function() {
        count = $("#banner_list a").length;
        $("#banner_list a:not(:first-child)").hide();
        $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
        $("#banner_info").click(function() {
            window.open($("#banner_list a:first-child").attr('href'), "_blank")
        });
        $("#banner li").click(function() {
            var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
            n = i;
            if (i >= count) return;
            $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
            $("#banner_info").unbind().click(function() {
                window.open($("#banner_list a").eq(i).attr('href'), "_blank")
            }) 
		  $("#banner_list a").filter(":visible").fadeOut(10).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner").style.background = "";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
        });
	   $("#banner li").eq(n).trigger('click');
        t = setInterval("showAuto()", 4000);
        $("#banner").hover(function() {
            clearInterval(t)
        },
        function() {
            t = setInterval("showAuto()", 4000);
        });
    })
 
    function showAuto() {
        n = n >= (count - 1) ? 0 : ++n;
        $("#banner li").eq(n).trigger('click');
    }

