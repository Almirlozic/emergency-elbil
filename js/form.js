// Summary kode
document.querySelector("#sum").style.display = "none";
document.querySelector("#webform").reset();
const submit = document.querySelector("#indsend-btn");
submit.addEventListener("click", submitForm);
document.querySelector("#reset-btn").addEventListener("click", reset);

// function summary
function submitForm(){
    document.querySelector("#sum").style.display = "block";
    document.querySelector("#fornavn").textContent = document.querySelector("#f-name").value;
    document.querySelector("#efternavn").textContent = document.querySelector("#l-name").value;
    document.querySelector("#mail").textContent = document.querySelector("#email").value;
    document.querySelector("#model").textContent = document.querySelector("#biler").value;
    document.querySelector("#dato").textContent = document.querySelector("#date").value;
    document.querySelector("#time").textContent = document.querySelector("#tid").value;
    const checkboxes = document.querySelectorAll('input[name="check"]:checked');
    document.querySelector("#tjek").textContent ="";
    console.log(checkboxes)
    checkboxes.forEach((elem) => document.querySelector("#tjek").textContent += elem.value);


}


//reset funktion
function reset() {
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.display = "none";
  }



