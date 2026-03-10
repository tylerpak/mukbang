import MapView, {MapMarker} from "react-native-maps";
import {View} from "react-native";
import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {Text} from "@/components/ui/text";

const Map = () => {
    const [userLocation, setUserLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status != "granted") {
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setUserLocation(loc);
        })();


    }, []);

    if(!location) return(
        <View className={'flex-1'}>
            <Text className={"text-xl"}>Please authorize location services</Text>
        </View>
    )

    return (
        <View className={'flex-1'}>
            <MapView style={{flex: 1}}  region={{
                latitude: userLocation?.coords.latitude,
                longitude: userLocation?.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                {userLocation && <MapMarker coordinate={{
                    latitude: userLocation.coords.latitude,
                    longitude: userLocation.coords.longitude
                }} title={'Current location'}/> }
            </MapView>
        </View>
    );
};

export default Map;