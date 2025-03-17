import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export default db;

