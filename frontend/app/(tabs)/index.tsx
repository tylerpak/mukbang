import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, ScrollView} from "react-native";
import {sampleRestaurants} from "@/util/sampleData";
import RestaurantCard from "@/components/restaurantCard";
import {Stack} from "expo-router";
import {Restaurant} from "@/util/types"

const TabHome = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        setRestaurants(sampleRestaurants);
    }, []);

    return (
        <>
            <Stack.Screen options={{title: "Home"}}/>
            <ScrollView className={'flex-1'} contentContainerClassName={'gap-5 p-4'}>
                {restaurants.map((restaurant) =>
                    <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
                )}
            </ScrollView>
        </>
    );
};

export default TabHome;