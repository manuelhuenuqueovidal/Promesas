//Función asíncrona para mostrar los títulos de las fotos cuyos IDs sean menores que 20.
const getDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        //Petición a la URL.
        const response = await fetch(url);
        // Se convierte la respuesta a un formato JSON.
        const datos = await response.json();
        //Muestra los títulos de las fotos con IDs  menores a 20.
        const fotosMenoresA20 = datos.filter(element => element.id < 20);
        fotosMenoresA20.forEach(foto => {
            console.log(foto.title);
        });
        //Manejo de errores.
    } catch (err) {
        console.log("Hubo un error al obtener los datos: ", err);
    }
};
//Llamada de función.
getDatos();


//Función que devuelve una promesa con el mensaje 'Información Enviada' después de 3 segundos.
const mensajePromesa = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
};

//Función asíncrona que espera a que se resuelva la promesa.
const getMensaje = async () => {
    //Espera a que se resuelva la promesa.
    const res = await mensajePromesa();
    //Muestra el mensaje en la consola.
    console.log(res);
};
// Llamada de función.
getMensaje();