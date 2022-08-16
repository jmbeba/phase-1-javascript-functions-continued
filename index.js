// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(act = "go to the office"){
    return `This Monday, I will ${act}.`
}

function wrapAdjective(inp){
    const result = function(adj = "special"){
        return `You are ${inp}${adj}${inp}!`;
    }

    return result;
}