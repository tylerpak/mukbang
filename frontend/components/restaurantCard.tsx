import {Restaurant} from "@/util/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Text} from "react-native";

interface RestaurantCardProps  {
    restaurant: Restaurant
}

const RestaurantCard = ( {restaurant}: RestaurantCardProps) => {


    return (
            <Card className={'bg-amber-200'}>
                <CardHeader>
                   <CardTitle>{restaurant.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Text>Deals:</Text>
                </CardContent>
            </Card>
    );
};

export default RestaurantCard;