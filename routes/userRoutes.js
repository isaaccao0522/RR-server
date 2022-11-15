import express from  'express';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { isAuth, generateToken } from '../utils.js';


const userRouter = express.Router ();

//Get a user info.
userRouter.post ( "/signin",
  asyncHandler ( async ( req, res) => {
    const user = await User.findOne ({ email: req.body.email });
    if ( user) {
      if ( bcrypt.compareSync 
          ( req.body.password, user.password)
        ) {
        res.send ({
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isAdmin: user.isAdmin,
          token: generateToken ( user),
        });
        return;
      }
    }
    res.status( 401).send ({ message: "Invalid email or password" });
  })
);

//Get a user info with different way.
userRouter.post ( "/forgetpassword",
  asyncHandler ( async ( req, res) => {
    const user = await User.findOne ({ email: req.body.email });
    if ( user) {
      if (  req.body.phone === user.phone) {
        res.send ({
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isAdmin: user.isAdmin,
          token: generateToken ( user),
        });
        return;
      }
    }
    res.status( 401).send ({ message: "Invalid email or phone" });
  })
);

//Add a new user info
userRouter.post ( "/signup",
  asyncHandler ( async ( req, res) => {
    const newUser = new User ({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: bcrypt.hashSync ( req.body.password),
    });
    const record = await User.findOne ({ email: req.body.email});
    if ( record) {
      res.status ( 500). send ({ message: 'This E-mail has been used.'})
    } else {
      const user = await newUser.save ();
      res.send ({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: generateToken ( user),
      });
    } 
  })
);

//Update
userRouter.put ( "/profile",
  isAuth,
  asyncHandler ( async ( req, res) => {
    const user = await User.findById ( req.user._id);
    if ( user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;
      if ( req.body.password) {
        user.password = bcrypt.hashSync ( req.body.password, 8);
      }

      const updatedUser = await user.save ();

      res.send ({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        isAdmin: updatedUser.isAdmin,
        token: generateToken ( updatedUser),
      });
    } else {
      res.status ( 404).send ({ message: "User not found." });
    }
  })
);


export default userRouter;