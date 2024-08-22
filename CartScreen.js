import React from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const CartScreen = ({ cart, setCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('R', '')) * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (item, type) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: type === 'increment' ? cartItem.quantity + 1 : cartItem.quantity - 1,
        };
      }
      return cartItem;
    }).filter(cartItem => cartItem.quantity > 0);
    setCart(updatedCart);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const proceedToCheckout = () => {
    Alert.alert(
      'Proceed to Checkout',
      'Are you sure you want to checkout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setCart([]);
            Alert.alert('Success', 'Your order has been placed!');
          },
        },
      ],
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: R{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item, 'decrement')}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item, 'increment')}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <Button title="Remove" onPress={() => removeItem(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.total}>Total: R{calculateTotal()}</Text>
            <Button title="Proceed to Checkout" onPress={proceedToCheckout} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemCard: {
    flexDirection: 'row',
    marginVertical: 8,
    padding: 16,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityButton: {
    fontSize: 20,
    width: 32,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 4,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  footer: {
    marginTop: 16,
    padding: 16,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CartScreen;
