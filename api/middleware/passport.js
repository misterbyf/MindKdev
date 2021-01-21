const config = require("config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../model/user");

const opt = {
  jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('jwt')
};

module.exports = passport => {
    passport.use(
        new JwtStrategy(opt, async (payload, done) => {
            try {
                const user = await User.findByEmail(payload.email);
                if(user){
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        })
    )
};