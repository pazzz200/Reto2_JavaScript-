const estudiantes = [
 { id: 1, nombre: 'Ana', edad: 20 },
 { id: 2, nombre: 'Juan', edad: 22 },
 { id: 3, nombre: 'María', edad: 21 },
];

async function saludar() {
 return "Hola, soy: ";
}
console.log(estudiantes[0]);
saludar().then((v) => console.log(v));

async function saludar() {
 return "Hola, soy: ";
}
console.log(estudiantes[1]);
saludar().catch((v) => console.log(v));