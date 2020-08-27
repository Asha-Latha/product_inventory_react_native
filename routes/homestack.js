import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddProduct from '../components/addFriend';
import DisplayProducts from '../components/displayAllProducts';
import Login from '../components/login';
import SelectedProductDetails from '../components/productDetails';
import EditProduct from '../components/editProduct';

const Stack = createStackNavigator()
function MyStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: 'wheat',
                        height: 100
                    }
                }}
                headerMode='float'>
                <Stack.Screen name="AddProducts" component={AddProduct}></Stack.Screen>
                <Stack.Screen name="DisplayProducts" component={DisplayProducts}></Stack.Screen>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="SelectedProduct" component={SelectedProductDetails}></Stack.Screen>
                <Stack.Screen name="EditProduct" component={EditProduct}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator