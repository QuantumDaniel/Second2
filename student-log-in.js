let username=document.querySelector('.js-userName').value;
  let password=document.querySelector('.js-password').value;



let student=[{password2:`${password}`,
  username2:`${username}`
}];
let html='';
student.forEach((student)=>{
  html+=`
  <div>
  <div>userName:${student.username2}</div>
  <div>password:${student.password2}/div>
</div>
`
});

document.querySelector('.js-show').addEventListener('click',()=>{

  const show =document.querySelector('.js-password');
  setTimeout(()=>{
  
    
    if(show.type==='password'){
      show.type='text';
    }
    else{
      show.type='password';
    }

  },300);

  setTimeout(()=>{
if(show.type==='text'){
  show.type='password';
}
  },1000);
});







