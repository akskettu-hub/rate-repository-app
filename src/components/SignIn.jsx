import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
};

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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        style={styles.input}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        style={styles.input}
        onChangeText={formik.handleChange("password")}
        secureTextEntry={true}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.submit}>
        <Text fontSize={"subheading"} fontWeight={"bold"} color={"white"}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log("Data from signing in: ", data);
      navigate("/");
    } catch (e) {
      console.log("ApolloError:", e);
      console.log("GraphQL errors:", e?.graphQLErrors);
      console.log("Network errors:", e?.networkError);
      console.log("Message:", e?.message);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />
};

export default SignIn;
