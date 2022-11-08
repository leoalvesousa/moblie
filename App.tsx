import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text, Center} from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme'
import { Loading } from './src/components/Loading'
import { AuthContextProvider } from './src/contexts/AuthContext'
import { Routes } from './src/routes'

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>

    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
