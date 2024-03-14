import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  console.log('feed wala searchresult');
  console.log(searchResults);
  console.log('contents dekh lu');
  console.log(searchResults.contents);


  const [ data,setdata ] = useState([]);


  useEffect (() => {


    setdata(searchResults.contents);
    // Remove custom-h class when on the feed
    document.getElementById("root").classList.remove("custom-h");
  }, [searchResults]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {/* Check if searchResults is an array before mapping */}
          {!loading  && data && 
            data.map((item) => {
              console.log('hi')

              if (item.type !== "video") return false;
              return (
                <VideoCard 
                key={item?.video?.videoId} 
                video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
