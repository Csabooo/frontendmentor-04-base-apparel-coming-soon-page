let inputField = document.querySelector("input");
let button = document.querySelector("#send_Button");
let cautionLogo = document.querySelector(".material-symbols-outlined");


button.addEventListener("click", doSomething);
inputField.addEventListener("focus", changeInputColorAndSetupStyles);


function doSomething(e) {
    let arrow_Input = document.querySelector("#arrow-in-input");
    let inputText = inputField.value;
    let pa = document.createElement("p");
    pa.style.textAlign = "left";
    pa.style.padding = "0";
    pa.style.paddingLeft = "60px";

    if (/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(inputText)) {
        pa.innerText = "Passed";
        arrow_Input.appendChild(pa);

    } else {
        inputField.style.borderColor="hsl(0, 93%, 68%)";
        inputField.style.borderWidth="2.5px";
        pa.innerText = "Please provide a valid email";
        pa.style.color = "hsl(0, 93%, 68%)";
        arrow_Input.appendChild(pa);
        cautionLogo.style.visibility = "visible";
    };

    e.preventDefault();
}


function changeInputColorAndSetupStyles(e) {
        cautionLogo.style.visibility = "hidden";
        inputField.placeholder = "";
        inputField.value = "";
        inputField.style.borderWidth = "1px";
        e.target.style.color = "hsl(0, 6%, 24%)";
        e.target.style.fontWeight = "400";
        e.target.style.borderColor = "hsl(0, 36%, 70%)";

    const elements = document.querySelector('#arrow-in-input').querySelectorAll("p");

    let i = 0;
    while (elements.length > i) {
        elements[i].remove();
        i++;
    }


  

}