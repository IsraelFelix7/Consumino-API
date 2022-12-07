import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    AddressArea,
    Text
} from './styles';
import logo from '../../assets/rick-and-morty.jpg';
import api from '../../services/api';

export default function Home() {
    const [id, setCep] = useState('');
    const [address, setAddress] = useState(null);

    async function handleBuscar() {
        try {
            const { status, data } = await api.get(`${id}`);
            

            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Digite o id do Adjudicator Rick válido.');
            } else {
                setAddress(data);
            }

        } catch (error) {
            Alert.alert('Buscar', 'Digite o id do Adjudicator Rick');
        }
    };

    async function handleLimpar() {
        setAddress(null);
        setCep('');
    }
    
    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                {!address &&
                    <Input
                        keyboardType="text"
                        maxLength={25}
                        onChangeText={setCep}
                        onSubmitEditing={handleBuscar}
                        placeholder="Digite o id do Adjudicator Rick"
                        placeholderTextColor="#2F48D4"
                        value={id}
                    />
                }

                <Button
                    activeOpacity={0.8}
                    onPress={address ? handleLimpar : handleBuscar}>
                    <ButtonText>
                        {address ? 'Limpar' : 'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>

            {address &&
                <AddressArea>
                    <Text>Id: {id}</Text>
                    <Text>Nome do personagem: {address.name}</Text>
                    <Text>Espécie: {address.species}</Text>
                    <Text>Status: {address.status}</Text>
                    </AddressArea>
            }
        </Container>
    );
}