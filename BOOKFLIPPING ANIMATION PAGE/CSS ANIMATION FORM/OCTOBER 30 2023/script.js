const button = document.querySelector(".btn")
const inpTag = document.querySelector(".inp_name")
const inpTag2 = document.querySelector(".inp_email")
const inpTag3 = document.querySelector(".inp_password")
const resultTag = document.querySelector(".result")
const takeEmail = document.querySelector(".take_email")
const form = document.querySelector(".label")
const container = document.querySelector(".container")

button.addEventListener("click", function(e){
    e.preventDefault();
    button.innerHTML = "Submitted";
    

    if (inpTag.value === "") {
        // document.getElementById("nameErrorMessage").innerHTML="Input your Name!!!";
                alert("Input your Name!!!");
            } else if (inpTag2.value === "") {
                alert("Input your Email!!!");
            }
             else if (inpTag3.value === "") {
                alert("Input your Password!!!");
            }

            else {
                takeEmail.innerHTML = inpTag2.value;
                takeEmail.innerHTML = `Your Email Has Been Accepted`;
                resultTag.innerHTML = inpTag3.value;
                resultTag.innerHTML = `Your Password is Valid`;
                resultTag.innerHTML = inpTag.value;
                resultTag.innerHTML = `Welcome back ${inpTag.value}`;
                form.classList.add("hide");
                container.classList.add("hide");
                        console.log(inpTag.value);
                        console.log(inpTag2.value);
                        console.log(inpTag3.value);
                        inpTag.value = "";
                        inpTag2.value = "";
                        inpTag3.value = "";
                    }

});
