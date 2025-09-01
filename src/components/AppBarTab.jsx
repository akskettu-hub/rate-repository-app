import { Pressable, StyleSheet } from "react-native"
import Text from "./Text"

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  }
})

const AppBarTab = ({ children }) => {
  return (
    <Pressable style={styles.container} onPress={() => { console.log('pressed Pressable') }}>
      <Text color={'white'} fontWeight={'bold'} fontSize={'heading'} >
        {children}
      </Text>
    </Pressable>
  )
}

export default AppBarTab
