function student(age, name) {
    this.name = name;
    this.age = age;
    this.matricula = null;
    this.numberMatr = numberMatr;
    this.print = print;
}

const numberMatr = (matr) => this.matricula = matr;
const print = () => {
    document.write(`Nombre: ${this.name}`);
    document.write(`<br>Edad: ${this.age}`);
    document.write(`<br>Number of matricula: ${this.matricula}`);
}

student = new student(23, 'Daniel');
student.numberMatr(50502);
student.print();