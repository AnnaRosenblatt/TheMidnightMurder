
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page9() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        THE ESCAPE!
      </Text>

       <Image
            source={{ uri: "https://t3.ftcdn.net/jpg/20/32/36/92/360_F_2032369288_TtPFWcTfsONY0DwV2EY2D8ckSKb75HJs.jpg" }}
            style={{ width: "100%", height: 200, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You rush toward Victor, but he spots you and runs into the storm.

        You chase him through the dark garden as thunder crashes overhead.

        Suddenly, you slip on the muddy path and fall.

        Before you can stand up, Victor jumps into a waiting car and speeds away.

        You discovered the murderer, but you failed to catch him.

        MISSION FAILED.
      </Text>

      <Link href="/page5" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Try Again
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 20 }}>
        Back to Cover
      </Link>
    </View>
  );
}
