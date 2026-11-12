
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Page2() {
  return (
    <View style={{ flex: 1, backgroundColor: "#202030", padding: 30, justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 28 }}>
        The Locked Study
      </Text>

      <Image
        source={{ uri: "https://img.magnific.com/free-photo/rainy-night-study-room_23-2151997933.jpg?semt=ais_hybrid&w=740&q=80" }}
        style={{ width: "100%", height: 300, marginTop: 20 }}
      />

      <Text style={{ color: "white", fontSize: 18, marginTop: 20 }}>
        You search Mr. Blackwood's desk and discover a torn bank statement.
        Thousands of dollars have disappeared from his company.

        You also notice fresh scratches on the floor behind a bookshelf.
        Someone must have moved it recently.

        Suddenly, you hear footsteps behind the wall.
      </Text>

      <Link href="/page4" style={{ color: "yellow", fontSize: 20, marginTop: 30 }}>
        Move the bookshelf
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
