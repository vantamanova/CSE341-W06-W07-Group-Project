// middlewares/validateCharacter.js
const { characterSchema } = require('../helpers/validate');

const validateCharacter = (req, res, next) => {
  const { error, value } = characterSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map(d => d.message),
    });
  }

  // overwrite req.body with the validated/sanitized data
  req.body = value;
  next();
};

module.exports = { validateCharacter };
