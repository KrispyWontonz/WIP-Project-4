function changeOpacity(val){
    let circles = document.getElementById("circles");
    circles.style.opacity=val;
}

function buttonChange(){
    let spinning = document.getElementById("circles")
    let running = spinning.style.animationPlayState === 'running'

    spinning.style.animationPlayState = running ? 'running' : 'paused';
}

// const button = document.getElementById('button');
// let spinning = document.getElementById('circles');
// button.addEventListener('click');


