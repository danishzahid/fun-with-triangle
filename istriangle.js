const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");
const outputBox = document.querySelector("#output-bx");


function calculateSumOfAngles(angleA, angleB, angleC){
    const sumTotal = angleA + angleB + angleC;
    return sumTotal;
}

isTriangleBtn.addEventListener("click", function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputBox.value = "Yay! That's a Triangle";
    } else{
        outputBox.value = "Oh! Oh! That doesn't form a triangle";
    }

})