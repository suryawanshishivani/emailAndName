//single element selector

// const form = document.getElementById("my-form");
// console.log(form);

//  const ite=document.querySelectorAll(".list-group-item");
 
//  ite.forEach((list-group-item))
    
 //const ul=document.querySelector(".items");

// console.log(ul);
//ul.remove();
//ul.lastElementChild.remove();
// ul.firstElementChild.textContent='SHIVANI';
// ul.children[1].textContent='KASTURI';
// ul.children[2].textContent='AMIT';
// ul.lastElementChild.innerHTML='<h1>AMish</h1>'

// const btn=document.querySelector('.btn');
// //btn.style.backgroundColor='red';

//  btn.addEventListener('mouseout',(e)=>{
//      e.preventDefault()
//     console.log("click")
//      document.querySelector('#main').style.background='#ccc'
//   document.querySelector('body').classList.add('bg-dark');
// // //document.querySelector('.items').lastElementChild.innerHTML='<h2>Hello Click</h2>'
    
//      });


//same function for mouseout as well only replace the mouseover by mouseout

 const myFo=document.querySelector('#myForm');
 //const nameInput=document.querySelector('#name');
  //const emailPut=document.querySelector('#Email');
// const msg=document.querySelector('.Msg');
// const userList=document.querySelector('#Users');

  myFo.addEventListener('submit' ,onSubmit);

function onSubmit(e){
  e.preventDefault();
 // localStorage.setItem("Name",nameInput);
 //console.log(nameInput.value);
//  if(nameInput.value===''||emailPut.value===''){
//  alert('please enter the field')}
//  else{
//   console.log('congtzzz you are enter succesfully')
//  }
//localStorage.setItem('name',nameInput.value);
//localStorage.setItem('email',emailPut.value);

//localStorage.getItem('name');
let nameInput =e.target.name.value;
let emailPut= e.target.Email.value;
let Obj={
 name: nameInput,
 email: emailPut
};
localStorage.setItem('userDetails',JSON.stringify(Obj));
console.log(localStorage);
}


 
