import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerMovies from '../../components/bannerFilmes'; // Pode adaptar para livros ou manter como filme
import CardMovies from '../../components/cardMovies'; // Adaptar este componente para exibir livros
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { useEffect, useState } from 'react';

// Função para dividir a lista em duas partes
const splitList = (list, size) => {
  const result = [];
  for (let i = 0; i < list.length; i += size) {
    result.push(list.slice(i, i + size));
  }
  return result;
};

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function buscarLivros() {
      const key = 'XqGCVYChfGH3UqPm82TqzbFjwQLz8Nb8';
      const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=Young%20Adult%20Hardcover&api-key=${key}`);
      const data = await response.json();
      console.log(data.results);
      setBooks(data.results);
    }

    buscarLivros();
  }, []);

  const [lista1, lista2] = splitList(books, 5);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      
      <View style={{ width: "90%" }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={lista1}
          keyExtractor={(item) => item.book_details[0].primary_isbn13}
          renderItem={({ item }) => {
            const book = item.book_details[0]; 
            return (
              <CardMovies
                titulo={book.title} 
                autor={book.author}  
                descricao={book.description}
                editora={book.publisher}
                faixaEtaria={book.age_group}
              />
            );
          }}
        />
      </View>

      <View style={{ width: "90%" }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={lista2}
          keyExtractor={(item) => item.book_details[0].primary_isbn13}
          renderItem={({ item }) => {
            const book = item.book_details[0]; 
            return (
              <CardMovies
                titulo={book.title} 
                autor={book.author}  
                descricao={book.description}
                editora={book.publisher}
                faixaEtaria={book.age_group}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FFF'
  },
});