import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {scale} from '../../themes/Scale';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import DrawerItem from './DrawerItem';
import UserProfileRow from './UserProfileRow';
import {useDispatch} from 'react-redux';
import {logOutUser} from '../../store/user';
import {removeUserData} from '../../storage';
import i18n, {ChangeLanguage} from '../../i18n';

const CustomDrawerContent = ({drawerItems}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(logOutUser());
    removeUserData();
  };
  const list = [
    {
      title: i18n.t('drawer:accountInfo'),
      icon: images.info,
      onPress: () => {},
    },
    {
      title: i18n.t('drawer:password'),
      icon: images.lock,
      onPress: () => {},
    },
    {
      title: i18n.t('drawer:order'),
      icon: images.bag,
      onPress: () => {},
    },
    {
      title: i18n.t('drawer:cards'),
      icon: images.wallet,
      onPress: () => {},
    },
    {
      title: i18n.t('drawer:wishlist'),
      icon: images.heart,
      onPress: () => {},
    },
    {
      title: i18n.t('drawer:settings'),
      icon: images.setting,
      onPress: () => {},
    },
    {
      title: i18n.t('drawer:language'),
      icon: {
        uri: 'https://static.thenounproject.com/png/1825533-200.png',
      },
      onPress: () => ChangeLanguage(),
    },
    {
      title: i18n.t('drawer:logout'),
      icon: images.logout,
      onPress: () => LogoutHandler(),
      isLogout: true,
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
        <Image source={images.menu} style={styles.menu} />
      </Pressable>
      <UserProfileRow />
      {list.map((item, index) => (
        <DrawerItem key={index} {...item} onPress={item.onPress} />
      ))}
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
    flex: 1,
  },
  menu: {
    width: scale(48),
    height: scale(48),
    transform: [{rotate: '90deg'}],
  },
});
