import {View} from "react-native";
import {Text} from "@/components/ui/text";

const Header = () => {
    return (
        <View className={'flex flex-row bg-amber-500 h-300px justify-center'}>
            <Text className={'font-medium text-3xl mt-20'}>Happiest Hour</Text>
        </View>
    );
};

export default Header;