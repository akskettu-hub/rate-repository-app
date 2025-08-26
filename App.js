import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Beans, beans beans!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// these lines are superfluous. Added to make sure linter picks something up. To be deleted
console.log('something')
const beans = params => params * 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
