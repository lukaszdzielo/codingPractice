// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another piece of text!</Text>
      <Text style={styles.dummyText}>GOALS</Text>
      <Button  title="Tap me" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: { margin: 16, borderWidth: 1, backgroundColor: 'green', color: 'white', borderColor:'green', paddingBlock: 4, paddingInline: 12, borderRadius: 8,fontWeight: 'bold', fontSize: 16 }
});
