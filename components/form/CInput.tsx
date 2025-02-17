import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, Text, View, StyleSheet } from "react-native";
interface InputData {
  required: string | boolean;
  name: string;
  label: string;
}
const CInput = ({ name, label, required }: InputData) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <View style={{ marginBottom: 10, width: "100%" }}>
      <Text style={{ paddingBottom: 5, fontWeight: 500, fontSize: 14 }}>
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              ...styles.input,
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 8,
              borderRadius: 5,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors[name] && (
        <Text style={{ color: "red" }}>{errors[name]?.message as string}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
});
export default CInput;
