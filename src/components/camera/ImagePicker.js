import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../shared/AppButton';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Spacer from '../shared/Spacer';
import {scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import {RNCamera} from 'react-native-camera';

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState();

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(selectedImage);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(response);
      }
    });
  };
  return (
    <View>
      <Image
        source={{uri: selectedImage && selectedImage}}
        style={{
          width: scale(200),
          height: scale(200),
          borderRadius: vScale(15),
          borderColor: Colors.mainColor,
          borderWidth: scale(4),
          alignSelf: 'center',
          marginBottom: vScale(20),
        }}
      />
      <AppButton title="Gallery" onPress={() => openImagePicker()} />
      <Spacer space={20} />

      <AppButton title="Camera" onPress={() => handleCameraLaunch()} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
