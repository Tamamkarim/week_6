import {MediaItemWithOwner} from 'hybrid-types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MediaListItem = ({item}: {item: MediaItemWithOwner}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('touched ' + item.title);
      }}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={{uri: item.thumbnail}} />
      <Text>{item.description}</Text>
      <Text>
        Created at: {new Date(item.created_at).toLocaleString('fi-FI')}
      </Text>
      <Text>Filesize: {(item.filesize / 1024 / 1024).toFixed(2)} MB</Text>
      <Text>Mime-type: {item.media_type}</Text>
      <Text>Owner: {item.username}</Text>
      {/* TODO = HOMEWORK: add all other media data and style your list & listitems */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 5, marginBottom: 5, backgroundColor: '#f5c668'},
  title: {fontSize: 20},
  image: {height: 300},
});

export default MediaListItem;
