import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import RepositoryView from "./RepositoryView";
import CreateReviewForm from "./CreateReviewForm";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.white,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="/:id" element={<RepositoryView />} />
        <Route path="createReview" element={<CreateReviewForm />} />
      </Routes>
    </View>
  );
};

export default Main;
