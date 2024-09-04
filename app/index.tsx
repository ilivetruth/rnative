import React, { useState } from 'react';
import { View, Text, TextInput, Button, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function index() {
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [data, setData] = useState({ amount: '', time: null }); // State to hold the object with amount and time

  const handleSetCurrentTime = () => {
    const currentTime = new Date();
    setTime(currentTime);
    setData({ amount, time: currentTime }); // Save amount and current time in the object
  };

  const handleShowPicker = () => {
    setShowPicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    const chosenDate = selectedDate || time;
    setShowPicker(Platform.OS === 'ios'); 
    setTime(chosenDate);
    setData({ amount, time: chosenDate }); // Save amount and chosen time in the object
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
        
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setAmount(text);
            setData({ amount: text, time }); // Update amount in the object
          }}
          value={amount}
          placeholder="Enter Amount"
          placeholderTextColor="green"
          keyboardType="numeric"
        />
        
        <Button title="Set Current Time" onPress={handleSetCurrentTime} />

        <Button title="Pick Date & Time" onPress={handleShowPicker} />

        {showPicker && (
          <DateTimePicker
            value={time || new Date()}
            mode="datetime"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {data.time && (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.input}>Amount: {data.amount}</Text>
            <Text style={styles.input}>Time: {data.time.toString()}</Text>
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