import { systemConfig } from "../../config/system"
import { dashboardRoutes } from "./dashboard.route"
import { songRoutes } from "./song.route"
import { topicRoutes } from "./topic.route"

export const adminRoutes = (app:any) => {
  const PATH_ADMIN = `/${systemConfig.prefixAdmin}`
  app.use(`${PATH_ADMIN}/dashboard`, dashboardRoutes)
  app.use(`${PATH_ADMIN}/topics`, topicRoutes)
  app.use(`${PATH_ADMIN}/songs`, songRoutes)
}

