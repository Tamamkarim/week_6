import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  //console.log('First app version working!!');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default App;
