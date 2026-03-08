import {Restaurant} from "@/util/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Text, TouchableOpacity} from "react-native";
import {router} from "expo-router";

interface RestaurantCardProps  {
    restaurant: Restaurant
}

const RestaurantCard = ( {restaurant}: RestaurantCardProps) => {

    const handlePress = () => {
        router.push(`/restaurant/${restaurant.id}`);
    };

    return (
            <Card className={'bg-amber-200'}>
                <TouchableOpacity onPress={handlePress}>
                <CardHeader>
                   <CardTitle>{restaurant.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Text>Deals:</Text>
                </CardContent>
                </TouchableOpacity>
            </Card>
    );
};

export default RestaurantCard;