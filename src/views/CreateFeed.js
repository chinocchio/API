import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground, ActivityIndicator, Platform, ToastAndroid, Alert } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


const CreateFeed = () => {
    return(
        <View style={{ backgroundColor: "white", flex: 1 }}>
                {/* <ActivityIndicator size="large" color="#f66" style={{ position: "absolute", top: "45%", left: "45%" }} /> */}
                    <TouchableOpacity style={{ backgroundColor: "#aaa3", justifyContent: "center", alignItems: "center", height: 200 }}>
                    <AntIcon name="pluscircleo" color="white" size={80} />
                    <Text style={{ fontSize: 20, marginTop: 5, color: "white" }}>Add Image</Text>
                    </TouchableOpacity>

                <TextInput
                style={{ textAlignVertical: "top", padding: 10 }}
                placeholder={"Add Feed Text here!!"}
                />

                <TouchableOpacity
                    style={{ backgroundColor: "black", margin: 10, borderRadius: 10, top: 300 }}>
                <Text style={{ color: "white", margin: 15, fontSize: 20, textAlign: "center" }}>Post</Text>
                </TouchableOpacity>
        </View>
    );
};


export default CreateFeed;