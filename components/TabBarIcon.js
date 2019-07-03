import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon 
      name={props.name}
      size={34}
      style={{ marginTop: 10 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
