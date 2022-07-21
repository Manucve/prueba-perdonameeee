const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('siuuuuuuu te quiero mucho gracias x perdonarme uwu <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomX+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform','translate(-${randomX}%,-${randomY}%)');
})