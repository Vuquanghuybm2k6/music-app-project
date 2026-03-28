import { Request, Response } from "express"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"
import Topic from "../../models/topic.model"

// [GET]: /admin/dashboard
export const index = async (req: Request, res: Response) => {
  const songs = await Song.find({
    deleted: false
  }).lean() // tạo ra một bản sao của các tài liệu và trả về dưới dạng đối tượng JavaScript thuần túy
  res.render("admin/pages/songs/index",{
    pageTitle: "Danh sách bài hát",
    songs
  })
}

// [POST]: /admin/dashboard
export const create = async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted: false,
    status: "active"
  }).select("title")
  const singers = await Singer.find({
    deleted: false,
    status: "active"
  }).select("fullName")
  res.render("admin/pages/songs/create",{
    pageTitle: "Thêm mới bài hát",
    topics,
    singers
  })
}