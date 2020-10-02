var persona = {
    nombre: 'Halex',
    apellido: 'Illescas',
}

var persona2 = {
    nombre: 'Gehovanny',
    apellido: 'ILam Chang',
}

// Asignación por paso de valor
var other = {
    ... persona
}

console.log( persona == persona2 )
// False debido a que son objetos diferentes (tienen diferente dirección de memoria)
console.log( persona == other )

console.log( other.nombre )

// Asignación por referencia
persona3 = other
other.nombre = 'Luis'

// Debido a que es el mismo objeto (tienen la misma direción de memoria)
console.log( persona3 == persona2 )
console.log( persona3 )
console.log( persona )