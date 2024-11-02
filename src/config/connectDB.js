const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '217.21.94.191',
    user: 'u736549907_newtclottery',
    password: 'Kunal292911n@',
    database: 'u736549907_newtclottery',
});

export default connection;