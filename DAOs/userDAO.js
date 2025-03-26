import sqlite3 from 'sqlite3';
import User from '../objects/User.js';


const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
}
);

export const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        //get because we need only ONE user
        db.get('SELECT * FROM USERS WHERE email = ?', [email], (err, row) => {
            if (err) {
                reject(err);
            } else {
                if (row) {
                    const user = new User(row.email, row.name, row.surname, row.password);
                    resolve(user);
                } else {
                    reject();
                }
            }
        });
    });
};

export const changePassword = (email, newPassword) => {
    try {
        return new Promise((resolve, reject) => {
            db.run('UPDATE USERS SET password = ? WHERE email = ?', [newPassword, email], (err) => {
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

export const addUser = (user) => {
    try {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO USERS (email, name, surname, password) VALUES (?, ?, ?, ?)', [user.email, user.name, user.surname, user.password], (err) => {
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

export const deleteUser = (email) => {
    try {
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM USERS WHERE email = ?', [email], (err) => {
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
