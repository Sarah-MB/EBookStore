module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  dev: {
    username: "nationscash",
    password: "1456Ee241",
    database: "ebookstore",
    host: "starlight.cvtudh5ojaen.us-east-2.rds.amazonaws.com",
    dialect: 'postgres' 
  },
  production: {
    username: "nationscash",
    password: "1456Ee241",
    database: "ebookstore",
    host: "starlight.cvtudh5ojaen.us-east-2.rds.amazonaws.com",
    dialect: 'postgres' 
  }
};
