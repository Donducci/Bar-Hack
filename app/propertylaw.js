import React from 'react';
import { View, Text } from 'react-native';

const questions = [
  {
    question: 'Mr. Adewale Onyekachi executed an instrument authorizing the law firm "Justice & Co." to manage his commercial complex in Lagos and grant leases on his behalf for a duration of five years. Subsequently, the senior partner of the firm, Barrister Kemi Adeyemi, passed away.\n\nThe instrument is rendered ineffective for which of the following reasons?',
    options: [
      'The death of the senior partner',
      'A firm, not being a juristic entity, cannot be granted a power of attorney',
      'A power of attorney can only be granted to an individual person',
      'A law firm, not being a legal practitioner under the Legal Practitioners Act, cannot be granted a power of attorney',
    ],
    correctOption: ['A firm, not being a juristic entity, cannot be granted a power of attorney'],
    answeredOptions: [],
    hint: 'A power of attorney, which is an instrument of delegation, can only be given to juristic persons and not necessarily to a lawyer. However, a firm, even if registered as a business name, is not considered a legal entity and therefore cannot be granted a power of attorney. This was established in the case of National Bank of Nigeria Limited v Korban Brothers Nigeria Limited and Ors (1976) 1 FNR 11. Additionally, certain individuals cannot be granted a power of attorney, such as partnership firms (including law firms), unincorporated entities, bankrupt individuals, those who are mentally incapacitated, and minors. If a law firm is registered as a limited liability partnership or a limited partnership, in such cases, where the law firm has legal recognition and is considered a separate legal entity, it is eligible to receive a power of attorney.'
  },
  {
    question: 'Assuming the power of attorney granted by Mr. Adewale Onyekachi to "Justice & Co." was intended to be executed in Ghana, it must be duly attested by?',
    options: [
      'Evidence of payment fee',
      'Certification by Nigerian Immigration Service',
      'Consent from the Governor',
      'Notary Public',
    ],
    correctOption: ['Notary Public'],
    answeredOptions: [],
    hint: 'A power of attorney that is intended to be executed outside of Nigeria is typically attested by a Notary Public, as the seal of a Notary Public is recognized internationally. However, it is also important to note that attestation of a power of attorney for execution outside Nigeria can be done by other authorized individuals, such as Magistrates, Ambassadors, and Judicial Officers. This is supported by the cases of Hutcheon v. Mannington (1791) 30 E.R 1327 and Ayiwoh v Akorede (1951) 20 NLR 4, as well as Section 118 of the Evidence Act. These alternative attesters provide the necessary validation and authentication for the power of attorney to be recognized and accepted outside of Nigeria.'
  },
  {
    question: 'You need to draft the irrevocability clause in a power of attorney document that has been presented to you. The clause could be written in one of the following ways:',
    options: [
      'I DECLARE that this power of attorney shall be irrevocable for one year from the date given',
      'I ASSERT that this power of attorney shall be irrevocable for one year from the date given',
      'I GUARANTEE that this power of attorney shall be irrevocable for one year from the date given',
      'I CONFIRM that this power of attorney shall be irrevocable for one year from the date given',
    ],
    correctOption: ['I DECLARE that this power of attorney shall be irrevocable for one year from the date given'],
    answeredOptions: [],
    hint: 'The inclusion of an irrevocable clause in a power of attorney is optional and not mandatory. However, if the solicitor decides to include such a clause, it is advisable to clearly state the intention using precise language. A common precedent is: I DECLARE that this power of attorney shall be irrevocable for one year from the date given.'
  },
  {
    question: 'A power of attorney is signed by:',
    options: [
      'One individual only',
      'Two individuals only',
      'Two parties only',
      'One party only',
    ],
    correctOption: ['One party only'],
    answeredOptions: [],
    hint: 'A power of attorney, when it is executed as a deed, is generally structured as a deed poll, indicating that it is signed by a single party. It’s important to distinguish that the phrase "one person" is not accurate in this context, as it might be mistaken for "one party." In property law, the individuals involved are referred to as parties. However, there are instances where a power of attorney takes the form of a deed indenture, which requires the signatures of two or more parties. This situation typically arises when the power of attorney imposes responsibilities on the Donee (the individual receiving the power). In such cases, having the Donee\'s signature is essential to prevent fraudulent activities. Moreover, when the power of attorney is associated with consideration (something of value exchanged) or an interest (legal interest involved), both parties should sign the document to establish mutual consent and clarity.'
  },
  {
    question: 'If a power of attorney is created by deed, how must it be expressly terminated?',
    options: [
      'Verbally',
      'Notice of disqualification',
      'By deed',
      'By poll',
    ],
    correctOption: ['By deed'],
    answeredOptions: [],
    hint: 'When a power of attorney is established as a deed, it must be formally revoked or terminated through another deed. This requires using the same formal process that was used to create the power of attorney in the first place. The case of Ojugbele v Olasoji (1982) 1 Al NLR 43 established this principle. Essentially, if a power of attorney is executed as a deed, it mandates a formal revocation by executing a new deed that specifically revokes or terminates the original power of attorney. Ensuring that proper formalities are observed in both the creation and revocation of a power of attorney is crucial for maintaining its legal clarity and validity.'
  },
  {
    question: 'The final document in this transaction must be stamped within how many days after execution to avoid penalty?',
    options: [
      '40',
      '21',
      '30',
      '14',
    ],
    correctOption: ['30'],
    answeredOptions: [],
    hint: 'A power of attorney is not considered a final document because its purpose is to delegate authority to a donee who then proceeds to complete a specific task or transaction. Therefore, it serves as an initial document that begins the process. Final documents, on the other hand, are those that transfer an interest in land, and once they are executed, no further documents are needed. Regarding stamp duties, a final document must be stamped within thirty (30) days of execution. This means that documents like Deeds of Mortgage, Deeds of Conveyance, and Deeds of Lease or Sub-Lease must have the required stamp duties affixed within 30 days from the date of execution. The thirty (30) day timeframe is crucial because the question specifically refers to a "FINAL" document, indicating that stamp duties for such documents must be affixed within thirty (30) days to comply with legal requirements.'
  },
  {
    question: 'A power of attorney that begins with the phrase, "Know ye all men by this present," should be discarded because:',
    options: [
      'It is archaic',
      'It is ambiguous',
      'It is a Latin expression',
      'All of the above',
    ],
    correctOption: ['It is archaic'],
    answeredOptions: [],
    hint: 'The phrase "Know ye all men by this present" is considered outdated because it was traditionally used to start a power of attorney. However, in modern practice, such documents typically begin with phrases like "By this Power of Attorney" or "This Deed of Attorney." These modern wordings are now commonly used to commence a power of attorney document.'
  },
  {
    question: 'The process in which a senior lawyer reviews the draft of a Deed of Conveyance is called:',
    options: [
      'Confirmation',
      'Affirmation',
      'Assessment',
      'Scrutiny',
    ],
    correctOption: ['Scrutiny'],
    answeredOptions: [],
    hint: 'Scrutiny refers to the careful examination of a document to ensure its accuracy and to identify any possible errors. In the context of a Deed of Conveyance, "scrutiny" is the term used to describe the process where a senior lawyer reviews the draft document to ensure its correctness. During this review, the senior lawyer pays close attention to details, verifying that everything is accurate and error-free, which is crucial before the document is finalized and executed.'
  },
  {
    question: 'The act of adding the name and address of the legal practitioner who prepared the final version of a Deed of Conveyance on the document is called:',
    options: [
      'Franking',
      'Complement',
      'Frankly',
      'Endpoint',
    ],
    correctOption: ['Franking'],
    answeredOptions: [],
    hint: 'Franking refers to the practice of identifying the person who prepared a document. In the context of a Deed of Conveyance, franking specifically means appending the name and address of the legal practitioner who prepared the final copy of the document onto the document itself. This process is important because it clearly indicates who was responsible for drafting the Deed of Conveyance, providing transparency and accountability.'
  },
  {
    question: 'Mr. Alex resides in Singapore and wants to appoint Miss Laila Hassan as the person responsible for collecting rent from his property in Nigeria and using it to support his parents who live there.\n\nWhat Mr. Alex has done is referred to as:',
    options: [
      'Donation of power',
      'Transfer his interest to Miss Laila Hassan',
      'Alienate his interest in Miss Laila Hassan',
      'Power of attorney',
    ],
    correctOption: ['Donation of power'],
    answeredOptions: [],
    hint: 'The most appropriate term is "Donation of Power" because it accurately represents the act of delegating authority. It’s important to distinguish this term from "Power of Attorney." The transaction itself is known as a "Donation of Power," while the legal document created to record this delegation is called a "Power of Attorney." The term "Donation of Power" emphasizes the act of granting authority, while "Power of Attorney" refers to the written document formalizing this delegation.'
  },
  {
    question: 'Mr. Alex resides in Singapore and wants to appoint Miss Laila Hassan as the person responsible for collecting rent from his property in Nigeria and using it to support his parents who live there.\n\nWhat document does Mr. Alex need to execute?',
    options: [
      'Power of attorney',
      'Deed of delegation',
      'Deed of sub-demise',
      'Deed of conveyance',
    ],
    correctOption: ['Power of attorney'],
    answeredOptions: [],
    hint: 'The document to be executed in this context is a "Power of Attorney." Although the transaction itself is referred to as a "Donation of Power," as explained earlier, once it is established that the transaction involves delegating authority, the correct legal document to prepare and execute is a Power of Attorney. The term "Power of Attorney" specifically refers to the written document that grants authority and outlines the scope of the delegated powers.'
  },
  {
    question: 'Mr. Alex resides in Singapore and wants to appoint Miss Laila Hassan as the person responsible for collecting rent from his property in Nigeria and using it to support his parents who live there.\n\nCan Mr. Alex revoke this power at any time?',
    options: [
      'Mr. Alex can revoke it anytime',
      'Mr. Alex can only do this after expiration of the agreement',
      'Mr. Alex can revoke this after getting a Court Order',
      'Mr. Alex can only revoke after the agreement from Miss Laila Hassan',
    ],
    correctOption: ['Mr. Alex can revoke it anytime'],
    answeredOptions: [],
    hint: 'A power of attorney is generally revocable, meaning it can be revoked or terminated at any time. However, an exception exists when a power of attorney is coupled with valuable consideration or subject to an interest, making it irrevocable. In the question given, no mention is made of valuable consideration or the presence of an interest, indicating that the power of attorney can indeed be revoked at any time. In the absence of such considerations, the general rule applies, allowing the principal to revoke the power of attorney at their discretion.'
  },
  {
    question: 'Mr. Alex resides in Singapore and wants to appoint Miss Laila Hassan as the person responsible for collecting rent from his property in Nigeria and using it to support his parents who live there.\n\nAssuming Miss Laila considers the power, what would your answer to the above be?',
    options: [
      'The revocation can only be valid after the satisfaction of the consideration',
      'The answer would have been the same',
      'The power is perpetually irrevocable',
      'The power can still be revoked any time',
    ],
    correctOption: ['The revocation can only be valid after the satisfaction of the consideration'],
    answeredOptions: [],
    hint: 'When a question begins with "Assuming," it indicates a change in the scenario. In this specific case, if the power of attorney is coupled with consideration, it becomes irrevocable. However, revocation is possible if the consideration has been satisfied, meaning the value upon which the power of attorney was created has been refunded. Therefore, if a power of attorney is coupled with consideration, it becomes irrevocable, but revocation is allowed only if the consideration has been fully refunded.'
  },
  {
    question: 'Mr. Alex resides in Singapore and wants to appoint Miss Laila Hassan as the person responsible for collecting rent from his property in Nigeria and using it to support his parents who live there.\n\nMr. Alex wants to know if he can collect the rent himself despite the donation of power to Miss Laila:',
    options: [
      'Yes he can still legally do so',
      'He cannot unless he revokes the power',
      'He cannot unless he consults Miss Laila Hassan',
      'None of the above',
    ],
    correctOption: ['Yes he can still legally do so'],
    answeredOptions: [],
    hint: 'It’s important to note that this question did not start with the term "Assuming." Therefore, in this scenario, the power of attorney is revocable. As a result, the donor (the person granting the power) can still perform the act delegated to the donee (the person receiving the power) as long as the donee has not completed or perfected the act. This principle is supported by the case of *Chime v. Chime (2001) 3 NWLR Pt. 701 P. 527*. In summary, when a power of attorney is revocable, the donor retains the ability to carry out the delegated act until the donee has fully executed it.'
  },
  {
    question: 'Mr. Alex resides in Singapore and wants to appoint Miss Laila Hassan as the person responsible for collecting rent from his property in Nigeria and using it to support his parents who live there.\n\nAssuming the power of attorney is created with valuable consideration, it is most suitable as what type?',
    options: [
      'Revocable power of attorney',
      'Valuable power of attorney',
      'Irrevocable power of attorney',
      'None of the above',
    ],
    correctOption: ['Irrevocable power of attorney'],
    answeredOptions: [],
    hint: 'The word "Assuming" in this question suggests a shift from the previous scenarios. If a power of attorney is coupled with consideration, it becomes more binding and is best described as an irrevocable power of attorney. When a power of attorney is supported by consideration, it gains additional legal weight, making it difficult to revoke. Therefore, if consideration is involved, the power of attorney becomes irrevocable, meaning the donor cannot easily revoke or terminate it.'
  },
  {
    question: "Which of the following is the appropriate method of creating a legal mortgage in Rivers State?",
    options: [
        "By assignment",
        "By demise",
        "By sub-demise",
        "All of the above"
    ],
    correctOption: [ "By sub-demise"],
    answeredOptions: [],
    hint: "In property transactions, a mortgage can be either legal or equitable. A legal mortgage is created by deed and perfected, while an equitable mortgage lacks one or more conditions of a legal mortgage, such as not being created by deed or not being perfected. The method of creating a legal mortgage varies depending on the jurisdiction. Rivers State falls within the Property and Conveyancing Law (PCL) States, where a legal mortgage can be created either by sub-demise or by legal charge. Among the provided options, sub-demise is the most appropriate method for Rivers State."
},
{
  question: "One of the following will not be an option, should the parties opt for an equitable mortgage:",
  options: [
      "Mere deposit of the deed",
      "Equitable charge",
      "Sub demise",
      "An agreement to create a legal mortgage"
  ],
  correctOption: [ "Sub demise"],
  answeredOptions: [],
  hint: "An equitable mortgage can be established through various methods, including: creating a mortgage through a deed without perfection, merely depositing title documents with the lender, having an agreement to create a legal mortgage without fulfilling all the legal requirements, or through an equitable charge. Sub-demise, however, is a method to create a legal mortgage, not an equitable one."
},
{
  question: "Which of the following is not a method used to create an equitable mortgage?",
  options: [
      "Mere deposit of the deed",
      "Equitable charge",
      "Sub-demise",
      "An agreement to create a legal mortgage"
  ],
  correctOption: [ "Sub-demise"],
  answeredOptions: [],
  hint: "An equitable mortgage can be established in several ways, including: (a) creating a mortgage through a deed without completing the necessary legal formalities (deed without perfection), (b) depositing title documents with the lender (mere deposit of title document), (c) having an agreement to create a legal mortgage, or (d) establishing an equitable charge. Sub-demise, however, is a method used to create a legal mortgage, not an equitable one."
},
{
  question: "If a mortgage involves multiple properties, the mortgagee may refuse to allow the mortgagor to redeem one property without redeeming all others due to the doctrine of:",
  options: [
      "Atonement",
      "Fairness",
      "Consolidation",
      "Successive mortgage"
  ],
  correctOption: [ "Consolidation"],
  answeredOptions: [],
  hint: "The doctrine of consolidation states that when a mortgagor has used multiple properties as security, they cannot redeem any individual property unless they redeem all of them together. If there is a covenant to consolidate, the mortgagee (lender) can refuse to allow the mortgagor (borrower) to redeem one property without redeeming all the others. This means the mortgagor must repay the entire debt secured by all the properties before reclaiming any individual property."
},
{
  Scenario: "Miss Jennifer uses her house in Ibadan as collateral to obtain a loan of ₦10 million from Zenith Bank, and the transaction is perfected. Later, she needs an additional ₦10 million and decides to use the same property as collateral. The second loan is also granted by the bank using the same property as security.",
  question: "What is the nature of this transaction?",
  options: [
      "Mortgage",
      "Loan",
      "Assignment",
      "Lease"
  ],
  correctOption: [ "Mortgage"],
  answeredOptions: [],
  hint: "When a question refers to 'security for a loan,' it indicates that the transaction is a mortgage. Terms like 'security,' 'to obtain a loan,' or 'charges' all refer to the concept of a mortgage, where collateral is provided to secure a loan. Thus, in this scenario, the transaction is a mortgage."
},
{
  Scenario: "Miss Jennifer uses her house in Ibadan as collateral to obtain a loan of ₦10 million from Zenith Bank, and the transaction is perfected. Later, she needs an additional ₦10 million and decides to use the same property as collateral. The second loan is also granted by the bank using the same property as security.",
  question: "What is required to perfect the transaction?",
  options: [
      "Only stamping",
      "Only registration",
      "Only governor's consent",
      "All of the above"
  ],
  correctOption: [ "All of the above"],
  answeredOptions: [],
  hint: "To perfect a mortgage transaction, several steps must be completed: obtaining the governor's consent, paying the required stamp duties, and registering the transaction at the land registry. These steps are crucial for the proper legal recognition of the transaction."
},
{
  Scenario: "Miss Jennifer uses her house in Ibadan as collateral to obtain a loan of ₦10 million from Zenith Bank, and the transaction is perfected. Later, she needs an additional ₦10 million and decides to use the same property as collateral. The second loan is also granted by the bank using the same property as security.",
  question: "The subsequent increase in loan amount requires only?",
  options: [
      "Registration",
      "Stamping",
      "Up stamping",
      "Subsequent government consent"
  ],
  correctOption: [ "Up stamping"],
  answeredOptions: [],
  hint: "In a mortgage transaction, if the borrower seeks an additional loan or an increase in the existing loan amount using the same property as security, up-stamping is required if the original mortgage is a legal mortgage. This involves updating and stamping the existing mortgage document to reflect the increased loan amount."
},
{
  Scenario: "Miss Jennifer uses her house in Ibadan as collateral to obtain a loan of ₦10 million from Zenith Bank, and the transaction is perfected. Later, she needs an additional ₦10 million and decides to use the same property as collateral. The second loan is also granted by the bank using the same property as security.",
  question: "Assuming Miss Jennifer only deposited her title document with the bank to obtain the loan, what is the nature of the transaction?",
  options: [
      "Legal mortgage",
      "Defective mortgage",
      "Equitable mortgage",
      "Informal mortgage"
  ],
  correctOption: [ "Equitable mortgage"],
  answeredOptions: [],
  hint: "If only the title document is deposited with the bank as security for the loan, the transaction is considered an equitable mortgage. In this type of mortgage, the title document serves as the collateral, but the transaction does not meet the full legal requirements of a legal mortgage."
},
{
  Scenario: "Miss Jennifer uses her house in Ibadan as collateral to obtain a loan of ₦10 million from Zenith Bank, and the transaction is perfected. Later, she needs an additional ₦10 million and decides to use the same property as collateral. The second loan is also granted by the bank using the same property as security.",
  question: "What would be your answer if there is a clause in the deed preventing the redemption of the property?",
  options: [
      "It is invalid because it offends the principle of mortgage",
      "It is valid once agreed by the parties",
      "It is valid upon Court Order",
      "None of the above"
  ],
  correctOption: [ "It is invalid because it offends the principle of mortgage"],
  answeredOptions: [],
  hint: "A clause in a deed of mortgage that prevents the mortgagor from redeeming the property is generally considered invalid, as it offends the fundamental principle of a mortgage, which is the right to redeem. The courts are unlikely to enforce such a clause, particularly if the mortgagor is a natural person."
},
{
  Scenario: "While participating in your externship program, you and your colleagues had the chance to review several files related to past mortgage transactions handled by your law firm. Among the documents examined was a discharge of mortgage. This led to a discussion about the appropriate methods for discharging a mortgage and the remedies available to the mortgagor.",
  question: "What is the proper method to discharge a mortgage created by sub-demise on a property in Calabar?",
  options: [
    "A deed of re-conveyance",
    "Statutory receipt in Form 5",
    "Statutory receipt Form 2",
    "A deed of surrender"
  ],
  correctOption: ["A deed of surrender"],
  answeredOptions: [],
  hint: "The process for discharging a mortgage depends on the location and how the mortgage was established. In Calabar, which is governed by the Conveyancing Act States (CA States), a mortgage created by sub-demise can be discharged through a deed of surrender, release, or discharge. Among the choices, 'deed of surrender' is the most suitable option for this scenario."
},
{
  Scenario: "Access Bank PLC seeks your advice as a solicitor on how the bank, as the mortgagee, can handle the reversionary interest of a mortgagor concerning the mortgaged property in Lokoja, Kogi State, when exercising its power of sale.",
  question: "How can the bank, as the mortgagee, deal with the reversionary interest of the mortgagor in respect of the mortgaged property in Lokoja, Kogi State, in the exercise of its power of sale?",
  options: [
    "Trust declaration",
    "Power of attorney",
    "All of the above",
    "None of the above"
  ],
  correctOption: ["All of the above"],
  answeredOptions: [],
  hint: "In handling the reversionary interest of the mortgagor, the bank may utilize both a trust declaration and a power of attorney to ensure that the interests of all parties are properly managed during the exercise of its power of sale."
},
{
  Scenario: "You are guiding a client through various legal aspects of mortgages and property titles. The client seeks to understand the nature of agreements used to establish legal mortgages, the concept of a good root of title, and the fundamental features of a deed.",
  
  question: "When an agreement to create a legal mortgage is executed, it functions as which of the following?",
  options: [
    "Legal mortgage",
    "Statutory mortgage",
    "Equitable mortgage",
    "Sale of house"
  ],
  correctOption: ["Equitable mortgage"],
  answeredOptions: [],
  hint: "An agreement to create a legal mortgage typically operates as an equitable mortgage. Equitable mortgages can be established through various means, such as a deed without full legal formalities, a mere deposit of title documents, or an agreement to create a legal mortgage."
},
{
  question: "Which of the following does not qualify as a good root of title?",
  options: [
    "Legal mortgage",
    "Registered deed",
    "Registered title",
    "Power of attorney"
  ],
  correctOption: ["Power of attorney"],
  answeredOptions: [],
  hint: "A power of attorney is not considered a good root of title because it does not transfer an interest in land, a key requirement for a good root of title. Examples of insufficient roots of title include a power of attorney, lease agreement, equitable mortgage, and certificate of occupancy."
},
{
  question: "Which of the following is not a fundamental feature of a deed?",
  options: [
    "Stamping",
    "Signing",
    "Sealing",
    "Delivery"
  ],
  correctOption: ["Stamping"],
  answeredOptions: [],
  hint: "To be valid, a deed must be signed, sealed, and delivered. While stamping may be necessary for certain legal purposes, it is not considered an essential feature of the deed itself."
},
{
  Scenario: "A bank is considering how to handle the reversionary interest of a mortgagor concerning a mortgaged property in Benin City, Edo State, while exercising its power of sale.",
  
  question: "How can the bank, as the mortgagee, deal with the reversionary interest of the mortgagor in respect of the mortgaged property in Benin during the exercise of its power of sale?",
  options: [
    "Trust declaration",
    "Power of attorney",
    "Leave of court",
    "None of the above"
  ],
  correctOption: ["Leave of court"],
  answeredOptions: [],
  hint: "In Benin City, which falls under the jurisdiction of Edo State and the Property and Conveyancing Law (PCL) States, the bank should seek the Leave of Court to manage the reversionary interest of the mortgagor when exercising its power of sale. Remedial devices like trust declarations and powers of attorney are not applicable in this context."
},
{
  question: "The Property and Conveyancing Law is not likely to apply to which of the following states?",
  options: [
    "Delta State",
    "Kwara State",
    "Ogun State",
    "None of the above"
  ],
  correctOption: ["Kwara State"],
  answeredOptions: [],
  hint: "The Property and Conveyancing Law (PCL 1959) applies to the states of Oyo, Ogun, Ondo, Osun, Ekiti, Edo, and Delta. Since Kwara State is not included in this list, it is the correct option."
},
{
  Scenario: "After a mortgage has been validly discharged, certain documents and items must be returned by the mortgagee to the mortgagor.",
  
  question: "Upon a valid discharge of the mortgage, which of the following should not be delivered by the mortgagee to the mortgagor?",
  options: [
    "Deed of release or Surrender",
    "Vacated Deed of mortgagor",
    "Original title documents to the property",
    "None of the above"
  ],
  correctOption: ["Vacated Deed of mortgagor"],
  answeredOptions: [],
  hint: "When a mortgage is discharged, necessary documents include the deed of release, deed of surrender, deed of discharge, and the return of the original title documents to the mortgagor. However, there is no such thing as a vacated deed of mortgage."
},
{
  Scenario: "Amina Musa accompanied the head of chambers to the state Land Registry for a search. During the search, she encountered an entry related to certificate of occupancy 126/126/3.",
  
  question: "How are entries related to a certificate of occupancy typically recorded at the Land Registry?",
  options: [
    "Page, number, and volume of the certificate",
    "Volume, page, and number of the certificate",
    "Property number, page, and volume of the certificate",
    "None of the above"
  ],
  correctOption: ["Property number, page, and volume of the certificate"],
  answeredOptions: [],
  hint: "In the Land Registry, entries related to a certificate of occupancy are typically recorded in the order of Property Number, Page, and Volume (NPV)."
},
{
  Scenario: "Near the Garki Market in Abuja, a large signboard displays 'Integrity Law Chambers - Experts in Property Management, Fast Sales, and Letting. We have the best lawyers in property law practice. A trial will convince you.'",
  
  question: "This scenario is an example of:",
  options: [
    "Advertising",
    "Ambulance chasing",
    "Ambulance chasing",
    "None of the above"
  ],
  correctOption: ["Advertising"],
  answeredOptions: [],
  hint: "While excessive advertising by legal practitioners is considered unethical, certain forms of advertisement are allowed, such as publication in journals, signs and notices, and promotion through various media."
},
{
  question: "The presence of which of the following in the deed to be executed would eliminate the need for a separate receipt?",
  options: [
    "Consideration clause",
    "Receipt clause",
    "Execution clause",
    "None of the above"
  ],
  correctOption: ["Receipt clause"],
  answeredOptions: [],
  hint: "If a deed includes a receipt clause, it removes the necessity for issuing a separate receipt."
},
{
  Scenario: "Mr. Chinedu decided to grant a 5-year lease on his 3-bedroom bungalow located at No. 12 Airport Road, Enugu, Enugu State, to Ada. The property is covered by a certificate of occupancy granted on May 5th, 1990.",
  
  question: "What document will be executed by the parties?",
  options: [
    "Deed of tenancy agreement",
    "Deed of sublease",
    "Deed of lease",
    "Power of attorney"
  ],
  correctOption: ["Deed of sublease"],
  answeredOptions: [],
  hint: "A lease that exceeds three years must be created by a deed. In this scenario, where the property is covered by a Certificate of Occupancy, the appropriate document to execute is a deed of sublease."
},
{
  Scenario: "Mr. Chinedu decided to grant a 5-year lease on his 3-bedroom bungalow located at No. 12 Airport Road, Enugu, Enugu State, to Ada. The property is covered by a certificate of occupancy granted on May 5th, 1990.",
  question: "The parties to the above transaction are:",
  options: [
    "Lessor and lessee",
    "Assignor and assignee",
    "Sub lessor and sub lessee",
    "Landlord and tenant"
  ],
  correctOption: ["Sub lessor and sub lessee"],
  answeredOptions: [],
  hint: "In a deed of sublease, the parties involved are referred to as the Sub-lessor (the original lessee) and the Sub-lessee (the new lessee)."
},
{
  Scenario: "Mr. Chinedu decided to grant a 5-year lease on his 3-bedroom bungalow located at No. 12 Airport Road, Enugu, Enugu State, to Ada. The property is covered by a certificate of occupancy granted on May 5th, 1990.",
  question: "The most appropriate mode of creating the above transaction, if the Lessor appoints you to act on his behalf, is:",
  options: [
    "Writing",
    "Orally",
    "Deed",
    "All of the above"
  ],
  correctOption: ["Deed"],
  answeredOptions: [],
  hint: "A power of attorney is an instrument that appoints a person to act on behalf of another. In this case, since the instructions pertain to a lease, which must be created by deed, the power of attorney should also be created by deed. This is supported by the case of Abina v Farhat [1938] 14 NLR 17."
},
{
  Scenario: "Mr. Chinedu decided to grant a 5-year lease on his 3-bedroom bungalow located at No. 12 Airport Road, Enugu, Enugu State, to Ada. The property is covered by a certificate of occupancy granted on May 5th, 1990.",
  question: "Assuming the agreement was made in writing, what clause would have made it possible for Mr. Chinedu to renew the lease?",
  options: [
    "Rent renewal clause",
    "Tenancy renewal clause",
    "Options to renew",
    "Rent review clause"
  ],
  correctOption: ["Options to renew"],
  answeredOptions: [],
  hint: "The 'Option to renew' clause in a lease deed allows the parties to agree on the renewal or extension of the lease term. This clause is necessary to enable Mr. Chinedu to renew the lease. This is supported by the case of Knightsbridge Estates Trust Ltd v Byrne [1940] AC 613."
},
{
  Scenario: "Mr. Chinedu decided to grant a 5-year lease on his 3-bedroom bungalow located at No. 12 Airport Road, Enugu, Enugu State, to Ada. The property is covered by a certificate of occupancy granted on May 5th, 1990.",
  question: "Assuming Mr. Chinedu is your client, what tax will he pay to the government in respect of the land before the building is erected?",
  options: [
    "Tenement rate",
    "Ground rent",
    "Rack rent",
    "All of the above"
  ],
  correctOption: ["Ground rent"],
  answeredOptions: [],
  hint: "Ground rent is a payment made by the landowner to the government for the use of bare land, typically before any structures are built on it. It is a form of tax related to the land itself before construction. This is supported by the provisions of the Land Use Act 1978."
},
{
  Scenario: "Mrs. Adaobi is the landlady of the premises known as Grace Estate, located in Kubwa, near Abuja. John Okoye has agreed with Mrs. Adaobi to rent the premises for three years, with an option to renew for an additional three years as mutually agreed.",
  
  question: "Which of the following statements is not correct?",
  options: [
    "The transaction does not need to be by deed",
    "The transaction must be by deed",
    "The agreement is valid",
    "Mrs. Adaobi can review John Okoye's rent for the next three years"
  ],
  correctOption: ["The transaction does not need to be by deed"],
  answeredOptions: [],
  hint: "Leases are classified into two categories: tenancy and lease agreements. Tenancy usually refers to leases of three years or less, which can be created either orally or in writing. On the other hand, lease agreements for durations exceeding three years must be established by deed. Hence, it's incorrect to state that a tenancy transaction must be by deed."
},
{
  Scenario: "Mrs. Adaobi is the landlady of the premises known as Grace Estate, located in Kubwa, near Abuja. John Okoye has agreed with Mrs. Adaobi to rent the premises for three years, with an option to renew for an additional three years as mutually agreed.",
  question: "Who is typically responsible for preparing the document in this transaction?",
  options: [
    "John Okoye's solicitor",
    "Mrs. Adaobi's solicitor",
    "The estate agent",
    "All of the above"
  ],
  correctOption: ["Mrs. Adaobi's solicitor"],
  answeredOptions: [],
  hint: "The tenancy agreement is usually prepared by the Landlord or Landlady or their solicitor. In this scenario, since Mrs. Adaobi is the landlady, she or her solicitor would be responsible for drafting the tenancy agreement. This is supported by the case of Bevan v Webb [1901] 2 Ch 59."
},
{
  Scenario: "During their externship program, Chinedu Okafor and Kelechi Nnamani, law students assigned to the legal firm of Socrates & Plato, were invited by Mr. Emeka Odili, their field supervisor, to a meeting with Chief Bode Adeyemi, the head of the Adeyemi family in the Surulere area of Lagos State. Chief Adeyemi expressed his desire to manage his family's affairs as he ages and mentioned several planned transactions.",
  
  question: "Which of the following transactions is not included in Chief Adeyemi's instructions?",
  options: [
    "Lease",
    "Tenancy",
    "Mortgage",
    "Contract of sale of land"
  ],
  correctOption: ["Mortgage"],
  answeredOptions: [],
  hint: "Different transactions are identified by specific terms. Terms like 'authorize,' 'vest power,' and 'act on my behalf' relate to powers of attorney. 'Transfer of interest' and 'convey' relate to sales of land. 'Exclusive possession' and 'demised premises' relate to leases. However, none of the terms related to mortgages were mentioned, so the instruction does not include a mortgage transaction."
},
{
  question: "Which law is unlikely to apply to the transactions handled by Socrates & Plato in this scenario?",
  options: [
    "Tenancy Law of Lagos State 2011",
    "Mortgage and Property Law, Lagos 2010",
    "Evidence Act 2011",
    "None of the above"
  ],
  correctOption: ["Mortgage and Property Law, Lagos 2010"],
  answeredOptions: [],
  hint: "Since none of the transactions mentioned by Chief Adeyemi involve a mortgage, the Mortgage and Property Law of Lagos 2010 is unlikely to apply."
},
{
  question: "Which of the following is not a typical factor considered when fixing rent?",
  options: [
    "Inflation",
    "Taxation",
    "Statutes regulating payment",
    "Salary"
  ],
  correctOption: ["Salary"],
  answeredOptions: [],
  hint: "When determining rent, landlords or landladies consider factors such as inflation, regulations, location, and taxation. However, the tenant's salary is generally not a factor that landlords or landladies consider when setting the rent."
},
{
  question: "If the time for rent payment is not explicitly stated in the lease covenant, it implies:",
  options: [
    "Payment in advance",
    "Defective lease",
    "Payment in arrears",
    "None of the above"
  ],
  correctOption: ["Payment in arrears"],
  answeredOptions: [],
  hint: "To avoid ambiguity, lease covenants should be clearly stated. If the rent payment covenant is not explicitly mentioned, common law principles dictate that rent would be presumed to be paid in arrears. This principle is supported by the case of Smith v. Truscott [1902] 1 Ch 150."
},
{
  question: "Which of the following would render a lease agreement invalid?",
  options: [
    "Option to renew",
    "Rent review clause",
    "Date of commencement",
    "All of the above"
  ],
  correctOption: ["Date of commencement"],
  answeredOptions: [],
  hint: "For a lease to be valid, certain elements must be present, including the certainty of the commencement date. If the commencement date is missing, the lease may be rendered invalid. This is supported by the case UBA v Tejumola [1988] NSCC Vol. 19 (Pt. 1) 945."
},
{
  question: "What covenant would you include to ensure that the property is used for residential purposes?",
  options: [
    "Covenant not to assign",
    "User covenant",
    "Usual covenant",
    "Used covenant"
  ],
  correctOption: ["User covenant"],
  answeredOptions: [],
  hint: "A user covenant specifies the intended purpose for which the premises are leased, ensuring that it is used for residential purposes. This is supported by the case of Doe d. Matthewson v. Morris [1902] 1 Ch 58."
},
{
  Scenario: "During their externship program, Chinedu Okafor and Kelechi Nnamani, law students assigned to the legal firm of Socrates & Plato, were invited by Mr. Emeka Odili, their field supervisor, to a meeting with Chief Bode Adeyemi, the head of the Adeyemi family in the Surulere area of Lagos State. Chief Adeyemi expressed his desire to manage his family's affairs as he ages and mentioned several planned transactions.",
  question: "If Mr. Adeyemi requested a clause allowing him to use the master bedroom whenever he visits, what would be the effect of this clause?",
  options: [
    "Invalid for ambiguity",
    "Invalid for certainty of terms",
    "Invalid for lack of exclusive possession",
    "All of the above"
  ],
  correctOption: ["Invalid for lack of exclusive possession"],
  answeredOptions: [],
  hint: "Exclusive possession is a fundamental aspect of a valid lease, meaning the tenant has the exclusive right to occupy the premises without interference from the landlord. Allowing the landlord access to the master bedroom would violate this principle, making the lease invalid. This is supported by the case of Street v Mountford [1985] AC 809."
},
{
  question: "How should a proper covenant not to assign be drafted?",
  options: [
    "Not to assign, sublet or part with any part of the premises",
    "Not to assign, sublet or part with any part of the premises without the written consent of the lessor",
    "Not to assign, sublet or part with any part of the premises without written consent from the lessor, such consent not to be unreasonably withheld",
    "Not to assign, sublet or part with any part of the premises without the written consent of the lessor, such consent not to be unreasonably withheld in the case of a responsible and respectable person."
  ],
  correctOption: ["Not to assign, sublet or part with any part of the premises without the written consent of the lessor, such consent not to be unreasonably withheld in the case of a responsible and respectable person."],
  answeredOptions: [],
  hint: "The covenant not to assign or sublet in a lease means the tenant cannot transfer their lease rights without the landlord's consent. The landlord's consent should not be unreasonably withheld. This is supported by the case of Ishola William v Hammond Project Ltd [1988] 1 NSCC 342."
},
{
  question: "If a tenant sublets without the lessor's consent, what remedy can the lessor enforce?",
  options: [
    "Specific performance",
    "Forfeiture and re-entry",
    "Renewal",
    "Consent"
  ],
  correctOption: ["Forfeiture and re-entry"],
  answeredOptions: [],
  hint: "A covenant for forfeiture and re-entry allows the lessor to terminate the lease and regain possession of the property if the tenant breaches the lease by subletting without consent. This is supported by the case of Crago v Julian [1992] 1 WLR 372."
},
{
  question: "If there is consent to sublet, the subsequent agreement is:",
  options: [
    "A reversionary lease",
    "A lease of term specific",
    "A lease",
    "A sub-lease"
  ],
  correctOption: ["A sub-lease"],
  answeredOptions: [],
  hint: "When a lessee sublets the property, the arrangement between the original lessee and the sub-lessee is called a sub-lease. The original lessee becomes the sub-lessor, and the third party is the sub-lessee. This is supported by the case of National Carriers Ltd v Panalpina (Northern) Ltd [1981] AC 675."
},
{
  question: "A standard rent review clause in a lease must include all of the following except:",
  options: [
    "Mode of review",
    "Term of years",
    "Dispute resolution mechanism",
    "Period of review"
  ],
  correctOption: ["Term of years"],
  answeredOptions: [],
  hint: "A rent review clause typically outlines the mode of review, period of review, and dispute resolution mechanism. The specific term of years for the lease itself is usually addressed separately from the rent review clause. This is supported by the case of United Scientific Holdings Ltd v Burnley Borough Council [1978] AC 904."
},
{
  question: "Which of the following would not be included in the reddendum?",
  options: [
    "Amount of rent",
    "Date of payment of rent",
    "Method of computing",
    "Time when the rent would be paid"
  ],
  correctOption: ["Method of computing"],
  answeredOptions: [],
  hint: "The reddendum typically includes the amount of rent, date of payment, and time when the rent would be paid. The method of computing the rent is not usually part of the reddendum. This is supported by the case of Basingstoke and Deane Borough Council v Host Group Ltd [1985] 1 WLR 1345."
},
{
  Scenario: "Ogochukwu sold her house to Michael Obiora. Both parties exchanged a formal contract of sale in April 2022. The house is located in Rivers State. Michael Obiora approached Zenith Bank PLC for a loan and executed an agreement to create a legal mortgage over the house in favor of the bank.",
  
  question: "What is Ogochukwu obligated to do after the exchange of contracts?",
  options: [
    "Apply for a certificate of occupancy",
    "Deduce title",
    "Pay deposit",
    "Execute a power of attorney"
  ],
  correctOption: ["Deduce title"],
  answeredOptions: [],
  hint: "After the exchange of the contract of sale, the post-contract stage begins, where the vendor (Ogochukwu) is responsible for deducing title. This involves providing the purchaser with the necessary documents to prove ownership. This is supported by the case of Williams v Hensman [1861] 70 ER 862."
},
{
  question: "When does a contract of sale agreement become effective?",
  options: [
    "Execution",
    "Attestation",
    "Franking",
    "Exchange"
  ],
  correctOption: ["Exchange"],
  answeredOptions: [],
  hint: "A contract of sale of land becomes binding and effective when the signed copies of the contract are exchanged between both parties. Until this exchange occurs, there is no legally binding contract, and either party may withdraw. This principle was established in the case of Smith v Mansi [1962] All ER 859."
},
{
  question: "At what stage of the contract is the investigation of title conducted?",
  options: [
    "Before contract",
    "After contract",
    "During contract",
    "Perfection"
  ],
  correctOption: ["After contract"],
  answeredOptions: [],
  hint: "The investigation of title is conducted during the post-contract stage, where the purchaser examines the title documents and conducts searches to verify the seller's legal ownership. This is crucial for ensuring that the property is free from encumbrances. This process is typically performed after the contract is exchanged. This is supported by the case of Williams v Hensman [1861] 70 ER 862."
},
{
  question: "How are entries regarding the title recorded in the Rivers State Land Registry?",
  options: [
    "Page, volume, number",
    "Volume, number, page",
    "Page, number, volume",
    "Number, page, volume"
  ],
  correctOption: ["Number, page, volume"],
  answeredOptions: [],
  hint: "In the Land Registry of Rivers State, entries regarding the certificate of occupancy are recorded in the format Number, Page, and Volume (NPV). This format is standard practice in many land registries."
},
{
  Scenario: "Chief Emeka is a car parts dealer at the Wuse Market in Abuja. He has agreed with Mr. Yakubu to purchase a vacant plot of land along the Gwarimpa expressway on which he plans to build a car parts shop. On the 15th of February 2022, he visited the law firm where you were completing your externship, bringing with him a receipt issued by Mr. Yakubu as evidence of their agreement. Chief Emeka informed your principal that he cannot sign the relevant documents to transfer the property since he is illiterate. He wishes for his son, Chinedu (a university student), to handle the negotiations on his behalf.",
  
  question: "What is the legal standing of Chief Emeka in executing a valid deed given his illiteracy?",
  options: [
    "Being illiterate, he cannot execute a valid deed",
    "As an illiterate, Chief Emeka can execute a valid deed provided it contains the appropriate jurat clause",
    "As an illiterate, Chief Emeka may execute a valid deed attested by the registrar of titles",
    "None of the above"
  ],
  correctOption: ["As an illiterate, Chief Emeka can execute a valid deed provided it contains the appropriate jurat clause"],
  answeredOptions: [],
  hint: "In property transactions involving an illiterate party, a validly executed document must include a jurat clause to protect the interests of the illiterate. According to Ezeigwe v Awudu [2008] 1 NWLR (Pt. 1097) 1568, Chief Emeka can execute a valid deed as long as it includes the necessary jurat clause."
},
{
  Scenario: "Chief Emeka is a car parts dealer at the Wuse Market in Abuja. He has agreed with Mr. Yakubu to purchase a vacant plot of land along the Gwarimpa expressway on which he plans to build a car parts shop. On the 15th of February 2022, he visited the law firm where you were completing your externship, bringing with him a receipt issued by Mr. Yakubu as evidence of their agreement. Chief Emeka informed your principal that he cannot sign the relevant documents to transfer the property since he is illiterate. He wishes for his son, Chinedu (a university student), to handle the negotiations on his behalf.",
  
  question: "What steps should Chief Emeka have taken before entering into an agreement with Mr. Yakubu?",
  options: [
    "He should have asked Mr. Yakubu to prove his title",
    "He should have verified the location of the land by visiting it",
    "He should have consulted a lawyer",
    "All of the above"
  ],
  correctOption: ["All of the above"],
  answeredOptions: [],
  hint: "Before entering into a sale of land agreement, the purchaser should verify the land's existence by visiting it and seek legal advice from a lawyer. These steps are crucial to ensure the purchaser is well-informed and legally protected."
},
{
  Scenario: "Chief Emeka is a car parts dealer at the Wuse Market in Abuja. He has agreed with Mr. Yakubu to purchase a vacant plot of land along the Gwarimpa expressway on which he plans to build a car parts shop. On the 15th of February 2022, he visited the law firm where you were completing your externship, bringing with him a receipt issued by Mr. Yakubu as evidence of their agreement. Chief Emeka informed your principal that he cannot sign the relevant documents to transfer the property since he is illiterate. He wishes for his son, Chinedu (a university student), to handle the negotiations on his behalf.",
  
  question: "What is the legal implication of the agreement entered into by Chief Emeka with Mr. Yakubu?",
  options: [
    "A partial contract that is enforceable in a court of law",
    "A formal contract that is unenforceable",
    "An open contract that is enforceable",
    "An oral contract that is not enforceable by the parties"
  ],
  correctOption: ["An open contract that is enforceable"],
  answeredOptions: [],
  hint: "When a sale of land agreement is reduced to writing but not yet executed as a deed, it is considered an open contract. This means it is enforceable but will only become fully binding after both parties execute a deed."
},
{
  question: "What will a physical investigation of a property typically reveal?",
  options: [
    "Latent defects on the property",
    "Defects on the certificate of occupancy",
    "Patent defects on the property",
    "Overriding interests on the property"
  ],
  correctOption: ["Patent defects on the property"],
  answeredOptions: [],
  hint: "A physical investigation of a property will typically reveal patent defects, which are visible and obvious issues with the property. Remember: Physical investigation reveals Patent (P-P) defects."
},
{
  Scenario: "Chief Emeka is a car parts dealer at the Wuse Market in Abuja. He has agreed with Mr. Yakubu to purchase a vacant plot of land along the Gwarimpa expressway on which he plans to build a car parts shop. On the 15th of February 2022, he visited the law firm where you were completing your externship, bringing with him a receipt issued by Mr. Yakubu as evidence of their agreement. Chief Emeka informed your principal that he cannot sign the relevant documents to transfer the property since he is illiterate. He wishes for his son, Chinedu (a university student), to handle the negotiations on his behalf.",
  
  question: "The initial document to be executed in this transaction should be stamped within how many days after execution to avoid penalties?",
  options: [
    "40 days",
    "21 days",
    "30 days",
    "14 days"
  ],
  correctOption: ["40 days"],
  answeredOptions: [],
  hint: "Initial documents, such as a power of attorney and contract of sale agreement, must be stamped within forty (40) days of execution to avoid penalties. This requirement is critical for ensuring the document's validity."
},
{
  Scenario: "Chief Emeka is a car parts dealer at the Wuse Market in Abuja. He has agreed with Mr. Yakubu to purchase a vacant plot of land along the Gwarimpa expressway on which he plans to build a car parts shop. On the 15th of February 2022, he visited the law firm where you were completing your externship, bringing with him a receipt issued by Mr. Yakubu as evidence of their agreement. Chief Emeka informed your principal that he cannot sign the relevant documents to transfer the property since he is illiterate. He wishes for his son, Chinedu (a university student), to handle the negotiations on his behalf.",
  
  question: "If Michael Obiora wants to pay a deposit of ₦5 million to you as the solicitor in this transaction, how should you accept the sum?",
  options: [
    "Part payment",
    "Down payment",
    "Deposit",
    "Stakeholder"
  ],
  correctOption: ["Stakeholder"],
  answeredOptions: [],
  hint: "The best practice for a solicitor receiving a deposit is to accept it as a stakeholder. This ensures that the solicitor remains neutral and is not liable to either party. Therefore, the ₦5 million should be accepted as a stakeholder."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "If Mr. Ajayi wants to sell the property at No. 8 Ekoro Close, Ikeja, Lagos, which of the following documents will not be relevant in the narrative recital to be included in the Deed of Assignment?",
  options: [
    "The will",
    "Assent",
    "Probate",
    "Deed of legal mortgage"
  ],
  correctOption: ["Deed of legal mortgage"],
  answeredOptions: [],
  hint: "To prove title for a property subject to a will, the relevant documents are a copy of the will and a copy of the assent prepared by the personal representative. In the case of a Deed of Assignment for the sale of a property under a will, the Probate Deed and Legal Mortgage are not typically relevant in the narrative recital."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "What constitutes Mr. Ajayi's title to the property at No. 8 Ekoro Close?",
  options: [
    "Deed of Assignment",
    "His mother’s will",
    "Probate",
    "Assent"
  ],
  correctOption: ["Assent"],
  answeredOptions: [],
  hint: "In a will, the title of a property bequeathed to a beneficiary is established through assent. An assent is a written document prepared by the personal representative that transfers the interest in the property to the beneficiary, serving as proof of the transfer of ownership from the estate to the beneficiary."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "If Mr. Ajayi wants to sell the property at 45 Allen Avenue, Ikeja, Lagos, what constitutes his root of title?",
  options: [
    "Deed of assignment",
    "Assent",
    "Deed of Gift",
    "Probate"
  ],
  correctOption: ["Deed of Gift"],
  answeredOptions: [],
  hint: "The title to the property at 45 Allen Avenue, Ikeja, Lagos, was acquired through a deed of gift from Mr. Ajayi's father as part of his contribution to his son's new business venture. The deed of gift serves as evidence of the transfer of ownership from the father to the son."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "If Mr. Ajayi wants to grant a lease on the property his father gave him, which of the following considerations is correct?",
  options: [
    "He can appoint anybody",
    "He must consider the age of those to be appointed",
    "They must be willing",
    "They should show a degree of competence"
  ],
  correctOption: ["They should show a degree of competence"],
  answeredOptions: [],
  hint: "When appointing someone to manage or lease a property, the appointee should demonstrate a degree of competence to ensure that they can effectively handle the responsibilities involved."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "Which of the following must be included in Mr. Ajayi's will?",
  options: [
    "Changing clause",
    "Revocation clause",
    "Residuary clause",
    "None of the above"
  ],
  correctOption: ["Revocation clause"],
  answeredOptions: [],
  hint: "A revocation clause is a mandatory element that must be included in Mr. Ajayi's will to ensure that any previous wills or codicils are revoked, and the new will is recognized as the final expression of his wishes."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "Assuming Mr. Ajayi is a Muslim, which of the following is not correct?",
  options: [
    "He can dispose of his properties as he wishes",
    "His will must be governed by Islamic Law",
    "He must provide for his dependents",
    "Someone else can sign the will on his behalf at his direction"
  ],
  correctOption: ["He can dispose of his properties as he wishes"],
  answeredOptions: [],
  hint: "Under Islamic law, a Muslim is required to distribute their estate in a specific manner, with 2/3 of the property predetermined by Islamic law and the remaining 1/3 left to their discretion. This principle is supported by the case of Ajibaiye v Ajibaiye [2007] ALL FWLR (PT. 359) 1321."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "If Mr. Ajayi wants to sell any of his properties, which of the following is not included in the operative part of the Deed of Assignment?",
  options: [
    "Testimonium",
    "Parcels clause",
    "Habendum",
    "None of the above"
  ],
  correctOption: ["Testimonium"],
  answeredOptions: [],
  hint: "The operative part of a Deed of Assignment typically includes elements such as the Testatum, consideration, receipt, capacity clause or Covenant of title, words of grant, parcel, and habendum. The Testimonium is not included in the operative part."
},
{
  Scenario: "Mr. Joshua Ajayi is a London-trained tailor whose tailoring business, 'London Tailors,' is located at 150, Victoria Street, Surulere, Lagos. Mr. Ajayi owns the following properties: (a) No. 8 Ekoro Close, Ikeja, Lagos, a property he inherited from his late mother, who passed away on May 15, 1980; (b) 45 Allen Avenue, Ikeja, Lagos, which his father gifted to him when he returned to Nigeria from the United Kingdom in 1975; and (c) 150, Victoria Street, Surulere, Lagos, which he purchased from the Olowu family in December 1982.",
  
  question: "If Mr. Ajayi wants to appoint someone to sell his property on his behalf, which of the following is incorrect?",
  options: [
    "The document appointing the attorney must be in writing",
    "The document appointing the attorney must be by deed",
    "Where he is found to be illiterate, an illiterate jurat must be included",
    "None of the above"
  ],
  correctOption: ["The document appointing the attorney must be in writing"],
  answeredOptions: [],
  hint: "A power of attorney is the legal instrument used to appoint someone to act on another person's behalf. While it is generally advisable for the document to be in writing and by deed, especially in property transactions, the document does not necessarily have to be in writing unless required by the nature of the transaction. This is supported by the case Abina v Farhat [1938] 14 NLR 17."
},
{
  Scenario: "Chief Bamidele Ogunlade has donated a power of attorney to you to execute a deed on his behalf. The execution clause in the deed needs to be properly worded to reflect the power of attorney granted.",
  
  question: "How should the execution clause read for a deed executed under a power of attorney?",
  options: [
    "Signed, sealed, and delivered by the assignor through his lawful attorney by his power of attorney dated this __ day of ___ 2022 and registered as No ___ page ___ volume of the land registry in Ogun State.",
    "Signed, sealed, and delivered by the lawful attorney of the within-named assignor by a power of attorney dated this __ day of __ 2022 and registered at No. __ page __ volume of the land registry",
    "Signed, sealed, and delivered by the within-named assignor by a power of attorney dated __",
    "Any of the above"
  ],
  correctOption: ["Signed, sealed, and delivered by the assignor through his lawful attorney by his power of attorney dated this __ day of ___ 2022 and registered as No ___ page ___ volume of the land registry in Ogun State."],
  answeredOptions: [],
  hint: "The most appropriate way to execute a deed when a power of attorney has been granted is by including the statement: 'Signed, sealed, and delivered by the assignor through his lawful attorney by virtue of his power of attorney dated this [day] of [month] 2022 and registered as No. [number] Page [page number] Volume [volume number] of the Lands Registry in Ogun State.'"
},
{
  Scenario: "Mallam Suleiman Bello lived and passed away at his residence at No. 234 Victoria Crescent, Ilorin, Kwara State. He died testate, and his will was read, with probate granted.",
  
  question: "The gift of a house at No. 12 Yusuf Avenue, Lokoja to Mr. Ahmed Lawal of No. 3 Independence Layout, Abuja is an example of:",
  options: [
    "Specific legacy",
    "General legacy",
    "Pecuniary legacy",
    "Demonstrative legacy"
  ],
  correctOption: ["Specific legacy"],
  answeredOptions: [],
  hint: "A legacy or gift in a will can be categorized into three types: General Legacy, Specific Legacy, and Demonstrative Legacy. A Specific Legacy refers to a gift that is fully described. The gift of a house at No. 12 Yusuf Avenue, Lokoja to Mr. Ahmed Lawal would be categorized as a Specific Legacy."
},
{
  question: "The statement 'I give a car to my friend Ibrahim of No. 7, Jalingo, Taraba State' is an example of:",
  options: [
    "Specific legacy",
    "General legacy",
    "Pecuniary legacy",
    "Demonstrative legacy"
  ],
  correctOption: ["General legacy"],
  answeredOptions: [],
  hint: "The gift of a car to my friend Ibrahim of No. 7, Jalingo, Taraba State is an example of a General Legacy, as it refers to a gift that is not fully described."
},
{
  Scenario: "During your externship at the law firm of Alhaji Nuruddeen & Co., Mr. Bashir Adeyemi, the owner of six flats of four bedrooms each located at 18, Adisa Street, Ilorin, Kwara State, retained the services of the firm. Mr. Bashir agreed that the house should only be used for residential purposes, with no business activities allowed.",
  
  question: "Which of the following will not be included in the introductory part of the deed?",
  options: [
    "Name of parties",
    "Date",
    "Address of parties",
    "Amount of the rent to be paid"
  ],
  correctOption: ["Amount of the rent to be paid"],
  answeredOptions: [],
  hint: "The introductory part of a deed includes the commencement, date, parties, and any recital. However, it does not include the amount of rent to be paid."
},
{
  question: "What clause should you insert to ensure that the property is used only for residential purposes?",
  options: [
    "Insert covenant not to assign",
    "Insert usual covenant",
    "Insert used covenant",
    "Insert user covenant"
  ],
  correctOption: ["Insert user covenant"],
  answeredOptions: [],
  hint: "The clause that ensures the demised premises are used for residential purposes is called the User Covenant. It specifies the intended purpose for which the premises are being leased."
},
{
  Scenario: "During your externship at the law firm of Alhaji Nuruddeen & Co., Mr. Bashir Adeyemi, the owner of six flats of four bedrooms each located at 18, Adisa Street, Ilorin, Kwara State, retained the services of the firm. Mr. Bashir agreed that the house should only be used for residential purposes, with no business activities allowed.",
  
  question: "Mr. Bashir instructed you to insert a clause that would give him the right to enter the premises and the rooms unfettered by time and tide. What would be the effect of this clause?",
  options: [
    "Void for lack of uncertainty",
    "Voidable subject to agreement",
    "Inoperative for lack of agreement",
    "Invalid for offending the principle of exclusive possession"
  ],
  correctOption: ["Invalid for offending the principle of exclusive possession"],
  answeredOptions: [],
  hint: "For a lease to be considered valid, certain conditions must be met, including the grant of exclusive possession. If Mr. Bashir requests a clause that allows him unrestricted access to the premises and rooms without any limitations, it would violate the principle of exclusive possession and render the lease invalid. This principle is supported by the case of UBA v Tejumola [1988] NSCC Vol. 19 (Pt. 1) 945."
},
{
  Scenario: "Mr. Samuel 'Sammy' Taiwo has agreed to lease his four-bedroom bungalow at No. 12, Ayinde Street, Surulere, Lagos, to Mr. Chinedu Obasi for a term of four years. Both men have agreed on a rent of ₦1,500,000.00 (One Million Five Hundred Thousand Naira) per year. However, Mr. Samuel demanded that the rent for the entire term be paid in advance. Additionally, Mr. Alex Tanzi, a returnee from Benin Republic, has expressed interest in moving into the apartment being negotiated by his childhood friend, Mr. Chinedu Obasi.",
  
  question: "The parties to the grant of the term described above are best known as:",
  options: [
    "Landlord and tenant",
    "Vendor and purchaser",
    "Lessor and lessee",
    "Grantor and grantee"
  ],
  correctOption: ["Lessor and lessee"],
  answeredOptions: [],
  hint: "Leases can be divided into two categories: tenancy and lease agreements. The main distinction between them is the duration involved. A tenancy typically lasts for three years or less, while a lease agreement extends beyond three years. In a lease agreement, the parties are known as the lessor and lessee."
},
{
  question: "What document should be executed in this scenario?",
  options: [
    "A deed of conveyance",
    "A deed of lease",
    "A tenancy agreement",
    "A deed of assignment"
  ],
  correctOption: ["A deed of lease"],
  answeredOptions: [],
  hint: "When a lease agreement exceeds three years in duration, it must be created by a deed. In this scenario, the appropriate document to be executed would be a deed of lease."
},
{
  question: "If Mr. Samuel is considering the possibility of reflecting future appreciation in rent, which clause should be inserted?",
  options: [
    "Rackrent review",
    "Rent review clause",
    "Option to renew clause",
    "Reddendum"
  ],
  correctOption: ["Rent review clause"],
  answeredOptions: [],
  hint: "To take advantage of potential market appreciation, it is recommended for a landlord to include a rent review clause in the lease agreement. This clause allows the rent to be adjusted periodically in line with market rates."
},
{
  question: "The right of the lessor to the title in a leasehold is known as:",
  options: [
    "Gazumping",
    "Reversion",
    "Renewal",
    "Title document"
  ],
  correctOption: ["Reversion"],
  answeredOptions: [],
  hint: "Once a lease is established, the lessor maintains a reversionary interest, meaning that when the lease term ends, the property reverts to the lessor. This reversionary interest represents the lessor's right to the title."
},
{
  Scenario: "Mrs. Florence Okafor of 45, Olusegun Street, Gwarinpa, Abuja, instructed her lawyer to draft her will on the 15th of July, 2012. In her will, she bequeathed her 10-story building at 18, Calabar Road, Marina, Lagos, to her partner, Emeka Ogidi of 22, Eko Atlantic Avenue, Victoria Island, Lagos. She appointed Mr. Andrew Ebuka of No. 16, Awolowo Road, Ikeja, Lagos, as the executor of the will. Unfortunately, two weeks later, Mrs. Okafor was tragically murdered before she could execute her will. Her family is devastated by her untimely death.",
  
  question: "The personal representative of Mrs. Okafor's estate is required to file accounts every __ until the administration is finalized.",
  options: [
    "12 days",
    "28 days",
    "1 year",
    "6 months"
  ],
  correctOption: ["1 year"],
  answeredOptions: [],
  hint: "The personal representative has the responsibility to provide an account annually until the administration process is completed. Therefore, in the case of Mrs. Okafor's estate, the personal representatives are required to submit accounts every year until the administration is finalized."
},
{
  Scenario: "Mrs. Florence Okafor of 45, Olusegun Street, Gwarinpa, Abuja, instructed her lawyer to draft her will on the 15th of July, 2012. In her will, she bequeathed her 10-story building at 18, Calabar Road, Marina, Lagos, to her partner, Emeka Ogidi of 22, Eko Atlantic Avenue, Victoria Island, Lagos. She appointed Mr. Andrew Ebuka of No. 16, Awolowo Road, Ikeja, Lagos, as the executor of the will. Unfortunately, two weeks later, Mrs. Okafor was tragically murdered before she could execute her will. Her family is devastated by her untimely death.",
  
  question: "Which of the following accounts is not necessary for filing by an executor?",
  options: [
    "An inventory",
    "An account of the administration",
    "The vouchers in the hands of the executor or administrator",
    "Verifying statement"
  ],
  correctOption: ["Verifying statement"],
  answeredOptions: [],
  hint: "The documents to be filed by the personal representative include a full voucher, a full inventory, a record of income and expenditure related to administering the estate, and an account of administration. However, a verifying statement is not required as part of the documents to be filed."
},
{
  Scenario: "Mrs. Florence Okafor of 45, Olusegun Street, Gwarinpa, Abuja, instructed her lawyer to draft her will on the 15th of July, 2012. In her will, she bequeathed her 10-story building at 18, Calabar Road, Marina, Lagos, to her partner, Emeka Ogidi of 22, Eko Atlantic Avenue, Victoria Island, Lagos. She appointed Mr. Andrew Ebuka of No. 16, Awolowo Road, Ikeja, Lagos, as the executor of the will. Unfortunately, two weeks later, Mrs. Okafor was tragically murdered before she could execute her will. Her family is devastated by her untimely death.",
  
  question: "What is the correct introductory part of a document where there is a recital?",
  options: [
    "This deed of assignment made-day of __ 2022...",
    "This deed of Assignment is made __ day of __ 2022...",
    "This Recital of Deed made __ day of __ 2022...",
    "None of the above"
  ],
  correctOption: ["This deed of Assignment is made __ day of __ 2022..."],
  answeredOptions: [],
  hint: "The introductory part of a deed should include a date clause using the word 'is'. Therefore, the correct introductory part of a document with a recital would be 'This deed of Assignment IS made on the __ day of __ 2022...'."
},
{
  Scenario: "Mrs. Florence Okafor of 45, Olusegun Street, Gwarinpa, Abuja, instructed her lawyer to draft her will on the 15th of July, 2012. In her will, she bequeathed her 10-story building at 18, Calabar Road, Marina, Lagos, to her partner, Emeka Ogidi of 22, Eko Atlantic Avenue, Victoria Island, Lagos. She appointed Mr. Andrew Ebuka of No. 16, Awolowo Road, Ikeja, Lagos, as the executor of the will. Unfortunately, two weeks later, Mrs. Okafor was tragically murdered before she could execute her will. Her family is devastated by her untimely death.",
  
  question: "The Testatum of the document will read as follows:",
  options: [
    "In witness of which the parties ... executed this deed",
    "Take notice that the parties",
    "This deed witnesses as follows",
    "Whereas..."
  ],
  correctOption: ["This deed witnesses as follows"],
  answeredOptions: [],
  hint: "In the operative part of a deed, the first content is the Testatum. It is commonly drafted as 'This deed witnesses as follows.' However, if the deed includes a recital, it is drafted as 'Now this deed witnesses as follows.'"
},
{
  Scenario: "Mrs. Florence Okafor of 45, Olusegun Street, Gwarinpa, Abuja, instructed her lawyer to draft her will on the 15th of July, 2012. In her will, she bequeathed her 10-story building at 18, Calabar Road, Marina, Lagos, to her partner, Emeka Ogidi of 22, Eko Atlantic Avenue, Victoria Island, Lagos. She appointed Mr. Andrew Ebuka of No. 16, Awolowo Road, Ikeja, Lagos, as the executor of the will. Unfortunately, two weeks later, Mrs. Okafor was tragically murdered before she could execute her will. Her family is devastated by her untimely death.",
  
  question: "The following are the contents to be filed by an administrator except:",
  options: [
    "Full inventory of the assets",
    "All income and expenditure in the course of administration",
    "Oath of administration",
    "Voucher in the possession of the personal representative"
  ],
  correctOption: ["Oath of administration"],
  answeredOptions: [],
  hint: "The documents that an administrator needs to file include a copy of the will, a copy of the death certificate, an application letter for administration, particulars of any landed property, particulars of the next of kin, an oath of administration, an inventory, and bank certificates."
},
{
  Scenario: "Mrs. Emmanuella Williams resides at plot 102B, Adekunle Crescent, Lekki, Lagos. She owns both plots 102A and 102B, Adekunle Crescent, and both plots are covered by a certificate of occupancy dated 15th May 2000 and registered as No. 25/10/2001D at the Lands Registry, Lagos. After recently losing her bid for election as a member of the House of Representatives, Mrs. Williams wants to focus on her NGO, 'Empowering Women Initiative,' which she recently registered with the Corporate Affairs Commission, Abuja. To raise funds for the NGO, she plans to do the following: (i) Sell plot 102A to Emerald Realty Nigeria Limited, whose registered office is at 15, Bourdillon Road, Ikoyi, Lagos, for N200 million; (ii) Grant a 10-year lease of her premises at plot 102B to Pinnacle Enterprises Limited for use as its General Manager’s residential apartment; (iii) Use plot 102B to secure a loan of N8 million from Zenith Bank Plc, whose office is at 18, Ajose Adeogun Street, Victoria Island, Lagos.",
  
  question: "Due to the peculiarity of the sale, which clause must be included in the miscellaneous part of the final document to be executed between Mrs. Williams and Emerald Realty Nigeria Limited?",
  options: [
    "Receipt clause",
    "Undertaking for safe custody",
    "Consideration clause",
    "Insurance covenant"
  ],
  correctOption: ["Undertaking for safe custody"],
  answeredOptions: [],
  hint: "The miscellaneous part of the final document or deed includes an undertaking for safe custody and indemnity. This means that the parties involved agree to safely keep the document and provide compensation for any losses or damages that may occur."
},
{
  Scenario: "Mrs. Emmanuella Williams resides at plot 102B, Adekunle Crescent, Lekki, Lagos. She owns both plots 102A and 102B, Adekunle Crescent, and both plots are covered by a certificate of occupancy dated 15th May 2000 and registered as No. 25/10/2001D at the Lands Registry, Lagos. After recently losing her bid for election as a member of the House of Representatives, Mrs. Williams wants to focus on her NGO, 'Empowering Women Initiative,' which she recently registered with the Corporate Affairs Commission, Abuja. To raise funds for the NGO, she plans to do the following: (i) Sell plot 102A to Emerald Realty Nigeria Limited, whose registered office is at 15, Bourdillon Road, Ikoyi, Lagos, for N200 million; (ii) Grant a 10-year lease of her premises at plot 102B to Pinnacle Enterprises Limited for use as its General Manager’s residential apartment; (iii) Use plot 102B to secure a loan of N8 million from Zenith Bank Plc, whose office is at 18, Ajose Adeogun Street, Victoria Island, Lagos.",
  
  question: "With respect to the transaction with Emerald Realty Nigeria Limited, which of the following laws will not apply?",
  options: [
    "The Evidence Act",
    "Companies and Allied Matters Act",
    "Mortgage and Property Law",
    "Stamp Duty Act"
  ],
  correctOption: ["Mortgage and Property Law"],
  answeredOptions: [],
  hint: "Since the transaction with Emerald Realty Nigeria Limited involves the sale of land, the Mortgage and Property Law will not be applicable as it specifically pertains to mortgage transactions."
},
{
  Scenario: "Mrs. Emmanuella Williams resides at plot 102B, Adekunle Crescent, Lekki, Lagos. She owns both plots 102A and 102B, Adekunle Crescent, and both plots are covered by a certificate of occupancy dated 15th May 2000 and registered as No. 25/10/2001D at the Lands Registry, Lagos. After recently losing her bid for election as a member of the House of Representatives, Mrs. Williams wants to focus on her NGO, 'Empowering Women Initiative,' which she recently registered with the Corporate Affairs Commission, Abuja. To raise funds for the NGO, she plans to do the following: (i) Sell plot 102A to Emerald Realty Nigeria Limited, whose registered office is at 15, Bourdillon Road, Ikoyi, Lagos, for N200 million; (ii) Grant a 10-year lease of her premises at plot 102B to Pinnacle Enterprises Limited for use as its General Manager’s residential apartment; (iii) Use plot 102B to secure a loan of N8 million from Zenith Bank Plc, whose office is at 18, Ajose Adeogun Street, Victoria Island, Lagos.",
  
  question: "With respect to the transaction with Pinnacle Enterprises Limited, which of the following laws will apply?",
  options: [
    "Tenancy Law of Lagos State",
    "Evidence Act",
    "Property and Conveyancing Law",
    "Stamp Duty Act"
  ],
  correctOption: ["Tenancy Law of Lagos State"],
  answeredOptions: [],
  hint: "Since the transaction with Pinnacle Enterprises Limited involves a tenancy, the applicable law would be the Tenancy Law of Lagos State."
},
{
  Scenario: "Mrs. Emmanuella Williams resides at plot 102B, Adekunle Crescent, Lekki, Lagos. She owns both plots 102A and 102B, Adekunle Crescent, and both plots are covered by a certificate of occupancy dated 15th May 2000 and registered as No. 25/10/2001D at the Lands Registry, Lagos. After recently losing her bid for election as a member of the House of Representatives, Mrs. Williams wants to focus on her NGO, 'Empowering Women Initiative,' which she recently registered with the Corporate Affairs Commission, Abuja. To raise funds for the NGO, she plans to do the following: (i) Sell plot 102A to Emerald Realty Nigeria Limited, whose registered office is at 15, Bourdillon Road, Ikoyi, Lagos, for N200 million; (ii) Grant a 10-year lease of her premises at plot 102B to Pinnacle Enterprises Limited for use as its General Manager’s residential apartment; (iii) Use plot 102B to secure a loan of N8 million from Zenith Bank Plc, whose office is at 18, Ajose Adeogun Street, Victoria Island, Lagos.",
  
  question: "Regarding the transaction with Zenith Bank Plc, which of the following statements is true except:",
  options: [
    "Governor’s consent must be obtained",
    "The Conveyancing Act is an applicable law",
    "In case of default, the mortgagee can appoint a receiver",
    "The transaction does not mean more money cannot be granted to Mrs. Williams"
  ],
  correctOption: ["The Conveyancing Act is an applicable law"],
  answeredOptions: [],
  hint: "Since the transaction with Zenith Bank Plc involves a mortgage and the property is located in Lagos State, the Conveyancing Act will not apply. The Conveyancing Act applies to states in the North, East, Bayelsa, Rivers, Cross River, and Akwa Ibom, and does not include Lagos State."
},
{
  Scenario: "Mrs. Emmanuella Williams resides at plot 102B, Adekunle Crescent, Lekki, Lagos. She owns both plots 102A and 102B, Adekunle Crescent, and both plots are covered by a certificate of occupancy dated 15th May 2000 and registered as No. 25/10/2001D at the Lands Registry, Lagos. After recently losing her bid for election as a member of the House of Representatives, Mrs. Williams wants to focus on her NGO, 'Empowering Women Initiative,' which she recently registered with the Corporate Affairs Commission, Abuja. To raise funds for the NGO, she plans to do the following: (i) Sell plot 102A to Emerald Realty Nigeria Limited, whose registered office is at 15, Bourdillon Road, Ikoyi, Lagos, for N200 million; (ii) Grant a 10-year lease of her premises at plot 102B to Pinnacle Enterprises Limited for use as its General Manager’s residential apartment; (iii) Use plot 102B to secure a loan of N8 million from Zenith Bank Plc, whose office is at 18, Ajose Adeogun Street, Victoria Island, Lagos.",
  
  question: "Which of the following is not true in respect of all documents Mrs. Williams will execute in relation to her properties?",
  options: [
    "They all require perfection",
    "They are documents of delegation",
    "They must be by deed",
    "She can appoint someone to execute on her behalf"
  ],
  correctOption: ["They are documents of delegation"],
  answeredOptions: [],
  hint: "In the given scenario, all the documents that Mrs. Williams will execute regarding her properties will need to be in the form of a deed because their duration exceeds three years. These documents will also require perfection, and she has the option to appoint someone to execute them on her behalf. However, these documents are not considered documents of delegation, as there is no specific transaction involving the donation of power that would necessitate a power of attorney."
},
{
  Scenario: "Mrs. Emmanuella Williams resides at plot 102B, Adekunle Crescent, Lekki, Lagos. She owns both plots 102A and 102B, Adekunle Crescent, and both plots are covered by a certificate of occupancy dated 15th May 2000 and registered as No. 25/10/2001D at the Lands Registry, Lagos. After recently losing her bid for election as a member of the House of Representatives, Mrs. Williams wants to focus on her NGO, 'Empowering Women Initiative,' which she recently registered with the Corporate Affairs Commission, Abuja. To raise funds for the NGO, she plans to do the following: (i) Sell plot 102A to Emerald Realty Nigeria Limited, whose registered office is at 15, Bourdillon Road, Ikoyi, Lagos, for N200 million; (ii) Grant a 10-year lease of her premises at plot 102B to Pinnacle Enterprises Limited for use as its General Manager’s residential apartment; (iii) Use plot 102B to secure a loan of N8 million from Zenith Bank Plc, whose office is at 18, Ajose Adeogun Street, Victoria Island, Lagos.",
  
  question: "Upon Mrs. Williams' death, which of the following statements is correct?",
  options: [
    "All transactions entered into during her lifetime become vitiated",
    "Her relations will continue in her place",
    "Her representative will continue in her place",
    "Her children will take over"
  ],
  correctOption: ["Her representative will continue in her place"],
  answeredOptions: [],
  hint: "Upon the death of an individual, their representative assumes their legal responsibilities and continues to act on their behalf. Therefore, upon Mrs. Williams' death, her personal representative will step into her position and carry out the necessary duties and responsibilities related to her estate and affairs."
},
{
  question: "If Mr. Okummadu acted for her in all transactions, which of the following statements is true?",
  options: [
    "Each transaction should be billed separately",
    "It is good practice to charge as a single transaction",
    "In case of emergency, he can spend his client’s money",
    "His bill of charge may be presented orally"
  ],
  correctOption: ["Each transaction should be billed separately"],
  answeredOptions: [],
  hint: "It is customary for a solicitor to charge separately for the work done on each transaction. Therefore, if Mr. Okummadu acted as Mrs. Williams' solicitor for multiple transactions, it would be appropriate for each transaction to be billed separately, reflecting the specific work done and the associated fees for each transaction."
},
{
  question: "Which of the following statements is not correct?",
  options: [
    "Her legal practitioner may receive money as a shareholder",
    "It is possible for her legal practitioner to act for all parties in the transaction",
    "A legal practitioner may charge in anticipation of work to be done",
    "None of the above"
  ],
  correctOption: ["Her legal practitioner may receive money as a shareholder"],
  answeredOptions: [],
  hint: "A legal practitioner can represent their client in various property transactions and is entitled to charge for the services rendered. Additionally, when receiving a deposit on behalf of a client, the legal practitioner can act either as an agent or as a stakeholder. However, the legal practitioner cannot receive money as a shareholder. The correct term is 'stakeholder,' not 'shareholder.'"
},
{
  Scenario: "Mr. Aminu Salami, a renowned international investor, recently created a charge using a plot of land owned by his company, Salami Global Ventures Ltd., with First Bank Plc. The charge is created as a legal charge expressed to be by way of a legal mortgage. The plot is located at No. 15 Balogun Street, Akure, Ondo State.",
  
  question: "The charge mentioned above must be registered with the Corporate Affairs Commission within how many days?",
  options: [
    "90 days",
    "60 days",
    "99 days",
    "30 days"
  ],
  correctOption: ["90 days"],
  answeredOptions: [],
  hint: "According to Section 222(1) of the Companies and Allied Matters Act 2020 (as amended), once a charge such as a mortgage or a debenture is created, it must be registered with the Corporate Affairs Commission within ninety (90) days."
},
{
  Scenario: "Mr. Aminu Salami, a renowned international investor, recently created a charge using a plot of land owned by his company, Salami Global Ventures Ltd., with First Bank Plc. The charge is created as a legal charge expressed to be by way of a legal mortgage. The plot is located at No. 15 Balogun Street, Akure, Ondo State.",
  
  question: "Which of the following taxes is not payable in respect of the above transaction?",
  options: [
    "Capital gains tax",
    "Consent fees",
    "Stamp duties",
    "Registration fees"
  ],
  correctOption: ["Capital gains tax"],
  answeredOptions: [],
  hint: "Taxation is a means through which the government generates revenue from property transactions. However, Capital Gains Tax is specifically applicable to the sale of land transactions. In the case of a mortgage transaction, since there is no sale of land involved, Capital Gains Tax would not be applicable."
},
{
  Scenario: "Mr. Aminu Salami, a renowned international investor, recently created a charge using a plot of land owned by his company, Salami Global Ventures Ltd., with First Bank Plc. The charge is created as a legal charge expressed to be by way of a legal mortgage. The plot is located at No. 15 Balogun Street, Akure, Ondo State.",
  
  question: "Which of these legislations does not apply to the transaction?",
  options: [
    "Companies and Allied Matters Act",
    "Conveyancing Act",
    "Property and Conveyancing Law",
    "Rule of Professional Conduct, RPC"
  ],
  correctOption: ["Conveyancing Act"],
  answeredOptions: [],
  hint: "Laws governing property transactions depend on the location of the land. In the case of the transaction taking place in Ondo State, the Conveyancing Act, which applies to specific states in the North, East, Bayelsa, Rivers, Cross River, and Akwa Ibom, would not be applicable. However, other laws such as the Rules of Professional Conduct and the Companies and Allied Matters Act are not affected by the location and would still apply. The Property and Conveyancing Law, which regulates states such as Oyo, Ondo, Osun, Ogun, Ekiti, Edo, and Delta, would be applicable in this scenario."
},
{
  question: "The absence of which of the following will create partial intestacy in a will?",
  options: [
    "Charging clause",
    "Execution clause",
    "Residuary clause",
    "None of the above"
  ],
  correctOption: ["Residuary clause"],
  answeredOptions: [],
  hint: "The residuary clause in a will serves the purpose of preventing partial intestacy in the estate. This clause includes any remaining assets or property of the testator that are not specifically mentioned in the will. It ensures that all of the testator's estate is accounted for and distributed according to their wishes. If a will does not contain a residuary clause, the assets or property not addressed in the will would be governed by the rules of intestacy and may result in partial intestacy."
},
{
  Scenario: "Mr. Chinedu Eze bought a two-story building at 5 Afolayan Close, Maitama, Abuja, FCT, from Mr. Bala Musa for ₦20 million. Both parties engaged the services of Mr. Suleiman Ojo, Esq., to conclude the transaction. The consideration was paid into Mr. Ojo's client account, maintained with Zenith Bank Plc. He remitted the full amount to Mr. Bala Musa, who has refused to pay Mr. Ojo's professional fees. Mr. Suleiman Ojo, Esq., is a Lagos-based lawyer.",
  
  question: "The major difference between a sale of property and a lease is:",
  options: [
    "Reversionary interest of the vendor is retained, unlike in a lease",
    "Reversionary interest of a lessor is retained, unlike in a sale",
    "Reversionary interest is retained in a sale only upon the agreement of the parties",
    "All of the above"
  ],
  correctOption: ["Reversionary interest of a lessor is retained, unlike in a sale"],
  answeredOptions: [],
  hint: "In a sale of land, there is no reversionary interest because the property is fully transferred to the buyer, resulting in complete alienation. In contrast, in a lease agreement, the lessor retains a reversionary interest, allowing them to regain full possession and control of the property after the lease term expires."
},
{
Scenario: "Mr. Chinedu Eze bought a two-story building at 5 Afolayan Close, Maitama, Abuja, FCT, from Mr. Bala Musa for ₦20 million. Both parties engaged the services of Mr. Suleiman Ojo, Esq., to conclude the transaction. The consideration was paid into Mr. Ojo's client account, maintained with Zenith Bank Plc. He remitted the full amount to Mr. Bala Musa, who has refused to pay Mr. Ojo's professional fees. Mr. Suleiman Ojo, Esq., is a Lagos-based lawyer.",

  question: "Mr. Suleiman Ojo, Esq. could recover his professional fees from Mr. Bala Musa by:",
  options: [
    "Preparing a detailed bill of charges and serving it on Mr. Bala Musa, waiting for one month before instituting an action in the National Industrial Court of Nigeria, Abuja Division.",
    "Preparing and serving a detailed bill of charges on Mr. Bala Musa, waiting for one month after the service before instituting an action in the Federal High Court of FCT, Abuja.",
    "Preparing and serving a detailed bill of charges on Mr. Bala Musa, waiting for one month after the service before instituting an action in the Federal High Court, FCT, Abuja Division.",
    "Instituting an action in the FCT Abuja Magistrate Court one month after serving a detailed bill of charges on Mr. Bala Musa."
  ],
  correctOption: ["Preparing and serving a detailed bill of charges on Mr. Bala Musa, waiting for one month after the service before instituting an action in the Federal High Court of FCT, Abuja."],
  answeredOptions: [],
  hint: "To recover his professional fees, a legal practitioner can prepare a detailed bill of charges and serve it on his client. If the fees are still unpaid after one month, the practitioner can initiate legal action in the High Court of FCT, Abuja."
},
{
  question: "The option to renew clause should provide for all of the following except:",
  options: [
    "Manner of the exercise of the option",
    "Time frame for making the application for the renewal",
    "Conditions to be fulfilled before exercising the option",
    "Procedure for rejecting the option"
  ],
  correctOption: ["Procedure for rejecting the option"],
  answeredOptions: [],
  hint: "The covenant of the option to renew in a lease must include elements such as the time frame for exercising the option, the method of exercising the option, conditions that must be met before the option can be granted, and terms and conditions of the new lease term. However, the procedure for rejecting the option should not be included in the option to renew clause."
},
{
  question: "In the event that Osagie Nigeria Ltd fails to pay the rent reserved in the lease, Mrs. Grace Okoro may be entitled to all but one of the following:",
  options: [
    "Action in court to recover the rent",
    "Action for forfeiture",
    "Action in distress",
    "Action for foreclosure"
  ],
  correctOption: ["Action for foreclosure"],
  answeredOptions: [],
  hint: "In a lease, various remedies are available to the landlord in case of non-payment of rent, such as legal action to recover rent, action for forfeiture, and action in distress. However, 'action for foreclosure' is not applicable in a lease agreement, as it is specific to mortgage transactions."
},
{
  question: "Which of the following factors could determine who should insure the properties?",
  options: [
    "Amount of the insurance cover",
    "Nature of the insurance company",
    "Existing obligation of the parties",
    "All of the above"
  ],
  correctOption: ["Existing obligation of the parties"],
  answeredOptions: [],
  hint: "To determine the responsibility for insurance, it is necessary to consider the nature of the interest or property involved and any existing obligations between the parties. The key factor is the existing obligations between the parties."
},
{
  Scenario: "Mr. Chima Okoro owns a property located at No. 20 Awolowo Road, Yaba, Lagos State, covered by a certificate of occupancy no. LA/12/08 and registered as 2015 in the Lagos State Lands Registry, Ikeja. The property was devised in his favor in the will of his father, Mr. Chike Okoro, dated the 12th day of November 1978 and proved on the 10th day of December 2000. He lives off the rent collected from the property, a 3-bedroom bungalow. He is desirous of raising some money from the property to start a small-scale business to support himself.",

  question: "All but one of the following are ways of raising money from Chima's property:",
  options: [
    "Gift Intervivos",
    "Mortgage",
    "Sub-lease",
    "Sale"
  ],
  correctOption: ["Gift Intervivos"],
  answeredOptions: [],
  hint: "Money can be generated from property through various transactions such as the sale of land, lease, sub-lease, tenancy, and mortgage, as they all involve consideration. However, a gift of land does not require consideration. Therefore, raising money from Chima's property does not involve a gift inter vivos (gift during one's lifetime)."
},
{
  Scenario: "Mr. Chima Okoro owns a property located at No. 20 Awolowo Road, Yaba, Lagos State, covered by a certificate of occupancy no. LA/12/08 and registered as 2015 in the Lagos State Lands Registry, Ikeja. The property was devised in his favor in the will of his father, Mr. Chike Okoro, dated the 12th day of November 1978 and proved on the 10th day of December 2000. He lives off the rent collected from the property, a 3-bedroom bungalow. He is desirous of raising some money from the property to start a small-scale business to support himself.",

  question: "The instrument by which the personal representatives of Chike Okoro transferred the 3-bedroom bungalow to Chima Okoro is called:",
  options: [
    "Will",
    "Power of attorney",
    "Assent",
    "Probate"
  ],
  correctOption: ["Assent"],
  answeredOptions: [],
  hint: "The instrument by which the personal representatives of Chike Okoro transferred the 3-bedroom bungalow to Chima Okoro is called an Assent. It is a legal document that conveys title in the land to the beneficiary of the deceased's estate. The beneficiary cannot claim their share of the land until the executor or administrator has given their assent to the property. This requirement is supported by the case of Unoka v Agili [2007] NWLR (pt. 1044) 122."
},
{
  Scenario: "Mr. Chima Okoro owns a property located at No. 20 Awolowo Road, Yaba, Lagos State, covered by a certificate of occupancy no. LA/12/08 and registered as 2015 in the Lagos State Lands Registry, Ikeja. The property was devised in his favor in the will of his father, Mr. Chike Okoro, dated the 12th day of November 1978 and proved on the 10th day of December 2000. He lives off the rent collected from the property, a 3-bedroom bungalow. He is desirous of raising some money from the property to start a small-scale business to support himself.",

  question: "The implication of the property being covered by a certificate of occupancy is:",
  options: [
    "The property belongs to the Lagos State Government",
    "There is a leasehold relationship between Chike Okoro and the Lagos State Government",
    "The Lagos State Government has the power to issue a certificate of occupancy",
    "All of the above"
  ],
  correctOption: ["All of the above"],
  answeredOptions: [],
  hint: "From the options provided, all of the above statements are correct when a property is covered by a certificate of occupancy. It signifies that the property belongs to the government, there is a leasehold interest in the property, the property is registered, and the government has the power to re-issue the certificate of occupancy upon its expiration."
},
{
  question: "One of the following statements is correct about the revival of a will:",
  options: [
    "The testator can only revive a will where he calls the same witnesses to re-execute the will",
    "Only a will that is in existence can be revived, for a will revoked by destruction cannot be revived",
    "A will earlier revoked can only be revived by use of codicil",
    "The executors of a revoked will can revive it by calling the same witnesses to re-execute the will"
  ],
  correctOption: ["Only a will that is in existence can be revived, for a will revoked by destruction cannot be revived"],
  answeredOptions: [],
  hint: "The correct option is that a will that is in existence can be revived, as a will revoked by destruction cannot be revived. It is important to note that once a will is destroyed by burning, shredding, or tearing, it cannot be revived."
},
{
  question: "A gift in a will can be adeemed in all except one of the following circumstances:",
  options: [
    "The testator died along with the gift that as a consequence of the accident becomes unrecognizable",
    "Where the gift is sold and the proceeds of the sale are realized after the death of the testator",
    "Mere sub-division of shares in lower denomination after the death of the testator",
    "The gift is compulsorily acquired by the government and compensation is paid in the lifetime of the testator"
  ],
  correctOption: ["The gift is compulsorily acquired by the government and compensation is paid in the lifetime of the testator"],
  answeredOptions: [],
  hint: "A gift in a will can be adeemed in all cases except when the gift is compulsorily acquired by the government and compensation is paid during the testator's lifetime. Ademption occurs when a gift in a will can no longer be fulfilled because it is lost, stolen, destroyed, or subject to compulsory acquisition. However, if the government acquires the property and compensates the testator before their death, ademption does not apply."
},
{
  question: "The principle that the probate registrar cannot grant probate to a disputed will while a caveat had not been discharged was laid down in:",
  options: [
    "NBA vs Koku (2006) ALL FWLR (pt.334) 1928",
    "Obusez vs. Obusez (2007) 10 NWLR (pt.1043) 430",
    "Dan-Jumbo vs Dan-Jumbo (1999) 7 SCNJ 112",
    "Ibrahim v Obaje (2018) ALL FWLR, part 937, pt. 1682"
  ],
  correctOption: ["Dan-Jumbo vs Dan-Jumbo (1999) 7 SCNJ 112"],
  answeredOptions: [],
  hint: "In the case of Dan-Jumbo vs. Dan-Jumbo (1999) 7 SCNJ 112, the court ruled that the Probate Registrar does not have the authority to grant probate for a contested will when a caveat has not been lifted or discharged. The presence of a caveat indicates a dispute or challenge to the validity of the will, and until it is resolved, probate cannot be granted."
},
{
  question: "Which of the following information will not be relevant for you to prepare will?",
  options: [
    "Name and addresses of all beneficiaries",
    "Name and addresses of the executors",
    "His full name and address",
    "The certificate of occupancy of all his properties"
  ],
  correctOption: ["The certificate of occupancy of all his properties"],
  answeredOptions: [],
  hint: "In preparing a will, certain essential information is required, including the name and personal details of the testator, the marital status of the testator, details of the estate, names and details of beneficiaries, names and details of executors, any debts incurred during the testator's lifetime, details of dependents (if applicable), and names and details of witnesses. However, the certificate of occupancy for all of Chike Okoro's properties would not be relevant or necessary for the preparation of his will."
},
{
  Scenario: "Mr. Ibrahim Suleiman is a wealthy businessman with multiple properties across Nigeria. Some of his properties include: (i) A 5-story building located at No. 15 Ikem Street, Enugu State. (ii) Two plots of land located at Nasiru Close, Kano State, with C of O number KN/789456. He encountered some financial difficulties and decided to sell some of his properties. He has agreed with Mr. Adamu Musa to sell the property in Enugu State. The agreement was that the land and the building on it would be sold for ₦20,000,000 (twenty million naira) each, making a total of ₦40,000,000 (forty million naira). Mr. Adamu paid an initial thirty million naira, i.e., twenty million for the building and ten million for the land, on the 20th day of March 2021.",
  
  question: "In what capacity is Mr. Ibrahim acting when selling his property?",
  options: [
    "As beneficial owner",
    "As a holder of the statutory right of occupancy",
    "As the lessor",
    "All of the above"
  ],
  correctOption: ["As beneficial owner"],
  answeredOptions: [],
  hint: "The vendor is selling the property as a beneficial owner, which implies certain warranties such as the right to transfer the property, freedom from encumbrances, and the assurance that the buyer will have quiet enjoyment of the property."
},
{
  question: "As Mr. Adamu's solicitor, how would you advise him to categorize the payment of thirty million naira (₦30,000,000) if the agreement is documented?",
  options: [
    "As a deposit",
    "As a down payment",
    "As part payment",
    "None of the above"
  ],
  correctOption: ["As a deposit"],
  answeredOptions: [],
  hint: "In land sale agreements, any initial payment made that does not constitute the full purchase price is typically regarded as a deposit. This payment acts as a form of security and shows the buyer's commitment to the transaction."
},
{
  question: "What type of ownership does Mr. Adamu obtain upon full payment for the property in Enugu?",
  options: [
    "Legal",
    "Statutory",
    "Customary",
    "Equitable"
  ],
  correctOption: ["Legal"],
  answeredOptions: [],
  hint: "Upon completing the payment of the purchase price, the buyer acquires legal title to the property, signifying full ownership under the law."
},
{
  question: "For which type of defects in the property is Mr. Ibrahim responsible?",
  options: [
    "Latent",
    "Patent",
    "Location",
    "Architectural"
  ],
  correctOption: ["Latent"],
  answeredOptions: [],
  hint: "The seller is typically responsible for any hidden defects (latent defects) in the property that are not obvious and could not be discovered through reasonable inspection."
},
{
  question: "For which type of defects in the property is Mr. Adamu responsible?",
  options: [
    "Latent",
    "Patent",
    "Location",
    "Architectural"
  ],
  correctOption: ["Patent"],
  answeredOptions: [],
  hint: "The buyer assumes responsibility for any visible defects (patent defects) in the property that could have been identified through a reasonable inspection prior to purchase."
},
{
  question: "When collecting the thirty million naira deposit on behalf of Mr. Ibrahim, in what capacity should the solicitor act?",
  options: [
    "As an agent",
    "As a legal practitioner",
    "As a stakeholder",
    "None of the above"
  ],
  correctOption: ["As a stakeholder"],
  answeredOptions: [],
  hint: "As a stakeholder, the solicitor holds the deposit neutrally for both the buyer and the seller, ensuring impartial handling of the funds until the transaction is completed."
},
{
  question: "Which legal document is appropriate for transferring the ownership of the 5-story building?",
  options: [
    "A deed of conveyance",
    "A formal contract",
    "A deed of attorney",
    "A deed of assignment"
  ],
  correctOption: ["A deed of conveyance"],
  answeredOptions: [],
  hint: "For transferring ownership of unregistered property, such as the 5-story building, a deed of conveyance is the correct legal instrument."
},
{
  question: "Which of the following is not a consequence of collecting money as a stakeholder in a property transaction?",
  options: [
    "The solicitor becomes a trustee for the money",
    "The solicitor is personally accountable for safeguarding the money",
    "The solicitor must pay the vendor if the buyer defaults on the transaction",
    "The solicitor ensures that the sale is completed"
  ],
  correctOption: ["The solicitor ensures that the sale is completed"],
  answeredOptions: [],
  hint: "While acting as a stakeholder, the solicitor is responsible for holding the funds securely and fairly for both parties, but they are not responsible for ensuring the completion of the transaction."
},
{
  question: "If recitals belong to the introductory part of a deed, where does the indemnity clause belong?",
  options: [
    "Introductory",
    "Operative",
    "Miscellaneous",
    "Concluding"
  ],
  correctOption: ["Miscellaneous"],
  answeredOptions: [],
  hint: "The indemnity clause is typically found in the miscellaneous section of a deed, which contains various additional provisions."
},
{
  Scenario: "Mrs. Amina Bello, a prominent businesswoman, owns the following properties: (i) A parcel of land at No. 15 Gwari Road, Minna, Niger State, and (ii) A bungalow at No. 310 Ajiboye Close, Ilorin, Kwara State. To expand her business, she requires the sum of fifty-five million naira (₦55,000,000) to import construction materials from China. Since no single bank was willing to grant her the entire sum, she took a loan of twenty-five million naira (₦25,000,000) from Integrity Bank Plc, using her property in Minna as collateral.",
  
  question: "Which of the following is not a method of creating a legal mortgage with Integrity Bank Plc?",
  options: [
    "Assignment",
    "Sub-demise",
    "Deed of statutory mortgage",
    "Legal charge"
  ],
  correctOption: ["Legal charge"],
  answeredOptions: [],
  hint: "In the context of creating a legal mortgage, the methods available depend on the jurisdiction. In states governed by the Conveyancing Act (CA states), such as Niger, legal mortgages can be created by assignment, sub-demise, or statutory mortgage. However, a legal charge is not applicable in this jurisdiction."
},
{
  Scenario: "Mrs. Amina Bello, a prominent businesswoman, owns the following properties: (i) A parcel of land at No. 15 Gwari Road, Minna, Niger State, and (ii) A bungalow at No. 310 Ajiboye Close, Ilorin, Kwara State. To expand her business, she requires the sum of fifty-five million naira (₦55,000,000) to import construction materials from China. Since no single bank was willing to grant her the entire sum, she took a loan of twenty-five million naira (₦25,000,000) from Integrity Bank Plc, using her property in Minna as collateral.",
  
  question: "Which of the following methods can be used to create a legal mortgage with Integrity Bank Plc?",
  options: [
    "Demise",
    "Sub-demise",
    "Assignment",
    "All of the above"
  ],
  correctOption: ["Sub-demise"],
  answeredOptions: [],
  hint: "For properties located in states governed by the Property and Conveyancing Law (PCL states), such as Kwara, a legal mortgage can be created by sub-demise. This is the most appropriate method for creating a legal mortgage in this jurisdiction."
},
{
  Scenario: "Mrs. Amina Bello, a prominent businesswoman, owns the following properties: (i) A parcel of land at No. 15 Gwari Road, Minna, Niger State, and (ii) A bungalow at No. 310 Ajiboye Close, Ilorin, Kwara State. To expand her business, she requires the sum of fifty-five million naira (₦55,000,000) to import construction materials from China. Since no single bank was willing to grant her the entire sum, she took a loan of twenty-five million naira (₦25,000,000) from Integrity Bank Plc, using her property in Minna as collateral.",
  
  question: "What is the nature of the relationship between Mrs. Amina and the Governor of Niger State concerning the property?",
  options: [
    "Mortgagor and mortgagee",
    "Head lessor and sub-lessor",
    "Donor and donee",
    "Assignor and assignee"
  ],
  correctOption: ["Head lessor and sub-lessor"],
  answeredOptions: [],
  hint: "When dealing with a property covered by a certificate of occupancy, the relationship between the property owner (Mrs. Amina) and the Governor is that of a head lessor and sub-lessor. The Governor, as the head lessor, grants the certificate of occupancy, making Mrs. Amina the sub-lessor."
},
{
  Scenario: "Mrs. Amina Bello, a prominent businesswoman, owns the following properties: (i) A parcel of land at No. 15 Gwari Road, Minna, Niger State, and (ii) A bungalow at No. 310 Ajiboye Close, Ilorin, Kwara State. To expand her business, she requires the sum of fifty-five million naira (₦55,000,000) to import construction materials from China. Since no single bank was willing to grant her the entire sum, she took a loan of twenty-five million naira (₦25,000,000) from Integrity Bank Plc, using her property in Minna as collateral.",
  
  question: "What is the relationship between Mrs. Amina and Integrity Bank Plc?",
  options: [
    "Mortgagor and mortgagee",
    "Lessor and lessee",
    "Donor and donee",
    "Assignor and assignee"
  ],
  correctOption: ["Mortgagor and mortgagee"],
  answeredOptions: [],
  hint: "In a mortgage transaction, the property owner (borrower) is the mortgagor, and the lender (bank) is the mortgagee. Mrs. Amina is the mortgagor, while Integrity Bank Plc is the mortgagee."
},
{
  Scenario: "Mrs. Amina Bello, a prominent businesswoman, owns the following properties: (i) A parcel of land at No. 15 Gwari Road, Minna, Niger State, and (ii) A bungalow at No. 310 Ajiboye Close, Ilorin, Kwara State. To expand her business, she requires the sum of fifty-five million naira (₦55,000,000) to import construction materials from China. Since no single bank was willing to grant her the entire sum, she took a loan of twenty-five million naira (₦25,000,000) from Integrity Bank Plc, using her property in Minna as collateral.",
  
  question: "Upon creating a legal mortgage, what type of title does Mrs. Amina retain, and what title does she pass to the bank?",
  options: [
    "Equitable",
    "Legal, Equitable",
    "Cesser upon redemption, legal",
    "Possessory legal"
  ],
  correctOption: ["Possessory legal"],
  answeredOptions: [],
  hint: "When a legal mortgage is created, the mortgagor retains possession of the property but passes the legal title to the mortgagee (bank). This arrangement allows the mortgagor to continue using the property while the mortgagee holds the legal title as security for the loan."
},
{
  question: "Which of the following is not a method of creating an equitable mortgage?",
  options: [
    "Agreement to create a legal mortgage",
    "Creation of an imperfect legal mortgage",
    "Creation of a mortgage with equitable interest",
    "Creation of a mortgage by sub-demise"
  ],
  correctOption: ["Creation of a mortgage by sub-demise"],
  answeredOptions: [],
  hint: "An equitable mortgage can be created through various methods, such as an agreement to create a legal mortgage, an imperfect legal mortgage, or a mortgage based on an equitable interest. However, sub-demise is a method of creating a legal, not an equitable, mortgage."
},
{
  Scenario: "Mrs. Amina Bello, a prominent businesswoman, owns the following properties: (i) A parcel of land at No. 15 Gwari Road, Minna, Niger State, and (ii) A bungalow at No. 310 Ajiboye Close, Ilorin, Kwara State. To expand her business, she requires the sum of fifty-five million naira (₦55,000,000) to import construction materials from China. Since no single bank was willing to grant her the entire sum, she took a loan of twenty-five million naira (₦25,000,000) from Integrity Bank Plc, using her property in Minna as collateral.",
  
  question: "Who is typically responsible for drafting the deed of mortgage?",
  options: [
    "Mrs. Amina's solicitor",
    "Integrity Bank Plc's solicitor",
    "Land registry",
    "None of the above"
  ],
  correctOption: ["Integrity Bank Plc's solicitor"],
  answeredOptions: [],
  hint: "In a mortgage transaction, it is the solicitor representing the mortgagee (the bank) who is typically responsible for preparing the deed of mortgage."
},
{
  question: "To mortgage the property in Ilorin for a term shorter by at least one day than the remaining lease term, what type of mortgage should be created?",
  options: [
    "Demise",
    "Sub-demise",
    "Assignment",
    "Conveyance"
  ],
  correctOption: ["Sub-demise"],
  answeredOptions: [],
  hint: "A sub-demise is a type of legal mortgage created for a term that is at least one day shorter than the remaining term of the original lease. This method is commonly used to ensure that the mortgagee's interest does not exceed the original lease term."
},
{
  question: "To mortgage the unexpired interest in the property in Bayelsa, which method should be used?",
  options: [
    "Conveyance",
    "Demise",
    "Sub-demise",
    "Assignment"
  ],
  correctOption: ["Assignment"],
  answeredOptions: [],
  hint: "A mortgage by assignment is used to transfer the unexpired interest in a property, commonly in jurisdictions governed by the Conveyancing Act. This method is suitable for properties like the one in Minna."
},
{
  Scenario: "Mr. George Mensah’s will includes the following clauses: (i) I appoint my spouse, Margaret Mensah, and my close friend, Edward Anum, as executors of my will. (ii) I leave my property at No. 45 Banjul Road, Accra, to my wife for her lifetime, and after her passing, it should be donated to the Accra Municipal Assembly to serve as a community library. (iii) I bequeath a Toyota Corolla to my wife's best friend, Mrs. Sarah Akoto. In 2014, Mr. Mensah took his wife, whom he married under customary law in 1966, to the marriage registry in Accra to formalize their union as part of his 80th birthday celebrations.",
  
  question: "What would be the outcome if the will did not include clause (i)?",
  options: [
    "The will would become invalid.",
    "Only the wife would be granted probate.",
    "It would result in partial intestacy.",
    "The personal representative would need to apply for letters of administration with the will annexed."
  ],
  correctOption: ["The personal representative would need to apply for letters of administration with the will annexed."],
  answeredOptions: [],
  hint: "If no executor is appointed in a will, the management of the estate falls to personal representatives, who must seek letters of administration with the will annexed to administer the estate according to the testator's intentions."
},
{
  Scenario: "Mr. George Mensah’s will includes the following clauses: (i) I appoint my spouse, Margaret Mensah, and my close friend, Edward Anum, as executors of my will. (ii) I leave my property at No. 45 Banjul Road, Accra, to my wife for her lifetime, and after her passing, it should be donated to the Accra Municipal Assembly to serve as a community library. (iii) I bequeath a Toyota Corolla to my wife's best friend, Mrs. Sarah Akoto. In 2014, Mr. Mensah took his wife, whom he married under customary law in 1966, to the marriage registry in Accra to formalize their union as part of his 80th birthday celebrations.",
  
  question: "How would the gift outlined in clause (ii) be best classified?",
  options: [
    "Gift of real estate with a life interest.",
    "Demonstrative gift with a life interest.",
    "Specific legacy with a life interest.",
    "General legacy with a life interest."
  ],
  correctOption: ["Specific legacy with a life interest."],
  answeredOptions: [],
  hint: "Gifts in wills can be categorized into various types, such as general, specific, and demonstrative. A specific legacy with a life interest grants the beneficiary rights to enjoy the property during their lifetime, with ownership passing to another party after their death."
},
{
  Scenario: "Mr. George Mensah’s will includes the following clauses: (i) I appoint my spouse, Margaret Mensah, and my close friend, Edward Anum, as executors of my will. (ii) I leave my property at No. 45 Banjul Road, Accra, to my wife for her lifetime, and after her passing, it should be donated to the Accra Municipal Assembly to serve as a community library. (iii) I bequeath a Toyota Corolla to my wife's best friend, Mrs. Sarah Akoto. In 2014, Mr. Mensah took his wife, whom he married under customary law in 1966, to the marriage registry in Accra to formalize their union as part of his 80th birthday celebrations.",
  
  question: "Which category does the gift mentioned in clause (iii) fall under?",
  options: [
    "Demonstrative legacy.",
    "General legacy.",
    "Specific legacy.",
    "Demonstrative legacy."
  ],
  correctOption: ["General legacy."],
  answeredOptions: [],
  hint: "A general legacy in a will refers to a gift that lacks a detailed description. The bequeathal of a Toyota Corolla to Mrs. Sarah Akoto is a general legacy, as the will does not specify the car's details."
},
{
  question: "Which statement accurately reflects the impact of the later marriage on the will?",
  options: [
    "The subsequent marriage invalidates both the will and the marriage.",
    "The subsequent marriage does not affect the will.",
    "The subsequent marriage only nullifies the gift to the first wife.",
    "None of the above."
  ],
  correctOption: ["The subsequent marriage does not affect the will."],
  answeredOptions: [],
  hint: "While marriage can typically revoke a will unless the will was made in anticipation of that marriage, if the marriage does not invalidate the will, the provisions and bequests within the will remain in effect."
},
{
  Scenario: "Bank of the Central Plains Plc and Chief Jide Salami entered into a mortgage agreement regarding his property located at 15 Sultan Adamu Way, Sokoto State, through a deed of statutory mortgage. Chief Salami passed away on the 30th of July 2019 at Sokoto Central Hospital. The bank has now approached you to finalize the loan negotiation and perfect the transaction.",
  
  question: "What action should be taken to verify that Chief Jide Salami had a valid title to the property?",
  options: [
    "Clarify his title to the property.",
    "Conduct an investigation of his title to the property.",
    "Respond to inquiries raised about his title.",
    "Justify his title to the property."
  ],
  correctOption: ["Conduct an investigation of his title to the property."],
  answeredOptions: [],
  hint: "To confirm the validity of a title in a property transaction, it is essential to perform a thorough investigation. This involves examining relevant documents and performing searches at the land registry to verify the authenticity and completeness of the title documents."
},
{
  question: "If it was agreed to create a legal mortgage, which of the following would not be a remedy available to Bank of the Central Plains Plc if Chief Jide Salami fails to repay the principal and interest?",
  options: [
    "Foreclosure.",
    "Power of sale.",
    "Power to appoint a receiver.",
    "None of the above."
  ],
  correctOption: ["Power of sale."],
  answeredOptions: [],
  hint: "In cases involving an equitable mortgage, the power of sale is typically not an available remedy. Instead, other options such as foreclosure or the appointment of a receiver may be pursued by the lender."
},
{
  question: "Which of the following options is a method to discharge the mortgage?",
  options: [
    "Deed of discharge.",
    "Statutory receipt.",
    "Simple receipt.",
    "Governor’s certificate of discharge."
  ],
  correctOption: ["Statutory receipt."],
  answeredOptions: [],
  hint: "In jurisdictions where a legal mortgage is established by a statutory mortgage, a statutory receipt is often used to confirm that the mortgage debt has been fully repaid and the mortgage has been discharged."
},
{
  Scenario: "Mr. Daniel Ogunleye, a retired officer from the Ministry of Health in Lagos, has been facing irregular pension payments. He plans to use his property located at No. 15 Victoria Crescent, Ikoyi, Lagos, to secure funds for starting a fish farming business to supplement his income. He has reached out to you for advice on the best way to proceed and has requested you to implement the recommended option(s) to help him achieve his goal.",
  
  question: "What are the viable options Mr. Daniel Ogunleye can consider to raise funds using his property?",
  options: [
    "Sale, lease, and mortgage.",
    "Gift intervivos, lease, and charge.",
    "Mortgage, rent, and gift intervivos.",
    "Lease, assignment, and gift intervivos."
  ],
  correctOption: ["Sale, lease, and mortgage."],
  answeredOptions: [],
  hint: "To generate the necessary funds for his fish farming venture, Mr. Daniel Ogunleye can explore options like selling, leasing, or mortgaging his property. These methods involve receiving monetary compensation in return for transferring certain rights or interests in the property."
},
{
  Scenario: "Mr. Daniel Ogunleye, a retired officer from the Ministry of Health in Lagos, has been facing irregular pension payments. He plans to use his property located at No. 15 Victoria Crescent, Ikoyi, Lagos, to secure funds for starting a fish farming business to supplement his income. He has reached out to you for advice on the best way to proceed and has requested you to implement the recommended option(s) to help him achieve his goal.",
  
  question: "Considering that Mr. Daniel Ogunleye has requested you to execute the selected options from the previous question, what legal document would you require from him?",
  options: [
    "A Power of Attorney.",
    "A Deed of Conveyance.",
    "Consent from the Governor of Lagos State.",
    "A Deed of Power of Attorney."
  ],
  correctOption: ["A Deed of Power of Attorney."],
  answeredOptions: [],
  hint: "To proceed with transactions like sale, lease, or mortgage on behalf of Mr. Daniel Ogunleye, a Deed of Power of Attorney is essential. This document legally authorizes you to act on his behalf, as supported by the case of Abina v Farhat [1938] 14 NLR 17."
},
{
  Scenario: "Mr. Ibrahim Suleiman, a businessman, has approached Zenith Bank Plc for a loan of ₦70 million, which he intends to secure using his house in Owerri. The loan will carry an interest rate of 12% and must be repaid within 12 months, with the due date set for March 10, 2024.",
  
  question: "If the legal mortgage was to be created for a property located in Lagos, which of the following statements would be accurate?",
  options: [
    "A legal mortgage would be created using Form 6 of the RTL.",
    "The mode of creating a legal mortgage depends on which part of Lagos Island the property is situated.",
    "The legal mortgage can be created by charge, accompanied by an agreement to create a legal mortgage.",
    "The method of creating the legal mortgage would depend on whether the property has a right of occupancy or a leasehold interest."
  ],
  correctOption: ["The method of creating the legal mortgage would depend on whether the property has a right of occupancy or a leasehold interest."],
  answeredOptions: [],
  hint: "In Lagos, the method for creating a legal mortgage depends on whether the property is under a right of occupancy (freehold) or a certificate of occupancy (leasehold). Each has specific requirements for the legal mortgage process."
},
{
  Scenario: "Mr. Ibrahim Suleiman, a businessman, has approached Zenith Bank Plc for a loan of ₦70 million, which he intends to secure using his house in Owerri. The loan will carry an interest rate of 12% and must be repaid within 12 months, with the due date set for March 10, 2024.",
  
  question: "Suppose Mr. Ibrahim Suleiman wants to collect twelve years rent in advance at a yearly rate of ₦2 million from his tenant in Abuja. As his solicitor, which of the following could pose a risk to this plan?",
  options: [
    "He will have to pay higher taxes on the rent collected.",
    "He could be negatively impacted by inflation.",
    "He might miss out on future capital appreciation opportunities.",
    "All of the above."
  ],
  correctOption: ["All of the above."],
  answeredOptions: [],
  hint: "Collecting rent in advance can result in higher tax liability, exposure to inflation, and missed opportunities for capital appreciation. It’s important to weigh these risks carefully before proceeding."
},
{
  Scenario: "Mr. Samuel Omale, the Managing Director of Skyline Ventures Ltd, recently secured a ₦10 million loan from Alpha Bank Plc in his name. He plans to use a property at No. 15 Tafawa Balewa Road, Kaduna, owned by Skyline Ventures Ltd, as collateral for the loan.",
  
  question: "In this transaction, Skyline Ventures Ltd would be best described as:",
  options: [
    "Mortgagor",
    "Guarantor",
    "Surety",
    "Borrower"
  ],
  correctOption: ["Surety"],
  answeredOptions: [],
  hint: "When a third party’s property is used as security for a loan, that third party is known as a surety. Here, Skyline Ventures Ltd is providing its property as security for Mr. Samuel Omale's personal loan, making it the surety."
},
{
  Scenario: "To secure a property transaction in Kano, certain documents are required to obtain the Governor's consent.",
  
  question: "Which of the following is NOT typically necessary to process the Governor's consent?",
  options: [
    "Requisition of title",
    "Duly executed application form for Governor's consent",
    "Tax clearance certificate",
    "Receipt of consent fee"
  ],
  correctOption: ["Requisition of title"],
  answeredOptions: [],
  hint: "While various documents, such as the application form, tax clearance certificates, and receipt of consent fee, are necessary for obtaining the Governor's consent, a requisition of title is not explicitly listed among the required documents."
},
{
  Scenario: "Mr. Gabriel Nnaji, a businessman with multiple properties across Nigeria, plans to transfer his remaining interest in a property at Plot 123, Ring Road, Ibadan to Mr. Michael Adebola.",
  
  question: "The transaction between Mr. Nnaji and Mr. Adebola is best described as:",
  options: [
    "Sale of land",
    "Lease",
    "Sub-lease",
    "Power of Attorney"
  ],
  correctOption: ["Sub-lease"],
  answeredOptions: [],
  hint: "Transferring a portion of a remaining interest in a property, especially one covered by a Certificate of Occupancy, is typically a sub-lease. In this case, Mr. Nnaji is transferring some of his interest to Mr. Adebola, making it a sub-lease."
},
{
  Scenario: "Mr. Gabriel Nnaji intends to finalize the sub-lease transaction with Mr. Michael Adebola. He wants to ensure all the necessary information is included in the lease agreement.",
  
  question: "Which of the following is NOT required to draft a lease agreement?",
  options: [
    "Date of commencement",
    "Duration of lease",
    "Rent payable",
    "None of the above"
  ],
  correctOption: ["None of the above"],
  answeredOptions: [],
  hint: "All the listed options—date of commencement, duration of lease, and rent payable—are essential elements that should be included in a lease agreement."
},
{
  Scenario: "Mr. Gabriel Nnaji plans to transfer the maximum possible interest in his property at Plot 123, Ring Road, Ibadan to Mr. Michael Adebola.",
  
  question: "What is the greatest interest Mr. Nnaji can transfer to Mr. Adebola?",
  options: [
    "90 years",
    "Remainder of his interest",
    "89 years",
    "79 years"
  ],
  correctOption: ["Remainder of his interest"],
  answeredOptions: [],
  hint: "When a property is under a Certificate of Occupancy, the holder can only transfer the remainder of the interest they have, which could be up to 99 years but is limited to what remains in their leasehold."
},
{
  Scenario: "Mr. Samuel Okechukwu, the governorship candidate of the Democratic Party (DP) in the recent general election in Abia State, owns properties in Oyo, Abia, and Nasarawa States. Believing that he rightfully won the election, though Chief Michael Adeyemi of the National Progress Party (NPP) was declared the winner by the electoral commission, Mr. Okechukwu plans to sell some of his properties to raise funds for filing an election petition before the Abia State Election Petition Tribunal.",
  
  question: "Amadi is interested in leasing one of Mr. Okechukwu's properties for three years. How can this transaction be executed?",
  options: [
    "By deed",
    "In writing",
    "Orally",
    "Both B and C"
  ],
  correctOption: ["Both B and C"],
  answeredOptions: [],
  hint: "Leases with a duration of three years or less can be created either orally or in writing."
},
{
  Scenario: "To sell his property in Nasarawa State, Mr. Samuel Okechukwu must establish a clear title history for a specific period.",
  
  question: "What is the required period for deducing title in Nasarawa State?",
  options: [
    "40 years",
    "30 years",
    "35 years",
    "Either A or B"
  ],
  correctOption: ["40 years"],
  answeredOptions: [],
  hint: "In Nasarawa State, which is within the Conveyancing Act (CA) states, the standard period for deducing title is 40 years."
},
{
  Scenario: "Mr. Uche Nwosu, a wealthy businessman with properties in Ebonyi, Ogun, and Kano States, intends to lease his property in Ogun State to Mr. Tunde for a term of four years. Unfortunately, Mr. Nwosu was involved in an accident and could not finalize the transaction. He called his son, David, on the phone to complete the transaction on his behalf.",
  
  question: "What legal instrument should Mr. Nwosu use to authorize his son to complete the transaction?",
  options: [
    "Power of Attorney",
    "Power of Trust",
    "Delegation of Power",
    "None of the above"
  ],
  correctOption: ["Power of Attorney"],
  answeredOptions: [],
  hint: "A Power of Attorney is the correct legal instrument to delegate authority to another person to act on one's behalf."
},
{
  Scenario: "Mr. Uche Nwosu wants to lease his property to Mr. Tunde. He calls his son David to complete the transaction.",
  
  question: "What is the relationship between Mr. Nwosu and Mr. Tunde in this lease transaction?",
  options: [
    "Licensor and licensee",
    "Lessor and lessee",
    "Assignor and assignee",
    "Vendor and purchaser"
  ],
  correctOption: ["Lessor and lessee"],
  answeredOptions: [],
  hint: "In a lease transaction, the relationship between the parties is that of lessor (property owner) and lessee (tenant)."
},
{
  Scenario: "Alhaji Yusuf Bello, a prominent politician with numerous properties across Nigeria, faces financial difficulties and decides to sell his property in Abia State to Mr. Adebayo. The parties agree on a sale price of ₦40 million, with an initial payment of ₦30 million already made.",
  
  question: "When will Mr. Adebayo take possession of the property if there is no express agreement?",
  options: [
    "Upon payment of the full purchase price",
    "On the agreed due date",
    "When the transaction is completed",
    "When the solicitor gives consent"
  ],
  correctOption: ["When the transaction is completed"],
  answeredOptions: [],
  hint: "In the absence of an express agreement, possession typically occurs upon completion of the transaction."
},
{
  Scenario: "Mr. Emeka Onu is the owner of plot 8, Makinde Avenue, Agbowo, Oyo State. He has agreed to sell the property to Mrs. Grace Amadi for a consideration of fifteen million naira. The contract of sale stipulates that Mrs. Grace can take possession upon payment. However, before the transaction could be completed, Mr. Emeka passed away under mysterious circumstances.",
  
  question: "Under the Land Use Act, which of the following statements regarding interest in land in Nigeria is true?",
  options: [
    "Interest in land can only be Leasehold",
    "Interest in land can only be Freehold",
    "Interest in land can be either Leasehold or Freehold",
    "None of the above"
  ],
  correctOption: ["Interest in land can be either Leasehold or Freehold"],
  answeredOptions: [],
  hint: "The Land Use Act allows for land interests to be either leasehold or freehold, depending on the nature of the title."
},
{
  Scenario: "Tunde Bello and Sarah Ojo, while working as interns, accompanied their Principal to the Probate Registry, where they observed the process of entering a caveat.",
  
  question: "Who is eligible to enter a caveat in the Probate Registry?",
  options: [
    "Only the spouse in a marriage under the Marriage Act",
    "Only the executors and beneficiaries",
    "Only the beneficiaries",
    "Any person with an interest in the estate"
  ],
  correctOption: ["Any person with an interest in the estate"],
  answeredOptions: [],
  hint: "A caveat can be entered by any individual who has a legitimate interest in the estate, typically to contest the approval of probate or administration."
},
{
  Scenario: "Mr. Bayo Adebayo, a wealthy businessman, is concerned about his estate after his death. His estate includes several properties across Nigeria, including Plot 15, Adewale Street, Ilorin, Kwara State.",
  
  question: "Personal representatives of an estate may be classified as which of the following?",
  options: [
    "Donors and Donees",
    "Executors and Administrators",
    "Testators and Testatrices",
    "Estate Managers"
  ],
  correctOption: ["Executors and Administrators"],
  answeredOptions: [],
  hint: "Personal representatives of an estate are typically either executors, who are named in the will, or administrators, who are appointed if there is no will."
},
{
  Scenario: "During an internship at a law firm, Mary Nkwo observed a case where an individual had acted without proper authority in managing the estate of a deceased person.",
  
  question: "What is the legal term for someone who interferes with a deceased person's estate without authority?",
  options: [
    "Personal Representative",
    "Executor de son tort",
    "Administrator",
    "None of the above"
  ],
  correctOption: ["Executor de son tort"],
  answeredOptions: [],
  hint: "An 'executor de son tort' is a person who, without proper authority, takes on the role of executor or administrator for a deceased person's estate."
},
{
  Scenario: "Mr. Samuel Ojo decided to sell his property for ₦50 million. He engaged a law firm to represent him, and the firm charged him a professional fee of ₦3 million.",
  
  question: "Who is typically responsible for paying the capital gains tax in a sale of land transaction?",
  options: [
    "The buyer",
    "The seller",
    "Both parties",
    "The solicitor"
  ],
  correctOption: ["The seller"],
  answeredOptions: [],
  hint: "In a sale of land transaction, the seller is usually responsible for paying capital gains tax on the proceeds from the sale."
},
{
  Scenario: "A solicitor is engaged in a property transaction and needs to determine their professional fees based on the applicable legal guidelines.",
  
  question: "Which of the following regulations should the solicitor use to calculate their professional fees?",
  options: [
    "Contingency fees",
    "Legal Practitioners' Remuneration (for legal documentation and other land matters) Act 2023",
    "Legal Practitioners' Remuneration (for legal documentation and other land matters) Order 1991",
    "Legal Practitioners' Remuneration (for business, legal service, and representation) Order 2023"
  ],
  correctOption: ["Legal Practitioners' Remuneration (for business, legal service, and representation) Order 2023"],
  answeredOptions: [],
  hint: "The current regulation for calculating professional fees in legal practice is outlined in the Legal Practitioners' Remuneration (for business, legal service, and representation) Order 2023."
},
{
  Scenario: "Documents are being maintained in the Lagos Lands Information Management system for proper land registry management.",
  
  question: "Which of the following is NOT a document required in the Lagos Lands Information Management system?",
  options: [
    "Parcel Files",
    "The Day List",
    "Nominal Index",
    "Land Bibliography"
  ],
  correctOption: ["Land Bibliography"],
  answeredOptions: [],
  hint: "The Lagos Lands Information Management system requires documents such as parcel files and the nominal index, but a land bibliography is not typically maintained."
},
{
  Scenario: "Your Principal, acting as a solicitor for Capital Investment Limited, handles the sale of property, and you need to determine how the professional charges are treated under the Capital Gains Tax Act.",
  
  question: "Under the Capital Gains Tax Act (CGTA), professional charges related to a sale are considered:",
  options: [
    "Allowable expenses",
    "Allowable",
    "Accruable income",
    "Taxable income"
  ],
  correctOption: ["Allowable expenses"],
  answeredOptions: [],
  hint: "Professional fees related to the sale of property are treated as allowable expenses under the Capital Gains Tax Act."
},
{
  Scenario: "Mr. Ahmed Suleiman passed away, leaving a valid will and naming executors. His executors need to apply for the appropriate grant.",
  
  question: "What grant should the executors apply for?",
  options: [
    "Grant of Probate",
    "Grant of Simple Administration",
    "Grant of Administration with the Will Annexed",
    "None of the Above"
  ],
  correctOption: ["Grant of Probate"],
  answeredOptions: [],
  hint: "When executors are named in a valid will, they must apply for a Grant of Probate to manage the estate."
},
{
  Scenario: "The will of Mr. Ahmed Suleiman contains a clause that appoints the executors of his estate.",
  
  question: "What is this clause called?",
  options: [
    "Execution Clause",
    "Charging Clause",
    "Residuary Clause",
    "Appointment Clause"
  ],
  correctOption: ["Appointment Clause"],
  answeredOptions: [],
  hint: "The clause in a will that names the executors is referred to as the 'Appointment Clause.'"
},
{
  Scenario: "Chief Anthony Odu made his will in 1998, appointing his first son, Henry Odu, a family friend, Michael Adebayo (who resides in the United States), and his wife, Grace Odu, as executors. He passed away in 2008, but before his death, he acquired a property in Abuja and purchased 5,000 shares of ABC Bank, all in 2003. Henry Odu, his eldest son, is currently interfering with the Abuja property by attempting to use it as collateral for a personal loan of ₦10 million.",

  question: "What type of grant should the executors seek to protect the property while their application for probate is still pending?",
  options: [
    "Double probate",
    "Specific grant",
    "General grant",
    "Limited grant"
  ],
  correctOption: ["Limited grant"],
  answeredOptions: [],
  hint: "To preserve the property while waiting for the probate application to be finalized, executors can seek a limited grant, which allows them to take specific actions to protect the estate without full probate."
},
{
  Scenario: "To expedite the clearance of her goods arriving at Lagos Port in December 2021, Mrs. Rita Williams has approached Mr. Bayo Oladele to lease a warehouse at No. 23, Shodipe Street, Apapa, Lagos, for a term of 10 years. Mr. Bayo Oladele, who will be traveling to Ukraine for medical treatment at the time, has engaged legal counsel, John Obiora of Acme Legal Associates, to handle the transaction. As an extern at the firm, you have been tasked with reviewing the draft agreement prepared by John Obiora.",

  question: "What is the general legal term for the instruction given to John Obiora in this scenario?",
  options: [
    "A deed poll",
    "A deed indenture",
    "A deed of transfer",
    "A supplemental deed"
  ],
  correctOption: ["A deed poll"],
  answeredOptions: [],
  hint: "A deed poll is a legal document that allows someone to act on behalf of another. It is typically signed by the grantor alone and is used to delegate authority."
},
{
  Scenario: "To expedite the clearance of her goods arriving at Lagos Port in December 2021, Mrs. Rita Williams has approached Mr. Bayo Oladele to lease a warehouse at No. 23, Shodipe Street, Apapa, Lagos, for a term of 10 years. Mr. Bayo Oladele, who will be traveling to Ukraine for medical treatment at the time, has engaged legal counsel, John Obiora of Acme Legal Associates, to handle the transaction. As an extern at the firm, you have been tasked with reviewing the draft agreement prepared by John Obiora.",

  question: "In which of the following situations can the power of attorney between Mr. Bayo Oladele and John Obiora be automatically revoked by law?",
  options: [
    "If Mr. Bayo Oladele dies",
    "If Mr. Bayo Oladele becomes mentally incapacitated",
    "If Mr. Bayo Oladele travels abroad",
    "Both A and B"
  ],
  correctOption: ["Both A and B"],
  answeredOptions: [],
  hint: "A power of attorney is automatically revoked by operation of law if the grantor dies or becomes mentally incapacitated, as the authority granted to the attorney ceases."
},
{
  Scenario: "Mr. Bayo Oladele and Mrs. Rita Williams are negotiating a lease agreement for the warehouse in Lagos. Certain essential elements must be included in the transaction.",

  question: "Which of the following is NOT a necessary component of the lease agreement?",
  options: [
    "Properly describing the property",
    "Adequately identifying the parties involved",
    "Including a recital",
    "Stating the term of the lease"
  ],
  correctOption: ["Including a recital"],
  answeredOptions: [],
  hint: "While a recital can be included in a lease agreement to provide background information, it is not a mandatory component. The essential elements are the description of the property, identification of the parties, and the lease term."
},
{
  Scenario: "If Mr. Bayo Oladele and Mrs. Rita Williams are considering insuring the warehouse as part of their lease agreement, certain factors must be taken into account.",

  question: "Which of the following is NOT a factor to consider when deciding on the insurance for the property?",
  options: [
    "Choosing the insurance company",
    "Existing obligations of the parties",
    "Deciding who should insure the property",
    "The risks to be insured against"
  ],
  correctOption: ["Existing obligations of the parties"],
  answeredOptions: [],
  hint: "When insuring a property, the main factors to consider include selecting the insurance company, determining who will take out the insurance, and identifying the risks to be covered. Existing obligations are generally not a factor in deciding insurance."
},{
  Scenario: "Mr. Ibrahim Suleiman, a businessman, has approached Zenith Bank Plc for a loan of ₦70 million, which he intends to secure using his house in Owerri. The loan will carry an interest rate of 12% and must be repaid within 12 months, with the due date set for March 10, 2024.",
  
  question: "If the legal mortgage was to be created for a property located in Lagos, which of the following statements would be accurate?",
  options: [
    "A legal mortgage would be created using Form 6 of the RTL.",
    "The mode of creating a legal mortgage depends on which part of Lagos Island the property is situated.",
    "The legal mortgage can be created by charge, accompanied by an agreement to create a legal mortgage.",
    "The method of creating the legal mortgage would depend on whether the property has a right of occupancy or a leasehold interest."
  ],
  correctOptions: ["The method of creating the legal mortgage would depend on whether the property has a right of occupancy or a leasehold interest."],
  answeredOptions: [],
  hint: "In Lagos, the method for creating a legal mortgage depends on whether the property is under a right of occupancy (freehold) or a certificate of occupancy (leasehold). Each has specific requirements for the legal mortgage process."
},
{
  Scenario: "On March 24, 2017, Mr. Emeka Okeke was granted a loan of ₦34 million by Zenith Bank Plc, located at Plot 23 Marina, Lagos, to help recapitalize his business after the challenges faced during the COVID-19 pandemic. Since Mr. Okeke could not provide the required collateral, his close friend Mr. Chidi agreed to use his two-winged duplex at Banana Island as security for the loan. All parties signed the necessary documents, and it was agreed that the loan would be repaid by July 15, 2022.",
  
  question: "The registration of the document must be completed within how many days after obtaining the governor's consent?",
  options: [
    "30 days",
    "60 days",
    "90 days",
    "50 days"
  ],
  correctOptions: ["60 days"],
  answeredOptions: [],
  hint: "According to the Land Registration Law of Lagos State 2015, registration of the document should be completed within sixty (60) days after obtaining the governor's consent."
},
{
  question: "What is the significance of the date, July 15, 2022?",
  options: [
    "Legal date of commencement",
    "Effective date of the transaction",
    "Legal due date",
    "None of the above"
  ],
  correctOptions: ["Legal due date"],
  answeredOptions: [],
  hint: "The agreed-upon date for repaying the mortgage is known as the 'legal due date.' In this scenario, July 15, 2022, is considered the legal due date."
},
{
  question: "Which of the following is not maintained at the Land Information Management System (LIMS) at the Lagos Land Registry?",
  options: [
    "Day List",
    "Register of Mortgages",
    "Register of Transactions",
    "Register of Cautions"
  ],
  correctOptions: ["Register of Transactions"],
  answeredOptions: [],
  hint: "Under the Land Registration Law of Lagos State 2015, LIMS maintains specific registers, including the day list, mortgages, and caution. The register of transactions is not included."
},
{
  question: "Who is not authorized to conduct business at the Lagos Land Registry?",
  options: [
    "Law Firms",
    "Registered Estate Surveyors",
    "Financial Consultants",
    "Financial Institutions"
  ],
  correctOptions: ["Financial Consultants"],
  answeredOptions: [],
  hint: "The Land Registration Law of Lagos State 2015 allows certain entities such as law firms, financial institutions, and registered estate surveyors to access LIMS for searches and information. Financial consultants are not explicitly mentioned."
},
{
  question: "Under the Land Registration Law of Lagos, which form is used for applying for searches?",
  options: [
    "Form 1",
    "Form 3",
    "Form 4",
    "Form 2"
  ],
  correctOptions: ["Form 3"],
  answeredOptions: [],
  hint: "Form 3 is the appropriate form under the Land Registration Law of Lagos State 2015 for conducting searches."
},
{
  question: "Which form is appropriate for applying for a certified true copy under the Land Registration Law of Lagos?",
  options: [
    "Form 3",
    "Form 5",
    "Form 6",
    "Form 4"
  ],
  correctOptions: ["Form 5"],
  answeredOptions: [],
  hint: "Form 5 is the correct form under the Land Registration Law of Lagos State 2015 for applying for a certified true copy."
},
{
  question: "What form is used to apply for original titled land under the Land Registration Law of Lagos?",
  options: [
    "Form 1",
    "Form 3",
    "Form 4",
    "Form 2"
  ],
  correctOptions: ["Form 1"],
  answeredOptions: [],
  hint: "Form 1 is the appropriate form under the Land Registration Law of Lagos State 2015 for registering original titled land."
},
{
  question: "For registering family members at the Land Registry in Lagos, how many members should be registered?",
  options: [
    "At least two",
    "At least ten",
    "Not more than ten",
    "Any number approved by the registrar"
  ],
  correctOptions: ["Not more than ten"],
  answeredOptions: [],
  hint: "The Land Registration Law of Lagos State 2015 states that a family must appoint not more than ten registered representatives for land registration."
},
{
  question: "A registered holder under the Land Registration Law of Lagos is subject to all except which of the following?",
  options: [
    "Encumbrances",
    "Precedent covenants",
    "Restrictive covenants",
    "Overriding covenants"
  ],
  correctOptions: ["Precedent covenants"],
  answeredOptions: [],
  hint: "Under the Land Registration Law of Lagos, a registered holder is subject to encumbrances, restrictive covenants, and overriding covenants, but not precedent covenants."
},
{
  question: "Which of the following is the correct way to draft the execution clause of the contract of sale agreement signed by Mr. Emeka Okeke?",
  options: [
    "Signed, sealed, and delivered by within-named.",
    "Signed by within-named.",
    "Signed and delivered by within-named.",
    "None of the above"
  ],
  correctOptions: ["Signed and delivered by within-named."],
  answeredOptions: [],
  hint: "The execution of a contract of sale agreement is properly expressed as 'Signed and delivered by within-named' for written documents."
},
{
  Scenario: "Once the bank sells the property in the exercise of its power of sale, and Mrs. Ada Ugo challenges the sale in court, the court can only set aside the sale when it is established that:",
  
  question: "Which of the following conditions would allow the court to set aside the sale of the property?",
  options: [
    "The property was sold above its value",
    "She was not consulted in the selection of the auctioneer",
    "The bank sold the property to itself or its agents",
    "None of the above"
  ],
  correctOptions: ["The bank sold the property to itself or its agents"],
  answeredOptions: [],
  hint: "The court will invalidate the sale if it's proven that the bank sold the property to itself or its agents, as this constitutes a conflict of interest."
},
{
  Scenario: "In the application of the proceeds of the sale of the property by the bank, the priority shall be:",
  
  question: "What is the correct order of priority for applying the proceeds from the sale of the property?",
  options: [
    "To settle the outstanding loan due to the bank",
    "To settle the outstanding interest on the loan",
    "To settle encumbrances in their priority"
  ],
  correctOptions: ["To settle encumbrances in their priority"],
  answeredOptions: [],
  hint: "Proceeds from the sale must first address any existing encumbrances before settling the loan and interest."
},
{
  Scenario: "Assuming Mrs. Ada Ugo has used the same property to secure an additional loan from ABC Bank and intends to consolidate the two loans, which of the following represents the position of the law:",
  
  question: "What is the legal position regarding the consolidation of two loans secured by the same property?",
  options: [
    "The bank has the power to consolidate the two loans",
    "The bank must ensure that the consolidation clause is included in the deed of mortgage",
    "The bank cannot consolidate the two loans because there is only one mortgage property",
    "The bank can consolidate the loan because the parties are the same"
  ],
  correctOptions: ["The bank cannot consolidate the two loans because there is only one mortgage property"],
  answeredOptions: [],
  hint: "Consolidation of loans requires that multiple properties are involved, not just one."
},
{
  Scenario: "Mrs. Grace Onu wants to assign a part of her property at No. 76, Okigwe Road, Aba to Mr. Kelechi, and Mr. Kelechi has engaged you to search in respect of the property.",
  
  question: "Mrs. Grace Onu will have to deduce her title for at least how many years?",
  options: [
    "45 years",
    "30 years",
    "10 years",
    "None of the above"
  ],
  correctOptions: ["30 years"],
  answeredOptions: [],
  hint: "In jurisdictions like Aba, a title should be deduced for at least 30 years to establish ownership history."
},
{
  question: "Assuming the property is located in Ibadan, how many years is Mrs. Grace Onu expected to deduce her title?",
  options: [
    "45 years",
    "30 years",
    "10 years",
    "Mrs. Grace Onu does not need to deduce the title"
  ],
  correctOptions: ["30 years"],
  answeredOptions: [],
  hint: "In Ibadan, under the Property and Conveyancing Law, a title should be deduced for at least 30 years."
},
{
  question: "What are the ideal stages that the transaction between Mrs. Grace Onu and Mr. Kelechi should go through?",
  options: [
    "Oral contract, open contract, and completion stage",
    "Formal contract, governor's consent, stamping, and registration",
    "Pre-contract, contract, post-contract, completion, and post-completion",
    "Governor's consent, stamping, and re-registration"
  ],
  correctOptions: ["Pre-contract, contract, post-contract, completion, and post-completion"],
  answeredOptions: [],
  hint: "The standard process includes several stages from pre-contract to post-completion, ensuring all legal and procedural requirements are met."
},
{
  question: "The advantage that Mr. Kelechi will enjoy if a contract of sale of land is drafted includes all but one of the following:",
  options: [
    "Payment of less stamp duties",
    "Prevention of gazumping and gazundering by parties",
    "Ensures certainty of terms",
    "None of the above"
  ],
  correctOptions: ["Payment of less stamp duties"],
  answeredOptions: [],
  hint: "Drafting a contract of sale helps prevent gazumping and gazundering, and ensures clarity of terms but does not necessarily reduce stamp duty."
},
{
  question: "Mrs. Grace Onu's root of title concerning the property in Aba should encapsulate the following:",
  options: [
    "Establish both the legal and equitable interest",
    "Nothing on the face of it should cast doubt on its authenticity",
    "A clear description of the property",
    "All of the above"
  ],
  correctOptions: ["All of the above"],
  answeredOptions: [],
  hint: "A good root of title should establish both legal and equitable interests, have no apparent flaws, and clearly describe the property."
},
{
  question: "Assuming Mrs. Grace Onu, instead of assigning, decides to grant a term of years over the property in Aba to enable her to take advantage of capital appreciation of the property, one of the following should be inserted in the document:",
  options: [
    "Rent clause",
    "Rent review clause",
    "Recital",
    "Consideration clause"
  ],
  correctOptions: ["Rent review clause"],
  answeredOptions: [],
  hint: "A rent review clause allows for adjustments to rent based on market conditions, helping the property owner take advantage of capital appreciation."
},
{
  question: "To ensure the property does not fall into the hands of undesirable elements in granting the term of years, Mrs. Grace Onu should insert into the document creating the term of years one of the following:",
  options: [
    "Covenant to insure",
    "Covenant to review",
    "Covenant not to assign",
    "Indemnity covenant"
  ],
  correctOptions: ["Covenant not to assign"],
  answeredOptions: [],
  hint: "A covenant not to assign prevents the lessee from transferring the lease to another party, helping control who occupies the property."
},
{
  Scenario: "Ms. Nneka Eze has just been posted to the Law Firm of CA Adigwe & Associates for her law office attachment. On her first day at work, her principal asked her to interview a client (Mrs. Chinyere Obi), who had just briefed the law firm to represent her in the purchase of a plot of land and a house at Bodija, Ibadan, Oyo State. The house is owned by Mr. Ike Okoro, who wants to sell it for N10 million.",
  
  question: "How will you describe Chinyere Obi and Mr. Ike Okoro in the contract of sale document to be drafted?",
  options: [
    "Lessor-Lessee",
    "Mortgagor-Mortgagee",
    "Vendor-Purchaser",
    "Assignor-Assignee"
  ],
  correctOptions: ["Vendor-Purchaser"],
  answeredOptions: [],
  hint: "In a contract of sale, the seller is the vendor, and the buyer is the purchaser."
},
{
  question: "Your principal assigned you to prepare a draft of the final documents. Which of the following will you request from the chambers' law librarian?",
  options: [
    "Search report",
    "Previous judgment",
    "Rules of court",
    "Precedent"
  ],
  correctOptions: ["Precedent"],
  answeredOptions: [],
  hint: "Precedents are essential templates or examples of similar legal documents that guide the drafting process."
},
{
  Scenario: "During your externship program in the law firm of Ifeanyi Okeke & Co., at one of the numerous client interviews, the head of chambers, Mr. Ifeanyi Okeke, allowed you to witness the interview of Chief Adekunle on April 10, 2023. Part of the instructions given to the law firm by Chief Adekunle was the need to have an initial document prepared by Mr. Ifeanyi Okeke for a transfer of unexpired residue of Alhaji Musa over his property at No. 15, Kaduna Street, Wuse 2, Abuja.",
  
  question: "The nature of the document to be prepared by Mr. Ifeanyi Okeke should be:",
  options: [
    "A deed of assignment",
    "A deed of mortgage",
    "A contract of sale of land agreement",
    "A deed of conveyance"
  ],
  correctOptions: ["A deed of assignment"],
  answeredOptions: [],
  hint: "A deed of assignment is used to transfer the unexpired residue of an interest in a property."
},
{
  question: "The commencement clause and execution clause of the instrument to be drafted on behalf of Chief Adekunle should be:",
  options: [
    "This deed of Assignment. Signed, sealed, and delivered by Assignor",
    "This deed of Mortgage. Signed, sealed, and delivered by Mortgagor",
    "This contract of sale of land agreement. Signed, sealed, and delivered by the Vendor",
    "This contract of sale of land agreement. Signed and delivered by the Vendor"
  ],
  correctOptions: ["This contract of sale of land agreement. Signed and delivered by the Vendor"],
  answeredOptions: [],
  hint: "For a contract of sale, the proper phrasing for execution is 'Signed and delivered by the Vendor.'"
},
{
  Scenario: "Chief Ebuka purchased a large tract of land in Umuahia, Abia State, from the Eze family for N15 million. The transaction, which was under customary law, was done orally. Chief Ebuka has now approached you to advise him on the validity of the transaction.",
  
  question: "The transaction above would be valid if one of the following conditions was fulfilled:",
  options: [
    "The purchase price was paid",
    "The transaction took place in the presence of witnesses",
    "The purchaser was put in possession",
    "All of the above"
  ],
  correctOptions: ["All of the above"],
  answeredOptions: [],
  hint: "Under customary law, the transaction is valid if the purchase price is paid, witnesses are present, and the purchaser is put in possession."
},
{
  question: "Chief Ebuka will acquire the ___ in respect of the tract of land he purchased from the Eze family.",
  options: [
    "Legal interest",
    "Equitable interest",
    "Legal and equitable interest",
    "Quasi-legal interest"
  ],
  correctOptions: ["Legal and equitable interest"],
  answeredOptions: [],
  hint: "When the transaction is valid under customary law, both legal and equitable interests are acquired."
},
{
  question: "Assuming the above transaction was in writing, the solicitor to prepare the final document of transfer is:",
  options: [
    "The Assignor's solicitor",
    "The Assignee's solicitor",
    "The Vendor's solicitor",
    "The Stakeholder's solicitor"
  ],
  correctOptions: ["The Assignee's solicitor"],
  answeredOptions: [],
  hint: "The Assignee's solicitor typically prepares the final document to protect the interests of the buyer."
},
{
  Scenario: "Chief Anayo, an illiterate, donated a power of attorney, which was attested before a justice of peace, to Fatima Adamu to sell his property in Kano. The Donor, while signing the power of attorney, declared orally in the presence of witnesses that the power of attorney is irrevocable. The Donee sold the property to Chief Kalu, but the delivery was made subject to the obtaining of Governor's consent.",
  
  question: "The attestation before a Justice of the Peace enables the power of attorney to:",
  options: [
    "Enjoy the presumption of due execution",
    "Lose the presumption of due execution",
    "Be validly executed",
    "None of the above"
  ],
  correctOptions: ["Enjoy the presumption of due execution"],
  answeredOptions: [],
  hint: "When a document is attested by a Justice of the Peace, it is presumed to have been properly executed."
},
{
  question: "The power of attorney donated by Chief Anayo should contain:",
  options: [
    "A power clause",
    "An appointment clause",
    "An Illiterate jurat",
    "All of the above"
  ],
  correctOptions: ["All of the above"],
  answeredOptions: [],
  hint: "Given that the donor is illiterate, the power of attorney should include a power clause, appointment clause, and an illiterate jurat."
},
{
  question: "The delivery made subject to the obtaining of the governor's consent is not an example of:",
  options: [
    "An absolute delivery",
    "Conditional delivery",
    "Delivery in Escrow",
    "B & C"
  ],
  correctOptions: ["An absolute delivery"],
  answeredOptions: [],
  hint: "A delivery that is conditional or requires further approval is not considered an absolute delivery."
},
{
  question: "The oral statement by Chief Anayo as to the irrevocability of the power of attorney is invalid because:",
  options: [
    "All powers of attorney are revocable",
    "All powers of attorney are irrevocable",
    "It is a breach of section 4 of the statute of fraud",
    "None of the above"
  ],
  correctOptions: ["It is a breach of section 4 of the statute of fraud"],
  answeredOptions: [],
  hint: "According to the Statute of Frauds, certain transactions, including those involving powers of attorney, must be in writing to be valid."
},
{
  question: "The court will usually construe the power of attorney donated by Chief Anayo to Fatima Adamu:",
  options: [
    "Permissively",
    "Strictly",
    "Concurrently",
    "Consecutively"
  ],
  correctOptions: ["Strictly"],
  answeredOptions: [],
  hint: "Courts typically interpret powers of attorney strictly, meaning they will be limited to the specific powers and instructions given."
},
{
  Scenario: "Mr. Haliba Pingani, a resident of Ajah, Lagos State, got married to Margaret Pingani at the Ikeja Marriage Registry in 2000. Their union is blessed with two children, Christable (18) and Christiano (15). He passed away in 2021, leaving a will that bequeathed his entire estate to his two children. Mr. Habila Pingani's 15-year-old nephew, an orphan living with him, insisted that he must be buried in his hometown, Pingani Village in Niger State. However, he was buried at the Ajah Cemetery before his will was read. His wife obtained letters of administration and sold one of his properties in Jabi, Abuja, before the will was admitted to probate.",

  question: "As a solicitor, what advice would you have given to Mr. Habila Pingani to ensure that his burial wishes were fulfilled?",
  options: [
    "That he should make a dying declaration",
    "That the 'burial wishes' should be written in a separate document and given to his solicitor or a trusted person with instructions to read it immediately after he dies",
    "That he should verbally instruct his lawyer about his 'burial wishes'",
    "By inserting it as a clause in the will"
  ],
  correctOptions: ["That the 'burial wishes' should be written in a separate document and given to his solicitor or a trusted person with instructions to read it immediately after he dies"],
  answeredOptions: [],
  hint: "Writing burial wishes in a separate document and instructing a trusted person to read them immediately after death ensures the wishes are fulfilled."
},
{
  question: "What remedy, if any, is available to his wife and nephew since Mr. Habila Pingani made no provision for them?",
  options: [
    "Challenge the will as an antagonist to the will",
    "Obtain an injunction for the will not to be admitted to probate",
    "Challenge the will on the ground that reasonable financial provision was not made for them as his dependents",
    "All of the above"
  ],
  correctOptions: ["Challenge the will on the ground that reasonable financial provision was not made for them as his dependents"],
  answeredOptions: [],
  hint: "Dependents who are not adequately provided for in a will may challenge it on that basis."
},
{
  question: "Mrs. Margaret Habila's sale of the property at Jabi, Abuja amounts to:",
  options: [
    "Exercising her right as his legally wedded wife",
    "A crime, and she should be denied benefits from the estate",
    "Meddling in the estate of Mr. Habila Pingani, and she will be regarded as an executor de son tort",
    "All of the above"
  ],
  correctOptions: ["Meddling in the estate of Mr. Habila Pingani, and she will be regarded as an executor de son tort"],
  answeredOptions: [],
  hint: "Interfering with an estate without proper authorization can lead to being labeled as an executor de son tort."
},
{
  question: "Assuming Mr. Habila Pingani appointed his lawyer and his son to be the executors, the following will be the implication:",
  options: [
    "The son will be entitled to double probate when he attains majority",
    "The lawyer will be the sole executor",
    "His wife can stand in as executor on behalf of the son pending his attainment of majority",
    "All of the above"
  ],
  correctOptions: ["The son will be entitled to double probate when he attains majority"],
  answeredOptions: [],
  hint: "When a minor is appointed as an executor, they may be entitled to double probate once they reach adulthood."
},
{
  question: "Assuming Mr. Habila Pingani was a Muslim and he lived and died in Ilorin, Kwara State, the following will be true:",
  options: [
    "He will not be able to make the will",
    "He will have to make zakat in his will",
    "He will be able to give out a maximum of 1/3 of his estate in a will",
    "Probate can only be granted by the Sharia Court of Appeal"
  ],
  correctOptions: ["He will be able to give out a maximum of 1/3 of his estate in a will"],
  answeredOptions: [],
  hint: "Under Islamic law, a Muslim can only bequeath up to 1/3 of their estate through a will."
},
{
  question: "Assuming Mrs. Habila wants to challenge the will, she may do so by filing:",
  options: [
    "Citation",
    "Caveat",
    "Caution",
    "Preliminary Objection"
  ],
  correctOptions: ["Caveat"],
  answeredOptions: [],
  hint: "A caveat is filed to challenge the validity of a will before probate is granted."
},
{
  Scenario: "Before COVID-19, Chief Olowolayemo sold a landed property to the Nigerian Law School Cooperative Society for N60,000,000.00. As a solicitor to the Nigerian Law School Cooperative Society, you are instructed to sell the property. You have sold the property to Chief Amazing at the rate of N100,000,000.00.",

  question: "Assuming your professional fee and cost of sale is N10,000,000.00, how much is the Capital Gain Tax in this scenario?",
  options: [
    "N3,000,000.00",
    "N300,000,000.00",
    "N350,000,000.00",
    "N350,000,000.00"
  ],
  correctOptions: ["N3,000,000.00"],
  answeredOptions: [],
  hint: "Capital Gain Tax is calculated on the net gain after deducting allowable expenses such as professional fees."
},
{
  question: "One of the following is not an advantage of making a will:",
  options: [
    "It eliminates the possibility of challenges to the estate",
    "It saves cost",
    "It allows the Testator to have peace of mind",
    "It allows the Testator to make gifts to people outside of his heirs"
  ],
  correctOptions: ["It eliminates the possibility of challenges to the estate"],
  answeredOptions: [],
  hint: "Making a will provides several benefits, but it does not completely prevent challenges to the estate."
},
{
  Scenario: "Mr. Chief Tejumola plans to transfer his property to Miss Amina, and you are asked to handle the legal aspects of the transaction.",

  question: "The document that will need to be drafted at the initial stage of the transaction will be prepared by:",
  options: [
    "Mr. Chief Tejumola's Solicitor",
    "Miss Amina's Solicitor",
    "The two solicitors acting together",
    "None of the above"
  ],
  correctOptions: ["Miss Amina's Solicitor"],
  answeredOptions: [],
  hint: "The solicitor of the transferee (Miss Amina) typically drafts the initial document to protect their client's interests."
},
{
  question: "One of the following does not apply after the contract stage:",
  options: [
    "Chief Tejumola becomes a qualified trustee in respect of the property",
    "Chief Tejumola's death will not affect the contract",
    "Miss Amina is automatically entitled to possession",
    "Miss Amina acquires equity in respect of the property"
  ],
  correctOptions: ["Miss Amina is automatically entitled to possession"],
  answeredOptions: [],
  hint: "After the contract stage, the buyer acquires equitable interest, but possession is not automatic until completion."
},
{
  question: "The appropriate way of allowing Amina to take possession before completion is as:",
  options: [
    "Trustee",
    "Licensee",
    "Legatee",
    "Devisee"
  ],
  correctOptions: ["Licensee"],
  answeredOptions: [],
  hint: "Granting a license allows the buyer to take possession before the completion of the sale."
},
{
  question: "The document evidencing the financial obligation of parties that they are expected to meet after the above transaction is known as:",
  options: [
    "Completion statement",
    "Complete deed",
    "Incomplete statement",
    "Incomplete deed"
  ],
  correctOptions: ["Completion statement"],
  answeredOptions: [],
  hint: "A completion statement outlines the financial obligations and final payment details of the transaction."
},
{
  Scenario: "Chief Tejumola intends to sell his three-bedroom bungalow at 22, Ama Street, Adamawa State to Miss Amina Tofi. As an extern in the law firm of Teejay Solicitors, you are instructed to draft the initial document.",
  
  question: "The document that will need to be drafted at the initial stage of the transaction will be prepared by:",
  options: [
    "Mr. Chief Tejumola's Solicitor",
    "Miss Amina's Solicitor",
    "The two solicitors acting together",
    "None of the above"
  ],
  correctOptions: ["Mr. Chief Tejumola's Solicitor"],
  answeredOptions: [],
  hint: "The initial document for a sale of land transaction is typically prepared by the vendor’s solicitor to outline the terms of the sale."
},
{
  question: "One of the following does not apply after the contract stage:",
  options: [
    "Chief Tejumola becomes a qualified trustee in respect of the property",
    "Chief Tejumola's death will not affect the contract",
    "Miss Amina is automatically entitled to possession",
    "Miss Amina acquires equity in respect of the property"
  ],
  correctOptions: ["Miss Amina is automatically entitled to possession"],
  answeredOptions: [],
  hint: "After the contract stage, the buyer gains equitable interest, but possession is not automatic until completion."
},
{
  question: "The appropriate way of allowing Amina to take possession before completion is as:",
  options: [
    "Trustee",
    "Licensee",
    "Legatee",
    "Devisee"
  ],
  correctOptions: ["Licensee"],
  answeredOptions: [],
  hint: "Granting a license allows the buyer to take possession before the sale is completed."
},
{
  question: "The document evidencing the financial obligation of parties that they are expected to meet after the above transaction is known as:",
  options: [
    "Completion statement",
    "Complete deed",
    "Incomplete statement",
    "Incomplete deed"
  ],
  correctOptions: ["Completion statement"],
  answeredOptions: [],
  hint: "A completion statement details the financial obligations and final payment details of the transaction."
},
{
  Scenario: "Chief Tejumola intends to sell his three-bedroom bungalow at 22, Ama Street, Adamawa State to Miss Amina Tofi. You are instructed to draft the initial document, and later, a Power of Attorney is given by Chief Tejumola to you to sell the property.",

  question: "Assuming you are given Power of Attorney by Chief Tejumola to sell the property above, all but one of these is true of the Power of Attorney:",
  options: [
    "It is a species of a deed poll",
    "It may be by deed",
    "It is an instrument of transfer of title",
    "It is an instrument of delegation"
  ],
  correctOptions: ["It is an instrument of transfer of title"],
  answeredOptions: [],
  hint: "A Power of Attorney is generally an instrument of delegation, not a transfer of title unless coupled with consideration."
},
{
  question: "One of the following is not among the taxes to be paid during the perfection of the title to the property in the transaction above:",
  options: [
    "Capital gains tax",
    "Consent fees",
    "Stamp duties",
    "Rent"
  ],
  correctOptions: ["Rent"],
  answeredOptions: [],
  hint: "Rent is not a tax payable during the perfection of a property title."
},
{
  question: "The balance of the purchase price is paid by the purchaser in the above transaction:",
  options: [
    "Before the commencement of the contract of sale",
    "At the completion stage",
    "Before the execution of the contract",
    "All of the above"
  ],
  correctOptions: ["At the completion stage"],
  answeredOptions: [],
  hint: "The balance of the purchase price is typically paid at the completion stage of a sale transaction."
},
{
  Scenario: "Aisha Labaran lost her father, Oseni Aliyu, in a motor accident. In his Will, Oseni bequeathed his property at No. 34 Danyan Road, Jos to her. He also expressly bequeathed the family compound in the village to her 'in her capacity as his first daughter.' Her husband, Arzuka Idris, advised that she should renounce the gift of the family compound as that is an exclusive preserve of the eldest male child and such a gift should have been made to him (Umar) as her husband.",
  
  question: "What type of legacy is the gift of the property at No. 34 Danyan Road, Jos?",
  options: [
    "Gift Intervivos legacy",
    "Real property legacy",
    "Real estate legacy",
    "Specific legacy"
  ],
  correctOptions: ["Specific legacy"],
  answeredOptions: [],
  hint: "A specific legacy refers to a gift of a particular item or property described in detail in a will."
},
{
  question: "To be able to take interest in her gift, Aisha Labaran must be issued:",
  options: [
    "Letter of authority",
    "Assent",
    "Letter of Administration",
    "Probate"
  ],
  correctOptions: ["Assent"],
  answeredOptions: [],
  hint: "An assent is required to transfer ownership of real property from the estate to the beneficiary."
},
{
  question: "Where Oseni had a valid Will but only wanted to make additions, which procedure should he adopt?",
  options: [
    "Revoke the former Will",
    "Make a codicil",
    "Destruction of the former Will",
    "Republication of the former Will"
  ],
  correctOptions: ["Make a codicil"],
  answeredOptions: [],
  hint: "A codicil is a legal document that allows for amendments or additions to a previously executed will."
},
{
  question: "Assuming Oseni died intestate and the Administrators of his estate have the authority to sell one of his properties, at what stage would they be required to deduce title?",
  options: [
    "Before the completion",
    "During completion",
    "During the contract",
    "After completion"
  ],
  correctOptions: ["Before the completion"],
  answeredOptions: [],
  hint: "Deducing title typically occurs during the post-contract stage, before the completion of the sale."
},
{
  question: "At the execution of the final instrument in the transaction, the Administrators and purchaser would be referred to as:",
  options: [
    "Mortgagee and Mortgagor",
    "Lessor and Lessee",
    "Testator and beneficiaries",
    "Assignor and Assignee"
  ],
  correctOptions: ["Assignor and Assignee"],
  answeredOptions: [],
  hint: "At the completion stage of a sale transaction, the parties are referred to as Assignor and Assignee."
},
{
  question: "What document will be executed by the parties at the completion stage of the transaction?",
  options: [
    "A Power of Attorney",
    "A Deed of Mortgage",
    "A Deed of Assignment",
    "A Deed of Lease"
  ],
  correctOptions: ["A Deed of Assignment"],
  answeredOptions: [],
  hint: "The deed of assignment is the document that formally transfers ownership of the property at the completion stage."
},
{
  question: "Assuming the title to the property is under native law and customs, for the oral sale of the property to be valid, all of the following statements are correct except one:",
  options: [
    "Possession must have been handed over to the purchaser",
    "All the witnesses must have attested to the relevant documents",
    "The transaction must have occurred in the presence of witnesses",
    "Full purchase price must have been paid and other traditional requirements fulfilled"
  ],
  correctOptions: ["All the witnesses must have attested to the relevant documents"],
  answeredOptions: [],
  hint: "An oral sale under native law and customs typically does not involve written documents."
},
{
  question: "Where the Administrators execute the final instrument in a lease transaction via an Attorney, the Lessor's Execution Clause should contain:",
  options: [
    "An Illiterate Jurat",
    "Power Clause",
    "Authority of the Attorney",
    "Jurat de Illiterate"
  ],
  correctOptions: ["Authority of the Attorney"],
  answeredOptions: [],
  hint: "The Authority of the Attorney clause confirms that the Attorney is duly authorized to act on behalf of the Lessor."
},

  {
    Scenario: "A transaction was entered into by two parties. Party A effectively transferred their entire interest in a sale of land to Party B. At a stage in the transaction, Party B investigated the title to confirm its genuineness. Upon authenticating the title, solicitors on both sides prepared completion statements, and finally, the title was perfected.",
    
    question: "Only one of the following represents the transaction, the document of transfer, and the parties in this type of conveyancing respectively:",
   options: [
      "Contract of sale of land/ Sale of land/ Vendor and Purchaser",
      "Sale of land/ Contract of sale of land/ Seller and Buyer",
      "Contract of sale of land/ Sale of land/ Assignee and Assignor",
      "Sale of land/ Contract of sale of land/ Lessor and Lessee"
    ],
   correctOptions: ["Contract of sale of land/ Sale of land/ Vendor and Purchaser"],
    answeredOptions: [],
    hint: "In a typical conveyancing transaction, the parties involved in a sale of land are referred to as Vendor and Purchaser."
  },
  {
    question: "In a typical sale of land transaction, the stages of conveyancing are divided into:",
   options: [
      "Four (4) stages",
      "Five (5) stages",
      "Six (6) stages",
      "Three (3) stages"
    ],
   correctOptions: ["Five (5) stages"],
    answeredOptions: [],
    hint: "Conveyancing generally involves five stages: pre-contract, contract, post-contract, completion, and post-completion."
  },
  {
    question: "At what stage in the transaction is the title perfected?",
   options: [
      "Completion stage",
      "Contract stage",
      "Post-completion stage",
      "Post-contract stage"
    ],
   correctOptions: ["Post-completion stage"],
    answeredOptions: [],
    hint: "Title perfection occurs after the completion stage, typically involving obtaining consent, stamping, and registration."
  },
  {
    question: "One of the following represents the order of activities in the post-completion stage of the above transaction:",
   options: [
      "Governor's consent/Registration/Stamping",
      "Stamping/Registration/Governor's Consent",
      "Governor's Consent/Stamping/Registration",
      "Registration/Governor's Consent/Stamping"
    ],
   correctOptions: ["Governor's Consent/Stamping/Registration"],
    answeredOptions: [],
    hint: "The correct sequence involves obtaining Governor's consent first, then stamping the document, and finally registering it."
  },
  {
    Scenario: "Godiya Albarka, Duniya, and Joy were kidnapped along Kaduna-Jos Road on their way to inspect a mining site in 2023. Godiya died in the kidnappers' den, but before his demise, he scribbled some words on his shirt sleeve in his native Berom language and signed them in the presence of Duniya and Joy. The inscription read: (i) A bungalow to my first son, Zamani; (ii) N5,000,000 in my miner's bank account no. 2234356123 to my mistress, Ola of Ondo State; (iii) My 200 units of shares in BUA plc to my twin brother Ilya.",
    
    question: "The inscription made by Godiya Albarka will not qualify as a formal will because:",
   options: [
      "It was made in Berom language",
      "It was not made on paper",
      "It was not duly attested",
      "It was not written"
    ],
   correctOptions: ["It was not duly attested"],
    answeredOptions: [],
    hint: "For a will to be valid, it must be properly attested by at least two witnesses."
  },
  {
    question: "The gift in clause (i) is an example of a:",
   options: [
      "Specific gift",
      "General gift",
      "Pecuniary gift",
      "Demonstrative gift"
    ],
   correctOptions: ["General gift"],
    answeredOptions: [],
    hint: "A general gift refers to a bequest that is not described in specific detail."
  },
  {
    question: "The gift in clause (i) may suffer:",
   options: [
      "Abatement",
      "Ademption",
      "All of the above",
      "None of the above"
    ],
   correctOptions: ["Abatement"],
    answeredOptions: [],
    hint: "Abatement occurs when a general gift is reduced to pay off the deceased's debts."
  },
  {
    question: "The gift in clause (iii) may fail due to:",
   options: [
      "Insufficiency of gifts",
      "Uncertainty of beneficiary",
      "Doctrine of lapse",
      "All of the above"
    ],
   correctOptions: ["Doctrine of lapse"],
    answeredOptions: [],
    hint: "A gift may fail under the doctrine of lapse if the beneficiary predeceases the testator."
  },
  {
    question: "Which of the following may be granted in respect of Godiya Albarka's Estate?",
   options: [
      "Probate",
      "Letters of Administration with will attached",
      "Letters of Administration",
      "Grant de bonis non"
    ],
   correctOptions: ["Letters of Administration"],
    answeredOptions: [],
    hint: "If a will is not validly executed, the deceased is considered to have died intestate."
  },
  {
    Scenario: "Mr. Abraham Adaku lives in Port Harcourt, Rivers State. He has two real properties in Port Harcourt and two in Awka, Anambra State. In January 2023, he obtained a loan of N20 million from Firebrand Bank Plc to send his two sons abroad for university education. One of the properties in Port Harcourt was used as security for the loan, and a deed of legal mortgage was executed by the parties. On 23rd September 2023, Mr. Abraham Adaku instructed Ezra Joseph, Esq. to prepare his will. He died in his sleep on the 2nd of October 2023.",
    
    question: "The following are the documents required to perfect the transaction between Mr. Abraham Adaku and Firebrand Bank Plc except:",
   options: [
      "Application letter for consent",
      "Duly executed deed of mortgage",
      "Duly executed deed of conveyance",
      "Tax clearance certificate of the parties"
    ],
   correctOptions: ["Duly executed deed of conveyance"],
    answeredOptions: [],
    hint: "A deed of conveyance is not required in a mortgage transaction."
  },
  {
    question: "...is not a step in the perfection of the final document executed between Mr. Abraham Adaku and Firebrand Bank Plc:",
   options: [
      "Obtaining the consent of the Governor",
      "Stamping of the deed of mortgage",
      "Registering of the deed of mortgage",
      "Executing the deed of assignment"
    ],
   correctOptions: ["Executing the deed of assignment"],
    answeredOptions: [],
    hint: "The process of perfection involves consent, stamping, and registration."
  },
  {
    question: "The content of the account to be filed by the personal representatives of Mr. Abraham Adaku includes the following except:",
   options: [
      "Full inventory of the assets in the estate",
      "Vouchers in possession of the administrator",
      "All incomes and expenditures incurred in the course of administration",
      "Statutory declaration of beneficiaries"
    ],
   correctOptions: ["Statutory declaration of beneficiaries"],
    answeredOptions: [],
    hint: "A statutory declaration of beneficiaries is not typically part of the account filed by personal representatives."
  },
  {
    question: "The documents that the executors will require to secure the grant of non-contentious probate include the following except:",
   options: [
      "Letter of application",
      "Letter of recommendation",
      "Copy of the will marked by the applicants",
      "Death certificate of Mr. Abraham Adaku"
    ],
   correctOptions: ["Letter of recommendation"],
    answeredOptions: [],
    hint: "A letter of recommendation is not required for a non-contentious probate grant."
  },
  {
    Scenario: "Chief Ama Osiri has a property at No. 3 Gboko Street, Port Harcourt. He had earlier given a power of attorney over the property to one Ike Nnaji, but later sold the property to Mrs. Rosemary Duru of No. 1 Abakpa Lane Mbiama, Rivers State.",
    
    question: "The instrument given to Ike Nnaji has the following features except:",
   options: [
      "It is executed by the donor",
      "It attracts stamp duty ad valorem",
      "It is an instrument of delegation",
      "It requires no special mode of creation except where required by law"
    ],
   correctOptions: ["It attracts stamp duty ad valorem"],
    answeredOptions: [],
    hint: "A power of attorney does not attract ad valorem stamp duty as it is not a final document."
  },
  {
    question: "The sale of the property to Mrs. Rosemary Duru by Chief Ama Osiri amounts to:",
   options: [
      "An express revocation of the power conferred on Ike Nnaji",
      "An implied revocation of the power conferred on Ike Nnaji",
      "Revocation by operation of law of the power conferred on Ike Nnaji",
      "None of the above"
    ],
   correctOptions: ["An implied revocation of the power conferred on Ike Nnaji"],
    answeredOptions: [],
    hint: "When a donor personally exercises the power delegated, it implies revocation of the power of attorney."
  },
  {
    question: "Which of the following is not a clause in the instrument executed in favor of Ike Nnaji?",
   options: [
      "Appointment clause",
      "Charging clause",
      "Commencement clause",
      "Authority clause"
    ],
   correctOptions: ["Charging clause"],
    answeredOptions: [],
    hint: "A power of attorney typically includes an appointment clause, commencement clause, and authority clause, but not a charging clause."
  },
  {
    Scenario: "Chief Ken Kofi owns a storey building at No. 1, Barnawa, Kaduna State, and a warehouse at No. 717, Falana Street, Ado-Ekiti, Ekiti State. He wants a N50 million loan from Mainland Bank Plc, Ado-Ekiti branch, Ekiti State, and is offering his warehouse at No. 717 Falana Street, Ado-Ekiti, Ekiti State, as security.",
    
    question: "Chief Ken and the bank can create a legal mortgage in any of the following ways, except:",
   options: [
      "Demise",
      "Sub-demise",
      "Legal Charge",
      "Statutory charge"
    ],
   correctOptions: ["Demise"],
    answeredOptions: [],
    hint: "Demise is not typically an option for creating a legal mortgage in PCL states like Ekiti."
  },
  {
    question: "If after the creation of the legal mortgage and during the subsistence of the mortgage, Chief Ken obtained an additional facility from the bank using the same property as security, the loan agreement will need to be perfected in one of the following ways:",
   options: [
      "Successive legal mortgage",
      "Up-stamping",
      "Re-registration",
      "Up-stamping and Re-registration"
    ],
   correctOptions: ["Up-stamping"],
    answeredOptions: [],
    hint: "Up-stamping is used when additional funds are secured against the same property during an existing mortgage."
  },
  {
    question: "In perfecting the second facility, one of the following may not be necessary:",
   options: [
      "Registration",
      "Obtaining the Governor's Consent",
      "Stamping",
      "Survey plan of the property"
    ],
   correctOptions: ["Obtaining the Governor's Consent"],
    answeredOptions: [],
    hint: "Governor's consent is not required when up-stamping an existing mortgage."
  },
  {
    question: "After the creation of the legal mortgage, which of the following rights can be exercised by the mortgagor before the legal due date?",
   options: [
      "Right to appoint a receiver",
      "Right of redemption",
      "Right to exercise power of sale",
      "Right to consolidate"
    ],
   correctOptions: ["Right of redemption"],
    answeredOptions: [],
    hint: "The mortgagor has the right to redeem the property before the legal due date."
  },
  {
    question: "The right of the mortgagor to discharge the mortgage after the legal due date is known as:",
   options: [
      "Equitable right to redeem",
      "Equity of redemption",
      "Consolidation",
      "Proviso for redemption"
    ],
   correctOptions: ["Equity of redemption"],
    answeredOptions: [],
    hint: "Equity of redemption is the right to redeem property after the legal due date."
  },
  {
    Scenario: "Chief Ken instructed his friend, Alhaji Bala, to get some boys to clear the grass around his building. He also instructed his lawyer by a duly executed Power of Attorney, to grant the storey building in Ibadan to UPC party for a term of 3 years and execute any relevant documents in relation to the transaction on his behalf.",
    
    question: "The transaction between Chief Ken and UPC Party can be described as one of the following:",
   options: [
      "Sub-lease",
      "Donation of Power",
      "Tenancy",
      "Licence"
    ],
   correctOptions: ["Tenancy"],
    answeredOptions: [],
    hint: "A tenancy agreement typically involves a term of three years or less."
  },
  {
    question: "Which of the following is the correct commencement of the document to be executed by Chief Ken and UPC Party?",
   options: [
      "This Tenancy Agreement",
      "This Deed of Lease",
      "This Deed",
      "By this Power of Attorney"
    ],
   correctOptions: ["This Tenancy Agreement"],
    answeredOptions: [],
    hint: "The appropriate commencement for a tenancy agreement is 'This Tenancy Agreement'."
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
}

export default Index;
