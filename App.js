import { Amplify } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar as St } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import Navigator from './src/navigation';
import awsconfig from './src/aws-exports';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style='auto' />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: St.currentHeight,
  },
});
