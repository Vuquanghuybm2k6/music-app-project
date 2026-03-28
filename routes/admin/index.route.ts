import { dashboardRoutes } from "./dashboard.route"
import { topicRoutes } from "./topic.route"

export const adminRoutes = (app:any) => {
  app.use('/admin', dashboardRoutes)
  app.use('/admin/topics', topicRoutes)
}