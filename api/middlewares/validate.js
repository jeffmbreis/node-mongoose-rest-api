const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
    console.log(req)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next()
}