import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FormContext } from './FormContext';
import { ThemeContext } from './ThemeContext';

const PaymentDetailsScreen = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const { theme } = useContext(ThemeContext);
  const [creditCardNumber, setCreditCardNumber] = useState(formData.creditCardNumber);
  const [expirationDate, setExpirationDate] = useState(formData.expirationDate);
  const [cvv, setCvv] = useState(formData.cvv);

  const handleSubmit = () => {
    const cardNumberValid = /^[0-9]{16}$/.test(creditCardNumber);
    const expirationDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate);
    const cvvValid = /^[0-9]{3}$/.test(cvv);

    if (cardNumberValid && expirationDateValid && cvvValid) {
      updateFormData('creditCardNumber', creditCardNumber);
      updateFormData('expirationDate', expirationDate);
      updateFormData('cvv', cvv);
      Alert.alert('Payment Details Submitted', 'Your payment details have been submitted successfully.');
    } else {
      Alert.alert('Validation Error', 'Please check your payment details and try again.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.label, { color: theme.textColor }]}>Credit Card Number:</Text>
      <TextInput
        style={[styles.input, { color: theme.textColor }]}
        keyboardType="numeric"
        maxLength={16}
        value={creditCardNumber}
        onChangeText={setCreditCardNumber}
      />
      <Text style={[styles.label, { color: theme.textColor }]}>Expiration Date (MM/YY):</Text>
      <TextInput
        style={[styles.input, { color: theme.textColor }]}
        keyboardType="numeric"
        maxLength={5}
        value={expirationDate}
        onChangeText={setExpirationDate}
      />
      <Text style={[styles.label, { color: theme.textColor }]}>CVV:</Text>
      <TextInput
        style={[styles.input, { color: theme.textColor }]}
        keyboardType="numeric"
        maxLength={3}
        value={cvv}
        onChangeText={setCvv}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default PaymentDetailsScreen;
