const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const output = document.querySelector(".output-hypotenuse");


function rootSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b;
    const rootOfSq = Math.sqrt(sumOfSquare);
    return rootOfSq;
}

hypotenuseBtn.addEventListener("click", function calculateHypotenuse(){
    if(sides[0].value>0 && sides[1].value>0){
        const hypotenuse = rootSumOfSquare(Number(sides[0].value),Number(sides[1].value));
    output.innerText = "Hypotenuse calculated is "+hypotenuse;
    }
    else {
        output.innerText = "Please enter all values as > zero";
    }
})