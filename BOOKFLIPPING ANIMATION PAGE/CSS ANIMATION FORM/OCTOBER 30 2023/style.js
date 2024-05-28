const button = document.querySelector(".btn");
const inpTag = document.querySelector(".inp_name");
const inpTag2 = document.querySelector(".inp_last");
const inpTag3 = document.querySelector(".inp_number");
const inpTag4 = document.querySelector(".inp_email");
const inpTag5 = document.querySelector(".inp_password");


button.addEventListener("click", function (e) {
  e.preventDefault();
 

  if (inpTag.value === "") {
    document.getElementById("nameErrorMessage").innerHTML =
      "Input your FirstName!!!";
  }
  else{
    document.getElementById("nameErrorMessage").innerHTML ="";
    
  }
  if (inpTag2.value === "") {
    document.getElementById("lastNameErrorMessage").innerHTML =
      "''Input your LastName!!!";
  }
  else{
    document.getElementById("lastNameErrorMessage").innerHTML ="";
}
  if (inpTag3.value === "") {
    document.getElementById("phoneErrorMessage").innerHTML =
      "''Input your Number!!!";
  }else{
    document.getElementById("phoneErrorMessage").innerHTML ="";
}
  if (inpTag4.value === "") {
    document.getElementById("emailMessageError").innerHTML =
      "''Input your Email!!!";
  }else{
    document.getElementById("emailMessageError").innerHTML ="";
}
  if (inpTag5.value === "") {
    document.getElementById("passwordMessageEror").innerHTML =
      "''Input your Password!!!";
    }else{
      document.getElementById("passwordMessageEror").innerHTML ="";
      button.innerHTML = "Submitted";
      alert("your details has been submitted")
    }
  });

