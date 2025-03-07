
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;
// let hasLicense = true;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);
    if (age >= 16){
        resultElement.textContent = `You are old enough to drive`;
    
        if (hasLicense) {
            resultElement.textContent = `You don't have a licence`;
        }
        else{
            resultElement.textContent = `You do not have your license yet!`;
        }
    }
    else{
        resultElement.textContent = `You must be 16+ to have a license`;
    }
}
