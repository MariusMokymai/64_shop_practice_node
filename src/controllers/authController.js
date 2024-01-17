const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const { makeSqlQuery } = require('../helpers');

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

  const sql = 'INSERT INTO `customers` (`email`, `password`) VALUES (?, ?)';
  const [resObj, error] = await makeSqlQuery(sql, [email, passwordHash]);

  if (error) {
    console.log('error ===', error);
  }

  res.json(resObj);
};

module.exports = {
  login,
  register,
};
