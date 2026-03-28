import { Request, Response } from "express"
import Topic from "../../models/topic.model"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"
import FavoriteSong from "../../models/favorite-song.model"

// [GET]: /songs/:slugTopic
export const list = async (req: Request, res: Response) => {
  const topic = await Topic.findOne({
    slug: req.params.slugTopic,
    status: "active",
    deleted: false
  })
  if (!topic) {
    return res.status(404).send("Topic not found");
  }

  const songs = await Song.find({
    topicId: topic.id,
    status: "active",
    deleted: false
  }).select("avatar title slug singerId like")
  for(const song of songs){
    const infoSinger = await Singer.findOne({
      _id: song.singerId,
      status: "active",
      deleted: false
    });
    (song as any).infoSinger = infoSinger
  }
  res.render("client/pages/songs/list.pug",{
    pageTitle: topic.title,
    songs
  })
}

// [GET]: /songs/detail/:slugSong
export const detail = async (req:Request, res: Response)=>{
  const slugSong = req.params.slugSong
  const song = await Song.findOne({
    slug: slugSong, 
    deleted: false,
    status: "active"  
  }).select("avatar title slug singerId topicId like audio description lyrics listen")
  if(!song){
    return res.status(404).send("Song not found")
  }
  console.log(song)
  const singer = await Singer.findOne({
    _id: song.singerId,
    deleted: false,
    status: "active"
  }).select("fullName")
  console.log(singer)
  const topic = await Topic.findOne({
    _id: song.topicId,
    deleted: false,
    status: "active"  
  })
  console.log(topic)
  res.render("client/pages/songs/detail.pug",{
    pageTitle: song.title,
    song,
    singer,
    topic
  })
}

// [PATCH]: /songs/like/:typeLike/:idSong
export const like = async (req:Request, res: Response)=>{
  const idSong: string = req.params.idSong as string
  const typeLike: string = req.params.typeLike as string
  const song:any = await Song.findOne({
    _id: idSong,
    deleted: false,     
    status: "active"
  })
  const newLike:number = typeLike ==="like" ? song.like+1 : song.like-1
  await Song.updateOne({
    _id: idSong
  },{
    like: typeLike ==="like" ? song.like+1: song.like-1
  })
  res.json({
    code: 200,
    message: "Cập nhật lượt thích thành công",
    like: newLike
  })
}

// [PATCH]: /songs/favorite/:typeFavorite/:idSong
export const favorite = async (req:Request, res: Response)=>{
  const idSong: string = req.params.idSong as string
  const typeFavorite: string = req.params.typeFavorite as string
  switch(typeFavorite){
    case "favorite":
      const existFavoriteSong = await FavoriteSong.findOne({
         songId: idSong,
         // userId: ""
      })
      if(!existFavoriteSong){
        const record = new FavoriteSong({songId: idSong})
        await record.save()
      }
      break;
    case "unfavorite":
      await FavoriteSong.deleteOne({
        songId: idSong
      })
      break;
    default: 
      break
  }
  res.json({
    code: 200,
    message: "Cập nhật yêu thích thành công"
  })

}

// [PATCH]: /songs/listen/:idSong
export const listen = async (req:Request, res: Response)=>{
  const idSong: string = req.params.idSong as string  
  const song = await Song.findOne({
    _id: idSong,
    deleted: false,
    status: "active"  
  })
  const listen = (song as any).listen + 1
  await Song.updateOne({ _id: idSong }, { $inc: { listen: listen } });
  const songNew = await Song.findOne({
    _id: idSong
  })// do lượt nghe có thể sẽ tăng rất nhanh nên ta sẽ truy vấn lại để lấy lại lượt nghe cho đúng 
  res.json({
    code: 200,
    message: "Cập nhật lượt nghe thành công",
    listen: songNew?.listen
  })

}