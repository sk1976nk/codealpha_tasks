//scripts

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-bin");
const tempType = document.querySelector("#temp-type");


window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>convert</span>";
    },1000)

})

function convertToCelsius(){
    let inputValue = degree.value;

    setTimeout(() => {
        if(tempType.value === "fahrenheit"){
            const fahrenheitToCelsius = (inputValue -32) * (5/9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
        }
        else if(tempType.value === "Kelvin"){
            const KelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
        }
    
    },1200)
}
