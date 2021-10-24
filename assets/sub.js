function open(open) {
    document.querySelector('.popup').style.display="open";
    document.querySelector('.popup').style.display="block";
}
function openBg(open) {
    document.querySelector('.popupBg').style.display="open";
    document.querySelector('.popupBg').style.display="block";
}
function close(close) {
    document.querySelector('.popup').style.display="close";
    document.querySelector('.popup').style.display="none";
}
function closeBg(close) {
    document.querySelector('.popupBg').style.display="close";
    document.querySelector('.popupBg').style.display="none";
}
document.querySelector('.popup > article > section > i').addEventListener('click', function(){
    close('none'); closeBg('none');
});
document.querySelector('.pop2 > article > section > i').addEventListener('click', function(){
    document.querySelector('.pop2').style.display="none";
    closeBg('none');
});
document.querySelector('.pop3 > article > section > i').addEventListener('click', function(){
    document.querySelector('.pop3').style.display="none";
    closeBg('none');
});
document.querySelector('.popup > article > section > div > button:first-child').addEventListener('click', function(){
    close('none'); closeBg('none');
});
document.querySelector('.popupBg').addEventListener('click', function(){
    close('none'); closeBg('none');
    document.querySelector('.pop2').style.display="none";
    document.querySelector('.pop3').style.display="none";
});

document.querySelector('#btn1').addEventListener('click', function(){
    open('block'); openBg('block');
});
document.querySelector('#btn2').addEventListener('click', function(){
    document.querySelector('.pop2').style.display="block";
    openBg('block');
});
document.querySelector('#btn3').addEventListener('click', function(){
    document.querySelector('.pop3').style.display="block";
    openBg('block');
});

document.querySelector('.pop2 > article > section > div > button:first-child').addEventListener('click', function(){
    document.querySelector('.pop2').style.display="none";
    document.querySelector('.popupBg').style.display="none";
});
document.querySelector('.pop3 > article > section > div > button:first-child').addEventListener('click', function(){
    document.querySelector('.pop3').style.display="none";
    document.querySelector('.popupBg').style.display="none";
});

function callred(){
    document.getElementById("btn1").classList.toggle("sunny");
}
function callblue(){
    document.getElementById("btn2").classList.toggle("blue");
}
function callgreen(){
    document.getElementById("btn3").classList.toggle("green");
}