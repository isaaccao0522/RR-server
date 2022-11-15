const bcrypt = require ( 'bcrypt');
const jwt = require ( 'jsonwebtoken');
const ascynHandler = require ( 'express-async-handler');

const dotenv = require ( './env');
const User = require ( '../models/User');
dotenv.config ();


//@desc Login
//@route POST /auth
//@access Public
const login = ascynHandler ( async (req, res) => {
  const { email, password} = req.body;
  if ( !email || !password) {
    return res.status ( 400). send ({ message: "All fields are required."})
  }

  const user = await User.findOne ({ email: req.body.email}).exec ();
  if ( !user) {
    return res.status ( 401). send ({ message: "Unauthorized."})
  };

  const match = await bcrypt.compare ( 
    user.password, 
    password
  );
  if ( !match) {
    return res.status ( 401). send ({ message: "Invalid email or password."})
  }

  const accessToken = jwt.sign (
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expired: ' 15m'
    }
  );

  const refreshToken = jwt.sign (
    {
      "username": foundUser.username
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiredIn: " 7d"
    }
  );



});

  

  