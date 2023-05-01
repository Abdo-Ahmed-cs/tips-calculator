const bill = document.querySelector("#bill");
const people = document.querySelector("#num-of-people");
const inputs = document.querySelector("#percent");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");
const reset = document.querySelector("#reset-btn");


inputs.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target.name === "percent") {
        const percent = event.target.value;
        const tip = bill.value * percent / people.value;
        tipAmount.textContent = '$' + String(tip).slice(0, 4);
        total.textContent = '$' + String((bill.value / people.value) + tip).slice(0, 5);
    }

})

const reseting = () => {
    bill.value = "";
    people.value = "";
    tipAmount.textContent = "$0.0";
    total.textContent = "$0.0";
}


reset.addEventListener("click", reseting);



