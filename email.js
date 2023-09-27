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
//document.querySelector('.items').lastElementChild.innerHTML='<h2>Hello Click</h2>'
    
//      });


//same function for mouseout as well only replace the mouseover by mouseout


const myFo=document.querySelector('#myForm');
 //const nameInput=document.getElementById('name');
//const emailPut=document.getElementById('Email');
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
 Name:nameInput,
 Email:emailPut

};

 localStorage.setItem(Obj.Email,JSON.stringify(Obj));
// // //console.log(localStorage);
showUsersScreen(Obj);
}
 function showUsersScreen(Obj){
  const parentElement=document.getElementById("listOfItems");
   const childElement=document.createElement('li');
  childElement.textContent=Obj.Name+'--- ' +Obj.Email
  parentElement.appendChild(childElement);
const child2=document.createElement('btn');
child2.innerHTML='<button class="btn-outline-secondary">delete</button>'
childElement.appendChild(child2);
child2.onclick= ()=>{
  localStorage.removeItem(Obj.Email)
  parentElement.removeChild(childElement)
}
// parentElement.appendChild(childElement);
// childElement.appendChild(child2);
}
 




  




 
