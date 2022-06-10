let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 700
canvas.height = 700

let pos = [5, 5]
let enemy_pos = [1,1]
let enemy_color = 'rgb(170, 0,50)'
let color = 'rgb(255, 0, 0)';
let eat_pos = [9,1]
let eat_color = 'rgb(255,0,0)';
let score = 0
scoreem = document.getElementById('score')

document.addEventListener('keypress', function(event) {
    if (event.key == 'r') {
        color = 'rgb(255, 0, 0)';
        console.log('r');
    }
    else if (event.key == 'g') {
        color = 'rgb(0, 255, 0)';
        console.log('g');
    }
    else if (event.key == 'b') {
        color = 'rgb(0, 0, 255)';
        console.log('b');
    }
    else if (event.key == 'w' && pos[1] > 0 ) {
        pos[1] -= 1;
        console.log('up');
    }
    else if (event.key == 's' && pos[1] < 10) {
        pos[1] += 1;
        console.log('down');
    }
    else if (event.key == 'a' && pos[0] > 0) {
        pos[0] -= 1;
        console.log('left');
    }
    else if (event.key == 'd' && pos[0] < 10) {
        pos[0] += 1;
        console.log('right');
    }
})

count = 0;

let update = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
    x = canvas.width / 11 * pos[0]
    y = canvas.height / 11 * pos[1]
    x_end = canvas.width / 11
    y_end = canvas.height / 11
    ctx.fillRect(x, y, x_end, y_end)
    ctx.fillStyle = enemy_color

    if (count == 10){
    let go = function(){
        enemy_pos = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }
    go();
    if (enemy_pos[0] == pos[0] && enemy_pos[1] == pos[1]) {go}
    if (enemy_pos[0] == pos[0] && enemy_pos[1] == pos[1]) {go}
    count = 0;
    }
    x = canvas.width / 11 * enemy_pos[0]
    y = canvas.height / 11 * enemy_pos[1]
    x_end = canvas.width / 11
    y_end = canvas.height / 11
    ctx.fillRect(x, y, x_end, y_end)
    if (enemy_pos[0] == pos[0] && enemy_pos[1] == pos[1]) {
        alert("GAME OVER!")
        pos = [5, 5]
        enemy_pos = [1, 1]
        eat_pos = [9, 1]
        score = 0;
    }
    ctx.fillStyle = eat_color
    x = canvas.width / 11 * eat_pos[0]
    y = canvas.height / 11 * eat_pos[1]
    x_end = canvas.width / 11
    y_end = canvas.height / 11
    ctx.fillRect(x, y, x_end, y_end)
    if (eat_pos[0] == pos[0] && eat_pos[1] == pos[1]) {
        score++;
        eat_pos = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }
    ctx.strokeRect(0,0, canvas.width, canvas.height)
    scoreem.innerHTML = '<strong>Score</strong>: ' + score;
    count++;
}

setInterval(update, 100);