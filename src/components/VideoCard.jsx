import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import VideoLength from '../shared/VideoLength';

import {BsFillCheckCircleFill} from 'react-icons/bs';

import { abbreviateNumber } from 'js-abbreviation-number';
// props ko curly brackets me likhte nahi tu masle hote
const VideoCard = ({video}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  // useEffect(() => {
  //   // Ensure that video has thumbnails and the first thumbnail has a URL
  //   if (video?.thumbnails?.length > 0 && video.thumbnails[0].url) {
  //     setThumbnailUrl(video.thumbnails[0].url);
  //   }
  // }, [video]);

  return (
    <>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8">
          <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
            <img className='h-full w-full object-cover' src={video.thumbnails?.[0]?.url} alt='Thumbnail' />

              {/* agar video ki length nahi milti tu program ki execution na ruke  */}
              {/* jb video ki koi length hu tb ye kam hu  */}
              {video?.lengthSeconds && (

                    <VideoLength time={video?.lengthSeconds}/>
              )}
           

          </div>

          <div className="flex text-white mt-2">

            <div className="flex items-start">

              <div className="flex h-9 w-9 rounded-full overflow-hidden">

                <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} alt="" />
              </div>
            </div>

            <div className="flex flex-col ml-3 overflow-hidden">

              <span className="text-sm font-bold line-clamp-2">

                {video?.title}
              </span>

              <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>

                {video?.author?.title}
                {
                  video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (

                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
                  )
                }
              </span>

              <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">

                <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>

                <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative mx-1 top-[-10px]'>.</span>

                <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </>
  );
};

export default VideoCard;
