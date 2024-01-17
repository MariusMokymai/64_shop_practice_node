const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
  res.json('login ing');
};
const register = async (req, res, next) => {
  // pasiimti duomenis kuriuos gavom
  const { email, password } = req.body;

  // console.log(chalk.magenta('req.body ===', req.body));
  console.log('req.body ===', req.body);

  // bcryp passqord
  const passwordHash = bcrypt.hashSync(password, 10);

  // irasyti i db

  res.json(passwordHash);
};

module.exports = {
  login,
  register,
};
