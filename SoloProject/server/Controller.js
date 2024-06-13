const Show = require('./Model');

const Controller = {

  createShow(req, res, next) {
    const { showName, showStatus } = req.body;
    Show.create({ showName, showStatus })
      .then((show) => {
        console.log('Created show');
        res.locals.show = show;
        return next();
      }).catch((err) => {
        err.log = 'Error creating a new show';
        err.status = 400;
        err.message= { err: 'Failed to create a new show'};
        return next(err);
      })
  } 

  //update show

  //delete show
};

module.exports = Controller;