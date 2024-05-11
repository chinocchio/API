import React, {useState, useEffect, } from 'react';
import { View, FlatList, Text } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { ListItem, Icon, Button } from "@rneui/themed";   




export default function StudentInfoScreen({ navigation }) {
    const route = useRoute();

    const getStudentInfo = (id) => {
        fetch(`http://10.0.2.2/IT2H_ESCURO_CI4/Api/Student/` + id, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data.student_info);
            // setStudInfo(result.data.student_info);
            setIsDisableAdd(true);
            setIsDisableEdit(false);


            setStudentNo(result.data.student_info.StudentNo);
            setFirstName(result.data.student_info.FirstName);
            setMiddleName(result.data.student_info.MiddleName);
            setLastName(result.data.student_info.LastName);
            setDateOfBirth(result.data.student_info.DateOfBirth);
            setIsMale(parseInt(result.data.student_info.isMale));
        })
        .catch((error) =>{
            console.error(error);
        });
    } 

    if(route.params !== undefined){
        getStudentInfo(route.params.id);
    }



    const [StudentNo, setStudentNo] = React.useState("");
    const [FirstName, setFirstName] = React.useState("");
    const [MiddleName, setMiddleName] = React.useState("");
    const [LastName, setLastName] = React.useState("");
    const [DateOfBirth, setDateOfBirth] = React.useState("");
    const [isMale, setIsMale] = React.useState(0);

    const [isDisabledAdd, setIsDisableAdd] = React.useState(false);
    const [isDisabledEdit, setIsDisableEdit] = React.useState(true);

    React.useEffect(() =>{
        const clear = navigation.addListener("focus", () => {

            // setIsDisableAdd(false);
            // setIsDisableEdit(true);
            setStudentNo("");
            setFirstName("");
            setMiddleName("");
            setLastName("");
            setDateOfBirth("");
            setIsMale(0);

        })

        return clear;
    }, [navigation]);

    const postStudentInfo = () => {
        console.log("Student No = " + StudentNo);
        console.log("FirstName = " + FirstName);
        console.log("MiddleName = " + MiddleName);
        console.log("LastName = " + LastName);
        console.log("DateOfBirth = " + DateOfBirth);
        console.log("isMale = " + isMale);

        if(StudentNo && FirstName && MiddleName && LastName && DateOfBirth){
            setIsDisableAdd(true);

            let formData = new FormData();
            formData.append("SN", StudentNo);
            formData.append("FN", FirstName);
            formData.append("MN", MiddleName);
            formData.append("LN", LastName);
            formData.append("Sex", isMale);
            formData.append("DOB", DateOfBirth);

            fetch(`http://10.0.2.2/IT2H_ESCURO_CI4/Api/Student`, {
            method: "POST",
            body: formData,
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setIsDisableAdd(false);
                if(result.meta.code == 200){
                    navigation.navigate("Students");
                    setStudentNo("");
                    setFirstName("");
                    setMiddleName("");
                    setLastName("");
                    setDateOfBirth("");
                    setIsMale(0);
                }
            })
            .catch((error) =>{
                console.error(error);
            });



        }
    }

    const putStudentInfo = () => {
        console.log("Student No = " + StudentNo);
        console.log("FirstName = " + FirstName);
        console.log("MiddleName = " + MiddleName);
        console.log("LastName = " + LastName);
        console.log("DateOfBirth = " + DateOfBirth);
        console.log("isMale = " + isMale);

        if(StudentNo && FirstName && MiddleName && LastName && DateOfBirth ){
            setIsDisableEdit(true);

            let formData = new URLSearchParams();
            formData.append("SN", StudentNo);
            formData.append("FN", FirstName);
            formData.append("MN", MiddleName);
            formData.append("LN", LastName);
            formData.append("Sex", isMale);
            formData.append("DOB", DateOfBirth);

            fetch(`http://10.0.2.2/IT2H_ESCURO_CI4/Api/Student`, {
            method: "PUT",
            body: formData.toString(),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setIsDisableEdit(false);

                if(result.meta.code == 200){
                    navigation.navigate("Students");
                    setStudentNo("");
                    setFirstName("");
                    setMiddleName("");
                    setLastName("");
                    setDateOfBirth("");
                    setIsMale(0);
                }
            })
            .catch((error) =>{
                console.error(error);
            });



        }
    }


    const deleteStudentInfo = (id) => {

        if(StudentNo){
            setIsDisableEdit(true);

            let formData = new URLSearchParams();
            formData.append("SN", StudentNo);

            fetch(`http://10.0.2.2/IT2H_ESCURO_CI4/Api/Student`, {
            method: "DELETE",
            body: formData.toString(),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setIsDisableEdit(false);

                if(result.meta.code == 200){
                    navigation.navigate("Students");
                    setStudentNo("");
                    setFirstName("");
                    setMiddleName("");
                    setLastName("");
                    setDateOfBirth("");
                    setIsMale(0);
                }
            })
            .catch((error) =>{
                console.error(error);
            });



        }
    }
return(
    <>
        <FlatList
            ListHeaderComponent={
                <>
                    <View style={{paddingVertical: 8}}>
                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Student No</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input
                                placeholder='Enter Student No'
                                onChangeText={setStudentNo}
                                value={StudentNo}
                            />
                        </ListItem>

                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Firstname</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input
                                placeholder='Enter Firstname'
                                onChangeText={setFirstName}
                                value={FirstName}
                            />
                        </ListItem>

                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Middlename</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input
                                placeholder='Enter Middlename'
                                onChangeText={setMiddleName}
                                value={MiddleName}
                            />
                        </ListItem>

                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Lastname</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input
                                placeholder='Enter Lastname'
                                onChangeText={setLastName}
                                value={LastName}
                            />
                        </ListItem>

                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Date Of Birth</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input
                                placeholder='Enter Date Of Birth'
                                onChangeText={setDateOfBirth}
                                value={DateOfBirth}
                            />
                        </ListItem>

                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Sex</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.ButtonGroup
                                buttons={["Female", "Male"]}
                                selectedIndex={isMale}
                                onPress={(index) => setIsMale(index)}
                            />
                        </ListItem>

                        <Button
                            onPress={() => postStudentInfo()}
                            title=" Add Student"
                            disabled={isDisabledAdd}
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

                        <Button
                            onPress={() => putStudentInfo()}
                            title=" Edit Student"
                            disabled={isDisabledEdit}
                            type="solid"
                            containerStyle={{
                                marginHorizontal: 16,
                                marginVertical: 8,
                                borderRadius: 8,
                            }}
                            icon={
                                <Icon name="pencil" 
                                type="font-awesome"
                                color="white"
                                />
                            }
                        />

                        <Button
                            onPress={() => deleteStudentInfo()}
                            title=" Delete Student"
                            disabled={isDisabledEdit}
                            type="solid"
                            containerStyle={{
                                marginHorizontal: 16,
                                marginVertical: 8,
                                borderRadius: 8,
                            }}
                            icon={
                                <Icon name="trash" 
                                type="font-awesome"
                                color="white"
                                />
                            }
                        />

                        <Button
                            onPress={() => navigation.navigate("Students")}
                            title=" Return"
                            type="solid"
                            containerStyle={{
                                marginHorizontal: 16,
                                marginVertical: 8,
                                borderRadius: 8,
                            }}
                            icon={
                                <Icon name="chevron-left" 
                                type="font-awesome"
                                color="white"
                                />
                            }

                        />

                    </View>
                </>
            }
        ></FlatList>
    </>
)

}