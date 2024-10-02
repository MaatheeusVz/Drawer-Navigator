import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.titleText}>Bem-vindo à Tela Inicial!</Text>
      <Button title="Abrir o Menu" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.titleText}>Configurações</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mudar Preferências</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.titleText}>Perfil do Usuário</Text>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://i.pinimg.com/736x/6f/bd/a1/6fbda13155dd08d3c3d8aaf5cb80fddf.jpg' }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Menu Principal</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Ajuda"
        onPress={() => alert('Você pode obter ajuda aqui!')}
        labelStyle={styles.drawerItemLabel}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f8f8f8',
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          drawerActiveBackgroundColor: '#7cc',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e6ff',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#7cc',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    height: 100,
    backgroundColor: '#7cc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerItemLabel: {
    fontSize: 18,
    color: '#333',
  },
});
