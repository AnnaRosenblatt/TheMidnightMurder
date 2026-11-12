import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 32, textAlign: "center" }}>
        The Midnight Murder
      </Text>

      <Image
        source={{ uri: "https://i.redd.it/0o1ahjn6r8jd1.jpg" }}
        style={{ width: "100%", height: 300, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You are Detective Morgan. At a dinner party in Blackwood Manor,
        the lights suddenly go out. When they return, the owner is dead.
        Three suspects. One murderer. Can you solve the mystery?
      </Text>

      <Link href="/page1" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Start the Mystery
      </Link>
    </View>
  );
}
