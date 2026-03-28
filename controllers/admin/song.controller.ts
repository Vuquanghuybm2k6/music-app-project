import { Request, Response } from "express"
import Song from "../../models/song.model"

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