import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { PostsScreen } from "./Screens/PostsScreen/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
