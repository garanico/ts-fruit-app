import React, { FC } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FruitType } from "../Utils/fruitsData";
import Item from "./ListItem";

interface Props {
    fruitsState: FruitType[];
    setFruitsState: (array: FruitType[]) => void;
  }

const StarredList: FC<Props> = ({fruitsState, setFruitsState}: Props) => { 

    const starItem = (item: FruitType) => {
        const itemIndex = fruitsState.indexOf(item);
        item.starred = !item.starred;
        if (itemIndex > -1) {
          fruitsState.splice(itemIndex, 1, item);
        }
        setFruitsState([...fruitsState]);
        console.log(item);
      };
    

  return (
    <View style={styles.starredList}>
      <FlatList
        data={fruitsState}
        renderItem={({ item }) => {
            if (item.starred === true) {
                return(
                <TouchableOpacity onPress={() => starItem(item)}>
                <Item
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  starred={item.starred}
                />
              </TouchableOpacity>
                )
                    
            }
            
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starredList: {
    flex: 1,
    width: "100%",
  },
});

export default StarredList;
