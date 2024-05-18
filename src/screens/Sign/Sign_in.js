import React from "react";
import { View, Text, Image } from "react-native";
import auth from '@react-native-firebase/auth'
import { useState, useEffect } from "react";

function App() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser[user];
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe;
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View><Text>Login</Text></View>
        );
    }
    return (
        <View><Text>Welcome {user.email}</Text></View>
    )
}