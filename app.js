const btns = document.querySelectorAll('.board button')
const revelation = document.querySelector('.revelation')
const result = document.querySelector('.player')
const reset = document.querySelector('.reset')
let xOr0 = "x"
textColor = "red"
let scoreX = 1
let scoreO = 1

const Xscore = document.querySelector('.scoreX')
const Oscore = document.querySelector('.scoreO')
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
        if(stopFunctionDraw == false){
            stopFunctionDraw = true
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
                let onlyOne = true
                for(let item of arr){
                    item.style.background = "yellow"
                    revelation.innerHTML = "winner player: "; result.innerHTML = item.innerHTML
                    for(let btn of btns){
                        btn.disabled = true
                        stopFunctionDraw = false
                        count = 3
                    }
                    //counts points strat
                    if(onlyOne == true){
                        if(item.innerHTML == "x"){
                            Xscore.innerHTML = scoreX
                            earnMaxScore(scoreX,item.innerHTML)
                            scoreX++
                        }
                        else {
                            Oscore.innerHTML = scoreO
                            earnMaxScore(scoreO,item.innerHTML)
                            scoreO++
                        }
                        onlyOne = false
                    }
                    //counts points end
                }
                onlyOne = true
                reset.classList.add("turnOn")
                reset.disabled = false
                reset.style.cursor = 'pointer'
                break
            }
        }
        count = 3
    }
}

//this function is draw
function draw() {
    let count2 = 9
    for(let btn2 of btns){
        if(btn2.innerHTML != ""){
            count2--
            if(count2 == 0){
                result.innerHTML = "draw"
                reset.disabled = false
                reset.classList.add("turnOn")
                reset.style.cursor = 'pointer'
                break
            }
        }
    }
}

//the winner of the game
function earnMaxScore(player,playerSimbol) {
    if(player == 5){
        setTimeout(() => {
            document.querySelector('.winnerPlayer h1').innerHTML = playerSimbol
            document.querySelector('.winner').style.display = 'block'
            resetF()
            scoreO = 1; scoreX = 1
            Xscore.innerHTML = 0; Oscore.innerHTML = 0
            setTimeout(() => {
                document.querySelector('.winner').style.display = 'none'
            }, 5000);
        }, 1000);
    }
}

//this function is reset
function resetF() {
    winCombination.forEach(elements => {
        elements.forEach(element => {
           element.innerHTML = ''; element.style.background = ''
           element.style.color = ''; revelation.innerHTML = ""; 
           result.innerHTML = ""
            for(let i of btns){
                i.disabled = false
            }
            reset.disabled = true
            reset.style.cursor = 'no-drop'
            reset.classList.remove("turnOn")
        });
    });
}
reset.addEventListener('click', function(){
    resetF()
})