import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";

export default function NoInternetScreen({
  loading,
  onRetry,
}: {
  loading: boolean;
  onRetry: () => void;
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#2f5073",
      }}
    >
      {loading ? (
        <>
          <ActivityIndicator size="large" color="white" />
          <Text style={{ color: "white", marginTop: 12 }}>
            Trying to connect to the internet…
          </Text>
        </>
      ) : (
        <>
          <Image
            source={require("../assets/owl-no-internet.webp")}
            style={{ width: 250, height: 250, marginBottom: 24 }}
            resizeMode="contain"
          />

          <Text style={{ color: "white", fontSize: 18, marginBottom: 12 }}>
            No Internet Connection
          </Text>

          <Pressable
            onPress={onRetry}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 6,
              backgroundColor: "white",
            }}
          >
            <Text style={{ color: "#2f5073", fontWeight: "600" }}>
              Retry
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
}