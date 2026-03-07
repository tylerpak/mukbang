import { View, Text, TouchableOpacity } from "react-native";
import { Post } from "@/util/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "expo-router";
import { ButtonLoadingPreview } from "loading";

interface RestaurantPostProps {
    post?: Post;
}

const RestaurantPost = ({ post }: RestaurantPostProps) => {
    const router = useRouter();

    const postTime = new Date(post.createdOn);
    const convertedPostTime = postTime.toLocaleDateString();

    const handlePress = () => {
        router.push(`/home/${post.restaurant.id}`);
    };

    return (
        <TouchableOpacity onPress={handlePress} className="mb-3">
            <Card className="p-4 rounded-xl bg-white">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">{post.restaurant.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">{post.createdBy.username}</CardDescription>
                </CardHeader>

                <CardContent>
                    <Text className="text-gray-800">{post.description}</Text>
                </CardContent>

                <CardFooter>
                    <Text className="text-xs text-gray-400">{convertedPostTime}</Text>
                </CardFooter>
            </Card>
        </TouchableOpacity>
    );
};

export default RestaurantPost;