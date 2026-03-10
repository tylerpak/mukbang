import {Restaurant} from "@/util/types";
import React, {useState} from "react";
import {samplePosts} from "@/util/sampleData";
import {Linking, Pressable, ScrollView, Text, View} from "react-native";
import {Portal} from "@rn-primitives/portal";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import RestaurantPost from "@/components/RestaurantPost";

const hours = [
    {day: "Monday", hours: "9:00 AM - 9:00 PM"},
    {day: "Tuesday", hours: "9:00 AM - 9:00 PM"},
    {day: "Wednesday", hours: "9:00 AM - 9:00 PM"},
    {day: "Thursday", hours: "9:00 AM - 10:00 PM"},
    {day: "Friday", hours: "9:00 AM - 11:00 PM"},
    {day: "Saturday", hours: "10:00 AM - 11:00 PM"},
    {day: "Sunday", hours: "10:00 AM - 8:00 PM"},
];

type RestaurantDialogProps = {
    restaurant: Restaurant | null;
    isOpen: boolean;
    onClose: () => void;
};
const RestaurantDialog = ({restaurant, isOpen, onClose}: RestaurantDialogProps) => {
    const [tab, setTab] = useState('deal');
    const reviews = samplePosts.filter((reviews) => reviews.restaurant?.id === restaurant?.id);
    const openMap = () => {
        const address = "2511 Durwood St Austin, TX";

        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

        Linking.openURL(url);
    };


    return (
        <Portal name={'restaurant-dialog-portal'}>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className={'fixed mt-32 justify-end-end w-screen max-h-[90%] bg-white pb-10'}>
                    <ScrollView className="w-full"
                                showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
                        <Text className="text-3xl font-bold mb-1">{restaurant?.name}</Text>
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
                </DialogContent>
            </Dialog>
        </Portal>
    )
}

export default RestaurantDialog