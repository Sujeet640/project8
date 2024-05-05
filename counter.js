// getting the html element

const DecrementBtn = document.getElementById("DecrementBtn");
const DisplayValue = document.getElementById("DisplayValue");
const IncrementBtn = document.getElementById("IncrementBtn");
const resetbtn     = document.getElementById("resetbtn");

//decrement button

DecrementBtn.addEventListener("click",() => {
    const value = Number(DisplayValue.innerText);
    if (value > 0){
        DisplayValue.innerText = value-1;
    }
    else{
        alert("Negative value will not allowed");
    }
});

// Increment Button

    IncrementBtn.addEventListener("click",function()  {
        const value = Number(DisplayValue.innerText);
        if (value>=10){
            alert("10+ value will not allowed");
        }
        else{
            DisplayValue.innerText = value+1;
        }
    });

// Reset Button

    resetbtn.addEventListener("click", () => {
        DisplayValue.innerText =0;
    });
