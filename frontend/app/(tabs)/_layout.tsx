import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="login" />
            <Tabs.Screen
                name="home"
                options={{ headerShown: false }}
            />
        </Tabs>
    );
}