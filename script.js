function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return { name, email, city, zipCode, status };
}

function isNumber(number) {
  return !isNaN(number);
}

function checkboxIsChecked() {
  return handleGetFormData().status;
}

function validateFormData() {
  return (
    handleGetFormData().name !== "" &&
    handleGetFormData().city !== "" &&
    handleGetFormData().email !== "" &&
    isNumber(handleGetFormData().zipCode) &&
    checkboxIsChecked()
  );
}

function submit(event) {
  event.preventDefault();
  const data = handleGetFormData();
  const warning = document.getElementById("warning");
  if (validateFormData() === false) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
    alert(
      `Hi ${
        handleGetFormData().name
      }😎, Terima kasih yaa, data kamu akan diproses🤩`
    );
  }
}

let buttonSend = document.getElementById("submit-form");
buttonSend.addEventListener("click", submit);
