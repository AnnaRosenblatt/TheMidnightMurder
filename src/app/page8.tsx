
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page8() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        THE WRONG SUSPECT!
      </Text>

        <Image
            source={{ uri: "https://t3.ftcdn.net/jpg/20/32/36/92/360_F_2032369288_TtPFWcTfsONY0DwV2EY2D8ckSKb75HJs.jpg" }}
            style={{ width: "100%", height: 200, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You announce your accusation and order the police to make an arrest.

        The suspect insists they are innocent, but you refuse to listen.

        Hours later, new evidence proves you arrested the wrong person.

        By the time you realize your mistake, Victor Hale has disappeared
        with the stolen money.

        The real murderer got away!

        GAME OVER.
      </Text>

      <Link href="/page6" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Try Again
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 20 }}>
        Back to Cover
      </Link>
    </View>
  );
}
