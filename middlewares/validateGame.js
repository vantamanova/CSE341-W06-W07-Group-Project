// middlewares/validateGame.js
const { gameSchema } = require('../helpers/validate');

const validateGame = (req, res, next) => {
  const { error, value } = gameSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map(d => d.message),
    });
  }

  req.body = value; // sanitized
  next();
};

module.exports = { validateGame };
