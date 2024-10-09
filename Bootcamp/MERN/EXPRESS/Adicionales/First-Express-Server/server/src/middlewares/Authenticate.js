const Authenticate = (req, res, next) => {
    console.log(req);
    next()
};

export default Authenticate;