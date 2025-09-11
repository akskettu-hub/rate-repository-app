import { Alert, Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: theme.colors.red,
    marginLeft: 5,
  },
});

const UserReviewsItemButtons = ({ repoId, reviewId, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const onPressLinkToRepo = () => {
    navigate(`/${repoId}`, { replace: true });
  };

  const confirmDeleteReview = async () => {
    await deleteReview(reviewId);
    refetch();
  };

  const deleteReviewAlert = () =>
    Alert.alert(
      "Delete review?",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("pressed Cancel"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => confirmDeleteReview(),
        },
      ],
    );

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.viewButton, styles.button]}
        onPress={onPressLinkToRepo}
      >
        <Text fontSize={"body"} fontWeight={"bold"} color={"white"}>
          View repository
        </Text>
      </Pressable>
      <Pressable
        style={[styles.deleteButton, styles.button]}
        onPress={deleteReviewAlert}
      >
        <Text fontSize={"body"} fontWeight={"bold"} color={"white"}>
          Delete review
        </Text>
      </Pressable>
    </View>
  );
};

export default UserReviewsItemButtons;
