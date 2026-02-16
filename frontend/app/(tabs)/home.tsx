import React, {useEffect, useState} from 'react';
import {ScrollView, View} from "react-native";
import {Post} from "@/util/types";
import {samplePosts} from "@/util/sampleData";
import RestaurantPost from "@/components/restaurantPost";
import {Header} from "@react-navigation/elements";

const TabHome = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        setPosts(samplePosts);
    }, []);

    return (
        <>
        <Header title={'Home'}/>
        <ScrollView>
            <View>
            {posts.map(post => (
                <RestaurantPost key={post.id} post={post}/>
            ))}
            </View>
        </ScrollView>
        </>
    );
};

export default TabHome;