import React from 'react';
import { Stack } from 'expo-router';
import AppHeader from '../components/appHeader'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Stack
      screenOptions={{
        header: () => <AppHeader />,
      }} 
      />
    </SafeAreaView>
  );
}
