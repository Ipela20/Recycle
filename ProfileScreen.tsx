import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  // Exemple de données de profil
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    points: 1200,
    membershipLevel: 'Gold',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil de l'utilisateur</Text>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.infoText}>Nom : {user.name}</Text>
      <Text style={styles.infoText}>Email : {user.email}</Text>
      <Text style={styles.infoText}>Points : {user.points}</Text>
      <Text style={styles.infoText}>Niveau d'adhésion : {user.membershipLevel}</Text>
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
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default ProfileScreen;
