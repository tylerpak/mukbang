// sampleData.ts
import { User, Restaurant, Post, HappyHourDeal } from './types';

export const sampleUsers: User[] = [
    { id: 1, email: 'alice@example.com', username: 'Alice' },
    { id: 2, email: 'bob@example.com', username: 'Bob' },
    { id: 3, email: 'charlie@example.com', username: 'Charlie' },
];

export const sampleRestaurants: Restaurant[] = [
    {
        id: 1,
        name: "The Tipsy Taco",
        number: "555-123-4567",
        website: "http://tipsytaco.example.com",
        email: "contact@tipsytaco.com",
        cuisine: "Mexican",
        location: "701 Congress Ave., Austin, TX 78701",
        posts: [],
        happyHourDeals: [],
    },
    {
        id: 2,
        name: "Brew & Bites",
        number: "555-987-6543",
        website: "http://brewandbites.example.com",
        email: "info@brewandbites.com",
        cuisine: "American",
        location: "301 Brazos St., Austin, TX 78701",
        posts: [],
        happyHourDeals: [],
    },
    {
        id: 3,
        name: "Sushi Heaven",
        number: "555-246-8100",
        website: "http://sushiheaven.example.com",
        email: "hello@sushiheaven.com",
        cuisine: "Japanese",
        location: "211 Walter Seaholm Dr., Austin, TX 78701",
        posts: [],
        happyHourDeals: [],
    },
];

export const sampleHappyHourDeals: HappyHourDeal[] = [
    {
        id: 1,
        restaurantId: 1,
        dealType: 'COCKTAIL',
        description: 'Half off margaritas',
        value: 50,
        dayOfWeek: 'FRIDAY',
        startTime: '16:00',
        endTime: '18:00',
    },
    {
        id: 2,
        restaurantId: 1,
        dealType: 'APPETIZER',
        description: 'Free chips and salsa with drink',
        value: 0,
        dayOfWeek: 'FRIDAY',
        startTime: '16:00',
        endTime: '18:00',
    },
    {
        id: 3,
        restaurantId: 2,
        dealType: 'BEER',
        description: '$3 craft beers',
        value: 3,
        dayOfWeek: 'WEDNESDAY',
        startTime: '15:00',
        endTime: '19:00',
    },
    {
        id: 4,
        restaurantId: 2,
        dealType: 'ENTREE',
        description: 'Buy one get one free burgers',
        value: 50,
        dayOfWeek: 'THURSDAY',
        startTime: '16:00',
        endTime: '20:00',
    },
    {
        id: 5,
        restaurantId: 3,
        dealType: 'DESSERT',
        description: 'Half off mochi ice cream',
        value: 50,
        dayOfWeek: 'SATURDAY',
        startTime: '14:00',
        endTime: '17:00',
    },
];

export const samplePosts: Post[] = [
    {
        id: 1,
        description: "Best tacos I've had in years! 🌮🔥",
        createdBy: sampleUsers[0],
        createdOn: "2026-03-08T12:00:00Z",
        restaurant: sampleRestaurants[0],
    },
    {
        id: 2,
        description: "Love the craft beer selection 🍺",
        createdBy: sampleUsers[1],
        createdOn: "2026-03-07T18:30:00Z",
        restaurant: sampleRestaurants[1],
    },
    {
        id: 3,
        description: "Sushi rolls are fresh and delicious 🍣",
        createdBy: sampleUsers[2],
        createdOn: "2026-03-06T19:00:00Z",
        restaurant: sampleRestaurants[2],
    },
];