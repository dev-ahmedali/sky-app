import React from 'react';
import { useDispatch } from 'react-redux';
import likeImage from '../../assets/like.svg';
import unlikeImage from '../../assets/unlike.svg';
import { updateVideoLikeUnlike } from '../../features/video/videoSlice';

export default function LikeUnlike({ likes, unlikes, id }) {
  const dispatch = useDispatch();

  const reactionHandler = ({ id, reaction }) => {
    dispatch(updateVideoLikeUnlike({ id, reaction }));
  };
  return (
    <div>
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0 cursor-pointer">
            <img
              className="w-5 block"
              src={likeImage}
              alt="Like"
              onClick={() => reactionHandler({ id, reaction: 'like' })}
            />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {likes >= 1000 ? `${likes}K` : likes}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0 cursor-pointer">
            <img
              className="w-5 block"
              src={unlikeImage}
              alt="Unlike"
              onClick={() => reactionHandler({ id, reaction: 'unlike' })}
            />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {unlikes >= 1000 ? `${unlikes}K` : unlikes}
          </div>
        </div>
      </div>
    </div>
  );
}
