import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppInput from '../../components/shared/AppInput';
import RememberMe from '../../components/shared/RememberMe';
import {BottomButton, Header} from '../../components/shared';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/user';
import i18n from '../../i18n';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {loginLoader} = useSelector(state => state.user);

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(i18n.t('auth:validEmailError'))
      .required(i18n.t('auth:emailError')),
    password: Yup.string()
      .required(i18n.t('auth:passwordError'))
      .min(8, i18n.t('auth:validPasswordError')),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => handleSubmit(values),
  });

  const handleSubmit = async values => {
    const {email, password} = values;
    dispatch(login({email, password}));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header hideCart />
      <Text style={styles.signup}>{i18n.t('auth:welcome')}</Text>
      <Text style={styles.SubTitle}>{i18n.t('auth:please')}</Text>
      <AppInput
        label={i18n.t('auth:email')}
        placeholder={i18n.t('auth:emailPlaceholder')}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        errorMessage={formik.touched.email && formik.errors.email}
        onBlur={() => formik.setFieldTouched('email')}
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
      <Pressable style={styles.forgotPasswordRow}>
        <Text
          style={styles.forgotPassword}
          onPress={() => {
            console.log('Forgot Password');
          }}>
          {i18n.t('auth:forgot')}
        </Text>
      </Pressable>
      <RememberMe />

      <Text style={styles.termConditionFull}>
        {i18n.t('auth:byConnecting')}{' '}
        <Text style={styles.termCondition}>
          {i18n.t('auth:termsAndConditions')}
        </Text>
      </Text>
      <BottomButton
        title={i18n.t('auth:login')}
        onPress={() => formik.handleSubmit()}
        loading={loginLoader}
      />
    </View>
  );
};

export default Login;

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
    marginBottom: vScale(10),
  },
  SubTitle: {
    marginBottom: vScale(160),
    textAlign: 'center',
    color: Colors.label,
    fontFamily: Font.Light,
  },
  forgotPassword: {
    fontFamily: Font.Regular,
    fontSize: fontScale(13),
    color: Colors.red,
    textAlign: 'left',
  },
  termConditionFull: {
    color: Colors.label,
    textAlign: 'center',
    fontSize: fontScale(13),
    marginHorizontal: scale(35),
    marginTop: vScale(140),
    fontFamily: Font.Regular,
    position: 'absolute',
    bottom: 100,
  },
  termCondition: {
    color: Colors.black,
  },
  switch: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
  forgotPasswordRow: {
    marginTop: vScale(20),
    marginHorizontal: scale(25),
    marginBottom: vScale(20),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
