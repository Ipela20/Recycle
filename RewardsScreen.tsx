import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const rewardsData = [
  { id: '1', name: 'Réduction sur les courses', points: 100 },
  { id: '2', name: 'Bon d\'achat', points: 200 },
  { id: '3', name: 'Cadeau écologique', points: 300 },
];

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Points et Gains</Text>
      <Text style={styles.points}>Points actuels: 250</Text>
      <FlatList
        data={rewardsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.rewardItem}>
            <Text style={styles.rewardName}>{item.name}</Text>
            <Text style={styles.rewardPoints}>{item.points} points</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  points: {
    fontSize: 20,
    marginBottom: 16,
  },
  rewardItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardPoints: {
    fontSize: 16,
    color: '#888',
  },
});

export default RewardsScreen;
