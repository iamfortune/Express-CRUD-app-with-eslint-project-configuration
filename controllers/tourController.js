const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missind credentials, please fill in details'
    });
  }
  next();
};

// ROUTE HANDLERS
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime
    // results: tours.length,
    // data: {
    //   tours: tours
    // }
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1; // we converted the id string to number

  // const tour = tours.find(
  //   el => el.id === id
  // ); /** here we loop through the tours and try to find the element whose id matches the one we are looking for */

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success'
    // data: { tour: newTour }
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tour: '<Updated tour ....>' }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
