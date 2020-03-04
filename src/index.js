import './index.css'

const signup = document.getElementById("mc_embed_signup");
const thanks = document.getElementById("thanks");

document.getElementById("yes").addEventListener("click", ()=>{
    thanks.style.display = "block";
    signup.style.height = "100%";
});
document.getElementById("no").addEventListener("click", ()=>{
    thanks.style.display = "block";
    signup.style.height = "0";
});
