const knex = require("knex")({
  client: "pg",
  connection: async () => {
    return {
      host : "localhost",
      user : "postgres",
      password : "password",
      database : "post_gres",
    };
  }
});

module.exports = knex;