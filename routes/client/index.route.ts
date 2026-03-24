import { topicRoutes } from "./topic.route"
export const clientRoutes = (app:any) => {
  app.use('/topics', topicRoutes)
}