import React from 'react';
import { View, Text } from 'react-native';

const questions = [
];
const Index = () => {
    return (
      <View>
        {questions.map((item, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text>{item.question}</Text>
            {item.options.map((option, idx) => (
              <Text key={idx}>- {option}</Text>
            ))}
          </View>
        ))}
      </View>
    );
  }
  
  export default Index;