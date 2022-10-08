const base = document.querySelector(".base");
const height = document.querySelector(".height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector(".output-area");


areaBtn.addEventListener("click", function claculateArea(){
    const a = Number(base.value); 
    const b = Number(height.value);
    const area = 0.5*a*b;
    output.innerText = "Area calculated is "+area;
})