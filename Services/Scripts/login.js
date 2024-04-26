/*================SHOW HIDDEN PASSWORD==========*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', ()=>{
        if(input.type === 'password'){
            //switch to text
            input.type = 'text';
            
            //icon change
            iconEye.textContent = 'visibility';
            

        }
        else{
            input.type = 'password';
            iconEye.textContent = 'visibility_off';
        }
    })
}

showHiddenPass('login-pass','login-eye')