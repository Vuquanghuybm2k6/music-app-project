const aplayer = document.querySelector("#aplayer")
if(aplayer){
  let dataSong = aplayer.getAttribute("data-song")
  if(dataSong){
    dataSong = JSON.parse(dataSong)
  }
  let dataSinger = aplayer.getAttribute("data-singer")
  if(dataSinger){
    dataSinger = JSON.parse(dataSinger)
  }
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: dataSong.title,
        artist: dataSinger,
        url: dataSong.audio,
        cover: dataSong.avatar
    }],
    autoplay: true,
    volume: 1
});
}