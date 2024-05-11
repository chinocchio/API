import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import { color } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcon from 'react-native-vector-icons/AntDesign'


const Feeds = () => {
    return(
        <View style={{ flex: 1, backgroundColor: "grey" }}>

        <View style={{
            margin: 10, borderRadius: 7, elevation: 5, backgroundColor: "white", shadowColor: '#333',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            }}>
            

            <View style={{ flexDirection: "row", alignItems: "center", padding: 10, }}>
                <Image source={{ uri: "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }} style={{ height: 50, width: 50, borderRadius: 50 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Random User</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 12 }}>November 19, 2049</Text>
                        <Text style={{ fontSize: 12, marginLeft: 5 }}>11:11 am</Text>
                    </View>
                </View>
            </View>
            {/* {
                item.isImage ? <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/socialapp-2ff3f.appspot.com/o/feed%2F" + item.createdOn + ".png?alt=media&token=d47835f7-a84b-49ed-af9c-46889c0651a9" }} style={{ height: 200 }} />
                    : null
            } */}

            <Image source={{ uri: "https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/a/38122.Jpg" }} style={{ height: 200 }} />

            <Text style={{ margin: 10, color: "#333", fontSize: 15, marginTop: 5 }}>Check out this tulips!</Text>

            <View style={{ height: 1, width: "100%", backgroundColor: "#3333" }} />

            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity style={{ flex: 1, margin: 10 }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>Like</Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: "#3333", height: "100%", width: 1 }} />

                <TouchableOpacity style={{ flex: 1, margin: 10 }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>Comment</Text>
                </TouchableOpacity>
            </View>


        </View>
    </View>
    );
};
//add props to the feeds then work on profile screen                                                                                   

const HomeScreenV2 = ({ navigation }) => {
    const [isLoading, setLoading] = React.useState(false);
    const [listData, setListData] = React.useState([]);
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 30, padding: 5, color: 'white', backgroundColor: 'pink'}}>Angel's Paradise</Text>
            </View>
            <ScrollView>

                <Feeds/>
                <Feeds/>
                <Feeds/>
                <Feeds/>

            </ScrollView>

            <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("AddFlower")
                    }}
                    style={{ position: "absolute", right: 60, bottom: 100, backgroundColor: "black", borderRadius: 30, }}>
                    <MaterialIcon name="plus" color="red" size={20} style={{ margin: 20 }} />
                </TouchableOpacity>
        </SafeAreaView>
);
};

export default HomeScreenV2;