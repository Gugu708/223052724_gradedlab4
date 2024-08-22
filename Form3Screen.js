import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Form3Screen = ({ route, navigation }) => {
  const { userData } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const validateAndSubmit = () => {
    if (cardNumber === '' || expiryDate === '') {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    
    Alert.alert('Success', 'Form submitted successfully!');
    navigation.navigate('Profile', { userData: { ...userData, cardNumber, expiryDate } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number:</Text>
      <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" />

      <Text style={styles.label}>Expiry Date:</Text>
      <TextInput style={styles.input} value={expiryDate} onChangeText={setExpiryDate} />

      <Button title="Submit" onPress={validateAndSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default Form3Screen;
