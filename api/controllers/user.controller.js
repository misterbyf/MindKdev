const db = require("../config/develop.config");

class UserController {
    //POST
    async createUser(req, res) {
        const { name, surname } = req.body;
        db.insert({
            name: name,
            surname: surname
        }).into('person').then(
            () => {
                res.sendStatus(200);
            }
        );
    }

    // GET
    async getUsers(req, res) {
        db.select("*").from("person").then((data) => {
            res.send(data);
        });
    }

    async getOneUsers(req, res) {
        const id = req.params.id;
        db.select(id).from("person").then((data) => {
            res.send(data);
        });
    }

    //PUT
    async updateUser(req, res) {
        const { id, name, surname } = req.body;
        db.update({
            id: id,
            name: name,
            surname: surname
        }).into('person').then(() => {
            res.sendStatus(200);
        })
    }

    //DELETE
    async deleteUser(req, res) {
        const id = req.params.id;
        db("person").where({ id:id }).del().then(() => {
            res.sendStatus(204);
        });
    }
}

module.exports = new UserController();