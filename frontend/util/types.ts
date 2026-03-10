import {LatLng} from "react-native-maps";

export type User = {
    id?: number;
    email: string;
    username: string;
};

export type Restaurant = {
    id?: number;
    name: string;
    number?: string;
    website?: string;
    email?: string;
    cuisine?: string;
    location?: string;
    coords?: LatLng;
    posts?: Post[];
    happyHourDeals?: HappyHourDeal[];
};

export type Post = {
    id?: number;
    description: string;
    createdBy: User;
    createdOn: string;
    restaurant?: Restaurant;
};

export type HappyHourDeal = {
    id?: number;
    restaurantId: number;
    dealType: 'BEER' | 'COCKTAIL' | 'NONALCOHOLIC' | 'ENTREE' | 'APPETIZER' | 'DESSERT' | 'COMBO';
    description: string;
    value: number;
    dayOfWeek: 'MONDAY'|'TUESDAY'|'WEDNESDAY'|'THURSDAY'|'FRIDAY'|'SATURDAY'|'SUNDAY';
    startTime: string;
    endTime: string;
};