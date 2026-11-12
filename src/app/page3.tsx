
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page3() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        Three Suspects
      </Text>

      <Image
        source={{ uri: "https://img.magnific.com/premium-vector/angry-man-woman-car-argument-vector-illustration_1322553-66213.jpg?semt=ais_hybrid&w=740&q=80" }}
        style={{ width: "100%", height: 300, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You gather the three suspects in the dining room.

        Eleanor, Blackwood's daughter, admits she argued with her father about her inheritance.

        Victor Hale, his business partner, claims he was outside making a phone call.

        Mrs. Finch, the housekeeper, says she saw muddy footprints near the greenhouse.

        Someone is lying. Who should you investigate?
      </Text>

      <Link href="/page5" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Investigate the greenhouse
      </Link>
      <Link href="/page2" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Search the study
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 30 }}>
        Back to Cover
      </Link>
    </View>
  );
}
