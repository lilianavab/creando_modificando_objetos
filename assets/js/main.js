
// Función constructora Consultorio
function Consultorio(nombre, pacientes) {
    
    var _nombre = nombre;
   
    this._pacientes = pacientes || [];

    
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

   
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });
}

// Métodos prototipo para Consultorio
Consultorio.prototype.getNombre = function () {
    return this._getNombre;
};

Consultorio.prototype.setNombre = function (nuevo_nombre) {
    this._setNombre = nuevo_nombre;
};

Consultorio.prototype.agregarPaciente = function (paciente) {
    this._pacientes.push(paciente);
};

Consultorio.prototype.getPacientes = function () {
    this._pacientes.forEach(function (element) {
        console.log('========= Información del Paciente ============');
        console.log(`Nombre: ${element._getNombrePaciente}`);
        console.log(`Edad: ${element._getEdad}`);
        console.log(`Rut: ${element._getRut}`);
        console.log(`Diagnóstico: ${element._getDiagnostico}`);
    });
};



// Función constructora Paciente
function Paciente(nombrePaciente, edad, rut, diagnostico) {
    // Variables privadas para los atributos del paciente
    var _nombrePaciente = nombrePaciente;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;



// Obtener el nombre del paciente
    Object.defineProperty(this, "_getNombrePaciente", {
        get: function () {
            return _nombrePaciente;
        }
    });

    // Establecer el nombre del paciente
    Object.defineProperty(this, "_setNombrePaciente", {
        set: function (nombrePaciente) {
            _nombrePaciente = nombrePaciente;
        }
    });

    // Obtener la edad del paciente
    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    });

    // Establecer la edad del paciente
    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
        }
    });

    // Obtener el rut del paciente
    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    });

    // Establecer el rut del paciente
    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut;
        }
    });

    // Obtener el diagnóstico del paciente
    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    });

    // Establecer el diagnóstico del paciente
    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
}

// Métodos prototipo para Paciente
Paciente.prototype.getNombre = function () {
    return this._getNombrePaciente;
};

Paciente.prototype.setNombre = function (nuevo_nombrePaciente) {
    this._setNombrePaciente = nuevo_nombrePaciente;
};

Paciente.prototype.getEdad = function () {
    return this._getEdad;
};

Paciente.prototype.setEdad = function (nueva_edad) {
    this._setEdad = nueva_edad;
};

Paciente.prototype.getRut = function () {
    return this._getRut;
};

Paciente.prototype.setRut = function (nuevo_rut) {
    this._setRut = nuevo_rut;
};

Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
    this._setDiagnostico = nuevo_diagnostico;
};


var p1 = new Paciente('Damaris', 33, '13856963-5', 'Migraña');
var p2 = new Paciente('José', 66, '4742365-2', 'Infección Respiratoria');
var p3 = new Paciente('Rafael', 36, '15865254-6', 'Dolor Lumbal');


var consultorioUno = new Consultorio('Innova', [p1, p2, p3]);


var nuevoPaciente = new Paciente('Diego', 39, '21854214-9', 'Anemia');
consultorioUno.agregarPaciente(nuevoPaciente);


consultorioUno.getPacientes();
