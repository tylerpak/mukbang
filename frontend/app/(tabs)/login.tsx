import {Header} from "@react-navigation/elements";
import {View, Text, TextInput, Pressable} from "react-native";
import {saveUser} from "@/util/client";
import {useState} from "react";
import {Card, CardHeader} from "@/components/ui/card";

const TabLogin = () => {
    const [userEmail, setUserEmail] = useState("");

    const handleSubmitUser = () => {
        console.log(userEmail);
        void saveUser(userEmail);
    }

    return (
        <View className={"flex-col-1 flex"}>
            <Header title={"Login or Sign up"}/>
            <Card className={"items-center"}>
                <CardHeader>
                    <Text>Enter Your Info:</Text>
                </CardHeader>
                <View>
                    <Text>Email:</Text>
                    <TextInput
                        numberOfLines={1}
                        placeholder={"youremail@address.com"}
                        value={userEmail}
                        onChangeText={setUserEmail}
                    />
                    <Text>Password:</Text>
                    <TextInput
                        numberOfLines={1}
                        placeholder={"youremail@address.com"}
                    />
                    <Pressable
                        onPress={() => handleSubmitUser()}
                    ><Text>Submit</Text></Pressable>
                </View>
            </Card>
        </View>);
};

export default TabLogin;