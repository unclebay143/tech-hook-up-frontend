import * as Yup from "yup";

const SignUpWithPasswordSchema = Yup.object().shape({
  // no special characters allowed
  userName: Yup.string()
    .min(4, "Username is too short")
    .max(50)
    .required("Username is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username can only contain alphanumeric characters"
    ),

  passWord: Yup.string()
    .min(8, "Password is too short")
    .max(50)
    .required("Password is required"),
  confirmPassWord: Yup.string()
    .oneOf([Yup.ref("passWord"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const UserSchema = {
  SignUpWithPasswordSchema,
};

export default UserSchema;
