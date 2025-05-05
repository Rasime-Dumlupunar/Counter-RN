import {createNativeStackNavigator} from '@react-navigation/native-stack';

import New from '../screens/new';
import Flex from '../screens/flex';
import Dimesions from '../screens/dimesions';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Dimesions" component={Dimesions} />
      <Stack.Screen name="Flex" component={Flex} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
