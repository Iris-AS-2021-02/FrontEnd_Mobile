import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { graphql } from "@apollo/react-hoc";
import { gql, useQuery } from "@apollo/client";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIncorret, setPasswordIncorret] = useState(false);

  const { loading, error, data } = useQuery(gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  },
  `);

  const isVerifiedUser = () => {
    return data?.usersByNumber?.Name === password;
  };

  const login = () => {
    console.log("username", username, "password", password, data);
    if (isVerifiedUser()) {
      setPasswordIncorret(false);
      navigation.navigate("Iris");
      
    } else {
      setPasswordIncorret(true);
    }
  };

  const goToSignUp = () => {
    console.log(username);
    console.log(password);
    setPasswordIncorret(false);
    navigation.navigate("SignUp");
  };
  return (
    <View style={{ flex: 1, marginTop: "50%" }}>
      <Text style={{ textAlign: "center" }}>Insert username</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="pas"
        isRequired
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <Text style={{ textAlign: "center" }}>Insert password</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="username"
        secureTextEntry={true}
        isRequired={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        asterik
      />
      {passwordIncorret && (
        <Text style={{ textAlign: "center", color: "red" }}>
          password or username incorrect
        </Text>
      )}
      <View style={{ margin: 12 }}>
        <Button
          style={styles.submitButton}
          onPress={login}
          title="Login"
          color={"pink"}
        />
      </View>
      <View style={{ margin: 12 }}>
        <Button
          style={styles.submitButton}
          onPress={goToSignUp}
          title="Sign up"
          color={"pink"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    marginTop: 50,
  },
  formTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
  },
  submitButton: {
    height: 10,
    width: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF",
    marginTop: 40,
  },
});

export default Login;
