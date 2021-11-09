function plusMinus(arr) {
    let neg = 0, pos = 0, zero = 0;
    let length = arr.length;
    arr.forEach(value => {
        if(value > 0) {
            pos += 1;
        } else if(value < 0) {
            neg += 1;
        } else if( value === 0) {
            zero += 1;
        }
    });
    console.log((pos/length).toFixed(6));
    console.log((neg/length).toFixed(6));
    console.log((zero/length).toFixed(6));
}
