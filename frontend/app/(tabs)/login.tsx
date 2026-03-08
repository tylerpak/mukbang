import {View, Text, TextInput, Pressable} from "react-native";
import {saveUser} from "@/client/client";
import {useState} from "react";
import {Card, CardHeader} from "@/components/ui/card";

const TabLogin = () => {
    const [userEmail, setUserEmail] = useState("");
    const [focused, setFocused] = useState(false);

    const handleSubmitUser = () => {
        console.log(userEmail);
        void saveUser(userEmail);
    }

    return (
        <View className="flex-1 justify-center px-6">
            <Card className="items-center p-6">
                <CardHeader>
                    <Text className="text-lg font-semibold">Enter Your Info:</Text>
                </CardHeader>

                <View className="w-full flex flex-col gap-3">
                    <Text className="text-sm font-medium">Email:</Text>
                    <TextInput
                        numberOfLines={1}
                        placeholder="youremail@address.com"
                        value={userEmail}
                        onChangeText={setUserEmail}
                        className="border border-gray-300 focus:border-blue-500 rounded-md px-3 py-2"
                    />

                    <Text className="text-sm font-medium">Password:</Text>
                    <TextInput
                        numberOfLines={1}
                        placeholder="password"
                        className="border border-gray-300 focus:border-blue-500 rounded-md px-3 py-2"
                    />

                    <Pressable
                        onPress={() => handleSubmitUser()}
                        className="bg-blue-500 rounded-md py-3 items-center mt-2"
                    >
                        <Text className="text-white font-semibold">Submit</Text>
                    </Pressable>
                </View>
            </Card>
        </View>
    );
};

export default TabLogin;