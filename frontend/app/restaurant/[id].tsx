import {View, Text, ScrollView, Pressable, Linking} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import {samplePosts, sampleRestaurants} from "@/util/sampleData";
import {Post, Restaurant} from "@/util/types";
import RestaurantPost from "@/components/RestaurantPost";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const hours = [
    { day: "Monday", hours: "9:00 AM - 9:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 9:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 9:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 10:00 PM" },
    { day: "Friday", hours: "9:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 8:00 PM" },
];

export default function RestaurantPage() {
    const {id} = useLocalSearchParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | undefined>(undefined);
    const [reviews, setReviews] = useState<Post[]>([]);
    const [tab, setTab] = useState('deals');

    const getRestaurant = sampleRestaurants.find((rest) => rest.id === Number(id));
    const getReviews = samplePosts.filter((reviews) => reviews.restaurant.id === Number(id));

    const openMap = () => {
        const address = "2511 Durwood St Austin, TX";

        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

        Linking.openURL(url);
    };

    useEffect(() => {
        setRestaurant(getRestaurant);
        setReviews(getReviews);
    }, [id]);

    if (!restaurant) return null;

    return (
        <SafeAreaView className="flex-1 bg-white gap-3">
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

                <Accordion type='single' className={'mb-4'} collapsible>
                    <AccordionItem value='item-1' className={'border-0'}>
                        <AccordionTrigger>
                            <Text>Hours</Text>
                        </AccordionTrigger>
                        <AccordionContent>
                            <View className="rounded-xl bg-gray-100 p-3">
                                <View className="flex-row justify-between border-b pb-2 mb-2">
                                    <Text className="font-bold">Day</Text>
                                    <Text className="font-bold">Hours</Text>
                                </View>

                                {hours.map((item) => (
                                    <View
                                        key={item.day}
                                        className="flex-row justify-between py-2 border-b border-gray-200"
                                    >
                                        <Text>{item.day}</Text>
                                        <Text>{item.hours}</Text>
                                    </View>
                                ))}

                            </View>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <View className="mb-6 p-4 rounded-xl bg-gray-100 gap-2">
                    <Text className="text-lg font-semibold mb-2">Location</Text>
                    <Text className="text-gray-700 text-sm ">
                        123 Main St, Austin, TX
                    </Text>
                    <Pressable
                        onPress={openMap}
                        className="bg-blue-500 p-2 rounded-xl items-center"
                    >
                        <Text className="text-white font-semibold">View on Map</Text>
                    </Pressable>
                </View>

                <View className="flex w-full max-w-sm flex-col gap-6">
                    <Tabs value={tab} onValueChange={setTab} className="mb-6 p-4 rounded-xl bg-gray-100">
                        <TabsList>
                            <TabsTrigger value="deal"><Text>Deals</Text></TabsTrigger>
                            <TabsTrigger value="reviews"><Text>Reviews</Text></TabsTrigger>
                        </TabsList>

                        <TabsContent value="deal">
                        </TabsContent>

                        <TabsContent value="reviews">
                                {reviews.map((review) => (
                                    <RestaurantPost key={review.id} post={review}/>
                                ))}
                        </TabsContent>
                    </Tabs>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}