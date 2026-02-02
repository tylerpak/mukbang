export default interface AppUser {
    id?: number,
    email: string,
    username: string,
    createdPosts: Post[],
}

export interface Post {
    id?: number,
    description: string,
    createdBy: AppUser,
    createdOn: string,
    restaurant: Restaurant,
}

export interface Restaurant {
    id?: number,
    name: string,
    posts?: Post[],
}