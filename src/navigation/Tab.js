import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {WishList} from '../screens/WishList';
import {Cart} from '../screens/Cart';
import {TabBarButton} from '../components/shared';
import i18n from '../i18n';

const BottomTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabBarButton
              focused={focused}
              label={i18n.t('home:home')}
              iconName="home-outline"
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={WishList}
        name="WishList"
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => (
            <TabBarButton
              focused={focused}
              label={i18n.t('wishlist:wishlist')}
              iconName="heart-outline"
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={Cart}
        name="Cart"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) => (
            <TabBarButton
              focused={focused}
              label={i18n.t('cart:cart')}
              iconName="bag-handle-outline"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default Tab;
