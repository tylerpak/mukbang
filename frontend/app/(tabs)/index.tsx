import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native";
import {sampleRestaurants} from "@/util/sampleData";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantDialog from "@/components/RestaurantDialog";
import {Stack} from "expo-router";
import {Restaurant} from "@/util/types"

const TabHome = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
    const [restaurantDialogOpen, setRestaurantDialogOpen] = useState<boolean>(false);

    const handleSelect = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant)
        setRestaurantDialogOpen(true)
    }

    const handleDialogClose = () => {
        setRestaurantDialogOpen(false);
    }

    useEffect(() => {
        setRestaurants(sampleRestaurants);
    }, []);

    return (
        <>
            <Stack.Screen options={{title: "Home"}}/>
            <ScrollView className={'flex-1'} contentContainerClassName={'gap-5 p-4'}>
                {restaurants.map((restaurant) =>
                    <RestaurantCard setSelectedRestaurant={handleSelect} restaurant={restaurant} key={restaurant.id}/>
                )}
            </ScrollView>

            <RestaurantDialog onClose={handleDialogClose} isOpen={restaurantDialogOpen}
                              restaurant={selectedRestaurant}/>
        </>
    );
};

export default TabHome;