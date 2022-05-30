import axiosConfig from "./axios.config";

// fetch all users
const fetchUsers = async (page) => {
  try {
    const res = await axiosConfig.get(`/?page=${page}`);

    // randomly add follow property to the res.data.data
    const users = res.data.data
      .filter((user) => user.id !== 12) // id 12 user's image is not squared so it is not visible
      .map((user) => {
        return {
          ...user,
          following: Math.random() > 0.5,
          followersCount: Math.floor(Math.random() * 1000),
          followingCount: Math.floor(Math.random() * 1000),
          hooksCount: Math.floor(Math.random() * 5),
          rate: Math.floor(Math.random() * 5) + 1,
          verified: Math.random() > 0.5,
        };
      });
    return users;
  } catch (error) {
    console.log(error);
  }
};

const UserService = {
  fetchUsers,
};

export default UserService;
