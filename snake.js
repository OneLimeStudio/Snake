export const SNAKE_SPEED = 1;
const snakeBody = [
    {x: 10,y :11},
    {x: 11,y :11},
    {x: 12,y :11}

];

export function update(){

    //console.log("UPDATE SNAKE")


}

export function draw(gameBoard){
    //console.log("DRAW SNAKE")
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');

        gameBoard.appendChild(snakeElement);
    })


}
