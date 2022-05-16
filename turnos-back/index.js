const mongoose = require('mongoose');
const app = require('./app');
const PORT_SERVER = process.env.port || 3977;
const { API_VERSION, IP_SERVER, PORT_DB, NAME_DB } = require('./config');

// conectart a base de datos
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/${NAME_DB}`, 
    {useNewUrlParser: true}, (err, res) =>{
        if(err){
            throw err;
        } else {
            console.log('La conexion a la base de datos es correcta');

            app.listen(PORT_SERVER, () => {
                console.log('#########################');
                console.log('####### API REST ########');
                console.log('#########################');
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
            })
        }
    });