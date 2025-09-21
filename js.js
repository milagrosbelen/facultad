let Empleados = [];

//conseguir los botones , y la tabla

const Agregar = document.getElementById("agregar");
const total = document.getElementById("btncalcular");
const tabla = document.querySelector("#tabla tbody");
const resultado = document.getElementById("resultado");

//funcion para agregar a los empleados
agregar.addEventListener("click", ()=>{
    const nombre = document.getElementById("nombre").value;
    const departamento = document.getElementById("departamento").value;
    const salario = document.getElementById("salario").value;

    if(nombre === "" || departamento === "" || salario === ""  ){
        alert("Por favor, rellene todos los campos")
    }else{
        Empleados.push({nombre, departamento ,salario : Number(salario)});
        mostrarTablaEmpleado();
        document.getElementById("form").reset();
    }
})


//funcion para mostrar empleados en la tabla
function mostrarTablaEmpleado (){
     tabla.innerHTML = "" ;
     Empleados.forEach(Emp =>{
        let fila = `
                    <tr>
                        <td>${Emp.nombre}</td>
                        <td>${Emp.departamento}</td>
                        <td>${Emp.salario}</td>
                    </tr>
                    `;
                    tabla.innerHTML +=fila;
     });
}

//calculamos el total del salario
total.addEventListener("click",()=>{
    let total= Empleados.reduce((acum,Empleados)=>acum + Empleados.salario, 0);
    resultado.textContent= `El total de salario es de: $${total}`
})

