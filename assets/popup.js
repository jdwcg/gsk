// document.getElementById('popup').style.display="none";
// document.getElementById('popupBg').style.display="none";

document.getElementById('popBtn').addEventListener('click', function(){
document.getElementById('popup').style.display="block";
document.getElementById('popupBg').style.display="block";
});
document.getElementById('close').firstChild.addEventListener('click', function(){
document.getElementById('popup').style.display="none";
document.getElementById('popupBg').style.display="none";
});
document.getElementById('popupBg').addEventListener('click', function(){
document.getElementById('popup').style.display="none";
document.getElementById('popupBg').style.display="none";
});
document.getElementById('closeBtn').addEventListener('click', function(){
document.getElementById('popup').style.display="none";
document.getElementById('popupBg').style.display="none";
});
