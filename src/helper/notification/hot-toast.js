import toast from "react-hot-toast";

const Success = (message = "Success.", icon = "✅") =>
  toast.success(message, { icon: icon });

const Failed = (message = "Failed", icon = "⛔️") =>
  toast(message, { icon: icon });

const HotToast = {
  Success,
  Failed,
};

export default HotToast;
