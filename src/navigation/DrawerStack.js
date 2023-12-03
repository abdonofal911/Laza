import {createDrawerNavigator} from '@react-navigation/drawer';
import Tab from './Tab';
import {CustomDrawerContent} from '../components/drawer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={props => (
        <CustomDrawerContent drawerItems={props.state.routes} />
      )}>
      <Drawer.Screen component={Tab} name="Tab" />
    </Drawer.Navigator>
  );
};
export default DrawerStack;
