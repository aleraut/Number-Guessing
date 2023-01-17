import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {

  const [input, setInput] = React.useState('');
  const [random, setRandom] = React.useState(0);
  const [text, setText] = React.useState('');
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    startGame();
  }, []);


  const startGame = () => {
    /*
      Arvon satunnaisluvun
      Alustan viestitekstin
      Nollaan arvausten lkm
    */

    setText("Guess a number between 1-100");
    setRandom(Math.floor(Math.random() * 100) + 1);
    setCount(1);

  };

  const testGuess = () => {
    
    // Ehtolauseella tutkitte arvaus vs. satunnaisluku
    
    setCount(count + 1);

    if (input > random) {
      setText("Your guess " + input + " is too high")
    } else if (input < random) {
      setText("Your guess " + input + " is too low")
    } else {
      Alert.alert("You guessed the number in " + count +" guesses")
      startGame();
    };
    setInput('');
  };

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>{text}</Text>
      <View style={{margin: 20}}>
        <TextInput
          style={{width: 50, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => setInput(text)}
          value={input}
          keyboardType="numeric"
        />
      </View>
        <Button color="blue" onPress={testGuess} title="Guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
