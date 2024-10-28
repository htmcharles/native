import React from 'react';
import { View, Text } from 'react-native';
import { vars } from 'nativewind';

// Define custom theme variables
const userTheme = vars({
  '--color-values': '0 255 0',
  '--color-rgb': 'rgb(0 0 255)'
});

export default function RootLayout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Text style={{ color: 'var(--color-rgb)' }}>Access as a theme value</Text>
      <Text style={{ color: 'rgb(0 0 255)' }}>Or the variable directly</Text>

      {/* Variables can be changed inline */}
      <View style={userTheme}>
        <Text style={{ color: 'rgb(0 255 0)' }}>I am now green!</Text>
        <Text style={{ color: 'rgb(0 0 255)' }}>I am now blue!</Text>
      </View>
    </View>
  );
}
