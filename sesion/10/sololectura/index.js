/* tema: archivos de sólo lectura */
/* archivo json es de solo lectura, se usa para probar la aplicación, es 
información usada como entrada, pe en caso de no tener datos para probarla */
// usar un json parser online en google, pa validar que está bien estructurado el json

const users = require('../users.json');

const listarUsuarios=()=>
    users.forEach(({username, email}) =>
        console.log(`username: ${username} email: ${email}`)
        );

listarUsuarios();

const user ={
        "id":4,
        "username":"usuario4",
        "email":"correo3@gmail.com",
        "password":"1sd45678",
        "createdDate":'11/01/2020'
};

//push
users.push(user);
listarUsuarios();
