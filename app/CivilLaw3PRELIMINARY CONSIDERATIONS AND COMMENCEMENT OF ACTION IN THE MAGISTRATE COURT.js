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
  {
    question: "Under the Magistrate Court Law of Lagos 2009, how many grades of Magistrate Courts exist in Lagos?",
    options: [
      "None; section 92, MCL",
      "Five; section 93, MCL",
      "None; section 93, MCL",
      "Five; section 92, MCL"
    ],
    correctOptions: ["None; section 93, MCL"],
    answeredOptions: [],
    hint: "The Magistrate Court Law of Lagos 2009 does not provide for any grades of Magistrate Courts under section 93, as the section explicitly states there are none." 
  },  
  {
    question: "What is the minimum number of post-call years required to qualify for appointment as a Magistrate in Lagos?",
    options: [
      "5 years",
      "10 years",
      "7 years",
      "6 years"
    ],
    correctOptions: ["5 years"],
    answeredOptions: [],
    hint: "The Magistrate Court Law of Lagos stipulates that a minimum of 5 years post-call experience is required for appointment as a Magistrate Sec. 4(2), Magistrate Court Law of Lagos State (MCL). "
  },
  {
    question: "Who is responsible for appointing Magistrates in Lagos State?",
    options: [
      "The Chief Judge",
      "The Lagos State Judicial Service Commission",
      "The Governor of Lagos State",
      "The National Judicial Council"
    ],
    correctOptions: ["The Lagos State Judicial Service Commission"],
    answeredOptions: [],
    hint: "In Lagos State, the Judicial Service Commission is tasked with appointing Magistrates in accordance with the Magistrate Court Law Sec. 4(1), MCL."
  },
  {
    question: "In a landlord and tenant dispute, which accurately describes the jurisdiction of the Magistrate Court in Lagos State?",
    options: [
      "The monetary value claimed including the arrears of rent, if any, must not be more than N10,000,000",
      "The annual rental value of the property and all arrears of rent claimed must not be more than N10,000,000",
      "The annual rental value must not exceed N10,000,000 excluding amounts that may be claimed as arrears of rent",
      "The annual rental value must not exceed N15,000,000 including any amount that may be claimed as arrears of rent"
    ],
    correctOptions: ["The annual rental value must not exceed N10,000,000 excluding amounts that may be claimed as arrears of rent"],
    answeredOptions: [],
    hint: "The jurisdiction of the Magistrate Court in landlord-tenant matters is limited to properties with an annual rental value not exceeding N10,000,000, excluding arrears of rent Sec. 28, MCL. The paramount consideration is the annual rental value of the property."
  }, 
  {
    question: "Which of the following is NOT a valid way to commence an action in the Magistrate Court of Lagos State?",
    options: [
      "Plaint",
      "Claim",
      "Originating application",
      "None of the above"
    ],
    correctOptions: ["Plaint"],
    answeredOptions: [],
    hint: "The two ways of commencing an action in the Magistrate Court in Lagos are claims and originating applications. Order 1 of the Magistrates’ Court Rules (MCR).."
  }, 
  {
    question: "When a claimant sues for recovery of debt or a liquidated money demand and believes the defendant has no defence, what type of summons should be issued?",
    options: [
      "Undefended list summons",
      "Summary summons",
      "Ordinary summons",
      "Specific summons"
    ],
    correctOptions: ["Summary summons"],
    answeredOptions: [],
    hint: "A summary summons is used in cases where the claimant believes the defendant lacks a defence to the claim, allowing for a quicker resolution  Order 3, Rule 1, MCR."
  },    
  {
    question: "The type of summons identified in the previous question cannot be used in the following situations, except:",
    options: [
      "Where the defendant is a company and has its registered office in Lagos",
      "Where the defendant is an infant",
      "Where the defendant has to be served outside jurisdiction",
      "Where the claim is to recover money secured under a mortgage"
    ],
    correctOptions: ["Summary summons"],
    answeredOptions: [],
    hint: "Summary summons can be issued against a company with its registered office within the jurisdiction, but it cannot be used in cases involving infants, claims outside jurisdiction, or mortgage recovery."
  },  
  {
    question: "What is the lifespan of the type of summons identified in question 9?",
    options: [
      "6 months after service renewable for another 3 months",
      "3 months after service not subject to renewal",
      "3 months after service renewable for another 3 months",
      "6 months after service renewable for 3 months twice"
    ],
    correctOptions: ["3 months after service not subject to renewal"],
    answeredOptions: [],
    hint: "The lifespan of a summary summons is limited to 3 months after service and cannot be renewed, ensuring timely prosecution of the case." 
  },
  {
    question: "What is the maximum monetary jurisdiction of the District Court of the FCT?",
    options: [
      "N5 million",
      "N10 million",
      "N7 million",
      "N8 million"
    ],
    correctOptions: ["N5 million"],
    answeredOptions: [],
    hint: "The District Court of the FCT has a monetary jurisdiction capped at N5 million, as provided under the relevant laws."
  }
  

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
