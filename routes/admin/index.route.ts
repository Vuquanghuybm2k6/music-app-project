import { dashboardRoutes } from "./dashboard.route"

export const adminRoutes = (app:any) => {
  app.use('/admin', dashboardRoutes)
}