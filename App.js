import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as FlexmonsterReactNative from 'react-native-flexmonster';

export default function App() {
  return (
      <View style={{ flex: 1 }}>
            <FlexmonsterReactNative.Pivot
             report="https://cdn.flexmonster.com/reports/report.json"
            />
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
});
