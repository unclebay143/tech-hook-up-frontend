const daytimegreeting = () => {
  let today = new Date();
  let hour = today.getHours();

  const greetingType = {
    morning: "Good Morning 🔆",
    afternoon: "Good Afternoon 🌞",
    evening: "Good Evening 🌙",
    night: "Good Night 🌙",
  };

  const isMorning = hour >= 5 && hour < 12 && "morning";
  const isAfternoon = hour >= 12 && hour < 18 && "afternoon";
  const isEvening = hour >= 18 && hour < 24 && "evening";
  const isNight = hour >= 0 && hour < 5 && "night";

  return greetingType[isMorning || isAfternoon || isEvening || isNight];
};

export default daytimegreeting;
