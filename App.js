import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


// get fonts with loadAsync of expo-font
const fetchFonts = () => {
  Font.loadAsync({
    'd-day-stencil': require('./assets/fonts/d-day-stencil.ttf'),
    'd-la-cruz-font': require('./assets/fonts/d-la-cruz-font.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // state used to check if all data is loaded first
  const [dataLoaded, setDataLoaded] = useState(false);

  // if data is not loaded, return AppLoading which starts fetchFonts and when its finished
  // it setDataLoaded(true) so data is finished loading we can show the rest of the app
  if(!dataLoaded){
    return <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
      />
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);

  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
  }

  if(dataLoaded){
    return (
      <View style={styles.screen}>
        <Header title="Guess a number"/>
        {content}
        
      </View>
    );
  }else{
    return <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)}
      //onError={(err) => console.log(err)}
      />
  }
  
}

const styles = StyleSheet.create({
  screen: {
    flex:1
  }
});
