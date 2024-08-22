import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FormProvider } from './FormContext';
import { ThemeProvider } from './ThemeContext';

import PaymentDetailsScreen from './PaymentDetailsScreen';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Form1Screen from './Form1Screen';
import Form2Screen from './Form2Screen';
import Form3Screen from './Form3Screen';

// Navigation setup
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FormsTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Form1" component={Form1Screen} options={{ title: 'User Details' }} />
    <Tab.Screen name="Form2" component={Form2Screen} options={{ title: 'Address Details' }} />
    <Tab.Screen name="Form3" component={Form3Screen} options={{ title: 'Payment Details' }} />
  </Tab.Navigator>
);

const MainTabNavigator = ({ cart, setCart }) => (
  <Tab.Navigator>
    <Tab.Screen name="Menu">
      {props => <MenuScreen {...props} cart={cart} setCart={setCart} />}
    </Tab.Screen>
    <Tab.Screen name="Add details" component={FormsTabNavigator} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <FormProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home">
              {props => <MainTabNavigator {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            <Stack.Screen name="Cart">
              {props => <CartScreen {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </FormProvider>
  );
};

export default App;
