import {Tabs} from 'expo-router';
import React from 'react';
import {IconSymbol} from "@/app-example/components/ui/icon-symbol";
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
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                }}
            />
        </Tabs>
    );
}
