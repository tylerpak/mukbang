import {View, Text} from "react-native";
import {Post} from "@/util/types";


interface RestaurantPostProps {
    post?: Post
}

const RestaurantPost = ({post}: RestaurantPostProps) => {

    return (
        <View>
            <Text>{post!.restaurant.name}</Text>
        </View>
    );
};

export default RestaurantPost;