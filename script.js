// Petal Animation
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");

let petals = [];
const petalCount = 30;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Petal() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speedY = Math.random() + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.color = "rgba(255,182,193,0.8)";
}

Petal.prototype.update = function() {
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y > canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
    }
};

Petal.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
};

function initPetals() {
    petals = [];
    for (let i = 0; i < petalCount; i++) {
        petals.push(new Petal());
    }
}

function animatePetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(petal => {
        petal.update();
        petal.draw();
    });
    requestAnimationFrame(animatePetals);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initPetals();
});

initPetals();
animatePetals();

