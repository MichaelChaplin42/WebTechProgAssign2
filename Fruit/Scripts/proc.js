const spin = document.getElementById("spin");
const credit = document.getElementById("credit");
const collect = document.getElementById("collect");
const credit0 = document.getElementById("credito")
const winningso = document.getElementById("winningso")
const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const message = document.getElementById("message")



spin.addEventListener("click", spinf);
credit.addEventListener("click", creditf);
collect.addEventListener("click", collectf);


spin.disabled = true;
collect.disabled = true;
let sr = [0,0,0]
let credits = 0
let winnings = 0
credit0.innerText = credits;
winningso.innerText = winnings;
for (i = 0; i<3;i++) {
    sr[i] = Math.floor(Math.random() * Math.floor(8))+1;
}
s1.src = `Images/${sr[0]}.png`;
s2.src = `Images/${sr[1]}.png`;
s3.src = `Images/${sr[2]}.png`;


function spinf() {
    event.preventDefault();
    
    if (credits == 0) {
        message.innerText="No Credits";
        spin.disabled=true;
    } else {
        if (credits == 1) {
            spin.disabled=true;
        }
        credits = credits - 1;
        credit0.innerText = credits;
        for (i = 0; i<3;i++) {
            sr[i] = Math.floor(Math.random() * Math.floor(8))+1;
            console.log(sr[i])
        }
        s1.src = `images/${sr[0]}.png`;
        s2.src = `images/${sr[1]}.png`;
        s3.src = `images/${sr[2]}.png`;
        if (sr[0] == sr[1] == sr[2]) {
            winnings = winnings + 10
            winningso.innerText = winnings;
            message.innerText="Win";
            collect.disabled=false;
        } else if (sr[1] == sr[2]) {
            winnings = winnings + 5
            winningso.innerText = winnings;
            message.innerText="So close";
            collect.disabled=false;
        } else {
            message.innerText = "no dice"
        }
    }

    console.log("spin");
}
function creditf() {
    event.preventDefault();
    credits++
    credit0.innerText = credits;
    spin.disabled=false;
}
function collectf() {
    event.preventDefault();
    winnings=0
    console.log(winnings);
    winningso.innerText = winnings;
    message.innerText="Winnings Collected"
    collect.disabled=true;
}
