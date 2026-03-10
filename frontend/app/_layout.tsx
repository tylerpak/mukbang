import React from "react";
import {Stack} from "expo-router";
import "../global.css"
import Header from "@/components/Header";

export default function RootLayout() {
    return (
        // <Stack screenOptions={{header: () => <Header/>}}>
        // the header replaces react native's inherent back button
            <Stack>
                <Stack.Screen name="(tabs)" options={
                    {
                        title: 'Happiest Hour',
                        headerStyle: {backgroundColor: '#F59E0B'},
                    }}/>
                <Stack.Screen name="restaurant/[id]"/>
            </Stack>
    );
}
