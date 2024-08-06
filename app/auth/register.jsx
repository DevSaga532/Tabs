import {
  View,
  Text,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

const register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    // Implementar la lógica de registro aquí
    console.log("Register button pressed");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Create an Account</Text>
          <Text style={styles.subtitle}>
            Please fill in the details to register
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={24} color="#0B0854" />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#8E8E93"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={24} color="#0B0854" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#8E8E93"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons name="call-outline" size={24} color="#0B0854" />
            <TextInput
              style={styles.input}
              placeholder="+1"
              placeholderTextColor="#8E8E93"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
            <FontAwesome5 name="apple" size={30} color="white" />
            <Text style={styles.appleButtonText}>Register With Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={30} color="#B3080A" />
            <Text style={styles.googleButtonText}>Register With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton}>
            <Ionicons name="call-outline" size={30} color="white" />
            <Text style={styles.phoneButtonText}>Register With Phone</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace("/auth/login")}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(152, 157, 162)",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#252437",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#F1F3F6",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D0D2D4",
    borderRadius: 16,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#2863AC",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },
  registerButtonText: {
    color: "#BCCFE8",
    fontSize: 16,
    fontWeight: "bold",
  },
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  appleButtonText: {
    color: "#CECECE",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  googleButtonText: {
    color: "#080549",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  phoneButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28A745",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  phoneButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: "#F7F7F7",
  },
  loginText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default register;
