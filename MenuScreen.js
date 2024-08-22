import React from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = ({ cart = [], setCart }) => {
  const navigation = useNavigation();

  const foodItems = [
    {
      id: '1',
      name: 'Bunny Chow',
      image: 'https://mediavine-res.cloudinary.com/image/upload/s--bBsTOE8M--/ar_1:1,c_fill,f_auto,fl_lossy,q_auto/v1660579062/v7qp5xmt5p8nn5c40qth.jpg',
      price: 'R50.00',
    },
    {
      id: '2',
      name: 'Bobotie',
      image: 'https://miro.medium.com/v2/resize:fit:663/1*jc3-HJu9v05KnKZxqQvCaQ.png',
      price: 'R75.00',
    },
    {
      id: '3',
      name: 'Pizza',
      image: 'https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg',
      price: 'R40.00',
    },
    {
      id: '4',
      name: 'Cape Malay Curry',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tGfrqWf8EkKS9LKtw-e3_twHtQhRGgSodw&s',
      price: 'R85.00',
    },
    {
      id: '5',
      name: 'Vetkoek',
      image: 'https://www.unileverfoodsolutions.co.za/dam/global-ufs/mcos/SOUTH-AFRICA/calcmenu/recipes/ZA-recipes/h2-campaign/deli/beef-mince-curry-magwinga-or-vetkoek-preview.jpg',
      price: 'R25.00',
    },
    {
      id: '6',
      name: 'Pap and Sheba',
      image: 'https://www.sidechef.com/recipe/37d48b2c-964c-430a-b4ae-16c8f7346beb.jpg?d=1408x1120',
      price: 'R50.00',
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    alert(`${item.name} has been added to your cart.`);
    navigation.navigate('Cart'); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartButtonText}>View Cart ({cart.length})</Text>
      </TouchableOpacity>
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <TouchableOpacity 
        style={styles.profileButton} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginVertical: 8,
  },
  profileButton: {
    marginTop: 16,
    padding: 10,
    alignItems: 'center',
  },
  profileButtonText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default MenuScreen;
