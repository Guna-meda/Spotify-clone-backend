import {Song} from '../modules/song.model.js'

export const getAllSongs = async (req,res,next) => {
  try {
    //-1 => decending , new to old
    //1 is ascending , old to new
    const songs = await Song.find().sort({createdAt: -1 })
  } catch (error) {
    console.log ("Error in getAllSongs" , error);
    next(error)
  }
}

export const getFeaturedSongs = async (req,res,next)=> {
try {
  //fetch 6 random songs
  const songs = await Song.aggreate([
    {
      sample: {size:6},
    },
    {
      $project:{
        _id:1,
        title:1,
        artist:1,
        imageUrl:1,
        audioUrl:1,
      },
    },
  ])

  res.json(songs)
} catch (error) {
  console.log ("Error in getFeaturedSongs" , error);
    next(error)
}
}

export const getMadeForYou = async (req,res,next)=> {
try {
  //fetch  random songs
  const songs = await Song.aggreate([
    {
      sample: {size:4},
    },
    {
      $project:{
        _id:1,
        title:1,
        artist:1,
        imageUrl:1,
        audioUrl:1,
      },
    },
  ])

  res.json(songs)
} catch (error) {
  console.log ("Error in getFeaturedSongs" , error);
    next(error)
}
}

export const getTrendingSongs = async (req,res,next)=> {
try {
  const songs = await Song.aggreate([
    {
      sample: {size:4},
    },
    {
      $project:{
        _id:1,
        title:1,
        artist:1,
        imageUrl:1,
        audioUrl:1,
      },
    },
  ])

  res.json(songs)
} catch (error) {
  console.log ("Error in getFeaturedSongs" , error);
    next(error)
}
}