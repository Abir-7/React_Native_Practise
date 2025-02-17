import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

const CForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default CForm;

const styles = StyleSheet.create({});
