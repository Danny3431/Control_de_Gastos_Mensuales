let listanomGastos = [];
let listaValGastos = [];
let listaDescGastos = []; // Nueva lista para las descripciones de los gastos

// Esta función se invoca cuando el usuario da clic en "Agregar gastos"
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    // Verificar si el valor ingresado es un número válido
    if (nombreGasto === '' || isNaN(valorGasto) || valorGasto === '') {
        alert('Por favor, ingresa un nombre y un valor numérico válido para el gasto.');
        return;
    }

    // Alertar si el gasto es mayor a 150 dólares
    if (Number(valorGasto) > 150) {
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = `El gasto de ${nombreGasto} es mayor a $150 USD.`;
        mensaje.style.color = 'red';
    } else {
        // Limpiar el mensaje si el gasto no supera los 150
        document.getElementById('mensaje').textContent = '';
    }

    listanomGastos.push(nombreGasto);
    listaValGastos.push(Number(valorGasto)); // Almacena el valor como número
    listaDescGastos.push(descripcionGasto); // Almacena la descripción

    actualizarListGastos();
}

function actualizarListGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    

    listanomGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValGastos[posicion]);
        const descripcion = listaDescGastos[posicion]; // Obtener la descripción correspondiente

        htmlLista += `<li>
            ${elemento} - USD ${valorGasto.toFixed(2)} 
            <br><small>${descripcion}</small>
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            <button onclick="modificarGasto(${posicion});">Modificar</button> <!-- Botón para modificar -->
        </li>`;

        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();


    
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = ''; // Limpiar la descripción
}

function eliminarGasto(posicion) {
    listanomGastos.splice(posicion, 1);
    listaValGastos.splice(posicion, 1);
    listaDescGastos.splice(posicion, 1); // Eliminar también la descripción
    actualizarListGastos();
}

function modificarGasto(posicion) {
    // Llenar los campos con el gasto actual para poder modificarlo
    document.getElementById('nombreGasto').value = listanomGastos[posicion];
    document.getElementById('valorGasto').value = listaValGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescGastos[posicion];

    // Eliminar el gasto que se va a modificar para volver a agregarlo
    eliminarGasto(posicion);
}


function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = ''; // Limpiar la descripción
}

function eliminarGasto(posicion) {
    listanomGastos.splice(posicion, 1);
    listaValGastos.splice(posicion, 1);
    actualizarListGastos();
}
