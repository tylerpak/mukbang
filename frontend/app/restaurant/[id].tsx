import {View, Text, ScrollView} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import {samplePosts, sampleRestaurants} from "@/util/sampleData";
import {Post, Restaurant} from "@/util/types";
import RestaurantPost from "@/components/RestaurantPost";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function RestaurantPage() {
    const {id} = useLocalSearchParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined);
    const [reviews, setReviews] = useState<Post[]>([]);
    const [tab, setTab] = useState('deals');

    const getRestaurant = sampleRestaurants.find((rest) => rest.id === Number(id));
    const getReviews = samplePosts.filter((reviews) => reviews.restaurant.id === Number(id));

    useEffect(() => {
        setRestaurant(getRestaurant);
        setReviews(getReviews);
    }, [id]);

    if (!restaurant) return null;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Stack.Screen options={{title: restaurant.name}}/>

            <ScrollView contentContainerStyle={{padding: 5}} className="px-5 py-4">

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

                <View className="flex w-full max-w-sm flex-col gap-6">
                    <Tabs value={tab} onValueChange={setTab} className="mb-6 p-4 rounded-xl bg-gray-100">
                        <TabsList>
                            <TabsTrigger value="deal"><Text>Deals</Text></TabsTrigger>
                            <TabsTrigger value="reviews"><Text>Reviews</Text></TabsTrigger>
                        </TabsList>

                        <TabsContent value="deal">
                            <Text>What</Text>
                        </TabsContent>

                        <TabsContent value="reviews">
                            <View className="rounded-xl bg-gray-100">
                                {reviews.map((review) => (
                                    <RestaurantPost key={review.id} post={review}/>
                                ))}
                            </View>
                        </TabsContent>
                    </Tabs>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}