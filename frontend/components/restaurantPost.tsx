import {View, Text, StyleSheet} from "react-native";
import {Post} from "@/util/types";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";


interface RestaurantPostProps {
    post?: Post
}

const RestaurantPost = ({post}: RestaurantPostProps) => {

    const postTime = new Date(post!.createdOn)
    const convertedPostTime = postTime.toLocaleDateString();

    return (
        <Card style={styles.card}>
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

const styles = StyleSheet.create({
    card: {
        marginBottom: 12,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fff",
    },
});

export default RestaurantPost;