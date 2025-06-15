import { Image, ScrollView, View } from "react-native";
import { icons } from "../constants/icons";
import { images } from "../constants/images";
import SearchBar from "../components/SearchBar";


export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        source={images.bg}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
      />

      <ScrollView
        style={{
          height: "100%",
          width: "100%",
          marginTop: 10,
          alignSelf: "center",
        }}
        contentContainerStyle={{
          minHeight: "100%",
          padding: 10,
        }}
      >
        <Image
          source={icons.logo}
          style={{
            marginHorizontal: "auto",
          }}
        />

        <View style={{ flex:1, marginTop:5}}>

<SearchBar/>

        </View>
      </ScrollView>
    </View>
  );
}
