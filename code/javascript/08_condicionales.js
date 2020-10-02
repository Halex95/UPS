var persona = {
    nombre: 'Halex',
    apellido: 'Illescas',
    edad: 25,
    universidad: 'Universidad Politécnica Salesiana',
    correo_electronico: 'hillescas@est.ups.edu.ec',
    ingeniero: true,
    master: false,
    doctor: false
}

function imprimpirPersona( objeto ) {
    console.log( `${objeto.nombre} ${objeto.apellido}`  )
    console.log( `Edad: ${objeto.edad} años.`  )
    console.log( `Universidad: ${objeto.nombre}`  )
    console.log( `Correo electrónico: ${objeto.nombre}`  )
    if (objeto.ingeniero) {
        console.log( `Es Ingeniero.` )
    }
    if (objeto.master) {
        console.log( `Es Magíster.` )
    }
    if (objeto.doctor) {
        console.log( `Es Doctor.` )
    }
}

// SWITCH
opcion = 2

switch(opcion) {
    case 1:
        console.log('Caso 1')
        break
    case 2:
        console.log('Caso 2')
        break
}

imprimpirPersona( persona )