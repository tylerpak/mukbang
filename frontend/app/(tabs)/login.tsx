import {Header} from "@react-navigation/elements";
import {View, Text, TextInput, Pressable} from "react-native";
import {saveUser} from "@/util/client";
import {useState} from "react";

const TabLogin = () => {
    const [userEmail, setUserEmail] = useState("");

    const handleSubmitUser = () => {
        console.log(userEmail);
      void saveUser(userEmail);
    }

    return (
        <>
            <Header title={"Login or Sign up"}/>
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
        </>    );
};

export default TabLogin;