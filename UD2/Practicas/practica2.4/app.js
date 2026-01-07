document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("formMatricula");

  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const email = document.getElementById("email");
  const ciclo = document.getElementById("ciclo");
  const acepto = document.getElementById("acepto");

  const msgEdad = document.getElementById("msgEdad");
  const msgEmail = document.getElementById("msgEmail");
  const msgCiclo = document.getElementById("msgCiclo");
  const msgMods = document.getElementById("msgMods");
  const msgAcepto = document.getElementById("msgAcepto");

  const btnReload = document.getElementById("btnReload");

  
  edad.addEventListener("input", () => {
    const valor = Number(edad.value);

    if (isNaN(valor) || valor < 16 || valor > 60) {
      edad.classList.add("campo-error");
      edad.classList.remove("campo-ok");
      msgEdad.textContent = "Edad válida entre 16 y 60 años";
      msgEdad.className = "msg msg-error";
    } else {
      edad.classList.remove("campo-error");
      edad.classList.add("campo-ok");
      msgEdad.textContent = "Edad correcta";
      msgEdad.className = "msg msg-ok";
    }
  });

  
  email.addEventListener("input", () => {
    const valor = email.value.trim();
    const esYahoo = valor.toLowerCase().includes("@yahoo.");

    if (
      valor.length < 6 ||
      !valor.includes("@") ||
      !valor.includes(".") ||
      esYahoo
    ) {
      email.classList.add("campo-error");
      email.classList.remove("campo-ok");
      msgEmail.textContent =
        "Email inválido (no yahoo, mínimo 6 caracteres)";
      msgEmail.className = "msg msg-error";
    } else {
      email.classList.remove("campo-error");
      email.classList.add("campo-ok");
      msgEmail.textContent = "Email correcto";
      msgEmail.className = "msg msg-ok";
    }
  });

  
  ciclo.addEventListener("change", () => {
    if (ciclo.value === "") {
      msgCiclo.textContent = "Debes seleccionar un ciclo";
      msgCiclo.className = "msg msg-error";
    } else {
      msgCiclo.textContent = "Ciclo seleccionado";
      msgCiclo.className = "msg msg-ok";
    }
  });

  
  btnReload.addEventListener("click", () => {
    location.reload();
  });

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errores = [];

  
    const valorEdad = Number(edad.value);
    if (isNaN(valorEdad) || valorEdad < 16 || valorEdad > 60) {
      errores.push("Edad");
    }


    const valorEmail = email.value.trim();
    if (
      valorEmail.length < 6 ||
      !valorEmail.includes("@") ||
      !valorEmail.includes(".") ||
      valorEmail.toLowerCase().includes("@yahoo.")
    ) {
      errores.push("Email");
    }


    if (ciclo.value === "") {
      errores.push("Ciclo");
    }


    const mods = document.getElementsByName("modulos");
    let cont = 0;
    let seleccionados = [];

    for (let i = 0; i < mods.length; i++) {
      if (mods[i].checked) {
        cont++;
        seleccionados.push(mods[i].value);
      }
    }

    if (cont < 2) {
      errores.push("Módulos");
      msgMods.textContent = "Selecciona al menos 2 módulos";
      msgMods.className = "msg msg-error";
    } else {
      msgMods.textContent = "";
    }


    if (!acepto.checked) {
      errores.push("Aceptar condiciones");
      msgAcepto.textContent = "Debes aceptar las condiciones";
      msgAcepto.className = "msg msg-error";
    } else {
      msgAcepto.textContent = "";
    }


    if (errores.length > 0) {
      alert("Campos no válidos:\n- " + errores.join("\n- "));
      return;
    }

    document.body.innerHTML = `
      <main class="card">
        <h1>Resumen de matrícula</h1>
        <p><strong>Nombre:</strong> ${nombre.value}</p>
        <p><strong>Edad:</strong> ${edad.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Ciclo:</strong> ${ciclo.value}</p>
        <p><strong>Módulos:</strong> ${seleccionados.join(", ")}</p>
        <p><strong>Observaciones:</strong> ${document.getElementById("obs").value}</p>
      </main>
    `;
  });
});
