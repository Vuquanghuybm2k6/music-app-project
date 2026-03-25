import { Request, Response } from "express"
import Topic from "../../models/topic.model"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"

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
  }).select("avatar title slug singerId topicId like")
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