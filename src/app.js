const HIDDEN_CLASSNAME = "hidden"
const h2 = document.querySelector("h2")
const button = document.querySelector(".page")
const enter = document.querySelector("div #contents")
const modal = document.getElementById("modal")
const modalbtn = document.getElementById("modal_btn")
const closeBtn = modal.querySelector(".close-area")
let entercount = 0

async function countDownFunc(){
    await beforeCount();
    afterCount()

}
function afterCount(){
        let countdown=10;
        const aftercounter = setInterval(function(){
            console.log(countdown)
            h2.innerText=String(countdown);
            if (countdown <= 0){
                clearInterval(aftercounter);
                alert("you entered " + enter.innerText + "!")
                return;
            }
            countdown--;
        },1000);
}
function beforeCount(){
    return new Promise(function (resolve){
        let countdown = 5
        const beforecounter = setInterval(function(){
            h2.classList.remove(HIDDEN_CLASSNAME);
            h2.innerText=String(countdown)
            if (countdown <= 0) {
                clearInterval(beforecounter);
                h2.innerText="Start!"
                enter.classList.remove(HIDDEN_CLASSNAME)
                resolve();
                return;
            }
            countdown--;
        },1000);
    })

}
async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}


function clickBtnHandler(){
   countDownFunc()
}

function mouseenterHandler(){
    entercount++
    enter.innerText = entercount
}

function clickModalBtnHandler(){
    modal.style.display="flex"
}
function clickModalCloseBtnHandler(){
    modal.style.display="none"
}
button.addEventListener("click",clickBtnHandler)
enter.addEventListener("mouseenter",mouseenterHandler)
modalbtn.addEventListener("click", clickModalBtnHandler)
closeBtn.addEventListener("click",clickModalCloseBtnHandler)