const animationBtn = document.querySelector('.animation-btn');
const signBtn = document.querySelector('.slide-signup');
const loginBtn = document.querySelector('.slide-login');
const loginText = document.querySelector('.login');
const signupText = document.querySelector('.signup');
const signupLink = document.querySelector('.signup-link a');
const loginTitle = document.querySelector('.title-login');
const signupTitle = document.querySelector('.title-Signup');

signBtn.onclick = () => {
    animationBtn.style.transform = 'translateX(180px)';
    signBtn.style. zIndex = 1;
    signBtn.style. color = 'white';
    loginBtn.style.color = 'black';
    loginText.style.transform = 'translateX(-200px)'
    signupText.style.transform = 'translateX(-150px)'
    loginTitle.style.transform = 'translateX(-265px)'
    signupTitle.style .transform =  'translateX(-90px)'
}
loginBtn.onclick = () => {
    animationBtn.style.transform = 'translateX(0)';
    signBtn.style. zIndex = 1;
    loginBtn.style. color = 'white';
    signBtn.style.color = 'black';
    loginText.style.transform = 'translateX(150px)'
    signupText.style.transform = 'translateX(200px)'
    loginTitle.style.transform = 'translateX(0px)'
    signupTitle.style .transform =  'translateX(260px)'
}
signupLink.onclick = () =>{
    signBtn.click();
    return false;
}