import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Chemin vers types.ts

type WasteType = 'plastique' | 'verre' | 'papier' | 'organique' | 'métal';

type SortingInfoScreenRouteProp = RouteProp<RootStackParamList, 'SortingInfo'>;

type Props = {
  route: SortingInfoScreenRouteProp;
};

const SortingInfoScreen: React.FC<Props> = ({ route }) => {
  const { wasteType } = route.params;

  // information sur le tri
  const wasteSortingInfo: { [key in WasteType]: string } = {
    plastique: 'Les plastiques doivent être rincés et triés par type (PET, HDPE, etc.). Les bouchons doivent être retirés.',
    verre: 'Les bouteilles et les bocaux en verre doivent être rincés. Ne pas inclure le verre cassé ni les miroirs.',
    papier: 'Les papiers doivent être propres et secs. Évitez les papiers huilés ou sales. Les magazines et journaux sont acceptés.',
    organique: 'Les déchets organiques incluent les restes de nourriture, le marc de café, et les coquilles d’œufs. Évitez les produits laitiers et la viande.',
    métal: 'Les canettes et les boîtes en aluminium doivent être rincées. Les objets métalliques plus grands doivent être déposés aux centres de recyclage appropriés.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informations sur le tri pour {wasteType}</Text>
      <Text style={styles.info}>
        {wasteSortingInfo[wasteType as WasteType] || 'Aucune information disponible pour ce type de déchet.'}
      </Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SortingInfoScreen;
