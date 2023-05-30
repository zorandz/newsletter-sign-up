const emailInput = document.getElementById("email");
const button = document.getElementById("btn");

document.getElementsByClassName("success-message-container")[0].classList.add("make-invisible");
document.getElementsByClassName("global-container")[0].classList.remove("make-invisible");

button.addEventListener("click", () => {
    console.log(emailInput.value)
    
    var validRegex = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/);
    
    if (validRegex.test(emailInput.value)) {
        document.getElementsByClassName("valid-email-required")[0].style.display = "none";
        document.getElementsByClassName("global-container")[0].classList.add("make-invisible");
        document.getElementsByClassName("success-message-container")[0].classList.remove("make-invisible");

      const msgPartOne = "A confirmation email has been sent to ";

      const msgPartThree = ". Please open it and click the button inside to confirm your subscription."
      
      let outputMsg = document.getElementById("output-msg");
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `${msgPartOne}<span>${emailInput.value}</span>${msgPartThree}`;
      outputMsg.appendChild(newDiv);
      return true;
      
    } else {
        document.getElementsByClassName("valid-email-required")[0].style.display = "flex";
        document.getElementById('email').style.backgroundColor = "#ffe8e6";
        
        return false;
    }
});

document.getElementById("dismiss-btn").addEventListener("click", (event) => {
    location.reload();
   // document.getElementsByClassName("success-message-container")[0].classList.add("make-invisible");
   // document.getElementsByClassName("global-container")[0].classList.remove("make-invisible");

})