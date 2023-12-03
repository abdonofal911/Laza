import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import {fontScale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import AppInput from '../../components/shared/AppInput';
import RememberMe from '../../components/shared/RememberMe';
import {BottomButton, Header} from '../../components/shared';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {signup} from '../../store/user';
import i18n from '../../i18n';

const passwordRgx =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const {signupLoader} = useSelector(state => state.user);

  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required(i18n.t('auth:usernameError'))
      .min(8, i18n.t('auth:validUsernameError')),
    email: Yup.string()
      .email(i18n.t('auth:validEmailError'))
      .required(i18n.t('auth:emailError')),
    password: Yup.string()
      .required(i18n.t('auth:passwordError'))
      .matches(passwordRgx, i18n.t('auth:validPasswordError')),
  });

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validationSchema,
    onSubmit: values => handleOnSubmit(values),
  });

  const handleOnSubmit = async values => {
    console.log('values from sign up', values);
    dispatch(signup(values));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header hideCart />
      <Text style={styles.signup}>{i18n.t('auth:signUp')}</Text>
      <AppInput
        label={i18n.t('auth:username')}
        placeholder={i18n.t('auth:usernamePlaceholder')}
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
        errorMessage={formik.touched.username && formik.errors.username}
        onBlur={() => formik.setFieldTouched('username')}
      />
      <AppInput
        label={i18n.t('auth:password')}
        placeholder={i18n.t('auth:passwordPlaceholder')}
        autoCapitalize="none"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        errorMessage={formik.touched.password && formik.errors.password}
        onBlur={() => formik.setFieldTouched('password')}
        password
      />
      <AppInput
        label={i18n.t('auth:email')}
        placeholder={i18n.t('auth:emailPlaceholder')}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        errorMessage={formik.touched.email && formik.errors.email}
        onBlur={() => formik.setFieldTouched('email')}
      />
      <RememberMe />
      <BottomButton
        title={i18n.t('auth:signUp')}
        onPress={formik.handleSubmit}
        loading={signupLoader}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  signup: {
    fontSize: fontScale(28),
    fontFamily: Font.SemiBold,
    color: Colors.black,
    marginTop: vScale(25),
    textAlign: 'center',
    marginBottom: vScale(150),
  },
});
