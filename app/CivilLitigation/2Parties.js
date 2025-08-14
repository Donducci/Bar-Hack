import React from "react";
import { View, Text } from "react-native";

const questions = [
  {
    Scenario:
      "In the case of Silverland State v Attorney General of the Federation, the Attorney General is included as a party in a dispute involving constitutional and administrative matters.",
    question:
      "What is the position of the Attorney General of the Federation as a party in this case?",
    options: [
      "A desirable party",
      "A nominal party",
      "A necessary party",
      "A proper party",
    ],
    correctOptions: ["A nominal party"],
    answeredOptions: [],
    hint: "The Attorney General is typically included as a nominal party to represent the Federation in legal matters In disputes involving the State or the Federation, the Attorneys General are typically named as parties in the case because of their official positions.",
  },
  {
    question:
      "Which of the following is not a valid purpose for the joinder of parties in a legal action?",
    options: [
      "Avoid multiplicity or duplicity of action",
      "Save time and avoid abuse of court",
      "Opportunity to correct a misspelt party",
      "To ensure all the necessary parties are made parties to the action",
    ],
    correctOptions: ["Opportunity to correct a misspelt party"],
    answeredOptions: [],
    hint: "The joinder of parties is intended to consolidate related issues, streamline the judicial process, and ensure all necessary parties are included, not to correct errors in party names.",
  },
  {
    question:
      "Alteration or change of parties is necessary in all the following instances except:",
    options: [
      "Bankruptcy",
      "Devolution of interest",
      "Death",
      "None of the above",
    ],
    correctOptions: ["None of the above"],
    answeredOptions: [],
    hint: "Changes or alterations to parties may be required in cases of bankruptcy, death, or devolution of interest, making 'None of the above' the correct answer.",
  },
  {
    question:
      "How should an application for alteration or change of parties be brought before the court?",
    options: [
      "Motion on notice supported by a written address",
      "Motion Exparte",
      "Originating application",
      "Motion Exparte supported with an affidavit and a written address",
    ],
    correctOptions: ["Motion on notice supported by a written address"],
    answeredOptions: [],
    hint: "A motion must always include a written address and can be supported by an affidavit. Affidavits are used to state facts. Some applications are based only on legal grounds, and in such cases, no affidavit is needed. This is outlined in Order 43 of the Lagos Rules.",
  },
  {
    Scenario:
      "Atlantic Oil Ltd, a multinational oil company, has caused significant environmental harm to residents of Brightwater community in Oceanic Local Government, Delta State, due to a massive oil spillage. The spill has polluted the waters, killed aquatic life, and destroyed the community's primary source of livelihood. In response, the community members have staged protests and resolved to file a lawsuit against the company. The community leaders, Mr. Olumide and Mr. Akintayo, have decided to institute legal action on behalf of the community. You have been engaged to represent them in court.",
    question:
      "What is the most appropriate type of legal action to institute on behalf of the community?",
    options: [
      "Representative action",
      "Class action",
      "Group action",
      "Personal action of the community",
    ],
    correctOptions: ["Representative action"],
    answeredOptions: [],
    hint: "A representative action is suitable when individuals sue on behalf of others with common interest in the case, Here's the simplified version:This isn't a class action because the community members can be identified individually, and they all share the same grievance and interest, If you need more information or have other questions, just let me know!.",
  },
  {
    Scenario:
      "Atlantic Oil Ltd, a multinational oil company, has caused significant environmental harm to residents of Brightwater community in Oceanic Local Government, Delta State, due to a massive oil spillage. The spill has polluted the waters, killed aquatic life, and destroyed the community's primary source of livelihood. In response, the community members have staged protests and resolved to file a lawsuit against the company. The community leaders, Mr. Olumide and Mr. Akintayo, have decided to institute legal action on behalf of the community. You have been engaged to represent them in court.",
    question:
      "Which of the following is not a condition precedent for filing the action identified above?",
    options: [
      "Written authority of the members of the community",
      "Leave of court",
      "All of the above",
      "None of the above",
    ],
    correctOptions: ["None of the above"],
    answeredOptions: [],
    hint: "Both written authority and leave of court are required conditions to bring a representative action, You need to get written permission from the community members to bring the lawsuit, and you must seek the court's approval to proceed.",
  },
  {
    Scenario:
      "Atlantic Oil Ltd, a multinational oil company, has caused significant environmental harm to residents of Brightwater community in Oceanic Local Government, Delta State, due to a massive oil spillage. The spill has polluted the waters, killed aquatic life, and destroyed the community's primary source of livelihood. In response, the community members have staged protests and resolved to file a lawsuit against the company. The community leaders, Mr. Olumide and Mr. Akintayo, have decided to institute legal action on behalf of the community. You have been engaged to represent them in court.",
    question:
      "Who should be the appropriate parties before the court in this case?",
    options: [
      "Mr. Olumide and Mr. Akintayo v Atlantic Oil Ltd",
      "Members of Brightwater Community v Atlantic Oil Ltd",
      "Mr. Olumide and Mr. Akintayo (suing for themselves and on behalf of members of the Brightwater Community) v Atlantic Oil Ltd",
      "Mr. Olumide, Mr. Akintayo, and Brightwater Community v Atlantic Oil Ltd",
    ],
    correctOptions: [
      "Mr. Olumide and Mr. Akintayo (suing for themselves and on behalf of members of the Brightwater Community) v Atlantic Oil Ltd",
    ],
    answeredOptions: [],
    hint: "The representatives should explicitly state they are suing on behalf of the community to meet procedural requirements.",
  },
  {
    Scenario:
      "Atlantic Oil Ltd, a multinational oil company, has caused significant environmental harm to residents of Brightwater community in Oceanic Local Government, Delta State, due to a massive oil spillage. The spill has polluted the waters, killed aquatic life, and destroyed the community's primary source of livelihood. In response, the community members have staged protests and resolved to file a lawsuit against the company. The community leaders, Mr. Olumide and Mr. Akintayo, have decided to institute legal action on behalf of the community. You have been engaged to represent them in court.",
    question:
      "What is the appropriate mode of applying for leave to bring a representative action?",
    options: [
      "Originating application",
      "Motion ex parte",
      "Motion on notice",
      "Writ of summons",
    ],
    correctOptions: ["Motion ex parte"],
    answeredOptions: [],
    hint: "Leave for representative action is typically sought via a Motion ex parte to notify all interested parties.",
  },
  {
    Scenario:
      "Following a recent surge in subscription prices and call rates by MTN Network, agitated customers across the country voiced their dissatisfaction. Many were outraged to discover that a one-minute call now costs ₦500. Feeling aggrieved, some individuals have decided to bring a legal action on behalf of all dissatisfied customers of MTN Network.",
    question:
      "What is the most appropriate type of legal action to bring in this case?",
    options: [
      "Representative Action",
      "Class action",
      "Group action",
      "Family action",
    ],
    correctOptions: ["Class action"],
    answeredOptions: [],
    hint: "A class action allows individuals to sue on behalf of a large group sharing the same grievance, All the aggrieved parties cannot be reasonably ascertained, so a class action is the most appropriate..",
  },
  {
    question:
      "In Lagos State, which of the following cannot be brought by way of a class action?",
    options: [
      "Nuisance",
      "Construction of any written instrument including a statute",
      "Administration of an estate",
      "Trust property: Property subject to a trust",
    ],
    correctOptions: ["Nuisance"],
    answeredOptions: [],
    hint: "Matters involving the interpretation of written instruments or statutes are not typically suitable for class action suits.",
  },

  {
    Scenario:
      "David Johnson and Michael Green were appointed as executors of the estate of Mr. Henry Carter. As executors, they decided to institute legal action against Prime Bank to recover a debt owed to Mr. Carter before his death.",
    question:
      "Which of the following correctly identifies the appropriate parties before the court?",
    options: [
      "David Johnson, Michael Green (suing for themselves and on behalf of the estate of Mr. Henry Carter) v Prime Bank",
      "David Johnson and Michael Green v Prime Bank",
      "The estate of Mr. Henry Carter, deceased v Prime Bank",
      "David Johnson, Michael Green (suing as executors to the estate of Mr. Henry Carter, deceased) v Prime Bank",
    ],
    correctOptions: [
      "David Johnson, Michael Green (suing as executors to the estate of Mr. Henry Carter, deceased) v Prime Bank",
    ],
    answeredOptions: [],
    hint: "Executors must clearly indicate their role in representing the estate of the deceased in legal proceedings.",
  },
  {
    Scenario:
      "In Brightville, River State, the Council of Elders decided to remove Nathaniel Brown from his role as one of the traditional leaders and appointed Samuel Clark in his place. Upset by his removal, Nathaniel Brown filed a lawsuit in the High Court to challenge the Council's actions. The Council of Elders believes it’s necessary to include Samuel Clark in the case since the court's decision will directly affect him.",
    question: "How can Samuel Clark be classified in this case?",
    options: [
      "Proper party",
      "Nominal party",
      "Desirable party",
      "Necessary party",
    ],
    correctOptions: ["Desirable party"],
    answeredOptions: [],
    hint: "Consider the potential impact of the court's decision on Samuel Clark. If the court decides in favor of Nathaniel Brown, it could directly affect Clark's position as the newly appointed leader. Given this potential impact, it's crucial to have Clark involved in the case to ensure a fair and complete resolution.",
  },
  {
    Scenario:
      "In Brightville, River State, the Council of Elders decided to remove Nathaniel Brown from his role as one of the traditional leaders and appointed Samuel Clark in his place. Upset by his removal, Nathaniel Brown filed a lawsuit in the High Court to challenge the Council's actions. The Council of Elders believes it’s necessary to include Samuel Clark in the case since the court's decision will directly affect him.",
    question:
      "What is the appropriate mode of bringing an application for joinder before the court?",
    options: [
      "Motion on notice",
      "Motion ex parte",
      "Originating motion",
      "Summons on the co-defendant",
    ],
    correctOptions: ["Motion on notice"],
    answeredOptions: [],
    hint: "Applications for joinder are typically brought through a motion on notice to ensure all parties are notified.",
  },
  {
    Scenario:
      "In Brightville, River State, the Council of Elders decided to remove Nathaniel Brown from his role as one of the traditional leaders and appointed Samuel Clark in his place. Upset by his removal, Nathaniel Brown filed a lawsuit in the High Court to challenge the Council's actions. The Council of Elders believes it’s necessary to include Samuel Clark in the case since the court's decision will directly affect him.",
    question:
      "If Samuel Clark applies to be joined as a party in the case, how will he be properly termed?",
    options: [
      "An intervener",
      "An interested party",
      "An intruder",
      "A stakeholder",
    ],
    correctOptions: ["An intervener"],
    answeredOptions: [],
    hint: "An intervener is a person who voluntarily applies to join an ongoing case because they have an interest in its outcome.",
  },
  {
    question:
      "What is the effect of failing to join a necessary party in a legal proceeding?",
    options: [
      "The case will be dismissed",
      "A procedural irregularity which won't lead to striking out the case",
      "The case will be struck out",
      "The case will be declared non-suit",
    ],
    correctOptions: [
      "A procedural irregularity which won't lead to striking out the case",
    ],
    answeredOptions: [],
    hint: "Failure to join a necessary party is considered a procedural irregularity but does not automatically render the case invalid or lead to its dismissal Order 15, Rule 16(1), Lagos Rules.",
  },
  {
    Scenario:
      "At the Law Firm of Bright Legal Associates, where you interned, your supervising attorney informed you about a client, Sarah Johnson, a philanthropist based in Lagos, Nigeria. She had lent her childhood friend, Emily Carter, ₦24,000,000 to establish a technology company. The loan agreement was executed in Lagos and guaranteed by Emily's boyfriend, Ethan Moore, who resides in Abuja. Despite repeated demands, Emily has failed to repay the loan. Sarah has decided to file a lawsuit in the Lagos High Court to recover her money.",
    question:
      "If Emily Carter wants to involve her boyfriend in the case to share liability, what legal procedure should she initiate?",
    options: [
      "Applying for joinder of parties",
      "Third party proceedings",
      "Fast track procedure",
      "Notice to join a third party",
    ],
    correctOptions: ["Third party proceedings"],
    answeredOptions: [],
    hint: "Third party proceedings allow a defendant to involve another party to share or bear liability if the defendant is found liable.",
  },
  {
    question:
      "What is the proper mode of bringing the application for third party proceeding?",
    options: [
      "Motion on notice",
      "Motion ex parte",
      "Originating motion",
      "Summons on the co-defendant",
    ],
    correctOptions: ["Motion ex parte"],
    answeredOptions: [],
    hint: "Applications for third party proceedings are typically brought through a motion ex parte to obtain leave of court One key difference between joinder of party and third party proceeding is that while application for the former is by motion on notice, application for the latter is by motion exparte.",
  },
  {
    question:
      "In third party proceedings, who primarily benefits from the procedure?",
    options: ["The claimant", "The defendant", "The third party", "A or B"],
    correctOptions: ["The defendant"],
    answeredOptions: [],
    hint: "Third party proceedings are primarily initiated by the defendant to distribute liability.",
  },
  {
    question:
      "What document will be served on Ethan Moore upon the grant of the order in the third party proceedings?",
    options: [
      "Motion on notice",
      "Motion ex parte",
      "Joinder notice and existing processes",
      "Third party notice and existing processes",
    ],
    correctOptions: ["Third party notice and existing processes"],
    answeredOptions: [],
    hint: "A third party notice along with the existing court processes is served to inform the third party of their involvement Order 15, Rule 19(2), Lagos Rules.",
  },
  {
    question:
      "What is the time limit within which Ethan Moore is expected to enter an appearance after being served the process identified above?",
    options: [
      "Within 8 days",
      "Within 35 days",
      "Within 30 days",
      "Within 16 days",
    ],
    correctOptions: ["Within 30 days"],
    answeredOptions: [],
    hint: "If the third party resides outside the court's jurisdiction, they are typically allowed 30 days to enter an appearance.",
  },
  {
    question:
      "What would be your answer to the previous question if Ethan Moore were living in Ikeja, Lagos?",
    options: [
      "Within 8 days",
      "Within 35 days",
      "Within 30 days",
      "Within 16 days",
    ],
    correctOptions: ["Within 8 days"],
    answeredOptions: [],
    hint: "If the third party resides within the jurisdiction, the time limit to enter an appearance is 8 days.",
  },
  {
    question:
      "If Ethan Moore's mother, who is a director at Heritage Bank PLC, is joined as a co-defendant, what appropriate step can she take?",
    options: [
      "Apply for dismissal of the case for misjoinder",
      "Apply for striking out of the case for misjoinder",
      "Apply for striking out of her name for misjoinder",
      "Apply for joinder of the Managing Director of the Bank as co-plaintiff",
    ],
    correctOptions: ["Apply for striking out of her name for misjoinder"],
    answeredOptions: [],
    hint: "If improperly joined, a party can apply for their name to be struck out to remove them from the proceedings  Order 15, Rule 16, Lagos.",
  },
  {
    question:
      "How many days does a third party have to enter an appearance in Abuja if they reside outside the jurisdiction?",
    options: ["30 days", "8 days", "40 days", "35 days"],
    correctOptions: ["35 days"],
    answeredOptions: [],
    hint: "For third parties residing outside the jurisdiction, the standard time frame to enter an appearance is 35 days Order 13, Rule 21, Abuja.",
  },
  {
    question:
      "What is the most appropriate format for third party proceedings?",
    options: [
      "James ___________Claimant And PrimeTech Ltd_______Defendant And Horizon Insurance______Third party",
      "James________________Claimant And PrimeTech Ltd_______Defendant And Horizon Insurance______Defendant’s defendant",
      "James ______________Claimant And PrimeTech Ltd ______Defendant Horizon Insurance______Third party",
      "James ______________Claimant And And Horizon Insurance______Third party PrimeTech Ltd_______Defendant",
    ],
    correctOptions: [
      "James ________Claimant And PrimeTech Ltd_______Defendant And Horizon Insurance______Third party",
    ],
    answeredOptions: [],
    hint: "The correct format ensures clarity in identifying the claimant, defendant, and third party.",
  },
  {
    Scenario: "While interning at the law firm of Summit Legal, you attended a briefing by Mr. David Walker. He explained that on July 15, 2020, one Michael Roberts, driving at excessive speed on Westwood Avenue, collided with his SUV. The vehicle was carrying his wife, Mrs. Emily Walker, and their six-year-old daughter, Sophia Walker. All occupants suffered serious injuries, and the SUV was completely wrecked. Mr. Walker, his wife, and their daughter intend to file a negligence lawsuit seeking compensation for their injuries and damages.",
    question: "Who are the proper parties in the action?",
    options: [
      "The David Walker family (Claimants) v Michael Roberts (Defendant)",
      "Mr. David Walker, Mrs. Emily Walker, Master Sophia Walker (Claimants) v Michael Roberts (Defendant)",
      "Mr. David Walker, Mrs. Emily Walker, Master Sophia Walker (an infant, suing by her guardian, Mr. David Walker) (Claimants) v Michael Roberts (Defendant)",
      "Mr. David Walker, Mrs. Emily Walker, suing for themselves and their daughter Master Sophia Walker (Claimants) v Michael Roberts (Defendant)"
    ],
    correctOptions: ["Mr. David Walker, Mrs. Emily Walker, Master Sophia Walker (an infant, suing by her guardian, Mr. David Walker) (Claimants) v Michael Roberts (Defendant)"],
    answeredOptions: [],
    hint: "When a minor is involved as a claimant, their guardian must be explicitly named to represent them in the proceedings."
  },
  {
    Scenario: "Acting under a power of attorney granted by Ms. Clara Mitchell, Mr. John Carter intends to file a legal action for the recovery of premises against Mrs. Sarah Johnson.",
    question: "Who are the most appropriate parties in this case?",
    options: [
      "Ms. Clara Mitchell (suing through her lawful attorney Mr. John Carter)…. Plaintiff v Mrs. Sarah Johnson…..Defendant",
      "Mr. John Carter (Plaintiff) v Mrs. Sarah Johnson (Defendant)",
      "Ms. Clara Mitchell (Plaintiff) v Mrs. Sarah Johnson (Defendant)",
      "Mr. John Carter suing as an attorney (Plaintiff) v Mrs. Sarah Johnson (Defendant)"
    ],
    correctOptions: ["Ms. Clara Mitchell (suing through her lawful attorney Mr. John Carter)…. Plaintiff v Mrs. Sarah Johnson…..Defendant"],
    answeredOptions: [],
    hint: "The principal, not the attorney, is the proper plaintiff in a legal action, with the attorney's role explicitly stated."
  },  
  {
    question: "When a party to a pending suit claims entitlement to contribution or indemnity from a person not already a party to the suit, what procedure should they initiate?",
    options: [
      "An intervener proceeding",
      "An interpleader proceeding",
      "Application for joinder straightaway",
      "A third party proceeding"
    ],
    correctOptions: ["A third party proceeding"],
    answeredOptions: [],
    hint: "Third party proceedings are specifically designed for cases where a party seeks to bring another party into the suit for contribution or indemnity."
  },  
  {
    question: "What happens when the third party in a third party proceeding does not respond?",
    options: [
      "The trial court will usually give judgment to the original plaintiff",
      "The trial court will usually enter judgment against the person the above proceeding was taken",
      "The party against whom the proceeding was taken will be deemed to have admitted and will be bound by the decision of the court",
      "Award costs against the person the above last proceeding was taken"
    ],
    correctOptions: ["The party against whom the proceeding was taken will be deemed to have admitted and will be bound by the decision of the court"],
    answeredOptions: [],
    hint: "Failure to respond in a third party proceeding implies admission, and the court's decision will bind the unresponsive party."
  },  
  {
    question: "Which of the following is incorrect?",
    options: [
      "Nomenclature of parties depends on the type of action and the rules of court.",
      "A person can be plaintiff and defendant in the same action.",
      "In interlocutory applications, parties are referred to as applicant and respondent.",
      "Mistake in stating correct names of the parties is not fatal to case.",
    ],
    correctOptions: [
      "A person can be plaintiff and defendant in the same action.",
    ],
    answeredOptions: [],
    hint: "A party cannot be both plaintiff and defendant in the same case; counterclaims are separate actions.",
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
