import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <Text color={'textPrimary'} fontSize={'subheading'}>This should be primary</Text>
      <Text color={'textSecondary'} fontSize={'subheading'}>This is a subheading</Text>
      <Text fontWeight={'bold'}>This is in bold</Text>
      <Text color={'textPrimary'} >This should be just regular text. does this do anything?</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
