import React from "react";
import { View, Text } from "react-native";

const questions = [
  {
    Scenario:
      "In light of the severe economic impact and hardship, the Abia State House of Assembly has enacted the 'Immigration Law to generate revenue for the state. This law mandates that any Immigrant entering Abia State in violation must pay a fine of ₦15,000,000. The National Assembly views this as a blatant overreach, as Immigration matters fall under the Exclusive Legislative List of the Constitution. Consequently, the National Assembly has decided to sue the Abia State House of Assembly.",
    question: "Which court would have the authority to hear this case?",
    options: [
      "The Supreme Court",
      "The Court of Appeal",
      "The Federal High Court",
      "Any of the above",
    ],
    correctOptions: ["The Supreme Court"],
    answeredOptions: [],
    hint: "The Supreme Court has exclusive original jurisdiction over disputes between federal and state legislatures. see section one of the supereme court additional jurisdiction act 2002",
  },
  {
    Scenario:
      "In light of the severe economic impact and hardship, the Abia State House of Assembly has enacted the 'Immigration Law to generate revenue for the state. This law mandates that any Immigrant entering Abia State in violation must pay a fine of ₦15,000,000. The National Assembly views this as a blatant overreach, as Immigration matters fall under the Exclusive Legislative List of the Constitution. Consequently, the National Assembly has decided to sue the Abia State House of Assembly.",
    question:
      "The appropriate constitution of the court you have identified above will be:",
    options: ["7 Judges", "5 Judges", "5 Justices", "7 Justices"],
    correctOptions: ["7 Justices"],
    answeredOptions: [],
    hint: "Cases of original jurisdiction in the Supreme Court require at least 7 Justices Note The jurisdiction of the Supreme Court includes the following: Cases of its original jurisdiction, Appeals on fundamental human rights cases, Instances when it wishes to overrule its own previous decisions.",
  },
  {
    Scenario:
      "In light of the severe economic impact and hardship, the Abia State House of Assembly has enacted the 'Immigration Law to generate revenue for the state. This law mandates that any Immigrant entering Abia State in violation must pay a fine of ₦15,000,000. The National Assembly views this as a blatant overreach, as Immigration matters fall under the Exclusive Legislative List of the Constitution. Consequently, the National Assembly has decided to sue the Abia State House of Assembly.",
    question: "The parties in the above suit will be:",
    options: [
      "The National Legislature v Legislature of Abia State",
      "The President of the National Legislature v Speaker of the Legislature, Abia State",
      "The National Legislature v Speaker, Legislature of Abia State",
      "The President of the National Legislature v Legislature of Abia State",
    ],
    correctOptions: [
      "The National Legislature v Speaker, Legislature of Abia State",
    ],
    answeredOptions: [],
    hint: "When the National Assembly is involved in a lawsuit, the party name used is National Assembly. For the House of Assembly, the party name used is Speaker of the House of Assembly. This is according to Section 3 of the Supreme Court Additional Jurisdiction Act.",
  },
  {
    Scenario:
      "In light of the severe economic impact and hardship, the Abia State House of Assembly has enacted the 'Immigration Law to generate revenue for the state. This law mandates that any Immigrant entering Abia State in violation must pay a fine of ₦15,000,000. The National Assembly views this as a blatant overreach, as Immigration matters fall under the Exclusive Legislative List of the Constitution. Consequently, the National Assembly has decided to sue the Abia State House of Assembly.",
    question:
      "Before the suit can be brought by the National Legislature, a resolution must have been passed by:",
    options: [
      "Two-thirds majority of total members of the Senate alone",
      "Two-thirds majority of members of both houses present and voting",
      "Simple majority of members of both houses present and voting",
      "Simple majority of total members of the Senate present and voting",
    ],
    correctOptions: [
      "Simple majority of members of both houses present and voting",
    ],
    answeredOptions: [],
    hint: "Approval by a simple majority of members in both houses is required to initiate the lawsuit Sec. 3,Supreme Court Additional Jurisdiction Act.",
  },
  {
    Scenario:
      "In light of the severe economic impact and hardship, the Abia State House of Assembly has enacted the 'Immigration Law to generate revenue for the state. This law mandates that any Immigrant entering Abia State in violation must pay a fine of ₦15,000,000. The National Assembly views this as a blatant overreach, as Immigration matters fall under the Exclusive Legislative List of the Constitution. Consequently, the National Assembly has decided to sue the Abia State House of Assembly.",
    question:
      "All except one is incorrect about the judgment of the court you have identified above:",
    options: [
      "It can be appealed to the Court of Appeal",
      "It can be appealed to the Supreme Court",
      "It is a final decision not subject to appeal",
      "It can only be appealed to the Supreme Court with leave",
    ],
    correctOptions: ["It is a final decision not subject to appeal"],
    answeredOptions: [],
    hint: "The Supreme Court's decision is final and cannot be appealed. This is stated in Section 235 of the 1999 Constitution of the Federal Republic of Nigeria (CFRN).",
  },
  {
    Scenario:
      "In light of the severe economic impact and hardship, the Abia State House of Assembly has enacted the 'Immigration Law to generate revenue for the state. This law mandates that any Immigrant entering Abia State in violation must pay a fine of ₦15,000,000. The National Assembly views this as a blatant overreach, as Immigration matters fall under the Exclusive Legislative List of the Constitution. Consequently, the National Assembly has decided to sue the Abia State House of Assembly.",
    question:
      "One of the following statements is untrue: 'The Supreme Court constitutes a full court when it wants to...'",
    options: [
      "Interpret the Constitution",
      "Overrule itself",
      "Sit on Fundamental human right cases",
      "Sit on Governorship election tribunal as the final court",
    ],
    correctOptions: ["Sit on Fundamental human right cases"],
    answeredOptions: [],
    hint: "The Supreme Court does not require a full court to sit on cases involving fundamental human rights.",
  },
  {
    Scenario:
      "The President issued a lockdown directive for three states, but the Governor of one state opposed it, claiming improper procedure. The National Legislature supported the Governor. The President, feeling his authority was challenged, deployed the army and decided to sue both the National Legislature and the Governor in court.",
    question: "Which court would the President file this lawsuit in?",
    options: [
      "Supreme Court",
      "Federal High Court",
      "State High Court",
      "Either Supreme Court or Federal High Court",
    ],
    correctOptions: ["Federal High Court"],
    answeredOptions: [],
    hint: "The jurisdiction of the Supreme Court is indeed specific, and including parties not stated in the relevant Act can lead to jurisdictional issues, as highlighted in the case of A.G. Ondo State v A.G.F. This case emphasizes the importance of adhering to the stipulated parties to maintain the court's jurisdiction.",
  },
  {
    question: "What is the constitutional composition of the Supreme Court?",
    options: [
      "The Chief Justice and such number of Justices as determined by the National Judicial Council",
      "The Chief Justice and such number of Justices as determined by the President",
      "The Chief Justice and such number of Justices not less than 21",
      "The Chief Justice and such number of Justices not exceeding 21",
    ],
    correctOptions: [
      "The Chief Justice and such number of Justices not exceeding 21",
    ],
    answeredOptions: [],
    hint: "According to Section 230 of the Constitution of the Federal Republic of Nigeria (CFRN), the Supreme Court is composed of the Chief Justice of Nigeria (CJN) and a number of Justices not exceeding 21.",
  },
  {
    question:
      "At what age can a Supreme Court Justice voluntarily retire due to health or personal reasons?",
    options: ["60", "65", "70", "75"],
    correctOptions: ["65"],
    answeredOptions: [],
    hint: "Supreme Court Justices can retire voluntarily at age 65 or must retire compulsorily at age 70Sec. 291, CFRN..",
  },
  {
    question:
      "At what age is a Justice of the Court of Appeal required to retire?",
    options: ["65", "70", "75"],
    correctOptions: ["70"],
    answeredOptions: [],
    hint: "A Justice of the Supreme Court or the Court of Appeal may retire when he attains the age of 65, but shall retire when he attains the age of 70. Sec. 291 CFRN.",
  },
  {
    Scenario:
      "During the Annual General Meeting of CrystalView Industries PLC, a disagreement arose between one of the company’s directors, Mr. Benjamin, and a shareholder, Mr. Oliver. In the heat of the argument, Mr. Oliver insulted Mr. Benjamin, calling him a 'pig' and accusing him of immoral behavior. Furious, Mr. Benjamin threatened to file a defamation lawsuit against Mr. Oliver.",
    question: "Which court has jurisdiction over this defamation case?",
    options: [
      "The Federal High Court",
      "The State High Court/High Court of the Federal Capital Territory",
      "The Investment and Securities Tribunal",
      "Any of the above",
    ],
    correctOptions: [
      "The State High Court/High Court of the Federal Capital Territory",
    ],
    answeredOptions: [],
    hint: "Defamation cases fall under the jurisdiction of State High Courts or the High Court of the FCT as they involve personal rights.",
  },
  {
    question:
      "If the action is instituted in the State High Court and the court rules it lacks jurisdiction, what is the proper order to make?",
    options: [
      "Dismiss the case",
      "Strike out the case",
      "Non-suit the case",
      "Order a trial de novo",
    ],
    correctOptions: ["Strike out the case"],
    answeredOptions: [],
    hint: "When a court lacks jurisdiction, the proper action is to strike out the case rather than dismissing or retrying it.",
  },
  {
    Scenario:
      "Following a recent presidential election, the candidate of the Visionary Future Party, Mr. David Williams, was declared the winner. The runner-up, Mr. Michael Adams of the New Generation Party, has decided to contest the election results, claiming the winner was not validly elected and that he should be declared the winner instead.",
    question:
      "Which court has jurisdiction over Mr. Michael Adams’ claim regarding the presidential election result?",
    options: [
      "The Presidential Election Tribunal",
      "The Supreme Court",
      "The Court of Appeal",
      "The Federal High Court",
    ],
    correctOptions: ["The Court of Appeal"],
    answeredOptions: [],
    hint: "Petitions challenging presidential election results are exclusively filed at the Court of Appeal, which serves as the Presidential Election Tribunal. Sec.239(1),CFRN",
  },
  {
    Scenario:
      "The Attorney General, Mr. Peter Sullivan, was prosecuting Mr. Marcus Brown for alleged narcotics dealing in the Capital Territory High Court. The defense counsel, Mr. Charles Gray QC, objected, stating the court lacked jurisdiction. The presiding judge, Justice Linda Baker, asked for advice from an amicus curiae (a friend of the court) on the right course of action.",
    question: "What is the appropriate advice in this circumstance?",
    options: [
      "Strike out the case",
      "Transfer the case to the Federal High Court",
      "Dismiss the case",
      "Overrule the objection",
    ],
    correctOptions: ["Transfer the case to the Federal High Court"],
    answeredOptions: [],
    hint: "Matters involving narcotics fall under the exclusive jurisdiction of the Federal High Court. However, The FCT Court Rules give a judge the authority to transfer cases to a court with the appropriate jurisdiction. If this situation were happening in Lagos, the judge would strike out the case instead. This is according to Order 41, Rule 6, of the FCT Rules, 2018.",
  },
  {
    Scenario:
      "Election Tribunal Chairpersons are key officials in the resolution of electoral disputes, and their appointment process must align with the Constitution.",
    question: "Who appoints the Chairpersons of Election Tribunals?",
    options: [
      "The President of the Court of Appeal in consultation with State Heads of Court",
      "The Chief Justice of the Nation in consultation with State Heads of Court",
      "The Chief Judge of a State",
      "None of the above",
    ],
    correctOptions: [
      "The President of the Court of Appeal in consultation with State Heads of Court",
    ],
    answeredOptions: [],
    hint: "The President of the Court of Appeal appoints the chairmen of election tribunals, after consulting with the heads of the state courts.",
  },
  {
    Scenario:
      "The Court of Appeal has broad appellate jurisdiction, but some of its decisions are final and cannot be appealed further.",
    question:
      "Which decisions of the Court of Appeal are final and not appealable to the Supreme Court?",
    options: [
      "Governorship Election Petition",
      "Interlocutory decisions or injunctions",
    ],
    correctOptions: ["Governorship Election Petition"],
    answeredOptions: [],
    hint: "The decision of the Court of Appeal on legislative house election petitions is final, according to Section 246(3) of the 1999 Constitution of the Federal Republic of Nigeria (CFRN).",
  },
  {
    Scenario:
      "Ms. Clara Reynolds is contesting the validity of her late husband's will, which granted a four-story building to a close associate. She believes the will was not properly executed and wants to file a case.",
    question: "In which court should Ms. Reynolds file her case?",
    options: [
      "Customary Court",
      "Magistrate Court",
      "High Court of Capital City Judicial Division",
      "Either Magistrate Court or High Court",
    ],
    correctOptions: ["High Court of Capital City Judicial Division"],
    answeredOptions: [],
    hint: "Only High Courts have jurisdiction to hear matters regarding the validity of a will Sec. 1, Court of Appeal Act.",
  },
  {
    Scenario:
      "Mr. Adam Jones, who resided as a tenant in a property during the landlord's lifetime, claims ownership of the land, asserting that he purchased it in 2018. He now seeks a declaration of title to the land.",
    question:
      "Which court has jurisdiction to hear a case involving a declaration of title to land?",
    options: [
      "Customary Court",
      "Magistrate Court",
      "State High Court",
      "Rent Tribunal",
    ],
    correctOptions: ["State High Court"],
    answeredOptions: [],
    hint: "Matters of land title fall under the exclusive jurisdiction of State High Courts.",
  },
  {
    Scenario:
      "Daniel and John are close friends. Daniel, who did not have an account with CapitalBank, applied for a loan of ₦50,000,000. John agreed to act as a guarantor when the bank required a financially credible customer to back the loan. When Daniel defaulted on the repayment, the bank decided to sue John, believing he was financially capable of covering the debt.",
    question: "Which court has jurisdiction over this case?",
    options: [
      "Federal High Court",
      "State High Court",
      "Investment and Securities Tribunal",
      "Either Federal High Court or State High Court",
    ],
    correctOptions: ["Either Federal High Court or State High Court"],
    answeredOptions: [],
    hint: "In disputes between banks and their customers, both the Federal High Court and the States High Court/FCT have the authority to hear the case. This is based on the case NDIC v Okem Enterprises and the proviso to Section 251(1)(d) of the CFRN.",
  },
  {
    question: "Which of the following courts does not have civil jurisdiction?",
    options: [
      "Sharia Court of Appeal",
      "Magistrates' Court in the North",
      "Customary Court of Appeal",
      "Magistrates' Court in the South",
    ],
    correctOptions: ["Sharia Court of Appeal"],
    answeredOptions: [],
    hint: "Sharia Courts of Appeal primarily deal with Islamic personal law matters, not general civil jurisdiction.",
  },
  {
    question:
      "Which of the following is not an area of exclusive jurisdiction of the Federal High Court?",
    options: [
      "Admiralty matters",
      "Matters arising from the provisions of CAMA",
      "Disputes pertaining to banker-customer relationships",
      "Disputes pertaining to mining and mineral exploration",
    ],
    correctOptions: ["Disputes pertaining to banker-customer relationships"],
    answeredOptions: [],
    hint: "While the Federal High Court has jurisdiction over many specialized areas, banker-customer disputes are within the concurrent jurisdiction of both Federal and State High Courts.",
  },
  {
    Scenario:
      "The Supreme Court (Additional Original Jurisdiction) Act of 2002 outlines cases the Supreme Court may adjudicate. Disputes between federal and state entities fall within this jurisdiction, but not all types of disputes are included.",
    question:
      "Which dispute is NOT included in the Supreme Court's additional exclusive original jurisdiction under the 2002 Act?",
    options: [
      "The National Legislature and the President",
      "The Vice President and a State",
      "The National Legislature and a State",
      "The National Legislature and any State House of Assembly",
    ],
    correctOptions: ["The Vice President and a State"],
    answeredOptions: [],
    hint: "The Act does not explicitly include disputes involving the Vice President.",
  },
  {
    question:
      "Under the Supreme Court (Additional Jurisdiction) Act, which party cannot be included in a suit?",
    options: [
      "The National Legislature",
      "The President of the Federation",
      "The Speaker of a State House of Assembly",
      "The Attorneys-General of the Federation or States",
    ],
    correctOptions: ["The Speaker of a State House of Assembly"],
    answeredOptions: [],
    hint: "The Act specifies the inclusion of institutional bodies rather than individual officeholders See sec. 20 of the Supreme Court (S.C.) Act .",
  },
  {
    question:
      "In a dispute between the Federation and the National Legislature, who are the appropriate parties?",
    options: [
      "The President of the Federation v National Legislature",
      "The Attorney General of the Federation v National Legislature",
      "Federal Executive v Speaker of the National Legislature",
      "The President of the Federation v Senate President",
    ],
    correctOptions: [
      "The Attorney General of the Federation v National Legislature",
    ],
    answeredOptions: [],
    hint: "The Attorney General represents the Federation in legal disputes Sec. 20, S.C. Act.",
  },
  {
    Scenario:
      "The Governor of Silverland State was impeached, leading to a dispute between the Deputy Governor and the State House of Assembly over who should assume the role. The President declared a state of emergency, appointed a military administrator, and the EFCC declared the Governor wanted for misappropriation of funds. The Governor seeks redress for his impeachment.",
    question:
      "If the Governor wishes to sue the State House of Assembly for declaring his impeachment unconstitutional, which court should he approach?",
    options: [
      "The Court of Appeal",
      "The Supreme Court",
      "The State High Court",
      "The Federal High Court",
    ],
    correctOptions: ["The Federal High Court"],
    answeredOptions: [],
    hint: "Section 272(3) of the Constitution gives the Federal High Court the authority to decide if a Governor's office has become vacant.",
  },
  {
    Scenario:
      "The Governor of Silverland State was impeached, leading to a dispute between the Deputy Governor and the State House of Assembly over who should assume the role. The President declared a state of emergency, appointed a military administrator, and the EFCC declared the Governor wanted for misappropriation of funds. The Governor seeks redress for his impeachment.",
    question:
      "If the Attorney General of Silverland seeks to nullify the President's state of emergency declaration, which court has jurisdiction?",
    options: [
      "The Supreme Court",
      "The Court of Appeal",
      "The Federal High Court",
      "The State High Court",
    ],
    correctOptions: ["The Supreme Court"],
    answeredOptions: [],
    hint: "Disputes between the National Assembly and a State’s House of Assembly fall exclusively under the jurisdiction of the Supreme Court.",
  },
  {
    Scenario:
      "In a dispute over the validity of a State House of Assembly member's election, the Governor of Silverland State wants to challenge the election outcome in court.",
    question: "Which court has jurisdiction over the election dispute?",
    options: [
      "The Governorship Election Petition Tribunal",
      "The National and State House of Assembly Election Petition Tribunal",
      "The State High Court",
      "The Federal High Court",
    ],
    correctOptions: [
      "The National and State House of Assembly Election Petition Tribunal",
    ],
    answeredOptions: [],
    hint: "Disputes over state legislative elections fall under the jurisdiction of the Election Petition Tribunal.",
  },
  {
    Scenario:
      "Ms. Jane Carter worked as a driver for Mr. Adam Johnson for over 10 years but was dismissed without being paid eight months of salary arrears. She wishes to sue her employer to recover the owed salaries.",
    question: "Which court should Ms. Carter approach to file her action?",
    options: [
      "The High Court of a State",
      "The Federal High Court",
      "The National Industrial Court",
      "The Magistrate Court",
    ],
    correctOptions: ["The National Industrial Court"],
    answeredOptions: [],
    hint: "Employment disputes fall under the exclusive jurisdiction of the National Industrial Court.",
  },
  {
    question:
      "How should The National Industrial Court be constituted to hear Ms. Carter's case?",
    options: [
      "One judge of the Court",
      "Five Judges of the Court",
      "A single judge or not more than three judges as the head of court may direct",
      "A single judge or not more than two judges as the head of the Court may direct",
    ],
    correctOptions: ["One judge of the Court"],
    answeredOptions: [],
    hint: "The National Industrial Court typically operates with a single judge for cases.",
  },
  {
    Scenario:
      "The ECOWAS Community Court of Justice adjudicates regional disputes and has specific rules about its composition.",
    question:
      "How many judges constitute the ECOWAS Community Court of Justice?",
    options: [
      "5 Independent Judges",
      "7 Independent Judges",
      "9 Independent Judges",
      "15 Independent Judges",
    ],
    correctOptions: ["7 Independent Judges"],
    answeredOptions: [],
    hint: "The ECOWAS Court operates with a fixed number of judges as per its protocol.",
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
