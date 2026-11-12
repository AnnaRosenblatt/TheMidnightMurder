
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page5() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        The Greenhouse
      </Text>

      <Image
    source={require("../../assets/images/greenhouse.png")}
    style={{ width: "100%", height: 200, marginTop: 20 }}
    resizeMode="contain"
/>

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        Rain pounds against the greenhouse windows.

        You discover muddy footprints, a bottle of poison hidden beneath a flowerpot,
        and a torn piece of Victor's jacket caught on a broken window.

        Suddenly, Victor enters the greenhouse carrying a suitcase.

        He has not noticed you yet. What will you do?
      </Text>

      <Link href="/page6" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Return and accuse Victor
      </Link>
      <Link href="/page10" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Hide and set a trap
      </Link>
      <Link href="/page9" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Chase Victor alone
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 30 }}>
        Back to Cover
      </Link>
    </View>
  );
}
