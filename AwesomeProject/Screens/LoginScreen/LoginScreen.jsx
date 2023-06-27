import { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

export const LoginScreen = () => {
  const [state, setState] = useState({
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
        keyboardVerticalOffset={-20}
        style={styles.loginContainer}
      >
        <Text style={styles.authTitle}>Sign in</Text>
        <View style={{ gap: 16 }}>
          <TextInput
            keyboardType="email-address"
            value={state["email"]}
            onChangeText={(value) => handleChange("email", value)}
            placeholder="Email"
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
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.authLink}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    position: "relative",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 133,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
