import React from "react";
import { Stack } from "expo-router";
import {Card} from "@/components/ui/card";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}