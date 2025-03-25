import sqlite3 from 'sqlite3';
import Size from '../objects/Size.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listSizes = async () => {
    try {
        const rows = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM sizes', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        const sizes = [];
        rows.forEach(row => {
            sizes.push(new Size(row.id, row.maxDayQty, row.maxProteins, row.maxIngridients, row.price));
        });

        return sizes;
    } catch (err) {
        throw err;
    }
}

export const getSizeById = async (sizeId) => {
    try {
        const row = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM sizes WHERE id = ?', [sizeId], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });

        if (row) {
            return new Size(row.id, row.maxDayQty, row.maxProteins, row.maxIngridients, row.price);
        } else {
            return null;
        }
    } catch (err) {
        throw err;
    }
}

export const addSize = async (size) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('INSERT INTO sizes (maxDayQty, maxProteins, maxIngridients, price) VALUES (?, ?, ?, ?, ?)', [size.maxDayQty, size.maxProteins, size.maxIngridients, size.price], (err) => {
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

export const deleteSize = async (sizeId) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM sizes WHERE id = ?', [sizeId], (err) => {
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

export const updateQty = async (sizeId, maxDayQty) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('UPDATE sizes SET maxDayQty = ? WHERE id = ?', [maxDayQty, sizeId], (err) => {
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

export const updateProteins = async (sizeId, maxProteins) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('UPDATE sizes SET maxProteins = ? WHERE id = ?', [maxProteins, sizeId], (err) => {
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

export const updateIngridients = async (sizeId, maxIngridients) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('UPDATE sizes SET maxIngridients = ? WHERE id = ?', [maxIngridients, sizeId], (err) => {
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