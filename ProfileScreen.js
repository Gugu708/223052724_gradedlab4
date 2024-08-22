import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const userData = {
  name: 'Siphesihle ',
  address: '1234 Elm Street, Springfield',
  email: 'sihlek123@gmail.com',
};

const ProfileScreen = () => {
  const [textColor, setTextColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState(''); 
  const [editingTextColor, setEditingTextColor] = useState(textColor);
  const [editingBackgroundColor, setEditingBackgroundColor] = useState(backgroundColor);

  const handleSaveChanges = () => {
    setTextColor(editingTextColor);
    setBackgroundColor(editingBackgroundColor);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: textColor }]}>Name</Text>
        <Text style={[styles.cardContent, { color: textColor }]}>{userData.name}</Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: textColor }]}>Address</Text>
        <Text style={[styles.cardContent, { color: textColor }]}>{userData.address}</Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: textColor }]}>Email</Text>
        <Text style={[styles.cardContent, { color: textColor }]}>{userData.email}</Text>
      </View>

      <View style={styles.customizationSection}>
        <Text style={styles.customizationTitle}>Customize App Theme</Text>
        
        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholder="Enter text color... "
          value={editingTextColor}
          onChangeText={setEditingTextColor}
        />
        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholder="Enter background color..."
          value={editingBackgroundColor}
          onChangeText={setEditingBackgroundColor}
        />

        <Button title="Save Changes" onPress={handleSaveChanges} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '',
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 16,
    marginTop: 5,
  },
  customizationSection: {
    marginTop: 20,
  },
  customizationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
