const { Router } = require('express');
const User = require('../models/user');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


const router = Router();

router.post(
  '/registration',
  [
    check('email', 'Uncorrelated email').isEmail(),
    check('password', 'Password must be at least 6 characters long')
      .isLength({min: 6})
  ], 
  async (req, res) => {
    try {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Uncorrect email or password'
        });
      }

      const { email, password } = req.body;

      const isUsed = await User.findOne({ email });
      if (isUsed) {
          return res.status(400).json({ message: 'Email already used...' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
          email,
          password: hashedPassword
      });

      await user.save();

      return res.status(201).json({
          message: 'User created successfully'
      })


    } catch (e) {
      console.log(e);
    }
  }
);


module.exports = router;