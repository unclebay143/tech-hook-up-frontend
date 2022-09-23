import UserService from "./user.service";

// const randomBg = ["custom-blue-bg", "custom-red-bg", "bg-gray-700"];
const randomBg = [" dark:bg-gray-700"];
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

const usersFeed = async () => {
  const getUsers = await Promise.all([
    UserService.fetchUsers(1),
    UserService.fetchUsers(2),
  ]);

  const users = await getUsers.reduce((acc, user) => {
    return [...acc, ...user];
  }, []);

  const usersWithFeed = await users.map((user, index) => {
    return {
      id: Math.random() * 199 + "key2",
      author: user.first_name + " " + user.last_name,
      authorBrief:
        randomTechRole[Math.floor(Math.random() * randomTechRole.length)],
      description: "I need a laravel backend developer for a project hook up",
      image: user.avatar,
      link: "https://via.placeholder.com/150",
      bg: randomBg[Math.floor(Math.random() * randomBg.length)],
      count: user.id,
      data: user,
    };
  });
  return usersWithFeed;
};

const FeedService = {
  usersFeed,
};

export default FeedService;
