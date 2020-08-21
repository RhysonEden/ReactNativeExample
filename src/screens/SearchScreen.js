import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const resp = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(resp.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong, please try again");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);
  // useEffect(() => {
  //   searchApi("pasta")
  //     .then((res) => {
  //       setResults(res);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //     });
  // }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.background}>{errorMessage}</Text>
      ) : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
