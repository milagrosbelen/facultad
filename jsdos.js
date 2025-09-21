let empleados = [];

const agregar = document.getElementById("agregar");
const calcular = document.getElementById("btncalcular");
const tabla = document.querySelector("#tabla tbody");
const resultado = document.getElementById("resultado");


//funcion para agregar a la tabla
agregar.addEventListener("click", ()=>{
    const nombre = document.getElementById("nombre").value
    const departamento = document.getElementById("departamento").value
    const fechNacim = document.getElementById("nacimiento").value

    //estructura condicional

    if(nombre === ""|| departamento === ""|| fechNacim === ""){
        alert("Ingresa todos los campos")
    }else{
        empleados.push({nombre,departamento,fechNacim:new Date(fechNacim)})
        agregarEmpleadosTabla()
        document.getElementById("form").reset();
    }

})



// Función para calcular edad desde una fecha
function obtenerEdad(fechNacim) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechNacim.getFullYear();
    const mes = hoy.getMonth() - fechNacim.getMonth();

    // Si todavía no cumplió años este año, restamos 1
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechNacim.getDate())) {
        edad--;
    }
    return edad;
}


//funcion agregar empleados a la tabla

function agregarEmpleadosTabla(){
    tabla.innerHTML="";
    empleados.forEach(emp =>{
        let edad = obtenerEdad(emp.fechNacim);  
        let fila = `
                    <tr>
                        <td>${emp.nombre}</td>
                        <td>${emp.departamento}</td>
                        <td>${emp.fechNacim.toLocaleDateString("es-Ar")}</td>
                        <td>${edad} Años</td>
                    </tr>
                    `;
                    tabla.innerHTML += fila;
    })
}


//funcion para calcular el promedio de edades :

function calcularEdades(){
    if(empleados.length === 0){
        resultado.innerHTML = "No hay empleados cargados"
        return;
    }

    let suma = 0;

    empleados.forEach(emp =>{
        suma += obtenerEdad(emp.fechNacim);
    })
    let promedio = (suma / empleados.length).toFixed(2)
    resultado.innerHTML =` El promedio de edad es de: ${promedio} años`
}

calcular.addEventListener("click", ()=>{
    calcularEdades()
    calcular.style.backgroundColor="pink"
    agregar.style.backgroundColor="pink"
})