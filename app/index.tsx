import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const ATHAYUSH_URL = "https://www.athayush.app/";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2f5073" }}>
      <StatusBar
        style="light"            
        backgroundColor="#2f5073"
        animated={false}
      />

      <View style={{ flex: 1 }}>
        <WebView source={{ uri: ATHAYUSH_URL }} />
      </View>
    </SafeAreaView>
  );
}