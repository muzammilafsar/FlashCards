import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DeckListing from './DeckListing';
import AddDeck from './AddDeck';
const DeckStack = createStackNavigator({
    Deck_listing: { screen: DeckListing },
    // Deck: { screen: DetailsScreen },
    // Add_card: { screen: AddCard}
  });
  
  const AddDeckStack = createStackNavigator({
    CreateDeck: { screen: AddDeck },
  });
  
  export default createAppContainer(createBottomTabNavigator(
    {
      hvhv: { screen: DeckStack },
      Decks: { screen: AddDeckStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Decks') {
            iconName = `md-person-add`;
          } else if (routeName === 'AddDeck') {
            iconName = `md-person-add`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  ));
// class RouteHandler extends React.Component {
//     render() {
//         return (
//           <View style={styles.container}>
//             <Text>Open up App.js to start working on your app!</Text>
//           </View>
//         );
//       }
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  
// export default RouteHandler;