$(function(){
$('.content > section:nth-child(2) > article:nth-child(1)').show('easing');
$('.content > section:nth-child(2) > article:nth-child(2)').hide('easing');
$('.content > section:nth-child(2) > article:nth-child(3)').hide('easing');

$('.tabBtn > button:nth-child(1)').click(function(){
  $('.content > section:nth-child(2) > article:nth-child(1)').show('easing');
  $('.content > section:nth-child(2) > article:nth-child(2)').hide('easing');
  $('.content > section:nth-child(2) > article:nth-child(3)').hide('easing');
});
$('.tabBtn > button:nth-child(2)').click(function(){
  $('.content > section:nth-child(2) > article:nth-child(1)').hide('easing');
  $('.content > section:nth-child(2) > article:nth-child(2)').show('easing');
  $('.content > section:nth-child(2) > article:nth-child(3)').hide('easing');
});
$('.tabBtn > button:nth-child(3)').click(function(){
  $('.content > section:nth-child(2) > article:nth-child(1)').hide('easing');
  $('.content > section:nth-child(2) > article:nth-child(2)').hide('easing');
  $('.content > section:nth-child(2) > article:nth-child(3)').show('easing');
});

})
//
// var tabBtn1 = $('.tabBtn > button:nth-child(1)');
// var tabBtn2 = $('.tabBtn > button:nth-child(2)');
// var tabBtn3 = $('.tabBtn > button:nth-child(3)');
// var tabCtn1 = document.querySelector('.content > section:nth-child(2) > article:nth-child(1)');
// var tabCtn2 = document.querySelector('.content > section:nth-child(2) > article:nth-child(2)');
// var tabCtn3 = document.querySelector('.content > section:nth-child(2) > article:nth-child(3)');
//
// tabCtn1.style.display = "block";
// tabCtn2.style.display = "none";
// tabCtn3.style.display = "none";
//
// tabBtn1.click(function(){
//   if(tabCtn1.style.display === "none"){
//     tabCtn1.style.display = "block";
//     tabCtn2.style.display = "none";
//     tabCtn3.style.display = "none";
//   };
// });
// tabBtn2.click(function(){
//   if(tabCtn2.style.display === "none"){
//     tabCtn1.style.display = "none";
//     tabCtn2.style.display = "block";
//     tabCtn3.style.display = "none";
//   };
// });
// tabBtn3.click(function(){
//   if(tabCtn3.style.display === "none"){
//     tabCtn1.style.display = "none";
//     tabCtn2.style.display = "none";
//     tabCtn3.style.display = "block";
//   };
// });
$(function(){
  $(".co_tabContent > table").hide();
  $(".co_tabContent > table").eq(0).show();
  $('.co_tabBtn > h2').click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    $(".co_tabContent > table").css({display:'none'});
    $(".co_tabContent > table").eq(index).show();
  });
});
