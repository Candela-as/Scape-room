//parte del carrucel

const modal3 = document.getElementById('modal3');
                const modalTitle3 = document.getElementById('modal-title3');
                const modalText3 = document.getElementById('modal-text3');

                const modalData3 = [
                  { title: "Scream", text: "¡Prepárate para Grítar! Duración: 60 minutos      .Jugadores: De 2 a 7 .   Dificultad: Media." },
                  { title: "Scream", text: "¡Prepárate para Grítar! Tu Noche de Horrores Comienza Aquí.¿Crees que conoces las reglas? Piensa otra vez.Atrapado en la infame casa de la familia Prescott, Ghostface ha vuelto y esta vez, ¡tú eres el objetivo! En este escape room, deberás desentrañar pistas, descifrar al asesino y, lo más importante, ¡mantenerte con vida! Pero cuidado, Ghostface siempre está un paso adelante.                Duración: 60 minutos      .Jugadores: De 2 a 7 .   Dificultad: Media." },
                  { title: "Once y cinco", text: "El reloj marca las once y cinco y Hawkins está en peligro. Las luces parpadean, las voces susurran y una energía extraña lo inunda todo. Estás en el laboratorio de Hawkins, donde los experimentos abrieron el portal.Tu misión es clara: cerrar el portal antes de que el Upside Down nos invada. Deberás descifrar mensajes, activar dispositivos y despertar tus propias habilidades. ¡El Demogorgon acecha!                Duración: 60 .   Jugadores: De 3 a 7 Dificultad: Alta " },
                  { title: "Katnis, y Peeta?", text: "El silbato sonará. En un búnker que simula el laberinto de los 76° Juegos del Hambre, tu equipo deberá unir fuerzas. Como Katniss y Peeta, enfrentarán enigmas que desafiarán su lealtad y astucia para sobrevivir al Capitolio. ¿Lograrán salir juntos o el hambre los dividirá? Duración: 80 minutos.Jugadores: De 2 a 7 tributos.Dificultad: Alta."},
                  { title: "Poltergeist", text: "Las estáticas en la TV no son casualidad. Estás en la casa Freeling, donde las presencias han reclamado lo suyo. Los objetos se mueven, las voces susurran y Carol Anne ha desaparecido. Tu misión: desentrañar los secretos de esta casa maldita, comunicarte con los espíritus y liberar a los vivos. ¿Listo para enfrentar tus pesadillas?       Duración: 75 minutos. Jugadores: De 2 a 6 . Dificultad: Extrema." },
                  { title: "Si yo llamo, quien atiende?", text: "Estás atrapado en un lugar olvidado, y la única salida parece ser esa puerta enigmática. Escuchas algo del otro lado, una presencia que te llama golpeando suavemente. No es un teléfono, es una invitación a un lugar desconocido, o quizás, una advertencia. Deberás golpear, descifrar las respuestas y manipular el entorno para entender quién o qué te llama desde el umbral. Pero cada golpe te adentra más en la oscuridad, y la entidad del otro lado parece saberlo todo sobre ti. ¿Te atreves a responder al llamado?        Duración: 40 minutos. Jugadores: De 2 a 7 Dificultad: Baja-Media " },
                  { title: "¿Quien fue?", text: "La escena del crimen es un rompecabezas. Tu equipo de detectives debe sumergirse en un caso sin resolver, analizando pruebas, descifrando testimonios y conectando los puntos que nadie más vio. Cada objeto guarda un secreto. ¿Tienen el ingenio para atar los cabos sueltos y desenmascarar al criminal?         Duración: 60 minutos.Jugadores: De 2 a 7. Dificultad: Media" },
                  { title: "Sentencia de Defunción", text: "La morgue está oscura, y tu vida pende de un hilo. Eres la víctima de un asesino en serie que te ha encerrado, dejando acertijos ligados a sus crímenes. Deberás descifrar sus retorcidas pistas y explorar cada rincón para escapar antes de que se cumpla tu sentencia. ¿Podrás reescribir tu destino y huir de la muerte inminente? Duración: 60 minutos.Jugadores: De 2 a 7.Dificultad: Alta." }
                ];

                function openModal3(index) {
                  modalTitle3.textContent = modalData3[index].title;
                  modalText3.textContent = modalData3[index].text;
                  modal3.style.display = 'flex';
                }

                function closeModal3() {
                  modal3.style.display = 'none';
                }

                window.addEventListener('click', e => {
                  if (e.target === modal3) closeModal3();
                });

 //json y registro       

 document.getElementById("btn-registrarme").addEventListener("click", () => {
    const form = document.getElementById("form-registro");
    form.style.display = form.style.display === "none" ? "block" : "none";
});

