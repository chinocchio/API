import React, {useState, useEffect, } from 'react';
import {  View, FlatList, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, ListItem, Avatar, Icon } from "@rneui/themed";


export default function StudentScreen({ navigation }) {

    React.useEffect (() => {
        const focused = navigation.addListener("focus", () => {
            getStudentInfo();
        });

        return focused;
    }, [navigation]);

    const ListPressed = (id) => {
        navigation.navigate("Student Info", {
            id,
        })
    }

    // const StudInfo = [
    //     {
    //         StudentNumber: "123456789",
    //         FirstName: "AA",
    //         MiddleName: "BB",
    //         LastName: "CC",
    //         isMale: 1,
    //         DateOfBirth: "2000-01-02",
    //     },
    //     {
    //         StudentNumber: "987654321",
    //         FirstName: "GG", 
    //         MiddleName: "RR",
    //         LastName: "KK",
    //         isMale: 0,
    //         DateOfBirth: "1932-01-02",
    //     },
    // ];

    const [StudInfo, setStudInfo] = useState([]);

    const getStudentInfo = () => {
        fetch(`http://10.0.2.2/IT2H_ESCURO_CI4/Api/Student`, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data.student_info);
            setStudInfo(result.data.student_info);
        })
        .catch((error) =>{
            console.error(error);
        });
    } 

    useEffect(() => { 
        (async () => {
            getStudentInfo();
        })();
    }, [])

  return (
    <View>

        <FlatList
            ListHeaderComponent={
                <>
                    <View style={{paddingVertical: 8}}>
                    <Button
                            onPress={() => navigation.navigate("Student Info")}
                            title=" Add Student"
                            type="solid"
                            containerStyle={{
                                marginHorizontal: 16,
                                marginVertical: 8,
                                borderRadius: 8,
                            }}
                            icon={
                                <Icon name="plus" 
                                type="font-awesome"
                                color="white"
                                />
                            }

                        />

                        {StudInfo.map((l, i) => (
                            <ListItem
                                key={i}
                                containerStyle = {{
                                    marginHorizontal: 16,
                                    marginVertical: 8,
                                    borderRadius: 8,
                                }}
                                onPress={() => ListPressed(l.StudentNo)}
                            >
                                <Avatar size={50} rounded source={{uri: "https://i.pravatar.cc/300"}}/>
                                <ListItem.Content>
                                    <ListItem.Title style={{color : "black", fontWeight: "bold"}}>
                                        {l.FirstName + " " + l.MiddleName + " " + l.LastName}
                                    </ListItem.Title>

                                    <ListItem.Subtitle style={{color : "black"}}>
                                        {l.StudentNo + " | " +(l.isMale == 1 ? "Male" : "Female")}
                                    </ListItem.Subtitle>

                                    <ListItem.Subtitle style={{color : "black"}}>
                                        {l.DateOfBirth}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron color="black"/>
                            </ListItem>
                        ))}
                    </View>
                </>
            }
        >
        </FlatList>

      <Button
        title="Go back home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}