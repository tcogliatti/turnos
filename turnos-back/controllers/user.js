const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res){
    const user = new User(); // creamos una instancia del modelo User

    const { name, lastname, email, password, repiPassword } = req.body;
    user.name = name;
    user.lastname= lastname,
    user.email = email;
    user.role = "admin";
    user.active = false;

    if( !password || !repiPassword ){
        res.status(404).send({ message: "Las contraseñas son obligatorias"});
    }else {if( password !== repiPassword ){
            res.status(404).send({ message: "Las contraseñas no son iguales"});
        }else{
            bcrypt.hash(password, null, null, function(err, hash){
                if(err) {//verificamos si devolvió un error
                    res.status(500).send({message:"error al encriptar la contraseña"});
                }else{
                    user.password = hash; // guardamos la contraseña hasheada
                    user.save((err, userStored) => {
                        if(err){
                            res.status(500).send({message:"Error al almacenar usuario en DB"});
                        }else{
                            if(!userStored){
                                res.status(500).send({message:"Error al almacenar usuario en DB"});
                            }else{
                                res.status(200).send({message:userStored});
                            }
                        }
                    })
                }
                })

            // res.status(200).send({ message: "Usuario creado"});
        }}

}

module.exports = {
    signUp
};