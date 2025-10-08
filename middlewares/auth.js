// Middleware for handling authentication (e.g., verifying tokens or session checks).
const IsAuthenticated = (req, res, next) => {
  if (req.session.user === undefined) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

module.exports = { IsAuthenticated };