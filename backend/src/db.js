// This code sets up a connection pool for PostgreSQL using the 'pg' library.

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sandcastle_DB',
    password: 'admin',
    port: 5432,
});

module.exports = pool;
