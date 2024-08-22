import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Form2Screen = ({ route, navigation }) => {
  const { userData } = route.params;
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const validateAndNavigate = () => {
    if (address === '' || city === '' || state === '' || zip === '') {
      alert('Error', 'All fields are required!');
      return;
    }
    navigation.navigate('Form3', { userData: { ...userData, address, city, state, zip } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address:</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <Text style={styles.label}>City:</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} />

      <Text style={styles.label}>State:</Text>
      <TextInput style={styles.input} value={state} onChangeText={setState} />

      <Text style={styles.label}>Zip Code:</Text>
      <TextInput style={styles.input} value={zip} onChangeText={setZip} keyboardType="numeric" />

      <Button title="Next" onPress={validateAndNavigate} />
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

export default Form2Screen;
