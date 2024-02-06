import { useContext } from "react";
import SideBar from "../Components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../Components/VideoCard";
import Loader from "../Components/Loader";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  //console.log(videos);
  return (
    <div className="flex ">
      <SideBar />
      <div className="video-layout">
        {!videos ? (
          <Loader/>
        ) : (
          videos.map(
            (item, i) => 
            item.type === "video" && <VideoCard key={i} video={item} /> 
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
