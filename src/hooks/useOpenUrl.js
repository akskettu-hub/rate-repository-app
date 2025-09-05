import * as Linking from 'expo-linking';

const useOpenUrl = () => {
  const openUrl = async (url) => {

    console.log("pressed open github")
    console.log("url: ", url)
    const canOpenLink = await Linking.canOpenURL(url)
    console.log("can Open Link: ", canOpenLink)

    const openedUrl = await Linking.openURL(url)
    console.log("Opened Url successfully: ", openedUrl)

  }
  return openUrl
}

export default useOpenUrl
