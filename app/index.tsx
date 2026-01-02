import NoInternetScreen from "@/components/NoInternetScreen";
import NetInfo from "@react-native-community/netinfo";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const ATHAYUSH_URL = "https://www.athayush.app/";

export default function HomeScreen() {
  const [hasInternet, setHasInternet] = useState<boolean | null>(null);
  const [retrying, setRetrying] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternet(state.isInternetReachable === true);
    });

    return unsubscribe;
  }, []);

  const handleRetry = async () => {
    setRetrying(true);

    const state = await NetInfo.fetch();

    if (state.isInternetReachable === true) {
      setHasInternet(true);
      setReloadKey(prev => prev + 1);
    } else {
      setHasInternet(false);
    }

    setRetrying(false);
  };

  if (hasInternet === null) {
    return null;
  }

  if (!hasInternet) {
    return (
      <NoInternetScreen
        loading={retrying}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2f5073" }}>
      <StatusBar style="light" backgroundColor="#2f5073" />

      <View style={{ flex: 1 }}>
        <WebView
          key={reloadKey}
          source={{ uri: ATHAYUSH_URL }}
          onError={() => setHasInternet(false)}
          onHttpError={() => setHasInternet(false)}
        />
      </View>
    </SafeAreaView>
  );
}