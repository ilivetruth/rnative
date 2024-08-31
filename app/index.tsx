import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput} from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Index() {
  
  const [input, setInput] = useState("")
  
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedView style={styles.container}>
        <ThemedText>Welcome to the app!</ThemedText>
        <TextInput style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Enter Amount"
        placeholderTextColor='green'
        keyboardType="numeric"
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%", 
    height: "95%",
    borderRadius: 25,
  },
  input: {
    color: 'green',
  }
});