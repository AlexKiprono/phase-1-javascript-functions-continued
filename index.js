//function saturdayFun
function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

//no arguments are passed
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

//mondayWork

// function mondayWork(activity = 'go to the office.') {
//   return `This Monday, I will ${activity}.`;
// }
// mondayWork("work from home");

//no arguments are passed
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

//overriden

// function mondayWork() {
//   console.log (`This Monday, I will work from home`);
// }

function wrapAdjective(symbol ='*') {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
      }
}



  