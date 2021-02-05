module.exports =  function checkAuthorization(rules) {
    return async (req, res, next) => {
        const candidate = req.user;
        if(candidate) {
            if(rules.some((rule) => candidate.permission.includes(rule.permission))){
                return next();
            }
        }
        return res.send('Access denied');
    }
};