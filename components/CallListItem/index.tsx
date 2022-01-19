import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { CallRoom } from "../../types";
import styles from "./style";
import { Fontisto } from "@expo/vector-icons";

export type CallListItemProps = {
    callRoom: CallRoom;
};

const callListItem = (props: CallListItemProps) => {
    const { callRoom } = props;
    const user = callRoom.users[1];

    return (
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
            <View style={styles.midContainer}>
              <Text style={styles.username}>{user.name}</Text>
              <Text numberOfLines={2} style={styles.lastCall}>
              {moment(callRoom.lastCall.date).format("DD/MM/YYYY")}
              </Text>
            </View>
          </View>
    
          <Text style={styles.time}>
          <Fontisto name="phone" color={"green"} size={20}/>
              
        </Text>
        </View>
      );

};
export default callListItem;