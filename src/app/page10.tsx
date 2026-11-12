
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page10() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        THE SECRET ENDING!
      </Text>

    <Image
        source={{ uri: "https://www.shutterstock.com/shutterstock/videos/3439629787/thumb/7.jpg?ip=x480" }}
        style={{ width: "100%", height: 200, marginTop: 20 }}
    />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You hide behind a row of plants and quietly call the police.

        Victor enters the greenhouse and opens his suitcase.
        Inside are stacks of stolen cash and Blackwood's missing files.

        He takes out his phone and whispers,
        "Blackwood found out about the money, so I had to kill him."

        You secretly record his confession.

        Moments later, the police arrive and arrest Victor before he can escape.

        PERFECT ENDING! You caught the murderer red-handed!
      </Text>

      <Link href="/" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Play Again
      </Link>
    </View>
  );
}
