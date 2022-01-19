import { StyleSheet } from 'react-native';
import callRooms from '../data/CallRooms';
import CallListItem from '../components/CallListItem';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { FlatList } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     <FlatList 
     style={{width:"100%"}}
     data={callRooms} 
     renderItem={({item}) => <CallListItem callRoom={item}/>}
     keyExtractor={(item) => item.id}
     />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
