// Método para sacar todos los empleados
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empleados', (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Método para sacar los empleados según su ID
const getById = (pEmpleadoId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empleados WHERE id = ?', [pEmpleadoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
}

// Método para crear un nuevo empleado
const create = ({ nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, jefe_id }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO empleados (nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, jefe_id) VALUES (?,?,?,?,?,?,?,?)', [nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, jefe_id], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

// Método para editar un empleado
const update = ({ nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, jefe_id, id }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE empleados SET nombre = ?, dni = ?, sexo = ?, fecha_nac = ?, fecha_inc = ?, salario = ?, cargo= ?, jefe_id = ? WHERE id = ?', [nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, jefe_id, id], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

// Método para eliminar un empleado
const remove = (pEmpleadoId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM empleados WHERE id = ?', [pEmpleadoId], (err, result) => {
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