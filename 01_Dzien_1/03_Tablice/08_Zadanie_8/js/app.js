let tab1 = [8,3,22,5];
let tab2 = [1,3,2];

function addArrays(tab1,tab2){
    let newTab = [];
    let short;
    let long;

    if (tab1.length < tab2.length){
        short = tab1;
        long = tab2;
    }else {
        short = tab2;
        long = tab1;
    }

    for (let i = 0; i < short.length; i++){
        newTab.push(short[i] + long[i]);

    }
    for (let j = short.length; j < long.length; j++){
        newTab.push(long[j]);

    }
    return newTab;
}


console.log(addArrays(tab2,tab1));