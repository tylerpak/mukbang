import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {useEffect, useState} from "react";

export default function RestaurantPage() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {

    }, [id]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Restaurant Header */}
                <Text style={styles.name}>Restaurant Name</Text>
                <Text style={styles.subtitle}>Cuisine</Text>

                {/* Info Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.sectionText}>
                        where the restaurant description will go
                    </Text>
                </View>

                {/* Address Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Location</Text>
                    <Text style={styles.sectionText}>
                        123 Main St, Austin, TX
                    </Text>
                </View>

                {/* Reviews Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Reviews</Text>
                    <Text style={styles.sectionText}>

                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 20,
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#777",
        marginBottom: 20,
    },
    section: {
        marginBottom: 24,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#f5f5f5",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
    },
    sectionText: {
        fontSize: 14,
        color: "#444",
    },
});