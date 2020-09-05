const router = require('express').Router();

const empleadosRouter = require('./api/empleados');
const departamentosRouter = require('./api/departamentos');

router.use('/empleados', empleadosRouter);
router.use('/departamentos', departamentosRouter);

module.exports = router;