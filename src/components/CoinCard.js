import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const CoinCard = (props) => {
  return (
    <View style={card}>
      <View>
        <Text>{props.symbol}</Text>
        <Text><Text>$</Text>{props.price_usd}</Text>
      </View>
      <View>
        <Text>{props.percent_change_24h}</Text>
        <Text>{props.percent_change_7d}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
  top: { },
  bottom: { },
});

const { card } = styles;

export default CoinCard;
