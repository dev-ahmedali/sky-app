import axios from '../../utils/axios';

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};

export const updateLikeUnlike = async ({ id, reaction }) => {
  const { data } = await axios.get(`/videos/${id}`);
  if (data) {
    let updateLikeUnlike =
      reaction === 'like'
        ? {
            likes: data.likes + 1,
            unlikes: reaction === 'unlike' ? data.unlikes - 1 : data.unlikes,
          }
        : {
            unlikes: data.unlikes + 1,
            likes: reaction === 'like' ? data.likes - 1 : data.likes,
          };
    const response = await axios.patch(`/videos/${id}`, updateLikeUnlike);
    return response.data;
  }
};
