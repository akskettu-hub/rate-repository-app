import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    // const tokenBefore = await authStorage.getAccessToken();
    // console.log("Ac before sign out: ", tokenBefore);

    await authStorage.removeAccessToken();

    // const tokenAfter = await authStorage.getAccessToken();
    // console.log("Ac after sign out: ", tokenAfter);

    await apolloClient.resetStore();

    // eslint-disable-next-line no-undef
    console.log("user logged out.");
  };

  return signOut;
};

export default useSignOut;
