import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (deleteReviewId) => {
    // console.log(deleteReviewId)
    const payload = await mutate({
      variables: {
        deleteReviewId: deleteReviewId,
      },
    });

    return payload;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
