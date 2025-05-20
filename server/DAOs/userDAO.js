import User from '../objects/User.js';
import Database from 'better-sqlite3';
const db = new Database('../db.sqlite');
import crypto from 'crypto';

db.pragma('journal_mode = WAL');

export const getUser = (email, password) => {
  const row = db.prepare('SELECT * FROM USERS WHERE email=?').get(email);
  if (row) {
    const user = { email: row.email, name: row.name, surname: row.surname };
    const salt = row.salt;

    // Convert the stored password to a Buffer
    const storedPasswordHex = Buffer.from(row.password, 'hex');

    // Return a Promise to handle async behavior
    return new Promise((resolve, reject) => {
      crypto.scrypt(password, salt, 32, (err, hashedPassword) => {
        if (err) return reject(err);

        console.log('Stored Password (Hex):', storedPasswordHex.toString('hex'));
        console.log('Hashed Password (Hex):', hashedPassword.toString('hex'));

        // Compare the hashed password with the stored password
        if (crypto.timingSafeEqual(storedPasswordHex, hashedPassword)) {
          console.log('Password match!');
          resolve(new User(user.email, user.name, user.surname));
        } else {
          console.log('Password does not match!');
          resolve(null);
        }
      });
    });
  }
  return Promise.resolve(null); // User not found
};

export const getUserByEmail = (email) => {
    const row = db.prepare('SELECT * FROM USERS WHERE email=?').get(email);
    if(row){
        return new User(row.email, row.name, row.surname);
    } 
    return null;
}
