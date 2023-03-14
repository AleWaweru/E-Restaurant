const submit_Button = document.querySelector("button");

submit_Button.onclick = (e) => {

    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cPass = document.getElementById("cpass").value;


    //local storage of the data

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('EmailAddress', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Confirm Password', cPass);


    if(fname == "" && lname == "" && email == "" && pass == "" && cPass == ""){
        swal("Opps...!", "Input Field Must be Filled", {
            button: "error"});
    }
    else{
        if(pass !== cPass){
            swal("Opps...!", "Password not Matching!", {
                button: "error"});
        }else{
            swal("Good job!", "Registration Successful!", "success")
        }
        


    }

};

const login = document.querySelector('.login');

login.onclick = (e) => {
    e.preventDefault();

    const emailAdress = document.getElementById('emailAddress').value;
    const passWord = document.getElementById('passWord').value;


    const  EmailAddress = localStorage.getItem("EmailAddress");
    const  Password = localStorage.getItem("Password");

    if(emailAdress == "" && passWord == ""){
        swal("Opps...!", "Input Field has no value", 
             "error");


             setTimeout(()=>{
                location.href='https://www.mostakimbillah.com';
                },1000)

    }else{
        if(emailAdress == EmailAddress && passWord == Password){
            swal("Good job!", "login Successful!", "success");

            window.location = "menu.html";
        }else{
            swal("Opps...!", "something is wrong",  "error");

            
        };
        
    }

};