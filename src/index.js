import './index.css'

const signup = document.getElementById("mc_embed_signup");
const thanks = document.getElementById("thanks");

document.getElementById("yes").addEventListener("click", ()=>{
    thanks.style.height = "30px";
    thanks.style.opacity = "1"
    thanks.style.marginBottom = "0px"
    signup.style.height = "100%";
    signup.style.marginBottom = "25px";
});
document.getElementById("no").addEventListener("click", ()=>{
    thanks.style.height = "30px";
    thanks.style.opacity = "1"
    signup.style.height = "0";
    thanks.style.marginBottom = "25px"
    signup.style.marginBottom = "0px";
});
