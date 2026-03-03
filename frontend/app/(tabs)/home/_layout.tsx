import { Stack } from "expo-router";

export default function HomeStackLayout() {
    return (
    <Stack>
        <Stack.Screen
            name="index"
            options={{ headerShown: true }}
        />
        <Stack.Screen
            name="[id]"
            options={{ headerShown: true }}
        />
    </Stack>
    );
}