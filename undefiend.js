/*
undefiend hoy ki ki  karone 

1. variable value not assigend .mane value dei nai.
2. function but didnot return anything .mane return na korle 
3. just wrote return but didnot return anything .function return korchi kintu kono kichu pathainai .
4 . function likhochi but paramitar hisabe duitar jaygay  akta pathaichi tai NaN hoy .
4 . paramitar that isnot passed
5. property that doesnot exist in an object .mane hoilo kono object ar mondhe jata nai seta khujte gele undefiend hoy.
6. accessing array element out of range .mane array ar modhe je jinis ta na thakile seta khujle undefiend hoy 
7.accessing deleted array element 
8.explicitly set value to undefiend 
*/

// variable value 
let frist ;
console.log(frist)

// function return 
function second (x, y ){
    const sum = x+ y
}
const result = second(3, 6 )
console.log(result)

// 3. 
function add(a,b ){
    const sum = a+b
    if(b < 10){
        return
    }

}
const forth = add(2 ,6 )
console.log(forth)

// 4.
function double (a,b){
    const res = a * b
    console.log(b)
    return res
}
const add = double(32)
console.log(add)

// 5. 
const fifth = {name: 'sagor' ,agr : 32 , location: 'bandarbon'}
console.log(fifth.phone)

// 6 .
const sixth = [34, 54, 23 ,54 ]
console.log(sixth[5])

// 7. 
// const sixth = [34, 54, 23 ,54 ]
// deleta sixth[2];
// console.log(sixth[2])

// 8. 
const seventh = undefiend ;
// console.log(seventh);
const myObj = {name : 'alo,' ,profession: null}
// console.log(myobj.profession)



