const pool = mysql.createPool({
    connectionLimit: 100,
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'taste_of_home',
    port: '3308'
});