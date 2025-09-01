import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    flexDirection: 'row',
    display: 'flex',
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: 'grey'
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
      <AppBarTab>Beans</AppBarTab>
    </View>

  )
};

export default AppBar;
