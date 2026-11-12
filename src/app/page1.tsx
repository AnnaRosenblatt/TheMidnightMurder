
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page1() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        The Crime Scene
      </Text>

        <Image
        source={{ uri: "https://t3.ftcdn.net/jpg/03/14/82/12/360_F_314821270_qgdOfJN0vaZ9ocrZPyw6vTSFP7YQTaM9.jpg" }}
        style={{ width: "100%", height: 300, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        Mr. Blackwood is lying dead inside his locked study.
        A broken glass is beside his body. You notice that
        someone has searched through his desk.

        Where will you investigate first?
      </Text>

      <Link href="/page2" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Search the study
      </Link>
      <Link href="/page3" style={{ color: "yellow", fontSize: 20, marginTop: 20 }}>
        Question the suspects
      </Link>
      <Link href="/" style={{ color: "white", marginTop: 30 }}>
        Back to Cover
      </Link>
    </View>
  );
}
