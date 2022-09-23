import HotToast from "../notification/hot-toast";
import axiosConfig from "./axios.config";

const signUpWithPassword = async (values, setSubmitting) => {
  try {
    const { userName, passWord } = values;
    const response = await axiosConfig.post("/user", {
      userName,
      passWord,
    });
    HotToast.Success("Signup Success.", "👏");
    setSubmitting(false);
    loginWithPassword({ userName, passWord, hideToast: true }); // function expect object values - hide login toast for signup toast
    return response;
  } catch (error) {
    setSubmitting(false);
    HotToast.Failed("Signup failed", "😞");
  }
};

const checkUserNameAvailability = async (username) => {
  const response = await axiosConfig.post("/user/check/" + username);
  return response;
};

const setToken = (token) => {
  localStorage.setItem("_user_token", JSON.stringify(token));
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem("_user_token")) || {};
};

const removeToken = () => {
  localStorage.removeItem("_user_token");
};

const loginWithPassword = async (values, setSubmitting) => {
  const { userName, passWord, hideToast } = values;

  try {
    const response = await axiosConfig.post("/user/login", {
      userName,
      passWord,
    });
    setToken(response?.data);
    if (hideToast) {
      return; // login is still successful
    } else {
      HotToast.Success("Login Success.");
      window.location.href = "/";
    }
  } catch (error) {
    console.log(error);
    HotToast.Failed("Login Failed.", "😞");
    setSubmitting(false);
  }
};

const loadProfileByJWT = async () => {
  try {
    const { accessToken } = getToken();

    const response = await axiosConfig.get("/user/me", {
      headers: {
        Authorization: `${accessToken}`,
        Accept: "application/json",
      },
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const saveProfile = async (profileData) => {
  const { userId, accessToken } = getToken();
  // console.log({ userId, ...profileData });
  try {
    const response = await axiosConfig.post(
      "/user/save-profile",
      {
        userId,
        ...profileData,
      },
      {
        headers: {
          Authorization: `${accessToken}`,
          Accept: "application/json",
        },
      }
    );

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const logOut = () => {
  try {
    console.log("in");
    removeToken();
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
};
// fetch all users
const fetchUsers = async (page) => {
  try {
    const res = await axiosConfig.get(`/?page=${page}`);

    const randomTechRole = [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "Product Manager",
      "Project Manager",
      "UX Designer",
      "UI Designer",
      "QA Engineer",
      "DevOps Engineer",
    ];

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
          techRole:
            randomTechRole[Math.floor(Math.random() * randomTechRole.length)],
        };
      });
    return users;
  } catch (error) {
    console.log(error);
  }
};

const UserService = {
  fetchUsers,
  signUpWithPassword,
  checkUserNameAvailability,
  loginWithPassword,
  saveProfile,
  loadProfileByJWT,
  logOut,
};

export default UserService;
