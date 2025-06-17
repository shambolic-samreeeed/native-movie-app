import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Define prop types if not already
type Movie = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
};

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.co/600x400/1a1a1a/ffffff.png`,
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.info}>
            ⭐ {vote_average}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
    height:"100%",
    width:"30%"
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 10,
    
  },
  title: {
    color: "white",
    fontSize: 12,
    
  },
  info: {
    color: "gray",
    fontSize: 14,
    marginTop: 4,
  },
});

export default MovieCard;
