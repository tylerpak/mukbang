import { Tabs } from 'expo-router';
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

        </Tabs>
    );
}
