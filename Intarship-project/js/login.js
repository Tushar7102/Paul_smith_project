const backey = document.getElementById("back");
backey.addEventListener('click', () => {
    window.location = "index.html";
})

const logins=document.getElementById("login")
logins.addEventListener('click', () => {
    window.location = "index.html";
})












const login = document.getElementById("login-form");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    let isvalid = true
    let name = document.getElementById("f-name");
    let lastname = document.getElementById("l-name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirpassword = document.getElementById("confirmpass");
    let cheack=document.getElementById("checkbox")

    if (name.value == "") {
        isvalid = false,
        document.getElementById("namerror").innerText = "Frist Name is Requried"
        document.getElementById("namerror").style.color="red"
    }
    else
    {
        document.getElementById("namerror").innerText = ""
    }
    if(lastname.value==""){
        isvalid=false;
        document.getElementById("lasterror").innerHTML="Last Name is required";
        document.getElementById("lasterror").style.color="red"
    }
    else
    {
        document.getElementById("lasterror").innerText = ""
    }
    if(email.value=="")
    {
        isvalid=false
        document.getElementById("emailerror").innerHTML="Email is required";
        document.getElementById("emailerror").style.color="red"
    }
    else
    {
        document.getElementById("emailerror").innerText = ""
    }
    if(password.value=="")
    {
        isvalid=false
        document.getElementById("passerror").innerHTML="Password is required";
        document.getElementById("passerror").style.color="red"
    }
    else
    {
        document.getElementById("passerror").innerText = ""
    }
    if(confirpassword.value=="")
    {
        isvalid=false
        document.getElementById("confirmpasserror").innerHTML="Confirm Password is required";
        document.getElementById("confirmpasserror").style.color="red"
    }
    else
    {
        document.getElementById("confirmpasserror").innerText = ""
    }
    if(cheack.checked=="")
    {
        isvalid=false
        alert("Please tick this box")
    }
    if(password.value!=confirpassword.value)
    {
        isvalid=false
        alert("Confirm Password is not Valid")
    }
    

    if(isvalid==true)
    {
        let arr = JSON.parse(localStorage.getItem('userinfo')) || []
        alert("succecfully login")
        let obj={
                name:document.getElementById("f-name").value,
                lastname:document.getElementById("l-name").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                confirm_password:document.getElementById("confirmpass").value
            } 
            arr.push(obj)
            localStorage.setItem('userinfo',JSON.stringify(arr))
            window.location = "index.html";
    }
    else
    {
        alert("fill up form")
    }
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
        if (a[0]) {
                alert(`succesfullty Login Welcome`)
                window.location = "index.html"
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
                window.location = "index.html"
              } else {
                alert("Invalid password || email")
              }
    }
    else
    {
        alert("fill up form")
    }
    
})