import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ rating, repositoryName, text, ownerName }) => {
    const payload = await mutate({
      variables: {
        review: {
          rating: rating,
          repositoryName: repositoryName,
          text: text,
          ownerName: ownerName,
        }
      }
    })

    // const { data } = payload

    return payload
  }

  return [createReview, result]
}

export default useCreateReview
