const mysql = require('mysql2');

function connection_func() {
    console.log("Conectando ao banco de dados...");
 
    const connection = mysql.createConnection({
        host: 'localhost',  
        user: 'root',     
        password: 'root',  
        database: 'kanban'  
    });


    connection.connect(function(err) {
        if (err) {
            console.error('Erro ao conectar ao banco de dados: ' + err.stack);
            return;
        }
        console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
    });

    return connection;
}

const mysqlConnection = connection_func();