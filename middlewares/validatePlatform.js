// middlewares/validatePlatform.js
const { platformSchema } = require('../helpers/validate');

const validatePlatform = (req, res, next) => {
  const { error, value } = platformSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map(d => d.message),
    });
  }

  req.body = value; // sanitized
  next();
};

module.exports = { validatePlatform };
