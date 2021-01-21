const db = require("../config/develop.config");
const config = require("config");

class User {
    static async findByEmail(email) {
        return db.select().from(config.get("table")).where({ email: email }).first();
    }

    static async saveUser(user) {
        // WARNING: validate incoming data before insert or update
        return db.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            hash: user.password
        }).into(config.get("table"));

    }

    static findByToken(token) {
        return db.select().from(config.get("table")).where({ token }).first();
    }
}

module.exports = User;