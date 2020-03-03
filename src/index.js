import './index.css'
// import './mailchimp'

console.log("hello")
const signup = document.getElementById("mc_embed_signup");

document.getElementById("yes").addEventListener("click", ()=>{
    // signup.style.opacity = "1";
    // signup.style.visibility = "visible"
    signup.style.height = "100%";
});
document.getElementById("no").addEventListener("click", ()=>{
    // signup.style.opacity = "1";
    signup.style.height = "0";
    // signup.style.visibility = "hidden"
});
