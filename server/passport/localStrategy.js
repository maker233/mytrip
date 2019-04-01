const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');


passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, foundUser) => {
      if (err) {
          next(err);
          return;
      }

      if (!foundUser) {
          next(null, false, { message: 'Incorrect username.' });
          return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
          next(null, false, { message: 'Incorrect password.' });
          return;
      }

      next(null, foundUser);
  });
}));


// passport.use(new LocalStrategy({
//     emailField: 'email',
//     passwordField: 'password'
//   }, 
//   (username, password, done) => {
//     User.findOne({ email })
//     .then(foundUser => {
//       if (!foundUser) {
//         done(null, false, { message: 'P:El usuario no es correcto' });
//         return;
//       }

//       if (!bcrypt.compareSync(password, foundUser.password)) {
//         done(null, false, { message: 'P: La contraseña no es correcta' });
//         return;
//       }

//       done(null, foundUser);
//     })
//     .catch(err => done(err));
//   }
// ));
