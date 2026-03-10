import React from "react";
import {Stack} from "expo-router";
import "../global.css"
import Header from "@/components/Header";
import {PortalHost} from "@rn-primitives/portal";

export default function RootLayout() {
    return (
        <>
        <Stack screenOptions={{header: () => <Header/>}}>
                <Stack.Screen name="(tabs)" options={{}}/>
            </Stack>
            <PortalHost />
            </>
    );
}
