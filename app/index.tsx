import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { WebView } from "react-native-webview"

const ATHAYUSH_URL = "https://www.athayush.app/"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <View style={{ width: "100%", height: "100%" }}>
                <WebView source={{uri: ATHAYUSH_URL}}  />
            </View>
        </SafeAreaView>
    )
}