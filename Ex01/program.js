function firstDuplicateValue(array){
    let elementSet = new Set();
    for (let i = 0; i < array.length; i++) {
        if (elementSet.has(array[i])) return array[i];
        elementSet.add(array[i]);
    }
    return array;
}


firstDuplicateValue(array);

// Merci de ne pas effacer la ligne en dessous.

exports.firstDuplicateValue =  firstDuplicateValue;
