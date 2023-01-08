const { Router } = require('express');
const User = require('../models/user');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')



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
      res.status(500).json({ message: 'Server error' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Uncorrelated email').isEmail(),
    check('password', 'Password must be at least 6 characters long')
      .exists()
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

      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Email not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch) {
        return res.status(400).json({ message: 'Password not correct' });
      }

      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}  
      )

      res.json({token, userId: user.id})


    } catch (e) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);


module.exports = router;