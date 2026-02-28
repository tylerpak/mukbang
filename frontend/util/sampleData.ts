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
    },
    {
        id: 103,
        description: "Ramen broth was rich and comforting, perfect on a cold night",
        createdBy: sampleUsers[0],
        createdOn: "2026-02-05T19:42:00Z",
        restaurant: sampleRestaurants[0],
    },
    {
        id: 104,
        description: "Portions were huge, definitely worth the price",
        createdBy: sampleUsers[1],
        createdOn: "2026-02-05T13:10:00Z",
        restaurant: sampleRestaurants[1],
    },
    {
        id: 105,
        description: "Service was slow but the tacos made up for it 🌮",
        createdBy: sampleUsers[1],
        createdOn: "2026-02-04T20:05:00Z",
        restaurant: sampleRestaurants[1],
    },
    {
        id: 106,
        description: "Steak was cooked perfectly medium-rare, no notes",
        createdBy: sampleUsers[0],
        createdOn: "2026-02-03T22:18:00Z",
        restaurant: sampleRestaurants[1],
    },
    {
        id: 107,
        description: "Great vibes, average food — might come back just for drinks",
        createdBy: sampleUsers[1],
        createdOn: "2026-02-02T23:01:00Z",
        restaurant: sampleRestaurants[0],
    },
    {
        id: 108,
        description: "Breakfast burrito was massive and kept me full all day",
        createdBy: sampleUsers[0],
        createdOn: "2026-02-02T09:27:00Z",
        restaurant: sampleRestaurants[1],
    },
    {
        id: 109,
        description: "Desserts were the highlight, especially the tiramisu",
        createdBy: sampleUsers[0],
        createdOn: "2026-02-01T21:45:00Z",
        restaurant: sampleRestaurants[1],
    },
    {
        id: 110,
        description: "Solid lunch spot, quick service and fair prices",
        createdBy: sampleUsers[1],
        createdOn: "2026-02-01T12:33:00Z",
        restaurant: sampleRestaurants[0],
    }
];



