import sqlite3 from 'sqlite3';
import User from '../objects/User.js';


const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
}
);

export const getUserByEmail = async (email) => {
    try {
        const row = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM USER WHERE email = ?', [email], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });

        if (row) {
            return new User(row.email, row.name, row.surname, row.password);
        } else {
            return null;
        }
    } catch (err) {
        throw err;
    }
};

export const changePassword = async (email, newPassword) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('UPDATE USER SET password = ? WHERE email = ?', [newPassword, email], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    } catch (err) {
        throw err;
    }
}

export const addUser = async (user) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('INSERT INTO USER (email, name, surname, password) VALUES (?, ?, ?, ?)', [user.email, user.name, user.surname, user.password], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    } catch (err) {
        throw err;
    }
}

export const deleteUser = async (email) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM USER WHERE email = ?', [email], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    } catch (err) {
        throw err;
    }
}
