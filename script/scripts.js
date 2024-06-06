function validarmail() {
    email = document.getElementById('email').value;
    emailError = document.getElementById('mailError');
    if (email === '') {
        emailError.textContent = '¡Correo Obligatorio!. Asegurese de rellenar el correo.';
        return false;
    } else if (!email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Su correo no es valido, asegurese de colocar bien los simbolos (@) y (.).';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}


let usuarios = [];



function agregarUsuario(usuario) {
    usuarios.push(usuario);
}


function validarUser() {
    var userInput = document.getElementById('user').value;
    var userError = document.getElementById('usererror');
    userError.textContent = '';

    if (userInput.trim() === '') {
        userError.textContent = 'Debes tener un nombre de usuario, de otra forma no sabriamos como dirigirnos a ti.';
        return false;
    }
    return true;
}



function validarcontraseña() {
    password = document.getElementById('pass').value;
    passwordError = document.getElementById('PassError');
    hasLetter = /[a-zA-Z]/.test(password);
    hasDigit = /[0-9]/.test(password);
    if (password === '') {
        passwordError.textContent = '!Hey¡, no se olvide de crear su contraseña :3.';
        return false;
    } else if (password.length < 3 || password.length > 6) {
        passwordError.textContent = 'Su contraseña debe contener un mínimo de 3 y un máximo de 6 caracteres.';
        return false;
    } else if (!hasLetter || !hasDigit) {
        passwordError.textContent = 'Su contraseña debe contener al menos una letra y un dígito para mayor seguridad.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}



function validarconfirmacioncontraseña() {
    password = document.getElementById('pass').value;
    confirmPassword = document.getElementById('confirmarPass').value;
    confirmPasswordError = document.getElementById('CpassError');
    if (confirmPassword === '') {
        confirmPasswordError.textContent = '!No te olvides de confirmar tu contraseña!, no vaya a ser que la colocaste mal.';
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = '¡Opa!, las contraseñas no son iguales, intentalo de nuevo(puedes revisar la anterior por si te equivocaste ahi :D ).';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}



function validardireccion() {
    address = document.getElementById('direccion').value;
    addressError = document.getElementById('direccionError');
    if (address === '') {
        addressError.textContent = 'La dirección y el codigo postal son campos obligatorios.';
        return false;
    } else {
        addressError.textContent = '';
        return true;
    }
}



function validardireccionS() {
    addressS = document.getElementById('direccionS').value;
    addressError = document.getElementById('direccionSError');
    if (addressS === '') {
        addressError.textContent = 'Acuerdate que tanto el codigo postal como la dirección son obligatorios ;) .';
        return false;
    } else {
        addressError.textContent = '';
        return true;
    }
}



function validarcomuna() {
    const comuna = document.getElementById('comuna').value;
    const comunaError = document.getElementById('comunaError');
    if (comuna === "default") {
        comunaError.textContent = 'Asegurate de seleccionar una de las comunas que aparecen en el listado (aguante Pichirropulli, no es comuna pero es mi pueblo).';
        return false;
    } else {
        comunaError.textContent = '';
        return true;
    }
}



function validarnumero() {
    phone = document.getElementById('numero').value;
    phoneError = document.getElementById('numeroError');
    if (phone === '') {
        phoneError.textContent = 'El número de telefono tambien es obligatorio, sino no te podriamos contactar.';
        return false;
    } else if (isNaN(phone)) {
        phoneError.textContent = 'El número de teléfono es solo de numeros, nada de simbolos, letras ni espacios.';
        return false;
    } else if (phone.length < 8) {
        phoneError.textContent = 'El número de teléfono debe tener al menos 8 dígitos.';
        return false;
    } else {
        phoneError.textContent = '';
        return true;
    }
}



function validarsitio() {
    website = document.getElementById('website').value;
    websiteError = document.getElementById('WebError');
    if (website !== '' && (!website.startsWith('http://') && !website.startsWith('https://'))) {
        websiteError.textContent = 'Asegurate de haber escrito bien el url de la pagina, o al menos el "http" ';
        return false;
    } else {
        websiteError.textContent = '';
        return true;
    }
}



function añadirHobbies() {
    hobbyInput = document.getElementById('hobbyInput');
    hobbyList = document.getElementById('hobbyList');
    if (hobbyInput.value.trim() !== '') {
        li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = hobbyInput.value;
        removeButton = document.createElement('button');
        removeButton.className = 'btn btn-outline-danger btn-sm';
        removeButton.textContent = 'X';
        removeButton.onclick = function() {
            hobbyList.removeChild(li);
        };
        li.appendChild(removeButton);
        hobbyList.appendChild(li);
        hobbyInput.value = '';
    }
}



function validarHobbies() {
    const hobbyList = document.getElementById('hobbyList').children;
    const hobbiesError = document.getElementById('hobbiesError');
    if (hobbyList.length < 2) {
        hobbiesError.textContent = 'Debe ingresar al menos dos aficiones.';
        return false;
    } else {
        hobbiesError.textContent = '';
        return true;
    }
}



document.getElementById('container').addEventListener('submit', function(event) {
    event.preventDefault();
    isEmailValid = validarmail();
    isPasswordValid = validarcontraseña();
    isConfirmPasswordValid = validarconfirmacioncontraseña();
    isAddressValid = validardireccion();
    isAddressValidD = validardireccionS();
    isComunaValid = validarcomuna();
    isPhoneValid = validarnumero();
    isWebsiteValid = validarsitio();
    isHobbiesValid = validarHobbies();
    isUserValid = validarUser();

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid && isAddressValid && isAddressValidD && isComunaValid && isPhoneValid && isWebsiteValid && isHobbiesValid && isUserValid) {
        let userInput = document.getElementById('user').value;
        let emailInput = document.getElementById('email').value;
        let passwordInput = document.getElementById('pass').value;
        let confirmPasswordInput = document.getElementById('confirmarPass').value;
        let addressInput = document.getElementById('direccion').value;
        let addressSInput = document.getElementById('direccionS').value;
        let comunaInput = document.getElementById('comuna').value;
        let phoneInput = document.getElementById('numero').value;
        let websiteInput = document.getElementById('website').value;

        let usuario = {
            nombreUsuario: userInput,
            correoElectronico: emailInput,
            contraseña: passwordInput,
            confirmarContraseña: confirmPasswordInput,
            dirección: addressInput,
            direcciónS: addressSInput,
            comuna: comunaInput,
            númeroTeléfono: phoneInput,
            páginaWeb: websiteInput
        };

        agregarUsuario(usuario);
        window.location.href = "exito.html"
    } else {
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.textContent = 'Revise que los campos estén correctos';
        mensajeError.style.display = 'block';
        setTimeout(function() {
            mensajeError.style.display = 'none';
        }, 3000);
    }
});

