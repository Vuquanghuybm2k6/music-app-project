import { Request, Response } from "express"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"
import FavoriteSong from "../../models/favorite-song.model"

// [GET]: /favorite-songs
export const index = async (req: Request, res: Response) => {
  try {
    const favoriteSongs = await FavoriteSong.find({
      deleted: false
    })

    const result: any[] = []

    for (const item of favoriteSongs) {
      const infoSong = await Song.findById(item.songId).lean()

      if (!infoSong) {
        console.log("❌ Không tìm thấy song:", item.songId)
        continue
      }

      const infoSinger = await Singer.findById(infoSong.singerId).lean()

      result.push({
        ...item.toObject(),
        infoSong,
        infoSinger
      })
    }

    res.render("client/pages/favorite-songs/index.pug", {
      pageTitle: "Danh sách bài hát yêu thích",
      favoriteSongs: result
    })

  } catch (error) {
    console.error("🔥 ERROR favorite-songs:", error)
    res.status(500).send("Server Error")
  }
}