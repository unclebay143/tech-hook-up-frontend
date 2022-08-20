import * as Yup from "yup";

const SignUpWithPasswordSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, "Username is too short")
    .max(50)
    .required("Username is required"),
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
