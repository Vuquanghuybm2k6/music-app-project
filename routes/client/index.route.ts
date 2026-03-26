import { favoriteSongRoutes } from "./favorite-song.route"
import { songRoutes } from "./song.route"
import { topicRoutes } from "./topic.route"
export const clientRoutes = (app:any) => {
  app.use('/topics', topicRoutes)
  app.use('/songs', songRoutes)
  app.use('/favorite-songs', favoriteSongRoutes)
}