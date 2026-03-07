import { Header } from "@react-navigation/elements";
import { View, Text, TextInput, Pressable } from "react-native";
import { saveUser } from "@/client/client";
import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";

const TabLogin = () => {
const [userEmail, setUserEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmitUser = () => {
    console.log(userEmail);
    void saveUser(userEmail);
};

    return (
        <View className="flex-1 bg-gray-100">
            <Header title={"Login or Sign up"} />

            <View className="flex-1 justify-center px-6">
                <Card className="p-6 rounded-2xl bg-white">

                    <CardHeader className="items-center mb-4">
                        <Text className="text-lg font-semibold">
                            Enter Your Info
                        </Text>
                    </CardHeader>

                    <View className="mb-4">
                        <Text className="text-sm text-gray-600 mb-1">
                            Email
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-sm"
                            placeholder="youremail@address.com"
                            value={userEmail}
                            onChangeText={setUserEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    <View className="mb-4">
                        <Text className="text-sm text-gray-600 mb-1">
                            Password
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-sm"
                            placeholder="Enter password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <Pressable
                        className="mt-2 bg-blue-600 rounded-lg py-3 items-center"
                        onPress={handleSubmitUser}
                    >
                        <Text className="text-white font-semibold text-base">
                            Submit
                        </Text>
                    </Pressable>

                </Card>
            </View>
        </View>
        );

};

export default TabLogin;
