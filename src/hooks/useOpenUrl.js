/* eslint-disable no-undef */
import * as Linking from "expo-linking";

const useOpenUrl = () => {
  const openUrl = async (url) => {
    console.log("Pressed open github");
    console.log("url: ", url);

    try {
      const canOpenLink = await Linking.canOpenURL(url);
      if (canOpenLink) {
        const openedUrl = await Linking.openURL(url);
        console.log("Opened Url successfully: ", openedUrl);
      } else {
        console.error("Error checking link: ", url);
      }
    } catch (e) {
      console.error("Error opening link: ", e);
    }
  };
  return openUrl;
};

export default useOpenUrl;
