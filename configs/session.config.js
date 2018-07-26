const session = require('express-session');

const sessionOpt = {
  secret: 'es muy secreto',
  resave: true,
  saveUnitialized: true
}

module.exports = (app) => {
  app.use(session(sessionOpt));
}