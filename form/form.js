let email = document.getElementById('email');
// let password = document.getElementById('pwd');
let error = document.getElementById('error');
function validate(){

    let RegExp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{1,2})?$/
    if (RegExp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;

    }
    else{
        error.innerHTML = 'Invalid';
        error.style.color = 'red';
        return false;
    }
        // if (email.value == ""){
    //     alert('email cannot be empty');
    //     return false;

    // }
    // else if (pwd.value==""){
    //     alert("pasword cannot be blank");
    //     return false;
    // }
    // else if (pwd.value.length<=5){
    //     alert("pasword is too short");
    //     pwd.style.border = "2px solid red";
    //     return false;
    // }
    // else{
    //     return true;
    // }


} 