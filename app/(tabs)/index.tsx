import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { icons } from "../constants/icons";
import { images } from "../constants/images";
import MovieCard from "../components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));
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

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : moviesError ? (
          <Text>Error:{moviesError?.message}</Text>
        ) : (
          <View style={{ flex: 1, marginTop: 5 }}>
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search "
            />

            <>
              <Text style={styles.heading}> Latest movies</Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard 
                  {...item}/>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  movieTexts: {
    color: "white",
  },
});
