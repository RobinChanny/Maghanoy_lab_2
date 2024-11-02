import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://scontent.fcgm1-1.fna.fbcdn.net/v/t51.75761-15/464995747_17985738923754434_3751741060352175616_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeESbbn9svsXdicflQqCtrtXhQuJwea408mFC4nB5rjTyZ44wH3TWNqeggM8B_JPLxuMkSNa_Ba_ZSKqdzAldVDN&_nc_ohc=5tWMJfoBkd8Q7kNvgFrwzrd&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AdFIH7KxbAQIQ7gjQkzhnn7&oh=00_AYCd5NLKYXCQR6wgRyCk3uMKfpi_MHRLCQHqcRpSYqRQWg&oe=67290045' }} // Replace with actual avatar link
        />
        <Text style={styles.name}>Frednyson Maghanoy</Text>
        <Text style={styles.profession}>React Native Developer</Text>
      </View>

      
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>49</Text>
          <Text style={styles.statLabel}>Apps</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>54</Text>
          <Text style={styles.statLabel}>Clients</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>22</Text>
          <Text style={styles.statLabel}>Experience</Text>
        </View>
      </View>

      
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.newsletter}>
        <TextInput
          style={styles.input}
          placeholder="Enter email for newsletter"
        />
        <TouchableOpacity style={styles.subscribeButton} onPress={() => {}}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.version}>
        <Text>Version 192.168.10.254</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profession: {
    fontSize: 16,
    color: 'gray',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  buttons: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#6a1b9a',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsletter: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  subscribeButton: {
    backgroundColor: '#6a1b9a',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  subscribeText: {
    color: 'white',
    fontSize: 16,
  },
  version: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
