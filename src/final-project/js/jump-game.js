const mario=document.querySelector('.mario');
const pipe=document.querySelector('.pipe');
const jump=()=>{
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },500);
}

const loop= setInterval(()=>{
    const pipePosition=pipe.offsetLeft;
    const marioPosition= parseFloat(window.getComputedStyle(mario).bottom.replace('px', ' '));
    console.log(marioPosition);
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation='none';
        pipe.style.left=`${pipePosition}px`;

        mario.style.animation='none';
        mario.style.left=`${marioPosition}px`;

        clearInterval(loop);
    }
},10);
document.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        jump();
    }
});