var aside = document.querySelector('.aside');
var asideBg = document.querySelector('.asideBg');
document.querySelector('header span:nth-child(2)').addEventListener('click', function(){
   aside.style.display='block';
   asideBg.style.display='block';
});

document.querySelector('.aside > i').addEventListener('click', function(){
   aside.style.display='none';
   asideBg.style.display='none';
})
document.querySelector('.asideBg').addEventListener('click', function(){
   aside.style.display='none';
   asideBg.style.display='none';
})
