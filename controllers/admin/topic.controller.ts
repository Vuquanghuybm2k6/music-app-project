import { Request, Response } from "express"
import Topic from "../../models/topic.model"
// [GET]: /admin/topics
export const index = async (req: Request, res: Response) => {
  const topics: any = await Topic.find({
    deleted: false,
    status: "active"  
  })
  res.render("admin/pages/topics/index", {
    pageTitle: "Trang chủ đề bài hát",
    topics
  })
}