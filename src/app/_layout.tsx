import React from 'react';
import { Stack } from 'expo-router';
import AppHeader from '../components/appHeader'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        header: () => <AppHeader />,
      }} 
    />
  );
}
