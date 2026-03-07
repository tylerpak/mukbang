import {Restaurant} from "@/util/types";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";

interface RestaurantCardProps  {
    restaurant: Restaurant
}

const RestaurantCard = ( {restaurant}: RestaurantCardProps) => {


    return (
            <Card className={'bg-amber-200'}>
                <CardHeader>
                   <CardTitle>{restaurant.name}</CardTitle>
                </CardHeader>
            </Card>
    );
};

export default RestaurantCard;