import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/Home/HomeScreen";
import Description from "../screens/Description/Description";
import Discount from "../screens/Discounts/DiscountScreen"
import BottomTabNavigator from "./BottomTabNavigator";
import { navOptionHandler } from "../utils/funtions";

// import DepositScreen from "../screens/Deposit/DepositScreen";

const Stack = createStackNavigator();

export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
            }} initialRouteName="App">
                <Stack.Screen name="App" component={BottomTabNavigator} options={navOptionHandler} />
                {/* <Stack.Screen name="Deposit" component={DepositScreen} options={navOptionHandler} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}