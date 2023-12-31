import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import COLORS from './src/consts/colors';
import InitialPage from './src/screens/seller/InitialPage';
import LoginPage from './src/screens/seller/LoginPage';
import RegDetailsPage from './src/screens/seller/RegDetailsPage';
import BusinessDetailsform from './src/screens/seller/BusinessDetailsform';
import CreateCredential from './src/screens/seller/CreateCredential';
import Home from './src/screens/seller/Home';
import Product from './src/screens/seller/Product';
import Profile from './src/screens/seller/Profile';
import AddOfferPage from './src/screens/seller/AddOfferPage';
import IDVerfication from './src/screens/seller/IDVerfication';
import BankDetailsForm from './src/screens/seller/BankDetailsForm';
import EditProfilePage from './src/screens/seller/EditProfilePage';
import RevanuePage from './src/screens/seller/RevenuePage';
import OrdersPage from './src/screens/seller/OrdersPage';
import UpdateOffer from './src/screens/seller/UpdateOffer';
import SellerScreen from './src/screens/seller/SellerScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {

  function DashBoard() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Product') {
              iconName = focused ? 'archive' : 'archive-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: [
            {

              display: 'flex',

              paddingTop: 10
            },
            null
          ],
          tabBarActiveTintColor: COLORS.primary, // active icon color
          tabBarInactiveTintColor: 'gray', // inactive icon color
        })}>
        <Tab.Screen name="Home" component={Home}
          options={{
            headerShown: true,
            title: 'Seller Home',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: { fontSize: 20, color: COLORS.white },
            headerStyle: { borderBottomRightRadius: 100, backgroundColor: COLORS.primary },
          }} />
        <Tab.Screen name='Product' component={Product}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: { fontSize: 20, color: COLORS.white },
            headerStyle: { backgroundColor: COLORS.primary },
          }} />
        <Tab.Screen name='Profile' component={Profile}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: { fontSize: 20, color: COLORS.white },
            headerStyle: { backgroundColor: COLORS.primary },
          }} />
      </Tab.Navigator>
    );

  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='InitialPage'>
        <Stack.Screen name='InitialPage' component={InitialPage} />
        <Stack.Screen name='SellerScreen' component={SellerScreen} />
        <Stack.Screen name='LoginPage' component={LoginPage}
          options={{
            headerShown: true,
            title: 'Login',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='RegDetailsPage' component={RegDetailsPage}
          options={{
            headerShown: true,
            title: 'Registration',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='BusinessDetailsform' component={BusinessDetailsform}
          options={{
            headerShown: true,
            title: 'Business Details',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='CreateCredential' component={CreateCredential}
          options={{
            headerShown: true,
            title: 'Username & Password',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='DashBoard' component={DashBoard} />
        <Stack.Screen name='AddOfferPage' component={AddOfferPage}
          options={{
            headerShown: true,
            title: 'Add Offer',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='IDVerfication' component={IDVerfication}
          options={{
            headerShown: true,
            title: 'ID Verfication',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='BankDetailsForm' component={BankDetailsForm}
          options={{
            headerShown: true,
            title: 'Bank',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='EditProfilePage' component={EditProfilePage}
          options={{
            headerShown: true,
            title: 'Edit Profile',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='RevanuePage' component={RevanuePage}
          options={{
            headerShown: true,
            title: 'Monthly Revanue',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='OrdersPage' component={OrdersPage}
          options={{
            headerShown: true,
            title: 'Orders',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
        <Stack.Screen name='UpdateOffer' component={UpdateOffer}
          options={{
            headerShown: true,
            title: 'Update Offer',
            headerTitleAlign: 'center',
            headerPressColor: '#3A95C2',
            headerTitleStyle: {
              fontSize: 20,
            },
          }} />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
