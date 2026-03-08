import MapView, {MapMarker} from "react-native-maps";
import {View} from "react-native";
import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {Text} from "@/components/ui/text";

const Map = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status != "granted") {
                return;
            }

            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc);
        })();
    }, []);

    if(!location) return(
        <View className={'flex-1'}>
            <Text className={"text-xl"}>Please authorize location services</Text>
        </View>
    )

    return (
        <View className={'flex-1'}>
            <MapView style={{flex: 1}} initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <MapMarker coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }} title={'Current location'}/>
            </MapView>
        </View>
    );
};

export default Map;