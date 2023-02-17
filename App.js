import { Amplify } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar as St } from 'react-native';
import Navigator from './src/navigation';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: St.currentHeight,
  },
});
