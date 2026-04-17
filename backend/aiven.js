import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(express.json());

console.log(process.env.MYSQL_DATABASE_NAME); // ! UNDEFINED
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    ssl: {
        ca: process.env.MYSQL_CA,
        rejectUnauthorized: true
    },
    waitForConnections: true,
    connectionLimit: 10
});

app.post('/api/test-write', async (req, res) => {
    try {
        const [result] = await pool.query(
            'INSERT INTO test_table (name, message) VALUES (?, ?)',
            ['hardcoded_name', 'hello from express']
        );
        res.json({ status: 'Write successful', insertId: result.insertId });
        console.log("WRITE WORKING");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(8000, async () => {
    console.log("RUNNING");

    // Create table if it doesn't exist
    await pool.query(`
        CREATE TABLE IF NOT EXISTS test_table (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log("TABLE READY");

    // Write
    await pool.query(
        'INSERT INTO test_table (name, message) VALUES (?, ?)',
        ['sample1', 'hello']
    );

    // Read back to confirm
    const [rows] = await pool.query('SELECT * FROM test_table');
    console.log("ROWS IN DB:", rows);
});