import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.token) {
        token = req.cookies.token;
    }

    console.log('Auth middleware - token found:', !!token); // Debug log
    console.log('Auth middleware - cookies:', req.cookies); // Debug log

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = tokenDecode.id;
        console.log('Auth middleware - token verified for user:', req.userId); // Debug log
        next();
    } catch (error) {
        console.error('Auth middleware - token verification failed:', error); // Debug log
        return res.json({ success: false, message: error.message });
    }
};

export default userAuth;
