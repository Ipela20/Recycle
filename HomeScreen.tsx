import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("ProfileScreen");
  };

  const handlePress2 = () => {
    navigation.navigate("RecyclingTipsScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Home" onPress={() => navigation.navigate("HomeScreen")} />
        <Button title="Me" onPress={handlePress} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Points" onPress={() => {}} />
        <Button title="Gains" onPress={() => {}} />
        <Button title="Articles recyclés" onPress={() => {}} />
      </View>
      <View style={styles.categoryContainer}>
        <Button title="Plastique" onPress={() => {}} />
        <Button title="Verre" onPress={() => {}} />
        <Button title="Papier" onPress={() => {}} />
        <Button title="Organique" onPress={() => {}} />
        <Button title="Métal" onPress={() => {}} />
      </View>
      <Button title="Conseils écologie" onPress={handlePress2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default HomeScreen;