// Función de validación del formulario
function validarFormulario() {
    let formIsValid = true; 

    document.querySelectorAll('.error-message').forEach(el => el.innerHTML = '');

    // Validar Nombre
    const nomInput = document.getElementById("NOM");
    if (/\d/.test(nomInput.value)) {
        document.getElementById("error-NOM").innerHTML = "El nombre no puede contener números.";
        formIsValid = false;
    } else if (nomInput.value.trim().length < 3) {
        document.getElementById("error-NOM").innerHTML = "El nombre debe tener al menos 3 caracteres.";
        formIsValid = false;
    }

    // Número de tel
    const numInput = document.getElementById("NUM");
    // Tu patrón de teléfono parece ser para Argentina. Aquí se valida que tenga un valor y el formato.
    // La validación "pattern" en HTML es suficiente para el formato. Aquí solo revisamos si está vacío o no es un número válido.
    if (!numInput.checkValidity() || numInput.value.trim().length < 7) { // Mínimo 7 dígitos para un número local, puedes ajustar
        document.getElementById("error-NUM").innerHTML = "Por favor, ingresa un número de teléfono válido (mínimo 7 dígitos).";
        formIsValid = false;
    }

    // Validar Fecha
    const feInput = document.getElementById("FE");
    if (!feInput.checkValidity()) {
        document.getElementById("error-FE").innerHTML = "Selecciona una fecha válida dentro del rango especificado.";
        formIsValid = false;
    }

    // Validar Cant de persona
    const cantInput = document.getElementById("CANT");
    if (!cantInput.checkValidity()) {
        document.getElementById("error-CANT").innerHTML = "La cantidad de personas debe ser entre 2 y 7.";
        formIsValid = false;
    }

    // Validar Horario
    const horaSelect = document.getElementById("hora");
    if (!horaSelect.value) { // Si el primer option es vacío y no se selecciona nada
        
    }

    // Validar Jueg, solo verificamos que algo esté seleccionado si es necesario
    const juegoSelect = document.getElementById("juego");
    if (!juegoSelect.value) { 
    }

    // Validar Método pago
    const opcionesSelect = document.getElementById("opciones");
    if (!opcionesSelect.value) { 
    }


    //  enviar el formulario 
    if (formIsValid) {
        alert("¡Formulario válido! Enviando datos...");
        guardando(); // <--- ¡AQUÍ ES DONDE LLAMAS A LA FUNCIÓN
    } else {
        alert("Por favor, corrige los errores en el formulario.");
    }
}

function guardando() {
    const nomInput = document.getElementById("NOM");
    const numInput = document.getElementById("NUM");
    const feInput = document.getElementById("FE");
    const horaSelect = document.getElementById("hora"); 
    const cantInput = document.getElementById("CANT");
    const juegoSelect = document.getElementById("juego");
    const opcionesSelect = document.getElementById("opciones"); 

    // Recopila los datos del formulario actual en objeto
    const datosFormularioActual = {
        nombre: nomInput.value.trim(),
        telefono: numInput.value.trim(),
        fecha: feInput.value,
        hora: horaSelect.value, 
        cantidadPersonas: parseInt(cantInput.value, 10), 
        juego: juegoSelect.options[juegoSelect.selectedIndex].text, 
        metodoPago: opcionesSelect.value
    };

    // --- Lógica para almacenar datos  ---

    
    let reservasExistentes = JSON.parse(localStorage.getItem('reservas_registradas')) || [];

    
    reservasExistentes.push(datosFormularioActual);

    //  Guarda el array actualizado de nuevo en localStorage, convertido a una cadena JSON.
    //    El 'null, 2' es para que el JSON se guarde con formato legible .
    localStorage.setItem('reservas_registradas', JSON.stringify(reservasExistentes, null, 2));

    console.log("Datos del formulario guardados en localStorage.");
    console.log("Estado actual de 'reservas_registradas' en localStorage:", JSON.stringify(reservasExistentes, null, 2));

    
}

          // actualizar automáticamente el año d copyrit
          document.getElementById('current-year').textContent = new Date().getFullYear();

 

