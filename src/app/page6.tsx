
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page6() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        The Final Accusation
      </Text>

      <Image
    source={require("../../assets/images/diningroom.png")}
    style={{ width: "100%", height: 200, marginTop: 20 }}
    resizeMode="contain"
/>

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You gather all three suspects in the dining room.

        The missing money, secret passage, and poison bottle
        all provide clues about the murder.

        Eleanor looks frightened. Mrs. Finch begins to cry.
        Victor stands silently near the door.

        It is time to make your final accusation.

        Who murdered Mr. Blackwood?
      </Text>

      <Link href="/page7" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Accuse Victor Hale
      </Link>
      <Link href="/page8" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Accuse Eleanor Blackwood
      </Link>
      <Link href="/page8" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Accuse Mrs. Finch
      </Link>
      <Link href="/page5" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Keep investigating
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 30 }}>
        Back to Cover
      </Link>
    </View>
  );
}
