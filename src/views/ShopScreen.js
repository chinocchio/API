import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import * as Progress from 'react-native-progress';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "./components/Button.js";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
    // const [UserEmail, setUserEmail] = React.useState([]);
    // const [Password, setPassword] = React.useState([]);
    // const [UserName, setUserName] = React.useState([]);
  
    // React.useEffect(() => {
    //   const clear = navigation.addListener("focus", () => {
    //     setUserEmail("");
    //     setPassword("");
    //     setUserName("")
    //   });
    //   return clear;
    // }, [navigation]);
  
    // const getUserInfo = () => {
    //   fetch(`http://172.18.95.255/CaliEmpireWeb/api/user`, {
    //   method: "GET",
    //   })
    //   .then((res) => res.json())
    //   .then((result) => {
    //   // console.log(result.data.account_info);
    //   // setUserInfo(result.data.account_info);
    //   setUserEmail(result.data.account_info[1].email);
    //   setUserName(result.data.account_info[1].username);
    //   console.log("Login as: " + UserEmail);
    //   });
    // };
  
    // React.useEffect(() => {
    //   (async () => {
    //   getUserInfo();
    //   })();
    //   }, []);
  
    // const [userDetails, setUserDetails] = React.useState();
    // React.useEffect(() => {
    //   getUserData();
    // }, []);
  
    // const getUserData = async () => {
    //   const userData = await AsyncStorage.getItem("userData");
    //   const UserLoggedInData = await AsyncStorage.getItem("UserLoggedInData");
  
    //   if (userData) {
    //     console.log("Home Screen");
    //     console.log(JSON.parse(userData));
    //     setUserDetails(JSON.parse(userData));
    //   }
      
    //   if (UserLoggedInData){
    //     console.log('UserLoggedInData >>');
    //     console.log(JSON.stringify(JSON.parse(UserLoggedInData), null, 2));
    //     console.log('UserLoggedInData <<');
    
    //     let udata = JSON.parse(UserLoggedInData);
    //     //console.log('udata >>');
    //     //console.log(udata.user);
    //     //console.log('udata <<');
    //     setUserDetails(udata.user);
    //   }
    //   console.log("Login as: " + UserEmail);
    // };
    // const logout = () => {
    //   AsyncStorage.setItem(
    //     "userData",
    //     JSON.stringify({ ...userDetails, loggedIn: false })
    //   );
  
    //   auth()
    //   .signOut()
    //   .then(() => console.log("User signed out!"))
    //   .catch(function (error) {
    //     console.log("No user currently logged in.");
    //   });
    //   // auth()
    //   //  .signOut()
    //   //  .then(() => console.log('User signed out!'));
  
    //   navigation.navigate("Welcome");
    // };
  
  
    const ProgressButton = ({ title, onPress = () => {} }) => {
      return(
        <TouchableOpacity 
          onPress={onPress}
          style={styles.button}
          activeOpacity={0.7}
          >
          <Text style={styles.title}>{title}</Text>
          <Progress.Bar progress={0.3} width={300} color={'grey'} style={{ alignSelf: "center", marginTop:10}}/>
        </TouchableOpacity>
      );  
    };
   
    const deleteStudentInfo = () => {
      if (UserEmail){
        let formData = new URLSearchParams();
        formData.append("EMAIL", UserEmail);
    
        fetch(`http://172.18.95.255/CaliEmpireWeb/api/user`, {
        method: "DELETE",
        body: formData.toString(),
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data.meta);
        if (data.meta.code == 200) {
          navigation.navigate("Welcome");
          setUserEmail('');
        }
        }
        );
      }
    };
  
    return (
      <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10, }}>
                  {userDetails?.photoURL &&(
                    <Image source={{uri: userDetails?.photoURL}}  style={{ height: 50, width: 50, borderRadius: 50 }}/>
                  )}
                  <View style={{ marginLeft: 10 }}>
                      {/* <Text style={{ fontSize: 20 }}>{userDetails?.displayName}</Text> */}
                      <Text style={{ fontSize: 20 }}>{UserName}</Text>
                      <View style={{ flexDirection: "row" }}>
                          <Text style={{ fontSize: 12 }}>Logged In</Text>
                          {/* <Text style={{ fontSize: 12, marginLeft: 5 }}>{userDetails?.email}</Text> */}
                          <Text style={{ fontSize: 12, marginLeft: 5 }}>{UserEmail}</Text>
                      </View>
                      <Button title="Logout" onPress={logout}/>
                      <Button title="Edit User" onPress={() => navigation.navigate('EditDelete')}/>
                      <Button title="Delete Account" onPress={deleteStudentInfo}/>
                  </View>
                  </View>
                  <View style={{
                            margin: 10, borderRadius: 7, elevation: 5, backgroundColor: "white", shadowColor: '#333',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            height: '75%',
                            justifyContent: 'center',
                            padding: 10
                            }}>
                            <Text style={{fontSize: 30, padding: 5 }}>Your Progress</Text>
                            <ProgressButton title={'Pull-Up'}/>
                            <ProgressButton title={'Push-Up'}/>
                            <ProgressButton title={'Chin-Up'}/>
                            <ProgressButton title={'Dips'}/>
                            <ProgressButton title={'Rows'}/>
                  </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
        height: 60,
        width: "100%",
        backgroundColor: "black",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    }
  });
  
  export default HomeScreen;