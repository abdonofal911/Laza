import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../shared/AppButton';
import Spacer from '../shared/Spacer';
import Colors from '../../themes/Colors';
import {fontScale, sHeight, sWidth, scale, vScale} from '../../themes/Scale';
import GetLocation from 'react-native-get-location';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  enableLatestRenderer,
} from 'react-native-maps';

const LocationPicker = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [location, setLocation] = useState({
    latitude: 30.96932,
    longitude: 31.163651,
  });
  const mahallaLocation = {
    latitude: 30.96932,
    longitude: 31.163651,
  };

  const getLocationHandler = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setLocation(location);
        setPermissionGranted(true);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  const pickOnMapHandler = () => {
    console.log('pickOnMapHandler');
  };

  if (!permissionGranted)
    return (
      <View>
        <Text
          style={{
            color: Colors.google,
            textAlign: 'center',
            fontSize: fontScale(18),
            paddingVertical: vScale(20),
          }}>
          Please Allow Location Permission
        </Text>
        <AppButton
          title="Grant Location Permission"
          onPress={getLocationHandler}
        />
      </View>
    );
  return (
    <View>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={location}
          loadingBackgroundColor="black"
          style={styles.mapPreview}>
          <Marker coordinate={location} />
          <Marker
            coordinate={mahallaLocation}
            onPress={() => console.log(mahallaLocation)}
          />
        </MapView>
      </View>
      <View>
        <AppButton title="Locate User" onPress={getLocationHandler} />
        <Spacer space={20} />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    borderWidth: scale(2),
    borderRadius: vScale(8),
    borderColor: Colors.mainColor,
    width: sWidth * 0.85,
    height: sHeight * 0.5,
    marginVertical: vScale(20),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
