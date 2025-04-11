import User from '../objects/User.js';
import Database from 'better-sqlite3';
const db = new Database('../db.sqlite');
db.pragma('journal_mode = WAL');

export const getUserByEmail = (email) => {
    const row = db.prepare('SELECT * FROM USERS WHERE email = ?').get(email);
    return new User(row.email, row.name, row.surname, row.password);
};

export const changePassword = (email, newPassword) => {
  const stmt = db.prepare('UPDATE USERS SET password = ? WHERE email = ?');
  stmt.run(newPassword, email);
}

export const addUser = (user) => {
   const stmt = db.prepare('INSERT INTO USERS (email, name, surname, password) VALUES (?, ?, ?, ?)');
   stmt.run(user.email, user.name, user.surname, user.password); 
}

export const deleteUser = (email) => {
  const stmt = db.prepare('DELETE FROM USERS WHERE email = ?');
  stmt.run(email);
}
