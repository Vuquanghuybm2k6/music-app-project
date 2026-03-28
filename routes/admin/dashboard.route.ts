import {Router} from 'express'
const router :Router = Router()
import * as dashboardController from '../../controllers/admin/dashboard.controller'
router.get('/dashboard', dashboardController.index) 
export const dashboardRoutes: Router = router
