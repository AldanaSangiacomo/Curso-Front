        // var nombre = 'Flavia';
        // var nombre = 'Laura';
        // var edad = 40;
        // let apellido = 'Ursino';
        // let apellido = 'Lopez';
        const nombre = 'Flavia'; // siempre usar const porque no permite reutilizar el nombre de la variable, de esta forma no hay confusión//
        const edad = 40;


        document.write('hola soy ' + nombre + '<br/>'); // br es etiqueta para que la siguiente frase salga en el siguiente renglón
        document.write(`Hola soy ${nombre}. Mi edad es ${edad}`);//interpolación de string
        console.log(nombre);
        console.log(`Hola soy ${nombre}. Mi edad es ${edad}`);