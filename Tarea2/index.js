import readline from 'readline';
import fs from 'fs';

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function imprirOpciones(){
    console.log("1) Leer archivo .inv e imprir su contenido")
    console.log("2) Salir")
}

const leerCampo = (texto) =>{
    return new Promise((resolve) => {
        readLine.question(`${texto}`, (carnet) => {
            resolve(carnet);
        });
    });
}

const main = async () => {
    imprirOpciones();
    readLine.question("Seleccione una opcion: ", ejecutarOpcion);
}

const ejecutarOpcion = async (opcion) => {
    switch(opcion){
        case '1':
            let archivo = await leerCampo("Ingrese el nombre del archivo: ");
            console.log(`Cargando inventario desde el archivo: ${archivo}`);

            try {
                const contendio = fs.readFileSync(`./Entradas/${archivo}`, `utf-8`);
                console.log("contendio del archivo: ");
                console.log(contendio);
            } catch (error) {
                console.log("Error al leer el archivo");
            }
            break;
        
        case '2':
            console.log("Saliendo.....");
            readLine.close();
            return;
    }
}

main();