const router = require('express').Router();
const { getAll, getById, create, update, remove } = require('../../models/departamento');

router.get('/', async (req, res) => {
    try {
        const departamentos = await getAll();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        if (result['affectedRows'] === 1) {
            const nuevoDepartamento = await getById(result['insertId']);
            res.status(201).json({ success: 'Se ha insertado un nuevo departamento', departamento: nuevoDepartamento });
        } else {
            res.status(422).json({ error: 'No se ha podido insertar el departamento' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/', async (req, res) => {
    try {
        const result = await update(req.body);
        if (result['affectedRows'] === 1) {
            res.json({ success: 'Se ha editado el departamento' });
        } else {
            res.status(422).json({ error: 'No se ha podido actualizar' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/', async (req, res) => {
    try {
        const result = await remove(req.body.id);
        if (result['affectedRows'] === 1) {
            res.json({ success: 'Se ha borrado el departamento' });
        } else {
            res.status(422).json({ error: 'No se ha borrado el departamento. Compruebe que el ID sea correcto' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;