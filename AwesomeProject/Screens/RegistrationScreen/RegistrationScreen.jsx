import { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
} from "react-native";

export const RegistrationScreen = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ImageBackground
      source={require("./../../images/bgImg.jpg")}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-85}
        style={styles.registerContainer}
      >
        <View style={styles.imageContainer}>
          <View style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 14,
                right: -12.5,
              }}
            >
              <Image
                source={require("./../../assets/icons/add.png")}
                style={{ backgroundColor: "transparent" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.authTitle}>Registration</Text>
        <View style={{ position: "relative", gap: 16 }}>
          <TextInput
            value={state["name"]}
            placeholder="Name"
            onChangeText={(value) => handleChange("name", value)}
            style={styles.input}
          />
          <TextInput
            keyboardType="email-address"
            value={state["email"]}
            placeholder="Email"
            onChangeText={(value) => handleChange("email", value)}
            style={styles.input}
          />
          <View>
            <TextInput
              secureTextEntry={true}
              value={state["password"]}
              onChangeText={(value) => handleChange("password", value)}
              placeholder="Password"
              style={styles.input}
            />
            <TouchableOpacity style={styles.buttonShow}>
              <Text style={styles.authLink}>Show</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.authLink}>Already have an account? Sign in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 67,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  authTitle: {
    marginBottom: 33,
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  input: {
    padding: 16,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    marginBottom: 16,
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    overflow: "hidden",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
  },
  buttonShow: { position: "absolute", bottom: 15, right: 16 },
  authLink: { color: "#1B4371", fontSize: 16 },
});
