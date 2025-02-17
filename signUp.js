/*
let sureName='';
let firstName='';
let userName='';
let passWord1='';
let passWord2='';

const object= [
      {sureName1:`${sureName.value}`},
      {firstName1:`${firstName.value}`},
     { userName1:`${userName.value}`},
     { passWord1:`${passWord1.value}`},
     { passWord2:`${passWord2.value}`}
];
        let loginPassword=document.querySelector('.js-password1');
        let loginUsername=document.querySelector('.js-userName');
        document.querySelector('.js-sign').addEventListener('click', ()=>
              {
              let sureName=document.querySelector('.js-sureName');
              let firstName=document.querySelector('.js-firstName');
              let userName=document.querySelector('.js-userName');
              let passWord3=document.querySelector('.js-passWord1');
              let passWord4=document.querySelector('.js-passWord1');
}
);
*/





            document.querySelector('.js-sign-up').addEventListener('click', ()=>{

         if(document.querySelector('.js-password1').type === 'password'){
            if(document.querySelector('.js-password1').value !== document.querySelector('.js-password2').value){
                  document.querySelector('.js-error-message').classList.add('error-message');
                  document.querySelector('.js-error-message').innerHTML= "Password Missmatch, please confirm your password!"
            }
            else{
                  document.querySelector('.js-error-message').classList.remove('error-message');
                  document.querySelector('.js-error-message').innerHTML='';


            }
         }

            
      });






document.querySelector('.js-password1').addEventListener('keyup',()=>{
      let innerText = document.querySelector('.js-password1').value;
      let smallLetters  = /[a-z]/.test(innerText);
      let capitalLetters  = /[A-Z]/.test(innerText);
      let specialCharacters  = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(innerText);
      let numbers  = /[0-9]/.test(innerText);

         if(document.querySelector('.js-check-test').value='null'){
            document.querySelector('.js-check-test').innerHTML='Weak';
         }
      if(smallLetters || capitalLetters || specialCharacters || numbers){
            document.querySelector('.js-check-test').innerHTML='Weak';
      };
      
      
      if(smallLetters && capitalLetters){
            document.querySelector('.js-check-test').innerHTML='Strong';
      };

      if(smallLetters && specialCharacters){
            document.querySelector('.js-check-test').innerHTML='Strong';
      };

      if(capitalLetters && specialCharacters){
            document.querySelector('.js-check-test').innerHTML='Strong';
      };

      if(capitalLetters && numbers){
            document.querySelector('.js-check-test').innerHTML='Strong';
      };


      if(specialCharacters && numbers){
            document.querySelector('.js-check-test').innerHTML='Strong';
      };

      if(smallLetters && numbers){
            document.querySelector('.js-check-test').innerHTML='Strong';
      };


      if(smallLetters && capitalLetters && specialCharacters && numbers){
            document.querySelector('.js-check-test').innerHTML='Very Strong';
      };


      
});


document.querySelector('.js-sign-up').addEventListener('keydown', ()=>{
      if(event.key === 'Enter'){
            if(document.querySelector('.js-password1').type === 'password'){
                  if(document.querySelector('.js-password1').value !== document.querySelector('.js-password2').value){
                        document.querySelector('.js-error-message').classList.add('error-message');
                        document.querySelector('.js-error-message').innerHTML= "Password Missmatch, please confirm your password!"
                  }
                  else{
                        document.querySelector('.js-error-message').classList.remove('error-message');
                        document.querySelector('.js-error-message').innerHTML='';
      
      
                  }
               }
      


      }
});






   

