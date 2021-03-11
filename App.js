import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from  './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverSceen from './screens/GameOverSceen'

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = ()=>{
    setGuessRounds(0);
    setUserNumber('');
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  };

  let content = <StartGameScreen startGameHandler={startGameHandler}/>

  if(userNumber && guessRounds===0){
    content= <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/> 
  }
  else if (guessRounds>0){
    content = <GameOverSceen configureNewGameHandler={configureNewGameHandler} userNumber={userNumber} numberOfRounds={guessRounds}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
