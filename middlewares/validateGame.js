const { gameSchema } = require('../schemas/gameSchema');

const validateGame = (req, res, next) => {
    const { error, value } = gameSchema.validate(req.body, { abortEarly: false }); // validate all fields

    if (error) {
        return res.status(400).json({
            message: 'Validation error',
            details: error.details.map(d => d.message),
        });
    }
    // overwrite req.body with the validated/sanitized data
    req.body = value;
    next();
}

module.exports = { validateGame };