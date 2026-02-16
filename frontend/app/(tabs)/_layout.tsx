import {Tabs} from 'expo-router';
import React from 'react';
import {useColorScheme} from "react-native";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Login',
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                }}
            />
        </Tabs>
    );
}
