function creacionAlumno(nombre, nota) {
    return {
        nombre,
        nota,
        promedio() {
            return this.nota.reduce((a,b)=>a+b,0) / this.nota.length;
        }
    }
}

let alumno = creacionAlumno("Juancho",[4,5,3,4,2]);
console.log(alumno.nombre, alumno.promedio());