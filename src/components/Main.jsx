import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <Text color={'textPrimary'} fontSize={'subheading'}>This should be primary</Text>
      <Text color={'textSecondary'} fontSize={'subheading'}>This is a subheading</Text>
      <Text fontWeight={'bold'}>This is in bold</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
