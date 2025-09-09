import * as yup from "yup";
import theme from "../theme";
import { useFormik } from "formik";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be between 5 and 30 characters in lenght")
    .max(30, "Username must be between 5 and 30 characters in lenght")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be between 5 and 50 characters in lenght")
    .max(50, "Password must be between 5 and 50 characters in lenght")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Password confirm is required"),
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 5,
  },
  input: {
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colors.textSecondary,
    padding: 10,
  },
  submit: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },
  error: {
    marginHorizontal: 10,
    color: "red",
  },
});

const SignUpForm = () => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log("Hit sign up, values: ", values);
    // TODO: implement signup
    const { username, password } = values;

    const payload = await createUser({ username, password });

    console.log("create user payload", payload);

    if (payload.data?.createUser) {
      // log newly create user in
      await signIn({ username, password });
      navigate("/", { replace: true });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry={true}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange("passwordConfirm")}
        secureTextEntry={true}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={styles.error}>{formik.errors.passwordConfirm}</Text>
      )}

      <Pressable onPress={formik.handleSubmit} style={styles.submit}>
        <Text fontSize={"subheading"} fontWeight={"bold"} color={"white"}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
