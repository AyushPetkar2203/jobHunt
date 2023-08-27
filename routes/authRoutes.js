import express from 'express'
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, //15 Minutes
    max: 10,
    message: 'Too many request from this IP address, please try after 15 minutes',
})

const router = express.Router()
import { register, login, updateUser, getCurrentUser, logout } from "../controller/authController.js";
import authenticateUser from '../middleware/auth.js'
import testUser from '../middleware/TestUser.js'


router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/logout').get(logout)
router.route('/updateUser').patch(authenticateUser, testUser, updateUser)
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser)

export default router
