export function newContent() {
  
    // Pedimos por prompt los datos de la persona:

let  nombre = prompt("Ingrese su nombre")
while(nombre === ""){
    nombre = prompt("ERROR. Ingrese su nombre")
}
  let  apellidos = prompt("Ingrese sus apellido")
 while (apellidos === ""){
    apellidos = prompt("ERROR. Ingrese sus apellidos")
}

let diaNac = parseInt(prompt("Introduzca su día de nacimiento"))
while(isNaN(diaNac) || diaNac === "" || diaNac > 31 || diaNac <= 0){
    diaNac = parseInt(prompt("Introduzca un dia valido"))
}

let mesNac = parseInt(prompt("Introduzca su mes de nacimiento"))
while(isNaN(mesNac) || mesNac === "" || mesNac > 12 || mesNac <= 0){
    mesNac = parseInt(prompt("Introduzca un mes valido"))
}

let anoNac = parseInt(prompt("Introduzca su año de nacimiento"))
while(isNaN(anoNac) || anoNac === "" || anoNac <= 0){
    anoNac = parseInt(prompt("Introduzca un año valido"))
}

 // Concatenamos el nombre con el apellido
const nameSurname = nombre.concat(' ', apellidos)

// Filtramos las letras 'A'

let primeraA = nameSurname.toUpperCase().indexOf('A')
let ultimaA = nameSurname.toUpperCase().lastIndexOf('A');
let nombreSinTresPrimeras = nameSurname.slice(3);

// Calculo de la edad

function calculateAge(anoNac, mesNac, diaNac){

    const today = new Date()
    const actualDay = parseInt(today.getDate())
    const actualMonth = parseInt(today.getMonth() + 1)
    const actualYear = parseInt(today.getFullYear())

    let age = actualYear - anoNac

    // Si aún no ha cumplido años le restamos un año

    if (actualMonth < mesNac|| (actualMonth === mesNac && actualDay < diaNac)){

        age--
    }
    return age
}

//Función para saber la estación del año del día de nacimiento
function estacion(diaNac, mesNac){
    // convertimos a numero entero el valor introducido

    let mesEL = mesNac.toString()

    // si introducimos el dia sin cero inicial para valores inferiores a 10 se le añade 0 al inicio

    if(diaNac <10) diaNac = "0" + diaNac
    let diaEL = diaNac.toString()

    //Juntamos el mes y el año

   let  mesano = mesEL.concat(diaEL)

    // El resultado de esta concatenacion se pasa a numero entero

    let estac = parseInt(mesano)
    
    if (estac > 0){
        // desde el 21 de marzo (321) hasta el 20 de junio (620) -> Primavera
        if(estac >= 321 && estac <=620){
            return "primavera"
        }else if(estac>= 621 && estac <= 922){
            // desde el 21 de junio (621) al 20 de septiembre (920) es verano
            return "verano"
        }else if(estac >= 923 && estac <= 1220){
            // desde el 21 de septiembre al (921) al 20 de Diciembre (1220)
            return "otoño"
        }else{
            return "invierno"
        }
    } else {
        return null
    }
}

// Función para calcular el coseno
const coseno = Math.cos(180 * Math.PI / 180) 

// Función para encontrar el número mayor

const nums = [34, 67, 23, 75, 35, 19]

function findBiggestNum(nums){
    let bigNum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > bigNum){
            bigNum = nums[i]
        }      
    }
    return bigNum
}

const randomNum = Math.floor(Math.random() * 100 +1)



    document.open();
    document.write("<h1>PRÁCTICA 3 - DWEC</h1>");
    document.write("<hr>")
        document.write(`Buenos días, <strong>${nombre}</strong> <br>`)
        document.write(`Tu nombre tiene <strong>${nameSurname.length}</strong> caracteres, incluidos espacios.<br>`)
        document.write(`La primera letra A de tu nombre está en la posición: <strong>${primeraA}</strong> <br>`)
        document.write(`La ultima letra A de tu nombre está en la posición: <strong>${ultimaA}</strong> <br>`)
        document.write(`Tu nombre menos las 3 primeras letras es: <strong>${nombreSinTresPrimeras}</strong> <br>`)
        document.write(`Tu nombre todo en mayúsculas es: <strong>${nameSurname.toUpperCase()}</strong> <br>`)
        document.write(`Tu <strong>edad</strong> es de: <strong>${calculateAge(anoNac, mesNac, diaNac)}</strong> <br>`)
        document.write(`Naciste un feliz dia de <strong>${estacion(diaNac, mesNac)}</strong> de <strong>${anoNac}</strong> <br>`)
        document.write(`El coseno de 180 es: ${coseno} <br>`)
        document.write(`El número mayor de <strong>(${nums})</strong> es ${findBiggestNum(nums)} <br>`)
        document.write(`Ejemplo de número al azar entre 0 y 100 es: ${randomNum} <br>`)
    document.close()

const windowBtn = document.createElement('button')
windowBtn.innerText = 'Abrir ventana'
document.body.appendChild(windowBtn)

const resetBtn = document.createElement('button')
resetBtn.innerText = 'Reiniciar'
document.body.appendChild(resetBtn)



resetBtn.addEventListener("click", ()=>{
    window.location.reload()
})

windowBtn.addEventListener("click", ()=>{
    window.open('/templates/newWindow.html', 'Tarea 03 - DWEC', 'width=1000,height=1000,toolbar=no, resizable=no' )
})

}