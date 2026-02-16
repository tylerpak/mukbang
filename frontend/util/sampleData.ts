import AppUser, {Post, Restaurant} from "@/util/types";

export const sampleRestaurants: Restaurant[] = [
    {
        id: 1,
        name: "Sushi Palace",
    },
    {
        id: 2,
        name: "Burger Barn",
    }
];

export const sampleUsers: AppUser[] = [
    {
        id: 1,
        email: "alice@example.com",
        username: "alice123",
        createdPosts: []
    },
    {
        id: 2,
        email: "bob@example.com",
        username: "bob_the_builder",
        createdPosts: []
    }
];

export const samplePosts: Post[] = [
    {
        id: 101,
        description: "Best spicy tuna roll I’ve had in years 🔥",
        createdBy: sampleUsers[0],
        createdOn: "2026-02-07T18:30:00Z",
        restaurant: sampleRestaurants[0],
    },
    {
        id: 102,
        description: "Burger was juicy, fries were mid",
        createdBy: sampleUsers[1],
        createdOn: "2026-02-06T21:15:00Z",
        restaurant: sampleRestaurants[1],
    }
];


