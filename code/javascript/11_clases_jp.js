function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype  
    // Aquí obtengo los prototipos el padre (a través de fn)
    prototipoHijo.prototype = new fn
    // Con esto apunto al constructor del prototipo hijo
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido}` )
}

Persona.prototype.saludar2 = (nombre, apellido) => {
    console.log( `Hola soy ${this.nombre} ${this.apellido}, un gusto conocerte.` )
}

Persona.prototype.soyAlto = function() {
    if (this.altura > 1.70) {
        console.log( `Mi altura es ${this.altura} y soy alto` )
    } else {
        console.log( `Mi altura es ${this.altura} y no soy alto` )
    }
}

function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe( Deportista, Persona)

//Sobreescritura
Deportista.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido}, y soy deportista.` )
}

var objeto1 = new Persona('Halex', 'Illescas', 1.67)
objeto1.saludar()
objeto1.soyAlto()

var objeto2 = new Deportista('Gehovanny', 'Lam Chang')
objeto2.saludar()
objeto2.saludar2(objeto2.nombre, objeto2.apellido)
objeto2.altura = 1.80
objeto2.soyAlto()