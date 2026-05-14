import React from 'react';
import { Stack } from 'expo-router';
import AppHeader from '../components/appHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {

  return (
    <SafeAreaProvider style={{
      flex: 1,
    }}>
      <PaperProvider>
        <Stack
        screenOptions={{
          header: () => <AppHeader />,
        }} 
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
