// $(function(){
//   var allPanels = $('.content').hide();
//   $('.content:first-child').show();
//
//     allPanels.slideUp();
//   $('.accordion > .toggleBar').click(function() {
//     $(this).next().slideDown('easing');
//     return false;
//   });
// });
$(function(){
  $('.content').hide();
  $('.bi-chevron-up').hide();
  $('.content').eq(0).show();
   $('.toggleBar1').click(function(e) {
     e.preventDefault();
     $(this).next().slideToggle();

     if( $('.accordion > .toggleBar1 > span .bi-chevron-up').css('display') === 'none' ) {
       $(this).children('span').children('i:first-child').css({display: 'none'});
       $(this).children('span').children('i:last-child').css({display: 'block'});
     } else {
       $(this).children('span').children('i:first-child').css({display: 'block'});
       $(this).children('span').children('i:last-child').css({display: 'none'});
     }
   })
   $('.toggleBar2').click(function(e) {
     e.preventDefault();
     $(this).next().slideToggle();

     if( $('.accordion > .toggleBar2 > span .bi-chevron-up').css('display') === 'none' ) {
       $(this).children('span').children('i:first-child').css({display: 'none'});
       $(this).children('span').children('i:last-child').css({display: 'block'});
     } else {
       $(this).children('span').children('i:first-child').css({display: 'block'});
       $(this).children('span').children('i:last-child').css({display: 'none'});
     }
   })
   $('.toggleBar3').click(function(e) {
     e.preventDefault();
     $(this).next().slideToggle();

     if( $('.accordion > .toggleBar3 > span .bi-chevron-up').css('display') === 'none' ) {
       $(this).children('span').children('i:first-child').css({display: 'none'});
       $(this).children('span').children('i:last-child').css({display: 'block'});
     } else {
       $(this).children('span').children('i:first-child').css({display: 'block'});
       $(this).children('span').children('i:last-child').css({display: 'none'});
     }
   })




})
