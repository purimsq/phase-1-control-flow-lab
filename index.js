 function scuberGreetingForFeet(ride){
  // Write your code here!
  let output = "";

  if(ride > 2500){
    output = "No can do.";
  }else if(ride > 2000 && ride < 2500){
    output = "I will gladly take your thirty bucks.";
  }else if(ride > 400 && ride < 2000){
    output = "That will be twenty bucks.";
  }else{
    output = "This one is on me!";
  };

  return output
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}