import React, { FC, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FruitType } from "../Utils/fruitsData";
import Item from "./ListItem";

const StarredList: FC = () => {
    return (
        <View>
            <Text>Starred List</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    starredList: {
        flex: 1,
        width: "100%",
    }
})

export default StarredList;