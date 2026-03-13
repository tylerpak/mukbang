import MapView, {MapMarker} from "react-native-maps";
import {View} from "react-native";
import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {Text} from "@/components/ui/text";
import {Restaurant} from "@/util/types";
import {sampleRestaurants} from "@/util/sampleData";
import RestaurantDialog from "@/components/RestaurantDialog";

const Map = () => {
    const [userLocation, setUserLocation] = useState<Location.LocationObject | null>(null);
    const [mappedLocations, setMappedLocations] = useState<Restaurant[]>([])
    const [restaurantDialogOpen, setRestaurantDialogOpen] = useState<boolean>(false)
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)

    const selectRestaurant = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant);
        if(selectedRestaurant) setRestaurantDialogOpen(true);
    }


    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status != "granted") {
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setUserLocation(loc);

            const markerLocations = await Promise.all(
                sampleRestaurants.map(async (restaurant) => {
                    if(!restaurant.location) return null
                    const coord = await Location.geocodeAsync(restaurant.location)
                    if(coord.length > 0)return {...restaurant, coords: {latitude: coord[0].latitude, longitude: coord[0].longitude}}
                    return null
                })
            )
            setMappedLocations(markerLocations.filter((value) => value !== null))
        })();

    }, []);


    if (!location) return (
        <View className={'flex-1'}>
            <Text className={"text-xl"}>Please authorize location services</Text>
        </View>
    )
    return (
        userLocation && <View className={'flex-1'}>
            <MapView style={{flex: 1}} initialRegion={{
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <MapMarker coordinate={{
                    latitude: userLocation.coords.latitude,
                    longitude: userLocation.coords.longitude
                }} title={'Current location'}/>
                {mappedLocations.map((restaurant) => (
                    restaurant.coords && <MapMarker key={restaurant.id} coordinate={restaurant.coords} title={restaurant.name} titleVisibility={'visible'} onCalloutPress={() => selectRestaurant(restaurant)}/>
                ))}
            </MapView>
            <RestaurantDialog restaurant={selectedRestaurant} isOpen={restaurantDialogOpen} showLocation={false} onClose={() => setRestaurantDialogOpen(false)}/>
        </View>
    );
};

export default Map;