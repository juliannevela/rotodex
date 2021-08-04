import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { rawPokemon } from '../services/rawData';

const PokedexScreen = () => {
    return (
        <View>
            {rawPokemon.map((pokemon, i) => (
                <ListItem
                    key={i}
                    onPress={() => {
                        console.log(pokemon.name);
                    }}
                    bottomDivider
                >
                    <ListItem.Content>
                        <ListItem.Title>{pokemon.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    );
};

export default PokedexScreen;
