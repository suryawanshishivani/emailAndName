// console.log('f' );
// console.log('g' );
// //setTimeout(()=> console.log('h' ),1000);
// setTimeout(()=> console.log('h' ),0);
// console.log('i');


function x(){
    let a=13;
    function y(){
        console.log(a);
    }
    a=5;
    return y();
}
const z=x()
console.log(z());