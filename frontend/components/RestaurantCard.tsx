import {HappyHourDeal, Restaurant} from "@/util/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {sampleHappyHourDeals, sampleRestaurants} from "@/util/sampleData";

interface RestaurantCardProps  {
    restaurant: Restaurant
    setSelectedRestaurant: (restaurant: Restaurant) => void;
}

const RestaurantCard = ( {restaurant, setSelectedRestaurant}: RestaurantCardProps) => {
    const [deals, setDeals] = useState<HappyHourDeal[]>([])
    const handlePress = () => {
        setSelectedRestaurant(restaurant);
    };



    useEffect(() => {
        const linkedDeals = sampleHappyHourDeals.filter(
            deal => deal.restaurantId === restaurant.id
        );
        setDeals(linkedDeals);
    }, [restaurant]);

    return (
            <Card className={'bg-amber-200'}>
                <TouchableOpacity onPress={handlePress}>
                <CardHeader>
                   <CardTitle>{restaurant.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    {deals.map(deal => (
                        <Text key={deal.id}>Deal: {deal.description}</Text>
                    ))}
                </CardContent>
                </TouchableOpacity>
            </Card>
    );
};

export default RestaurantCard;