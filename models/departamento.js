// Método para sacar todos los departamentos
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM departamento', (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Método para sacar los departamentos según su ID
const getById = (pDepartamentoId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM departamento WHERE id = ?', [pDepartamentoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
}

// Método para crear un nuevo departamento
const create = ({ nombre, ciudad }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO departamento (nombre, ciudad) VALUES (?,?)', [nombre, ciudad], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

// Método para editar un departamento
const update = ({ nombre, ciudad, id }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE departamento SET nombre = ?, ciudad = ? WHERE id = ?', [nombre, ciudad, id], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

// Método para eliminar un departamento
const remove = (pDepartamentoId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM departamento WHERE id = ?', [pDepartamentoId], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    getAll, getById, create, update, remove
}