const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox5f51b5e50ae3475aaa94f505b578dddc.mailgun.org";
const mg = mailgun({apiKey: config.get("api-key"), domain: DOMAIN});
const User = require("../model/user");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async function(req, res) {
    const candidate = await User.findByEmail(req.body.email);

    if(candidate) {
        //Пользователь найден, проверка пароля
       const passwordResult = bcrypt.compareSync(req.body.password, candidate.hash);
        if(passwordResult) {
            //Пароли совпали, генерация токена
            const token = jwt.sign({
                id: candidate.id,
                email: candidate.email
            }, config.get("jwt"), {expiresIn: 60 * 30});
            res.status(200).json({
                token: `Bearer ${token}`,
            })
        } else {
            //Не совпали
            res.status(401).json({
                message: "Password is not valid",
            })
        }

    } else {
        //Ошибка пользователя нету
        res.status(404).json({
            message: "User not found"
        })
    }

};

module.exports.register = async function(req, res) {
    const candidate = await User.findByEmail(req.body.email);
    if(candidate) {
        //Пользователь существует
        res.status(409).json({
            message: "User already exists",
        })
    } else {
        //Отаравка на email

        const token = jwt.sign({
            id: req.body.id,
            email: req.body.email
        }, config.get("jwt"), {expiresIn: 60 * 30});

        const data = {
            from: 'noreply@mymail.com',
            to: req.body.email,
            subject: 'Account Activation link',
            html: `
                <h2>Please click on link to activation your account</h2>
                <p>${config.get("client-link")}/auth/activate/${token}</p>
            `
        };

        mg.messages().send(data, function (error) {
            if(error) {
                return errorHandler(res, error);
            }
        });
        //Создаём пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        try {
            await User.saveUser({
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(password, salt),
            });
            return res.status(201).json({
                message: "User has been created and email has been send, kindly activate your account!",
            })
        } catch (e) {
            //Обработчик
            errorHandler(res, e);
        }
        
    }
};

module.exports.activateAccount = async function(req, res) {
    //Берём токен
    const {token} = req.body;
    if(token) {
        //Верифицируем пользователя
        jwt.verify(token, config.get("jwt"), async function (error) {
            if(error) {
                return res.status(400).json({
                    message: "Incorrect link",
                });
            }

            return res.json({
                Token: token,
            });
        })
    } else {
        return res.status(403).json({
            message: "Something went wrong!"
        })
    }
};