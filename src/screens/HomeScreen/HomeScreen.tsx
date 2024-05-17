/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useAppDispatch} from '../../hooks';
import {fetchData} from '../../stores/contacts/actions';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  const {contactList} = useSelector((state: any) => state);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderContact = ({item}: any) => (
    <TouchableOpacity
      style={styles.contactContainer}
      onPress={() => navigation.navigate('Detail', {contact: item})}>
      <Image
        source={{
          uri:
            item.photo && item.photo !== 'N/A'
              ? item.photo
              : 'https://via.placeholder.com/150',
        }}
        style={styles.contactImage}
      />
      <View>
        <Text style={styles.contactName}>{item.firstName}</Text>
        <Text style={styles.contactPhone}>{'682-465-2456'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Rizky Abdulrachman</Text>
        <Text style={styles.profileTitle}>Front End Mobile Developer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact List</Text>
        <FlatList
          data={contactList}
          renderItem={renderContact}
          keyExtractor={item => item.id}
        />
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{backgroundColor: 'white', borderRadius: 12, padding: 12}}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
                color: '#333',
                fontWeight: 'bold',
              }}>
              Add New Contact
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder="Enter first name"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder="Enter last name"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: '#fff',
              }}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={{
                backgroundColor: '#00c853',
                padding: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Add Contact
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a5f',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileTitle: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactContainer: {
    shadowColor: '#000',

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00c853',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
  },
});

export default HomeScreen;
