var onwork = document.querySelector('.main > section:nth-child(2) > a:nth-child(2)');
var onworkOn = document.querySelector('.main > section:nth-child(2) > a:nth-child(1)');
var offwork = document.querySelector('.main > section:nth-child(2) > a:nth-child(3)');
var offworkOff = document.querySelector('.main > section:nth-child(2) > a:nth-child(4)');
onwork.style.display = 'none';
offwork.style.display = 'none';

onworkOn.addEventListener('click', function() {
    onwork.style.display = 'block';
    onwork.style.color = '#FF6464';
    onworkOn.style.display = 'none';
    offwork.style.display = 'block';
    offworkOff.style.display = 'none';
});

offwork.addEventListener('click', function() {
    onwork.style.display = 'none';
    onworkOn.style.display = 'block';
    offwork.style.display = 'none';
    offworkOff.style.display = 'block';
    offworkOff.style.color = '#8C64FF';
});