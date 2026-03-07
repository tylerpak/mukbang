import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import {sampleRestaurants} from "@/util/sampleData";
import {Restaurant} from "@/util/types";

export default function RestaurantPage() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined);

    useEffect(() => {
        const getRestaurant = sampleRestaurants.find((rest) => rest.id === Number(id));
        setRestaurant(getRestaurant);
    }, [id]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Stack.Screen options={{ title: restaurant.name }} />

            <ScrollView contentContainerStyle={{ padding: 5 }} className="px-5 py-4">

                <Text className="text-3xl font-bold mb-1">{restaurant.name}</Text>
                <Text className="text-sm text-gray-500 mb-5">Cuisine</Text>

                <View className="mb-6 p-4 rounded-xl bg-gray-100">
                    <Text className="text-lg font-semibold mb-2">About</Text>
                    <Text className="text-gray-700 text-sm">
                        where the restaurant description will go
                    </Text>
                </View>

                <View className="mb-6 p-4 rounded-xl bg-gray-100">
                    <Text className="text-lg font-semibold mb-2">Location</Text>
                    <Text className="text-gray-700 text-sm">
                        123 Main St, Austin, TX
                    </Text>
                </View>

                <View className="mb-6 p-4 rounded-xl bg-gray-100">
                    <Text className="text-lg font-semibold mb-2">Reviews</Text>
                    <Text className="text-gray-700 text-sm">
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}