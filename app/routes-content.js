// module.exports = function (router) {
// // START__####################################################################################################
//
// Add content key/value pairs here
module.exports = {
    addressLine1Label: 'Building and street <span class="govuk-visually-hidden">line 1 of 2</span>',
    addressLine2Label: '<span class="govuk-visually-hidden">Building and street line 2 of 2</span>',
    addressPostcodeLabel: 'Postcode',
    addressPostcodeOptionalLabel: 'Postcode (optional)',
    addressQuestion: 'Enter your address',
    britishCitizenQuestion: 'Are you a British citizen or EU national?',
    britishCitizenError: 'Select yes if you are a British citizen or EU national',
    compensationQuestion: 'Have you applied for or received any other form of compensation?',
    compensationHint: 'For example, if you sought civil damages or a court decided you should get compensation.',
    compWho:'Who have you applied to or received compensation from?',
    compDecQuestion:'Have they made a decision?',
    compDecYes:'How much was the award?',
    compDecNo:'When will you find out?',
    compNoHint: 'Briefly explain why not',
    compensationErrorNoradio: 'Select yes if you have applied for or received another form of compensation',
    // compensationErrorWho: 'Enter who you applied to',
    // compensationErrorAmount: 'Enter the amount of compensation you got, or expect to get',
    compensationErrorNoWhynot: 'Explain why you did not apply for or receive any other form of compensation',
    compWhoError: 'Enter who you applied to or received compensation from',
    compDecisionError: 'Select yes if you have received a decision about the other compensation claim',
    compYesError: 'Enter an amount',
    compNoError: 'Enter an approximate date',
    countyLabel: 'County (optional)',
    crimeReferenceNumberHint: 'This is the reference number the police gave the crime when it was reported.',
    crimeReferenceNumberQuestion: 'What\'s the crime reference number?',
    crimeReferenceNumberQuestionCA: 'Crime reference number?',
    crimeReferenceError: 'Enter the crime reference number',
    crimeReportedDateHint: 'For example, 31 3 2018. You can enter an approximate date',
    crimeReportedDateQuestion: 'When was the crime reported to the police?',
    dateOfBirthQuestion: "Enter your date of birth",
    declarationHeading: 'Declaration',
    doYouKnowOffenderQuestion: "Do you know the name of the offender?",
    knowOffenderError: "Select yes if you know the offender's name",
    offenderNameHint: "We will never contact the offender.",
    offenderNameError: "Enter the offender's name",
    emailAddressError: "Enter your email address, for example john.smith@email.com",
    emailAddressErrorSubHeader: "Enter your email address?",
    emailAddressHint: "We'll use this to contact you about your application, for example, to request more information.",
    emailAddressQuestion: "Enter your email address",
    errorBeforeIncident: "Your date of birth must be before the crime happened",
    errorIncompleteMessage: "Enter your date of birth and include a day, month and year",
    errorMessageContent: 'Select Once or Over a period of time',
    errorMessageTitle: 'There is a problem',
    errorPastMessage: "Your date of birth must be in the past",
    errorDobBeforeReported:"Date of birth must be before the date the crime was reported to the police",
    errorDobBeforeStart:"Date of birth must be before the date the crime started",
    errorDobBeforeStop:"Date of birth must be before the date the crime stopped",
    errorBeforeReported: "The date the crime happened must be the same as or before the date it was reported to the police",
    errorIncidentIncomplete: "Enter the date the crime happened and include a day, month and year",
    errorIncidentPast: "The date the crime happened must be in the past",
    errorAbuseStartPast: 'The date the crime started must be in the past',
    errorAbuseStartIncomplete: 'Enter the date the crime started and include a month and year',
    errorAbuseStartBeforeReported: 'The date the crime started must be before the date the crime was reported to the police',
    errorAbuseEndPast: 'The date the crime stopped must be in the past',
    errorAbuseEndIncomplete: 'Enter the date the crime stopped and include a month and year',
    errorAbuseEndBeforeReported: 'The date the crime stopped must be on or before the date the crime was reported to the police',
    errorAbuseEndAfterStarted: 'The date the crime stopped must be after the date the crime started',
    // howMuchCompensationHint: 'You can also tell us if you are still waiting to find out.',
    // howMuchCompensationQuestion: 'How much compensation did you get?',
    gender:'What is your gender?',
    impactHeading: 'Before you continue',
    incidentDateHeading: "When did the crime happen?",
    incidentDateHint: 'For example, 31 3 2018. You can enter an approximate date.',
    incidentReportedQuestion: 'Was the crime reported to the police?',
    incidentReportedError: "Select yes if the crime was reported to the police",
    itemOneValue: 'Once',
    itemTwoValue: 'Over a period of time',
    locationTownQuestion: 'Enter more details about where the crime happened',
    nameErrorNoFirstName: "Enter your first name",
    nameErrorNoLastName: "Enter your last name",
    nameErrorNoTitle: "Enter your title",
    nameOtherError: "Select yes if you have been known by any other names",
    nameOtherQuestion: 'Have you ever been known by any other names?',
    nameOtherWhatQuestion: "What other names have you used?",
    otherNameWhatError: "Enter the other names you have used",
    nameQuestion: 'Enter your name',
    nameTitleField: 'Title',
    nameFirstNameField: 'First name',
    nameLastNameField: 'Last name',
    offenderNameQuestion: 'Enter their name',
    offenderNameQuestionCA: 'Offender\'s  name',
    ongoingRelationshipQuestion: "Have you have any contact with this person since the incident?",
    ongoingRelationshipHint: "We will not pay compensation if the offender could benefit from it.",
    over18Question: 'Are you 18 or over?',
    over18errorGuidance: 'Select yes if you are over 18',
    periodOfAbuseEndQuestion: 'When did it stop?',
    periodOfAbuseHint: 'For example, 03 2018. You can enter an approximate date.',
    periodOfAbuseStartQuestion: 'When did it start?',
    phoneNumberHint: "We may use this to contact you if we need to clarify something on your application form.",
    phoneNumberQuestion: "Enter your telephone number",
    phoneNumberError: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192',
    policeForceHint: "Enter the police force name, for example, Humberside police.",
    policeForceQuestion: 'What police force is investigating the crime?',
    policeForceManualQuestion: 'What force was the crime reported to?',
    previousApplicationsQuestion: 'Have you applied to us before?',
    previousReferenceHint: 'Enter your previous reference number if you know it (optional)',
    previousApplicationError: 'Select yes if you have applied to us before',
    reportingDelayQuestion: "Select reasons for the delay in reporting the crime to the police",
    reportingDelayErrorCheckboxes: 'Select if you were under 18, unable to report the crime or other reasons',
    reportingDelayErrorExplain: 'Explain the reasons for the delay in reporting the crime to the police',
    delayReportExplanation: 'Briefly explain these reasons',
    selectAddressLable: 'Select an address',
    sexualAbuseQuestion: 'Were you a victim of sexual assault or abuse?',
    sexualAbuseError: 'Select yes if you were a victim of sexual assault or abuse',
    singleOrMultipleIncidentsQuestion: 'Did the crime happen once or over a period of time?',
    townOrCityLabel: 'Town or city',
    transitionHeading: 'We are still working on this part of the service',
    warningText: "If you deliberately give false or misleading information, you may get less compensation or be prosecuted.",
    whatIsRelationshipQuestion: "If you have contact with the offender, describe it below",
    whatIsRelationshipError: "Enter details of any contact you have with the offender",
    whatIsRelationshipCheckboxError: "Select the checkbox if you have no contact with the offender",
    offenderContactHint: "We will not pay compensation if the offender may benefit from it.",
    whatCompensationQuestion: 'Other compensation',
    whoIsMakingTheApplicationQuestion: 'Who are you applying for?',
    whoIsMakingTheApplicationError: 'Select Myself if you are the person applying for compensation',
    whyDelayQuestion: 'Select reasons for the delay in making your application',
    delayApplyExplanation: 'Briefly explain these reasons',
    whyDelayErrorCheckboxes: 'Select if you were under 18, advised to wait, medical reasons or other reasons',
    whyDelayErrorExplain: 'Explain the reasons for the delay in making your application',
    reportedDateErrorPast: 'The date the crime was reported to the police must be in the past',
    reportedDateIncompleteError: 'Enter the date the crime was reported to the police and include a day, month and year',
    reportedDateErrorBlank: 'Enter the date the crime was reported to the police',
    yourChoicesHeading: 'Select the option that applies to you',
    yourChoicesError: 'Select either Option 1 or Option 2',
    notEligibleHeading: 'You cannot get compensation',
    manualAddressErrorBuildingStreetBlank: 'Enter the building and street where you live',
    manualAddressErrorTownCityBlank: 'Enter the town or city where you live',
    manualAddressErrorPostcode: 'Enter a postcode, like AA1 1AA',

    //Location and Police Force Questions //
    incidentLocationHeading: "Where did the crime happen?",
    incidentLocationReveal: "Enter the town or location",
    incidentLocationRevealOther: "Enter the location",
    englandLocationQuestion: 'Where in England did it happen?',
    englandForceQuestion: 'Which English police force is investigating the crime?',
    scotlandLocationQuestion: 'Where in Scotland did it happen?',
    scotlandForceQuestion: 'Which Police Scotland division is investigating the crime?',
    walesLocationQuestion: 'Where in Wales did it happen?',
    walesForceQuestion: 'Which Welsh police force is investigating the crime?',
    somewhereElseHeading: 'You need to contact us',
    locationLabel: "Location",
    locationHint: "For example, the name of a street, business, building or nearby local landmark. You can enter more than one.",
    incidentLocationError: "Select England, Scotland, Wales or Somewhere else",
    townError:"Enter the town or city where the crime happened",
    detailedLocationError:"Enter the name of a street, business, building or nearby local landmark",
    englandForcesError:"Select a police force from the list",
    scotlandForcesError:"Select a Police Scotland division",
    walesForcesError:"Select a police force",

    // Timeout Screen //
    timedoutHeading:'You have timed out',

    // SRR Prototype //
    preferredDays:'Which days would be best for us to call you?',
    preferredTimes:'Which times of the day are best for us to call you?',

    // Minor journey //
    minorSexualAssaultQuestion:'Is your claim about sexual assault or abuse?',
    minorIncidentReportedQuestion:'Was the crime reported to the police?',
    minorVictimNameTitleField: 'Title',
    minorVictimNameFirstNameField: 'First name',
    minorVictimNameLastNameField: 'Last name',
    minorWhoIsMakingTheApplicationQuestion:'Who are you applying for?',
    minorVictimRelationshipQuestion:'Are you a parent applying for your child?',
    minorDateOfBirthQuestion:'What is your child\'s date of birth?',
    minorBritishCitizenQuestion:'Is your child a British or EU National?',
    minorImpactHeading:'Before you continue',
    minorChoicesHeading:'Select the option that applies to your child',
    minorVictimNameQuestion:'What is your child\'s name?',
    minorVictimNameOtherQuestion:'Has your child been known by any other names?',
    minorVictimNameOtherWhatQuestion:'What other names has your child had?',
    minorCareOrderQuestion:'Does your child have a care order or supervision order?',
    minorCareOrderHint:'This includes an interim care order.',
    minorCareOrderDetailsQuestion:'Which local authority has a care order or supervision order?',
    minorYourNameQuestion:'What is your name?',
    minorAuthorityToApplyHeading:'Authority to apply',
    minorVictimAddressQuestion:'What is the child\'s address?',
    minorParentAddressQuestion:'What is your address?',
    minorTransitionOver18Heading: 'You cannot use this service to apply for someone over 18',
    minorAlsoChildAddressQuestion: 'Is this also the child\'s address?',
    minorChildAddressQuestion: 'What is your child\'s address?',
    minorWhatIsRelationshipQuestion: "If your child has contact with the offender, describe it below",
    minorPreviousApplicationsQuestion: 'Has anyone applied to us before for your child?',
    minorPreviousReferenceHint: 'Enter the previous reference number if you know it (optional)',
    minorCompensationQuestion: 'Has another organisation decided if your child should get compensation?',
    minorCompensationHint: 'For example, civil damages or a court deciding your child should get compensation.',
    minorCompWho:'Who has decided if your child should get compensation?',
    minorWhyDelayQuestion:'Select reasons for the delay in making your application',

    minorProofEligibilityUploadNowQuestion:'Do you want to upload your documents now?',
    minorProofEligibilityNamesQuestion:'Have the names on the certificate changed?',
    minorwhatCompensationQuestion: 'Other compensation',
    minorDoYouKnowOffenderQuestion: "Do you know the offenders\' names?",
    minorOffenderNameQuestion: 'Enter the offenders\' names',
    minorOffenderNameHint: "We will never contact the offenders.",
    minorCompDecYes:'How much did they say your child should get?',

    // Mental injuries questions //
    mentalHealthQuestion:'Has the crime affected your mental health a lot?',
    mentalHealthQuestionHint:'For example, if it has stopped you going to work, seeing friends, or being in a relationship.',
    mentalHealthDurationQuestion:'Has your mental health been affected like this for over 6 weeks?',
    mentalHealthDiagnosisQuestion:'Have you been diagnosed with a mental health condition since the crime?',
    mentalHealthDiagnosisQuestionHint:'We may ask a clinical psychologist to look at your medical records if you’ve not been diagnosed yet. ',

    // SMS confirmation questions //
    smsMobileQuestion:'What is your mobile number?',
    smsMobileNumberHint: "We'll send you a text message when we've received your application.",
    smsDoYouHaveEmailQuestion: "Do you have an email address?",
      smsDoYouHaveEmailQuestionHint: "We'll use this to tell you we've received your application.",


};
// // END__######################################################################################################
// }
