import MapView from "react-native-maps";
import {View} from "react-native";

const Map = () => {
    return (
        <View className={'flex-1'}>
            <MapView style={{flex: 1}} initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}/>
        </View>
    );
};

export default Map;