
//@keyframes for animation
function formValidation(){
    let userName = document.getElementById("user").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value
    let  message = document.getElementById("message");
    let button =  document.getElementById('btn')

    if(userName == "" && email == "" && password =="" && confirmPassword ==""){
        message.innerText="Enter valid value";
        message.className = 'alert-danger w-75 p-2';
        button.className = 'btn-danger w-100 mt-3';
        return false ;

    }else if(password.length>15 || password.length<5){
        message.innerText ="Enter 5-15 number for password";
        message.className = 'alert-danger w-75 p-2';
        button.className = 'btn-danger w-100 mt-3';
        return false

    }else if(email.indexOf("@",2)==-1){
        message.innerText ="Enter valid email";
        message.className = 'alert-danger w-75 p-2';
        button.className = 'btn-danger w-100 mt-3';
        return false

    }else if(password.length !== confirmPassword.length){
        message.innerText ="password not matched";
        message.className = 'alert-danger w-75 p-2';
        button.className = 'btn-danger w-100 mt-3';
        return false
    }
    
}