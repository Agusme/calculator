let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let screenValue = "";
/* const handleFocus = (e) =>{
    console.log(e.target.value)
}
screen.addEventListener('focus', handleFocus)

 */

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    //console.log(e.target.innerHTML)
    let buttonText = e.target.innerHTML;
    console.log("button text is " + buttonText);

    switch (buttonText) {
      case "X":
        buttonText = "*";
        console.log("this button is " + buttonText);
        screenValue += buttonText;
        screen.value = screenValue;
        return;
      case "AC":
        (screenValue = ""), (screen.value = screenValue);
        return;
      case "√":
        (buttonText = "sqrt("), (screenValue += buttonText);
        screen.value = screenValue;
        return;
      case "π":
        buttonText = "3.14";
        screenValue += buttonText, 
        screen.value = screenValue;
        return;
        case "%":
            buttonText= "/100",
            screenValue = screenValue + buttonText
            screen.value= screenValue
            return;
            case "=":
                screen.value = math.evaluate(screenValue)
                return;

       case "⌫":
        screenValue = screenValue.substring(0 , screenValue.length -1)
        screen.value = screenValue;
        return;
    
      default:
        screenValue += buttonText;
        screen.value = screenValue;
        return;
    }
  });
}
