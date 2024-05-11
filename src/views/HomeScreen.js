import * as React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ListItem } from "@rneui/themed";   


export default function HomeScreen({ navigation }) {
  return (
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
                                // onChangeText={setStudentNo}
                                // value={StudentNo}
                            />
                        </ListItem>

                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>Firstname</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input
                                placeholder='Enter Firstname'
                                // onChangeText={setFirstName}
                                // value={FirstName}
                            />
                        </ListItem>

              <Button
                title="Login"
                  onPress={() => navigation.navigate('Shop')}
              />

              <Button style={{paddingVertical: 8}}
                title="Register"
                  onPress={() => navigation.navigate('Students')}
              />
            </View>
        </>
       }
      ></FlatList>
    </>
  );
}