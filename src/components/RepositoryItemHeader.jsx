import { Image, StyleSheet, View } from "react-native"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    display: 'flex',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 10,
  },

  textContaner: {
    flexDirection: 'column',
    flexShrink: 1,
  },

  item: {
    marginBottom: 5
  },

  itemLanguage: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  }
})

const RepositoryItemHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.textContaner}>
        <Text style={styles.item} fontWeight={'bold'} fontSize={'subheading'}>{item.fullName}</Text>
        <Text style={styles.item} color={'textSecondary'} >{item.description}</Text>
        <Text style={styles.itemLanguage} color={'white'} >{item.language}</Text>
      </View>
    </View>
  )
}
export default RepositoryItemHeader
