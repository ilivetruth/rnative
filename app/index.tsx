import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Index() {
  
  const [input, setInput] = useState("")
  const [amount, setAmount] = useState(''); // State to hold the amount as a string
  const [time, setTime] = useState(null); // State to hold the time as a Date object

  const handleButtonPress = () => {
    setTime(new Date()); // Set the current time when the button is pressed
  };
  
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
        <Button title="Set Time" onPress={handleButtonPress} />
        {time && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.input}>Amount: {amount}</Text>
          <Text style={styles.input}>Time: {time.toString()}</Text>
        </View>
      )}
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