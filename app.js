const btns = document.querySelectorAll('.container button')
const revelation = document.querySelector('.revelation')
const result = document.querySelector('.player')
let xOr0 = "x"
textColor = "red"
winCombination = [
    document.querySelectorAll('.top'),
    document.querySelectorAll('.midHorizont'),
    document.querySelectorAll('.bottom'),
    document.querySelectorAll('.left'),
    document.querySelectorAll('.midVertical'),
    document.querySelectorAll('.right'),
    document.querySelectorAll('.crossLf'),
    document.querySelectorAll('.crossRg')
]
let stopFunctionDraw = true
for(let i of btns){
    i.addEventListener('click', function(){
        i.innerHTML = xOr0; i.style.color = textColor
        i.disabled = true
        xOr0 = xOr0 == 'x' ? '0' : 'x'
        textColor = textColor == 'red' ? 'green' : 'red'
        playerWin("red")
        playerWin("green")
        if(stopFunctionDraw == true){
            draw()
        }
    })
}
function playerWin(color) {
    let count = 3
    for(let arr of winCombination){
        for(let i of arr){
            if(i.style.color == color){
                count--
            }
            if(count == 0){
                for(let item of arr){
                    item.style.background = "yellow"
                    revelation.innerHTML = "winner player: "; result.innerHTML = item.innerHTML
                    for(let btn of btns){
                        btn.disabled = true
                        stopFunctionDraw = false
                    }
                }
                break
            }
        }
        count = 3
    }
}
function draw() {
    let count2 = 9
    for(let btn2 of btns){
        if(btn2.innerHTML != ""){
            count2--
            if(count2 == 0){
                result.innerHTML = "draw"
                break
            }
        }
    }
}