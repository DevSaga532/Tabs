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
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

const Login = () => {
  const router = useRouter();

  // const { isAuthenticated, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="#007AFF" />
  //     </View>
  //   );
  // }

  // if (isAuthenticated) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>You are already logged in!</Text>
  //     </View>
  //   );
  // }
  // const handleLogin = () => {
  //   // Implementar la lógica de login aquí
  //   console.log("Login button pressed");
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Please sign in to your account</Text>
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
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
            <FontAwesome5 name="apple" size={30} color="white" />
            <Text style={styles.appleButtonText}>Sign In With Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={30} color="#B3080A" />
            <Text style={styles.googleButtonText}>Sign In With Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't Have An Account? </Text>
          <TouchableOpacity
            onPress={() => router.push("/auth/register")}>
            <Text style={styles.signUpText}>Sign Up</Text>
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
    marginBottom: 20,
    fontSize: 16,
    color: "#F1F3F6",
    textAlign: "center",
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
  forgotPassword: {
    color: "#F7F7F7",
    textAlign: "right",
    marginBottom: 10,
    fontSize: 14,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#2863AC",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },
  signInButtonText: {
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
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: "#F7F7F7",
  },
  signUpText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default Login;
