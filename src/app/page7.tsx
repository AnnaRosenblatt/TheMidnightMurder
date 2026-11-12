
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page7() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        CASE CLOSED!
      </Text>

    <Image
        source={{ uri: "https://www.shutterstock.com/shutterstock/videos/3439629787/thumb/7.jpg?ip=x480" }}
        style={{ width: "100%", height: 200, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You point directly at Victor Hale.

        "You stole thousands of dollars from Blackwood's company.
        When he discovered the missing money, you poisoned his drink
        and escaped through the secret passage!"

        Victor tries to run, but the police block the doorway.

        He finally confesses to the murder.

        Congratulations! You solved the Midnight Murder!
      </Text>

      <Link href="/" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Play Again
      </Link>
    </View>
  );
}
