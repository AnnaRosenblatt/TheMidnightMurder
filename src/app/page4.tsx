
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page4() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        The Secret Passage
      </Text>

      <Image
    source={require("../../assets/images/cufflink.png")}
    style={{ width: "100%", height: 200, marginTop: 20 }}
    resizeMode="contain"
/>

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You push the bookshelf aside and discover a narrow secret passage.

        Inside, you find a silver cufflink engraved with the initials V.H.

        You remember Victor Hale wearing matching cufflinks at dinner.
        One of his cufflinks was missing when you questioned him.

        At the end of the passage, you see a door leading to the greenhouse.
      </Text>

      <Link href="/page5" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Follow the passage
      </Link>
      <Link href="/page6" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Confront the suspects
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 30 }}>
        Back to Cover
      </Link>
    </View>
  );
}
