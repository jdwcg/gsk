var aside = document.querySelector('.aside');
var asideBg = document.querySelector('.asideBg');
document.querySelector('header span:nth-child(2)').addEventListener('click', function(){
   // aside.style.display='block';
   aside.classList.add('moveLeft-class');
   asideBg.style.display='block';
});

document.querySelector('.aside > i').addEventListener('click', function(){
   aside.classList.remove('moveLeft-class');
   asideBg.style.display='none';
})
document.querySelector('.asideBg').addEventListener('click', function(){
   aside.classList.remove('moveLeft-class');
   asideBg.style.display='none';
})
