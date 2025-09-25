const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event){
    if(event.code ==="Space"){
        jump();
    }
});
function jump(){
    if (!dino.classList.contains("jump")){
        dino.classList.add("jump");

        setTimeout(() =>{
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(() => {
  // Get current dino and cactus position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  // Collision detection
  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("Game Over!");
    location.reload();
  }
}, 10);