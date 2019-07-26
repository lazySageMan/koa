const mysql = require('knex')({
            client: 'mysql',
            connection: {
                host: '127.0.0.1', 
                user: 'root',
                password: '199608131012',
                database: 'lazySage'
            }
        });

module.exports = {
    mysql
}

                