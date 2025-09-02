import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  input: {
    margin: 12,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colors.textSecondary,
    padding: 10,
  },
  submit: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    margin: 12,
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        style={styles.input}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        style={styles.input}
        onChangeText={formik.handleChange("password")}
        secureTextEntry={true}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.submit}>
        <Text fontSize={"subheading"} fontWeight={"bold"} color={"white"}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
