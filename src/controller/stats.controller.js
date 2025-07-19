import { Song } from "../modules/song.model.js";
import { Album } from "../modules/album.model.js";
import { User } from "../modules/user.module.js";

export const getStats = async (req, res, next) => {
  try {
    const [totalSongs, totalUsers, totalAlbums, uniqueArtists] = await Promise.all([
      Song.countDocuments(),
      User.countDocuments(),
      Album.countDocuments(),
      Song.aggregate([
        {
          $unionWith: {
            coll: "albums",
            pipeline: [],
          },
        },
        {
          $group: {
            _id: "$artist",
          },
        },
        {
          $count: "count",
        },
      ]),
    ]);

    res.status(200).json({
      totalAlbums,
      totalSongs,
      totalUsers,
      totalArtists: uniqueArtists[0]?.count || 0,
    });
  } catch (error) {
    console.log("Error in getStats", error);
    next(error);
  }
};
