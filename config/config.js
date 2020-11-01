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
    username: "sarah",
    password: "sarah@001",
    database: "sarahdb",
    host: "3.136.106.135",
    dialect: 'postgres' 
  },
  production: {
    username: "sarah",
    password: "sarah@001",
    database: "sarahdb",
    host: "3.136.106.135",
    dialect: 'postgres' 
  }
};
