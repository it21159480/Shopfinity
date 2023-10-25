import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Entypo } from '@expo/vector-icons';
import COLORS from '../consts/colors';
import * as FileSystem from 'expo-file-system';
const FilePickerComponent = ({onUpload}) => {
    const [localUri, setLocalUri] = useState([]);
    const [images, setImages] = useState([]);


    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            multiple: false,
            copyToCacheDirectory: true,
        });
        console.log('DocumentPicker result:', result);
        // if (!result.canceled && result.assets && result.assets[0] && result.assets[0].uri) {
        //     const savedUri = await saveFileToLocalDirectory(result.assets[0].uri);
        //     setLocalUri(savedUri);
        // }

        if (!result.canceled && result.assets && result.assets.length > 0) {
            let imageUris = [];
            for (let asset of result.assets) {
                const savedUri = await saveFileToLocalDirectory(asset.uri);
                imageUris.push(savedUri);
            }
            setImages(imageUris);
        }

        if (onUpload) {
            onUpload();}
    }

    const saveFileToLocalDirectory = async (uri) => {
        const filename = uri.split('/').pop();
        const newPath = `${FileSystem.documentDirectory}${filename}`;
        
        try {
            await FileSystem.copyAsync({
                from: uri,
                to: newPath
            });
            console.log('File saved to:', newPath);
            return newPath;
        } catch (e) {
            console.error('Failed to save the file:', e);
            return null;
        }
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Button title="Pick Document" onPress={pickDocument} /> */}
            <Entypo name="upload" size={50} color={COLORS.primary} style={{elevation:12}} onPress={pickDocument} />
            {images.map((imageUri, index) => (
                <View key={index} style={{ marginTop: 15 }}>
                    <Image source={{ uri: imageUri }} height={150} resizeMode='contain'/>
                    <Text>Uploaded: {imageUri}</Text>
                </View>
            ))}
        </View>
    );
}

export default FilePickerComponent;
