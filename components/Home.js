import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client'

const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, data } = useQuery(gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  },
  `);
  const Settings = ({ navigation }) => {
  
    return (
      <ScreenContainer>
        <Text>Profile Screen</Text>
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
        <Button title="Sign Out" onPress={() => signOut()} />
      </ScreenContainer>
    );
  };



  const isVerifiedUser= () =>{
    return data.usersByNumber.Name === password;
  }

  const login = () =>{
    if(isVerifiedUser()){
      
    }
  }
  const goToSignUp = () => {
    console.log(username);
    console.log(password);
    navigation.navigate('SignUp');
  }
  return (
    <View>
      <Text>
          WELCOME HOME!ddddd
      </Text>
    </View>
  );
}

export default Login;