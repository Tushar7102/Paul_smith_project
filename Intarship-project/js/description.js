const sing_to_login = document.getElementById("signtologin");
sing_to_login.addEventListener('click', () => {
    window.location = "login-page.html";
})

const sing_to_login_media = document.getElementById("signtologin-media");
sing_to_login_media.addEventListener('click', () => {
    window.location = "login-page.html";
})


const sign = document.querySelector(".sign-in");

sign.addEventListener("submit", (e) => {
    e.preventDefault();
    let isvalid = true
    let email = document.getElementById("email-sign");
    let password = document.getElementById("pass-sign");

    if(email.value=="")
    {
        isvalid=false
        document.getElementById("emailerror-sign").innerHTML="Email is required";
        document.getElementById("emailerror-sign").style.color="red"
    }
    else
    {
        document.getElementById("emailerror-sign").innerText = ""
    }
    if(password.value=="")
    {
        isvalid=false
        document.getElementById("passerror-sign").innerHTML="Password is required";
        document.getElementById("passerror-sign").style.color="red"
    }
    else
    {
        document.getElementById("passerror-sign").innerText = ""
    }
    

    if(isvalid==true)
    {
        let signinobj={
                email:document.getElementById("email-sign").value,
                password:document.getElementById("pass-sign").value
            } 
           
            let loginformdata = JSON.parse(localStorage.getItem("userinfo"));

            let store = loginformdata.filter((el, i) => el.email == signinobj.email && el.password == signinobj.password)
            if (store[0]) {
                alert(`succesfullty Login Welcome`)
                window.location = "home.html"
              } else {
                alert("Invalid password || email")
              }
    }
    else
    {
        alert("fill up form")
    }
    
})





const sign_media = document.querySelector("#signform-media");

sign_media.addEventListener("submit", (e) => {
    e.preventDefault();
    let isvalid = true
    let email = document.getElementById("email-sign-media");
    let password = document.getElementById("pass-sign-media");

    if(email.value=="")
    {
        isvalid=false
        document.getElementById("emailerror-sign-media").innerHTML="Email is required";
        document.getElementById("emailerror-sign-media").style.color="red"
    }
    else
    {
        document.getElementById("emailerror-sign-media").innerText = ""
    }
    if(password.value=="")
    {
        isvalid=false
        document.getElementById("passerror-sign-media").innerHTML="Password is required";
        document.getElementById("passerror-sign-media").style.color="red"
    }
    else
    {
        document.getElementById("passerror-sign-media").innerText = ""
    }
    

    if(isvalid==true)
    {
        let signinobj={
                email:document.getElementById("email-sign-media").value,
                password:document.getElementById("pass-sign-media").value
            } 
           
            let loginformdata = JSON.parse(localStorage.getItem("userinfo"));

            let store = loginformdata.filter((el, i) => el.email == signinobj.email && el.password == signinobj.password)
            if (store[0]) {
                alert(`succesfullty Login Welcome`)
                window.location = "home.html"
              } else {
                alert("Invalid password || email")
              }
    }
    else
    {
        alert("fill up form")
    }
    
})




let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    effect: "cards",
    grabCursor: true,
  });