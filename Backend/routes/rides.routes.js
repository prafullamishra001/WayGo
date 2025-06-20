const express=require('express');
const router=express.Router();
const {body,query} = require('express-validator');
const rideController=require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    body('pickUp').isString().isLength({ min: 3 }).withMessage('pickUp location is required'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Destination is required'),
    body('vehicleType').isString().isIn(['auto','car', 'motorcycle']).withMessage('Vehicle type is required'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickUp').isString().isLength({ min: 3 }).withMessage('pickUp location is required'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination is required'),
    rideController.getFare
)

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Ride ID is required'),
    rideController.confirmRide
   
)

router.get('/start-ride',
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('Ride ID is required'),
    query('otp').isString().isLength({ min: 4, max: 4 }).withMessage('OTP must be a 4-digit number'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Ride ID is required'),
    rideController.endRide
)

module.exports=router;