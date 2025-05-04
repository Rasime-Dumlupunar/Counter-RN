import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from '../screens/counter';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
