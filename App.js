import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// The code below will display my BioSketch @ UC, and it's amazing!!!!!
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.titleBlock}>
          <Text style={styles.welcome}>
            WELCOME TO THE UNIVERSITY of the CUMBERLANDS
          </Text>
          <Text style={styles.course}>Course ID: MSCS 533</Text>
        </View>

        <View style={styles.bioCard}>
          <Text style={styles.bio}>
            Mohan Chaitanya Kolla is a software developer with experience in
            software engineering and is currently pursuing a PhD at the
            University of the Cumberlands (UC).
          </Text>
          <Image
            accessibilityLabel="Professional profile portrait"
            source={require('./assets/profile.jpg')}
            style={styles.profile}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e60026',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    backgroundColor: '#e60026',
  },
  titleBlock: {
    alignItems: 'center',
    marginBottom: 14,
  },
  welcome: {
    maxWidth: 300,
    color: '#050505',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  course: {
    marginTop: 4,
    color: '#050505',
    fontSize: 14,
    fontWeight: '800',
  },
  bioCard: {
    alignItems: 'center',
    padding: 18,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  bio: {
    maxWidth: 320,
    color: '#111111',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
  },
  profile: {
    width: 130,
    height: 142,
    marginTop: 16,
    resizeMode: 'cover',
  },
});
