document.addEventListener("DOMContentLoaded", () => {
  const style1Button = document.getElementById("style1Button");
  const highContrastButton = document.getElementById("highContrastButton");
  const birthDateInput = document.getElementById("birthDate");
  const mensajeAltoContraste = document.getElementById("mensajeAltoContraste");
  const body = document.body;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minAdultAgeDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  birthDateInput.max = today.toISOString().split("T")[0];
  birthDateInput.min = "1900-01-01";

  birthDateInput.addEventListener("change", function () {
    const inputDate = new Date(this.value);
    if (inputDate > minAdultAgeDate) {
      alert("Debes ser mayor a 18 años");
      this.value = "";
    }
  });

  //aca enos encargamos delevent click delbt para hacer el switch entre estilos
  highContrastButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      mensajeAltoContraste.textContent = "Estilo Colorido";
    } else {
      mensajeAltoContraste.textContent = "Estilo de Alto Contraste";
    }
  });
});
