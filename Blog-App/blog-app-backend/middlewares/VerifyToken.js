import jwt from "jsonwebtoken";
import { config } from "dotenv";
const { verify } = jwt;
config();

export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      //get token from cookie
      const token = req.cookies?.token; // { token : asdasd}
     // TEMPORARY DEBUG LOGS
      console.log("ALL COOKIES:", req.cookies);
      console.log("TOKEN:", token);
      console.log("SECRET EXISTS:", !!process.env.SECRET_KEY);

      if (!token) {
        return res.status(401).json({ message: "Please login first" });
      }
      let decodedToken = verify(token, process.env.SECRET_KEY);
      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "You are not authorized" });
      }
      req.user = decodedToken;
      next();
    } catch (err) {
      console.log("TOKEN ERROR:", err.message); // ← tells you exactly why it failed
      res.status(401).json({ message: "Invalid token" });
    }
  };
};
// export const verifyToken = async (req, res, next) => {
//   try {
//     //get token from cookie
//     const token = req.cookies?.token; // { token : asdasd}
//     //check token existed or not
//     if (!token) {
//       return res.status(401).json({ message: "Please login first" });
//     }
//     //validate token(decode the token)
//     let decodedToken = verify(token, process.env.SECRET_KEY);

//     // check the role is same as role in decodedToken

//     //add decoded token
//     res.user = decodedToken;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };