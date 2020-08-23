import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

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

      <ResultsList results={filterPrice("$")} title="Cost Effective" />
      <ResultsList results={filterPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterPrice("$$$")} title="More Expensive" />
      <ResultsList results={filterPrice("")} title="Most Expensive" />
      <Text style={styles.resultStyle}>
        We have found {results.length} results.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  resultStyle: {
    alignSelf: "center",
    marginTop: 100,
  },
});

export default SearchScreen;
