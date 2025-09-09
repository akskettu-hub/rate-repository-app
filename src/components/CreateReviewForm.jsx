import { useFormik } from "formik";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(3, "Repository owner name must be at least 3 characters long")
    .required("Repository user name is required"),
  repositoryName: yup
    .string()
    .min(3, "Repository name must be at least 3 characters long")
    .required("Repository name is required"),
  rating: yup
    .number()
    .transform((value, originalValue) =>
      Number.isNaN(value) ? undefined : Number(originalValue),
    )
    .typeError("Rating must be a number")
    .integer("Rating must be an integer")
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is required"),
  text: yup.string(),
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

const CreateReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const parsedValues = {
      ...values,
      rating: Number(values.rating),
    };
    console.log("pressed create review, values: ", parsedValues);

    const { rating, repositoryName, text, ownerName } = parsedValues;

    const payload = await createReview({
      rating,
      repositoryName,
      text,
      ownerName,
    });
    console.log("create review result: ", payload);

    if (payload.data?.createReview?.repositoryId) {
      navigate(payload.data?.createReview?.repositoryId, { replace: true });
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
        placeholder="Repository owner name"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={styles.error}>{formik.errors.ownerName}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.error}>{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.error}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Review"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
        multiline={true}
      />
      {formik.touched.text && formik.errors.text && (
        <Text style={styles.error}>{formik.errors.text}</Text>
      )}

      <Pressable onPress={formik.handleSubmit} style={styles.submit}>
        <Text fontSize={"subheading"} fontWeight={"bold"} color={"white"}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
