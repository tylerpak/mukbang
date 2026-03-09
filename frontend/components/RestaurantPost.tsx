import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Post} from "@/util/types";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "expo-router";


interface RestaurantPostProps {
    post?: Post
}

const RestaurantPost = ({post}: RestaurantPostProps) => {
    const postTime = new Date(post!.createdOn)
    const convertedPostTime = postTime.toLocaleDateString();

    return (
        <Card className={'bg-gray-100'}>
            <CardHeader>
                <CardTitle>{post?.restaurant.name}</CardTitle>
                <CardDescription>{post?.createdBy.username}</CardDescription>
            </CardHeader>
            <CardContent>
                <Text>{post?.description}</Text>
            </CardContent>
            <CardFooter>
                <Text>{convertedPostTime}</Text>
            </CardFooter>
        </Card>
    );
};

export default RestaurantPost;