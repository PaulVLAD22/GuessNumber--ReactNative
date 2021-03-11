import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberComponent from "../components/NumberComponent";
import Card from "../components/Card";

const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100)
  );
  const [rounds,setRounds]=useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, onGameOver} = props;

  useEffect(()=>{
    console.log(userChoice);
    console.log(currentGuess);
    if (currentGuess === userChoice){
      onGameOver(rounds);
    }
  },[currentGuess, userChoice, onGameOver]);
  
  const higherGuessHandler = () =>{
    if (props.userNumber<currentGuess){
      Alert.alert("Don't lie !",'You know this is wrong...',[{text:"Sorry!",style:'cancel'}])
      return
    }
    setRounds(rounds+1);
    currentLow.current = currentGuess;
    const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current)
    setCurrentGuess(nextNumber)
  }
  const lowerGuessHandler = ()=>{
    if (props.userNumber>currentGuess){
      Alert.alert("Don't lie !",'You know this is wrong...',[{text:"Sorry!",style:'cancel'}])
        return
    }
    setRounds(rounds+1);
    currentHigh.current = currentGuess;
    const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current)
    setCurrentGuess(nextNumber)
  }

  

  return (
    <View style={styles.screen}>
      <Text>My guess:</Text>
      <NumberComponent>{currentGuess}</NumberComponent>
      <Card style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          color={"red"}
          title="Lower"
          onPress={lowerGuessHandler}
        />
        <Button
          style={styles.button}
          color={"lightgreen"}
          title="Higher"
          onPress={higherGuessHandler}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonWrapper: {
    width: 300,
    maxWidth: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    width: 30,
  },
});

export default GameScreen;
