/* eslint-disable prettier/prettier */
import React from 'react';
import { Header } from 'react-native-elements';

export default function Appbar() {
    return (
        <Header
            centerComponent={{ text: 'Awesome Place', style: { color: '#000', fontSize: 18, fontWeight: 'bold' } }}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{backgroundColor: 'lightgreen', justifyContent: 'space-around' }}
        />
    );
}
