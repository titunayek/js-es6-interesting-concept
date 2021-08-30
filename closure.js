function stopWatches (){
    let counting = 0 
    return function(){
        counter++;
        return counter;
    }
}
let res = stopWatches();
console.log(res());
console.log(res());

