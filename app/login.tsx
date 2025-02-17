import { StyleSheet, Text } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import { CButton } from "@/components/form/CButton";
import { Redirect, useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const onFormSubmit = async (data: any) => {
    console.log(data, "gg");

    router.push("/(auth)/(tabs)");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <CForm>
        <CInput
          name="email"
          label="Email"
          required={"Email is required."}
        ></CInput>
        <CInput
          name="password"
          label="Password"
          required={"Password is required."}
        ></CInput>
        <CButton onFormSubmit={onFormSubmit}></CButton>
      </CForm>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fffffff",
  },
  text: {
    fontSize: 30,
    fontWeight: 600,
  },
});
