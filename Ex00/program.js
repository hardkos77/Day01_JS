function tabTriCarre(array){
    for(let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i], 2);
    }
    array.sort(function(a, b) {
        return a - b;
    });
    return array;
}

tabTriCarre(array);

// Merci de ne pas effacer la ligne en dessous.

exports.tabTriCarre =  tabTriCarre;
