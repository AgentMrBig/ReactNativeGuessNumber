import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/BodyText';
import { black } from 'ansi-colors';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <View style={styles.imageContainer} >
                <Image style={styles.image} source={require('../assets/images/gameover.jpg')}/>
            </View>
            
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center', 
        alignItems:'center'
    },
    imageContainer: {
        width: '80%',
        height: '25%',
        borderRadius: 200,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
        
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default GameOverScreen;