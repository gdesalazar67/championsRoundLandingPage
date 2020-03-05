import './index.css'

document.body.scrollTop = document.documentElement.scrollTop = 0;

const signup = document.getElementById("mc_embed_signup");
const thanks = document.getElementById("thanks");
const yes= document.getElementById("yes");
let  h = window.innerHeight

window.addEventListener("resize", () => {
    h = window.innerHeight;
});

const scrollToDiv = (element) => {
    if(h < 700){
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': (element.offsetTop - 10)
        });
    };
};

document.getElementById("yes").addEventListener("click", ()=>{
    thanks.style.height = "30px";
    thanks.style.opacity = "1"
    thanks.style.marginBottom = "0px"
    signup.style.height = "100%";
    signup.style.marginBottom = "25px";
    scrollToDiv(yes);
});
document.getElementById("no").addEventListener("click", ()=>{
    thanks.style.height = "30px";
    thanks.style.opacity = "1"
    signup.style.height = "0";
    thanks.style.marginBottom = "25px"
    signup.style.marginBottom = "0px";
    scrollToDiv(yes);
});

