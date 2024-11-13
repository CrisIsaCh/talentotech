function validarFormulario(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var fecha = document.getElementById("fecha");
    var tipo = document.getElementById("tipoevento");
    var menu = document.getElementById("menu");
    var provincia = document.getElementById("provincia");
    var mensaje=document.getElementById('mensaje');

    console.log("entro");

    if (nombre.value.trim() === "") {
        // notificaciones("error","nombre");      

        alert('Ingrese Nombre')
        nombre.autocomplete = "off";
        nombre.style.border = "3px red solid";
        nombre.addEventListener("focus", () => {
            tipoEvento = "focus";
            verificarEvento(nombre, tipoEvento);
        });

        nombre.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(nombre, tipoEvento);

        })
        return false
    }
    var nombreTest = /^[a-zA-Z]+$/.test(nombre.value.trim());
    if (nombreTest === false) {
        // notificaciones("error","un nombre con letras del alfabeto.")
        alert(' Ingrese un Nombre con letras del alfabeto')
        nombre.autocomplete = "off";
        nombre.style.border = "3px red solid";
        nombre.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(nombre, tipoEvento);
        });

        nombre.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(nombre, tipoEvento);

        })
        return false
    }
    /*************apellido************************** */
    if (apellido.value.trim() === "") {
        // notificaciones("error","nombre");      

        alert('Ingrese Apellido')
        apellido.autocomplete = "off";
        apellido.style.border = "3px red solid";
        apellido.addEventListener("focus", () => {
            tipoEvento = "focus";
            verificarEvento(apellido, tipoEvento);
        });

        apellido.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(apellido, tipoEvento);

        })
        return false
    }
    var apellidoTest = /^[a-zA-Z]+$/.test(apellido.value.trim());
    if (apellidoTest === false) {
        // notificaciones("error","un nombre con letras del alfabeto.")
        alert('Ingrese Apellido con letras del alfabeto')
        apellido.autocomplete = "off";
        apellido.style.border = "3px red solid";
        apellido.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(apellido, tipoEvento);
        });

        apellido.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(apellido, tipoEvento);

        })
        return false
    }
/*****************email*************** */
    if (email.value.trim() === "") {
        // notificaciones("error","email.")
        alert('Ingrese Email')
        email.autocomplete = "off";
        email.style.border = "3px red solid";
        email.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(email, tipoEvento);
        });

        email.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(email, tipoEvento);

        })
        return false

    }
    var emailTest = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value.trim());

    if (emailTest === false) {
        // notificaciones("error","email valido.");
        alert('Ingrese Email Valido')
        email.autocomplete = "off";
        email.style.border = "3px red solid";
        email.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(email, tipoEvento);
        });

        email.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(email, tipoEvento);

        })
        return false

    }
    /***************telefono************************** */
    if (telefono.value.trim() === "") {
        // notificaciones("error","nombre");      

        alert('Ingrese Telefono')
        telefono.autocomplete = "off";
        telefono.style.border = "3px red solid";
        telefono.addEventListener("focus", () => {
            tipoEvento = "focus";
            verificarEvento(telefono, tipoEvento);
        });

        telefono.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(telefono, tipoEvento);

        })
        return false
    }

    /********************fecha*************************** */

    if (fecha.value.trim() === "") {
        // notificaciones("error","nombre");      

        alert('Ingrese Fecha del Evento')
        fecha.autocomplete = "off";
        fecha.style.border = "3px red solid";
        fecha.addEventListener("focus", () => {
            tipoEvento = "focus";
            verificarEvento(fecha, tipoEvento);
        });

        fecha.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(fecha, tipoEvento);

        })
        return false
    }
    /****************tipo evento************************************* */
    if (tipo.value.trim() === "") {
        // notificaciones("error","nombre");      

        alert('Ingrese el Tipo de Evento')
        tipo.autocomplete = "off";
        tipo.style.border = "3px red solid";
        tipo.addEventListener("focus", () => {
            tipoEvento = "focus";
            verificarEvento(tipo, tipoEvento);
        });

        tipo.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(tipo, tipoEvento);

        })
        return false
    }
/***********************menu********************************* */

if (menu.value.trim() === "") {
    // notificaciones("error","nombre");      

    alert('Ingrese Menu')
    menu.autocomplete = "off";
    menu.style.border = "3px red solid";
    menu.addEventListener("focus", () => {
        tipoEvento = "focus";
        verificarEvento(menu, tipoEvento);
    });

    menu.addEventListener('blur', () => {
        tipoEvento = "blur";
        verificarEvento(menu, tipoEvento);

    })
    return false
}

/*********************provincia***************************** */
if (provincia.value.trim() === "") {
    // notificaciones("error","nombre");      

    alert('Ingrese Provincia')
    provincia.autocomplete = "off";
    provincia.style.border = "3px red solid";
    provincia.addEventListener("focus", () => {
        tipoEvento = "focus";
        verificarEvento(provincia, tipoEvento);
    });

    provincia.addEventListener('blur', () => {
        tipoEvento = "blur";
        verificarEvento(provincia, tipoEvento);

    })
    return false
}
    /*****************mensaje********************** */
    if (mensaje.value.trim() === "") {
        // notificaciones("error","asunto.")
        alert('Ingrese Mensaje')
        mensaje.autocomplete = "off";
        mensaje.style.border = "3px red solid";
        mensaje.addEventListener("focus", () => {


            tipoEvento = "focus";
            verificarEvento(mensaje, tipoEvento);
        });

        mensaje.addEventListener('blur', () => {
            tipoEvento = "blur";
            verificarEvento(mensaje, tipoEvento);

        })
        return false
    }


}
nombre.autocomplete = "off";
email.autocomplete = "off";

function verificarEvento(input, event) {

    if (event === "focus") {
        input.style.border = "none";
        input.style.borderBottom = "#ff5e00 4px solid";

    } else if (event === "blur") {
        input.style.borderBottom = "#bfb4b4 1px solid"
    }





}