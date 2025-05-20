import crypto from 'crypto';

const generateHash = (password, salt) => {
  crypto.scrypt(password, salt, 32, (err, hashedPassword) => {
    if (err) throw err;
    console.log('Salt:', salt);
    console.log('Hashed Password:', hashedPassword.toString('hex'));
  });
};

// Example usage
const password = 'test';
const salt = '123348dusd437840'; // Use the same salt as stored in your database
generateHash(password, salt);