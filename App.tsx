import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  console.log('First app version working!!')
  return (
    <SafeAreaProvider style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    // quick safearea fix for status bar
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});

export default App;
