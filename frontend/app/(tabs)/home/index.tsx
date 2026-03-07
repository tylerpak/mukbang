import React, {useEffect, useState} from 'react';
import {ScrollView, View} from "react-native";
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
            <ScrollView>
            <View>
                {restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                ))}
            </View>
            </ScrollView>
        </>
    );
};

export default TabHome;