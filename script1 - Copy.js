//////signup syntax
let signUpButton = document.getElementById("submit");
let firstnameInp = $("#firstName").value;
let lastnameInp = $("#matricNumber").value;
let emailInp = $("#email").value;
let matricNumberInp = $("#matricNumber");
let passwordInp = $("#password").value;

let Details  = [
    {
        firstname:"Olarotimi",
        lastname:"Ademola",
        matricNumber:"csc/2017/109",
        password:"Olarotimi2000",
        email:"ademolarotimi2000@gmail.com"
        

    }
]

signUpButton.addEventListener("click",function(){

    
   
        
        let newDetails = {
        firstname: firstnameInp,
        lastname: lastnameInp,
        matricNumber: matricNumberInp,
        email: emailInp,
        password:passwordInp


    }
    Details.push(newDetails)
    
    window.location.href= "./loginpage.html"
    console.log(Details);
})

// /login syntax



    

