import React from "react";
import { View, Text } from "react-native";

const questions = [
  {
    question:
      "What is the effect of failing to file a pre-action notice to a statutory body when required by statute?",
    options: [
      "It prevents the court from having jurisdiction on the case",
      "It will lead to the matter being struck out",
      "It is a mere irregularity which can be waived",
      "None of the above",
    ],
    correctOptions: ["It is a mere irregularity which can be waived"],
    answeredOptions: [],
    hint: "Missing a required pre-action notice prevents a court from having jurisdiction to hear the case because a necessary legal condition hasn't been met.",
  },
  {
    Scenario:
      "Officer James Malik purchased 200 bags of cement from PrimeCem Ltd, making an initial payment of 50% of the total cost and agreeing to pay the balance within six months. After failing to fulfill his obligation within the agreed time, PrimeCem Ltd filed a lawsuit to recover the outstanding amount. Officer Malik objected, citing that the action was statute-barred under the Public Officers Protection Act, as it was not brought within the three-month limitation period.",
    question:
      "As the claimant's counsel, how would you respond to the objection raised by Officer Malik?",
    options: [
      "Agree with the objection and concede",
      "Disagree, because the Act only applies to criminal actions, not civil actions",
      "Disagree, because the Act only protects public officers when acting in their official capacity",
      "Disagree, because the Act does not apply to officers in his category",
    ],
    correctOptions: [
      "Disagree, because the Act only protects public officers when acting in their official capacity",
    ],
    answeredOptions: [],
    hint: "The Public Officers Protection Act is designed to shield officers only for actions performed within the scope of their official duties.",
  },
  {
    question: "Which of the following is not a factor to consider before commencing an action in court?",
    options: [
      "Jurisdiction",
      "Pre-action notice",
      "Enforcement of judgment",
      "None of the above"
    ],
    correctOptions: ["None of the above"],
    answeredOptions: [],
    hint: "All the options are preliminary considerations before the commencement of action."
  },
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
};

export default Index;
