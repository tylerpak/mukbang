import AppUser, {Post, Restaurant} from "@/util/types";

export const sampleRestaurants: Restaurant[] = [
    { id: 1, name: "Sushi Palace" },
    { id: 2, name: "Burger Barn" },
    { id: 3, name: "Pasta Corner" },
    { id: 4, name: "Taco Town" },
    { id: 5, name: "Vegan Delight" },
    { id: 6, name: "Pizza Planet" },
    { id: 7, name: "Curry House" },
    { id: 8, name: "BBQ Pit" },
];

export const sampleUsers: AppUser[] = [
    { id: 1, email: "alice@example.com", username: "alice123", createdPosts: [] },
    { id: 2, email: "bob@example.com", username: "bob_the_builder", createdPosts: [] },
    { id: 3, email: "carol@example.com", username: "carol_chef", createdPosts: [] },
    { id: 4, email: "dave@example.com", username: "dave_diner", createdPosts: [] },
    { id: 5, email: "eve@example.com", username: "eve_eats", createdPosts: [] },
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
        description: "Loved the creamy carbonara, would come again!",
        createdBy: sampleUsers[2],
        createdOn: "2026-02-05T12:45:00Z",
        restaurant: sampleRestaurants[2],
    },
    {
        id: 104,
        description: "Tacos were fresh but a bit small 😅",
        createdBy: sampleUsers[3],
        createdOn: "2026-02-04T19:20:00Z",
        restaurant: sampleRestaurants[3],
    },
    {
        id: 105,
        description: "Vegan burger was surprisingly tasty 🌱",
        createdBy: sampleUsers[4],
        createdOn: "2026-02-03T14:10:00Z",
        restaurant: sampleRestaurants[4],
    },
    {
        id: 106,
        description: "Margherita pizza hit the spot 🍕",
        createdBy: sampleUsers[0],
        createdOn: "2026-02-02T18:00:00Z",
        restaurant: sampleRestaurants[5],
    },
    {
        id: 107,
        description: "Curry was spicy but flavorful, highly recommend!",
        createdBy: sampleUsers[1],
        createdOn: "2026-02-01T20:30:00Z",
        restaurant: sampleRestaurants[6],
    },
    {
        id: 108,
        description: "BBQ ribs were smoky and tender, loved it 😋",
        createdBy: sampleUsers[2],
        createdOn: "2026-01-31T17:15:00Z",
        restaurant: sampleRestaurants[7],
    },
];