export type Language = 'hi' | 'en';

export interface Translations {
  // Product Page
  product: {
    storeName: string;
    verifiedDealer: string;
    zeroEmi: string;
    productName: string;
    currentPrice: string;
    originalPrice: string;
    subsidyText: string;
    priceGuarantee: string;
    priceComparison: string;
    bestDeal: string;
    amazonPrice: string;
    flipkartPrice: string;
    hereLabel: string;
    ourPrice: string;
    securePayment: string;
    insuredDelivery: string;
    easyReturns: string;
    viewPaymentOptions: string;
  };
  // Login Page
  login: {
    title: string;
    welcomeText: string;
    subtitle: string;
    phoneLabel: string;
    phonePlaceholder: string;
    sendOtp: string;
    verifyTitle: string;
    otpSubtitle: string;
    otpPlaceholder: string;
    resendOtp: string;
    verifyLogin: string;
  };
  // ID Scan Page
  idScan: {
    title: string;
    scanningTitle: string;
    instruction: string;
    placeHere: string;
    goodLighting: string;
    keepStraight: string;
    notBlurry: string;
    uploadGallery: string;
    verifyingIdentity: string;
  };
  // Details Confirmation Page
  detailsConfirmation: {
    title: string;
    extractedInfo: string;
    voiceAssistant: string;
    scanSuccess: string;
    detailsFilled: string;
    verifiedInfo: string;
    name: string;
    dob: string;
    address: string;
    aadhar: string;
    verified: string;
    changeInfo: string;
    scan: string;
    check: string;
    complete: string;
    yesCorrect: string;
  };
  // Verify Identity Page
  verifyIdentity: {
    title: string;
    pageTitle: string;
    pageSubtitle: string;
    takePhoto: string;
    cameraDescription: string;
    uploadGallery: string;
    galleryDescription: string;
    openCamera: string;
    chooseFile: string;
    secureEncrypted: string;
    scanDocument: string;
    scanning: string;
    scanSuccess: string;
    successSubtitle: string;
    extractedDetails: string;
    scanAgain: string;
    continue: string;
    autoFilled: string;
  };
  // KYC Page
  kyc: {
    title: string;
    personalDetails: string;
    personalDetailsSubtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    panNumber: string;
    panPlaceholder: string;
    age: string;
    agePlaceholder: string;
    gender: string;
    male: string;
    female: string;
    other: string;
    infoText: string;
    saveContinue: string;
  };
  // Bureau Consent Page
  bureauConsent: {
    title: string;
    shieldTitle: string;
    shieldDescription: string;
    bankSecurity: string;
    rbiRegulated: string;
    consentText: string;
    verifyProfile: string;
    securityNote: string;
  };
  // Scan Product Page
  scanProduct: {
    title: string;
    cameraInstruction: string;
    autoScan: string;
    gallery: string;
    flash: string;
    productScanned: string;
    productName: string;
    productDetails: string;
    emiStarting: string;
    findLenders: string;
    scanAgain: string;
  };
  // Eligible Lenders Page
  eligibleLenders: {
    title: string;
    verifiedOffers: string;
    heroTitle: string;
    successTitle: string;
    successSubtitle: string;
    headlineTitle: string;
    headlineSubtitle: string;
    limitUpTo: string;
    interestRate: string;
    processingFee: string;
    bestFor: string;
    select: string;
    selected: string;
    continueWithPlan: string;
    help: string;
  };
  // Offer Details Page
  offerDetails: {
    title: string;
    greatNews: string;
    approvedAmount: string;
    verifiedLender: string;
    selected: string;
    monthlyEmi: string;
    tenure: string;
    interestRate: string;
    processingFeeLabel: string;
    gstLabel: string;
    totalRepayment: string;
    consentText: string;
    viewOtherOffers: string;
    confirmProceed: string;
  };
  // Loan Agreement Page
  loanAgreement: {
    title: string;
    reviewTitle: string;
    reviewSubtitle: string;
    loanAmount: string;
    repayment: string;
    termsConditions: string;
    earlyRepayment: string;
    agreementText: string;
    signAgreement: string;
    securityText: string;
  };
  // Security Verification Page
  securityVerification: {
    title: string;
    verifyTitle: string;
    description: string;
    otpPlaceholder: string;
    resendCode: string;
    verifyFinalize: string;
    disclaimer: string;
  };
  // Success Page
  success: {
    title: string;
    paymentSuccess: string;
    fundsTransfer: string;
    loanAmount: string;
    firstEmiDate: string;
    goToDashboard: string;
    downloadReceipt: string;
  };
  // EMI Selection Page
  emiSelection: {
    title: string;
    trustedLender: string;
    verified: string;
    offerText: string;
    approvalConfirmed: string;
    listen: string;
    bestPlan: string;
    recommended: string;
    month: string;
    months: string;
    zeroInterest: string;
    interest: string;
    extraDiscount: string;
    securityText: string;
    home: string;
    offers: string;
    loan: string;
    profile: string;
  };
  // Payment Summary Page
  paymentSummary: {
    title: string;
    schedule: string;
    now: string;
    immediate: string;
    nextMonth: string;
    emiStart: string;
    productSummary: string;
    productName: string;
    viewDetails: string;
    priceDetails: string;
    itemPrice: string;
    lenderDiscount: string;
    totalPayable: string;
    securedBy: string;
  };
  // PIN Entry Page
  pinEntry: {
    title: string;
    totalAmount: string;
    enterOtp: string;
    otpSubtitle: string;
    signAndPay: string;
    securePayment: string;
  };
  // Payment Success Page
  paymentSuccess: {
    title: string;
    paymentSuccess: string;
    paidTo: string;
    congratulations: string;
    orderId: string;
    date: string;
    paymentMethod: string;
    transactionId: string;
    viewOrderDetails: string;
    goHome: string;
  };
  // Common
  common: {
    back: string;
    close: string;
    continue: string;
    next: string;
    edit: string;
    save: string;
    hindi: string;
    english: string;
    language: string;
  };
}

const translations: Record<Language, Translations> = {
  hi: {
    product: {
      storeName: "राहुल फर्नीचर",
      verifiedDealer: "Verified Nilkamal Dealer, Hubli",
      zeroEmi: "0% अतिरिक्त लागत ईएमआई",
      productName: "अल्फा क्वीन साइज टीक बेड",
      currentPrice: "₹20,000",
      originalPrice: "₹23,500",
      subsidyText: "ब्रांड सबवेंशन लागू: आप ₹3,500 बचाते हैं!",
      priceGuarantee: "भारत की सबसे कम कीमत की गारंटी",
      priceComparison: "कीमत की तुलना",
      bestDeal: "सबसे अच्छी डील सुरक्षित!",
      amazonPrice: "₹22,800",
      flipkartPrice: "₹22,500",
      hereLabel: "यहाँ (स्मार्ट स्कैन)",
      ourPrice: "₹20,000",
      securePayment: "सुरक्षित भुगतान",
      insuredDelivery: "बीमित डिलीवरी",
      easyReturns: "आसान रिटर्न",
      viewPaymentOptions: "भुगतान विकल्प देखें (अगला)",
    },
    login: {
      title: "लॉगिन",
      welcomeText: "टीकवुड फर्नीचर में आपका स्वागत है",
      subtitle: "तत्काल EMI अनुमोदन प्राप्त करें और आज ही अपने सपनों का फर्नीचर खरीदें।",
      phoneLabel: "फोन नंबर",
      phonePlaceholder: "अपना फोन नंबर दर्ज करें",
      sendOtp: "OTP भेजें",
      verifyTitle: "फोन सत्यापित करें",
      otpSubtitle: "+91 {phone} पर भेजा गया 6-अंकीय कोड दर्ज करें",
      otpPlaceholder: "OTP दर्ज करें",
      resendOtp: "OTP पुनः भेजें",
      verifyLogin: "सत्यापित करें और लॉगिन करें",
    },
    verifyIdentity: {
      title: "पहचान सत्यापित करें",
      pageTitle: "आइए आपकी पहचान सत्यापित करें",
      pageSubtitle: "तेज़ प्रोसेसिंग और सुरक्षित सत्यापन के लिए कृपया अपना आधार कार्ड अपलोड करें। यह हमें सुरक्षित खरीदारी अनुभव सुनिश्चित करने में मदद करता है।",
      takePhoto: "फोटो खींचें",
      cameraDescription: "अपने दस्तावेज़ को रियल-टाइम में स्कैन करने के लिए अपने कैमरे का उपयोग करें",
      uploadGallery: "गैलरी से अपलोड करें",
      galleryDescription: "अपने डिवाइस स्टोरेज से एक मौजूदा फोटो या PDF चुनें",
      openCamera: "कैमरा खोलें",
      chooseFile: "फ़ाइल चुनें",
      secureEncrypted: "सुरक्षित और एन्क्रिप्टेड",
      scanDocument: "दस्तावेज़ स्कैन करें",
      scanning: "दस्तावेज़ स्कैन हो रहा है...",
      scanSuccess: "दस्तावेज़ स्कैन हो गया!",
      successSubtitle: "आपके आधार विवरण सफलतापूर्वक निकाले गए हैं।",
      extractedDetails: "निकाले गए विवरण",
      scanAgain: "फिर से स्कैन करें",
      continue: "जारी रखें",
      autoFilled: "स्कैन किए गए दस्तावेज़ से स्वतः भरा गया",
    },
    kyc: {
      title: "KYC सत्यापन",
      personalDetails: "व्यक्तिगत विवरण",
      personalDetailsSubtitle: "कृपया आधिकारिक दस्तावेजों के अनुसार अपने विवरण प्रदान करें।",
      fullName: "पूरा नाम (PAN के अनुसार)",
      fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
      panNumber: "PAN नंबर",
      panPlaceholder: "ABCDE1234F",
      age: "उम्र",
      agePlaceholder: "अपनी उम्र दर्ज करें",
      gender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      infoText: "हम इस डेटा का उपयोग केवल सरकार-अनुमोदित चैनलों के माध्यम से पहचान सत्यापन के लिए करते हैं। आपका डेटा एन्क्रिप्टेड और सुरक्षित है।",
      saveContinue: "सहेजें और जारी रखें",
    },
    bureauConsent: {
      title: "सत्यापन",
      shieldTitle: "अपनी प्रोफाइल सुरक्षित करें",
      shieldDescription: "हमें आपके ग्राहकों के लिए सर्वश्रेष्ठ उधारदाताओं को अनलॉक करने के लिए आपके क्रेडिट इतिहास की जांच करने की आवश्यकता है। यह हमें आपके व्यवसाय के लिए उच्चतम अनुमोदन दर सुनिश्चित करने में मदद करता है।",
      bankSecurity: "बैंक-ग्रेड सुरक्षा",
      rbiRegulated: "RBI विनियमित भागीदार",
      consentText: "मैं व्यावसायिक सत्यापन उद्देश्यों के लिए अपनी क्रेडिट ब्यूरो प्रोफाइल प्राप्त करने के लिए अपनी सहमति देता हूं। मुझे समझ है कि इससे मेरे व्यक्तिगत क्रेडिट स्कोर पर कोई प्रभाव नहीं पड़ेगा।",
      verifyProfile: "प्रोफाइल सत्यापित करें",
      securityNote: "100% सुरक्षित और गोपनीय",
    },
    scanProduct: {
      title: "स्कैन",
      cameraInstruction: "अपने कैमरे को फर्नीचर की ओर करें",
      autoScan: "स्कैन स्वचालित रूप से शुरू हो जाएगा",
      gallery: "गैलरी",
      flash: "फ्लैश",
      productScanned: "उत्पाद स्कैन किया गया!",
      productName: "प्रीमियम वेलवेट सोफा",
      productDetails: "टीकवुड फर्नीचर",
      emiStarting: "EMI शुरू से",
      findLenders: "उधारदाता खोजें",
      scanAgain: "दूसरा उत्पाद स्कैन करें",
    },
    eligibleLenders: {
      title: "चेकआउट",
      verifiedOffers: "सत्यापित ऑफर",
      heroTitle: "आपका नया सोफा सिर्फ एक कदम दूर है",
      successTitle: "सफलता!",
      successSubtitle: "आपका क्रेडिट प्रोफाइल हमारे भागीदारों से मेल खाता है।",
      headlineTitle: "बढ़िया खबर! आपने अपने सोफे के लिए ये उधारदाता अनलॉक कर लिए हैं",
      headlineSubtitle: "जारी रखने के लिए अपने पसंदीदा फाइनेंसिंग भागीदार का चयन करें",
      limitUpTo: "सीमा तक",
      interestRate: "ब्याज दर",
      processingFee: "प्रसंस्करण शुल्क",
      bestFor: "के लिए सर्वश्रेष्ठ",
      select: "चुनें",
      selected: "चयनित",
      continueWithPlan: "चयनित योजना के साथ जारी रखें",
      help: "सहायता",
    },
    offerDetails: {
      title: "ऋण विवरण",
      greatNews: "बढ़िया खबर!",
      approvedAmount: "हमारे भागीदार द्वारा ₹50,000 के लिए आपका आवेदन स्वीकृत हो गया है।",
      verifiedLender: "सत्यापित उधारदाता",
      selected: "चयनित",
      monthlyEmi: "मासिक किस्त (EMI)",
      tenure: "अवधि",
      interestRate: "ब्याज दर",
      processingFeeLabel: "प्रसंस्करण शुल्क (2%)",
      gstLabel: "प्रसंस्करण शुल्क पर GST",
      totalRepayment: "कुल चुकौती",
      consentText: "आगे बढ़ने पर, आप उधारदाता के डिजिटल ऋण समझौते और ऑटो-डेबिट (eNACH/मैंडेट) के लिए अधिकृत करने से सहमत होते हैं।",
      viewOtherOffers: "अन्य ऑफर देखें",
      confirmProceed: "पुष्टि करें और आगे बढ़ें",
    },
    loanAgreement: {
      title: "ऋण समझौता",
      reviewTitle: "अपना समझौता समीक्षा करें",
      reviewSubtitle: "कृपया अपने हस्ताक्षर के साथ आगे बढ़ने से पहले निम्नलिखित नियम और शर्तें ध्यान से पढ़ें।",
      loanAmount: "ऋण राशि और ब्याज",
      repayment: "चुकौती अनुसूची",
      termsConditions: "नियम और शर्तें",
      earlyRepayment: "समय से पहले चुकौती",
      agreementText: "मैं पुष्टि करता हूं कि मैंने ऋण समझौता और गोपनीयता नीति को पढ़ लिया है और उससे सहमत हूं।",
      signAgreement: "समझौते पर हस्ताक्षर करें",
      securityText: "256-बिट SSL के साथ सुरक्षित रूप से एन्क्रिप्टेड",
    },
    securityVerification: {
      title: "अंतिम चरण",
      verifyTitle: "सत्यापित करें और अंतिम रूप दें",
      description: "कृपया अपने पंजीकृत फोन नंबर •••• •••• 82 पर भेजा गया 6-अंकीय सत्यापन कोड दर्ज करें",
      otpPlaceholder: "6-अंकीय कोड दर्ज करें",
      resendCode: "कोड पुनः भेजें",
      verifyFinalize: "सत्यापित करें और अंतिम रूप दें",
      disclaimer: "सत्यापित करने पर क्लिक करके, आप हमारी सेवा की शर्तों और इलेक्ट्रॉनिक हस्ताक्षर प्रकटीकरण से सहमत होते हैं।",
    },
    success: {
      title: "सफलता",
      paymentSuccess: "भुगतान सफल!",
      fundsTransfer: "राशि जल्द ही व्यापारी के खाते में स्थानांतरित कर दी जाएगी।",
      loanAmount: "ऋण राशि",
      firstEmiDate: "पहली EMI तिथि",
      goToDashboard: "डैशबोर्ड पर जाएं",
      downloadReceipt: "रसीद डाउनलोड करें",
    },
    idScan: {
      title: "पहचान स्कैन करें",
      scanningTitle: "अपनी पहचान कन्फर्म करें",
      instruction: "अपने ID कार्ड की साफ़ फोटो खींचें ताकि डिटेल्स अपने आप भर जाएं।",
      placeHere: "Place ID card here",
      goodLighting: "साफ़ रोशनी में रखें",
      keepStraight: "कार्ड को सीधा रखें",
      notBlurry: "फोटो धुंधली न हो",
      uploadGallery: "गैलरी से अपलोड करें",
      verifyingIdentity: "पहचान वेरीफाई हो रही है...",
    },
    detailsConfirmation: {
      title: "अपनी जानकारी चेक करें",
      extractedInfo: "हमने आपकी आईडी से ये जानकारी ली है। क्या यह सही है?",
      voiceAssistant: "वॉयस असिस्टेंट",
      scanSuccess: "आईडी स्कैन सफल!",
      detailsFilled: "आपकी जानकारी सफलतापूर्वक भर दी गई है",
      verifiedInfo: "सत्यापित जानकारी",
      name: "नाम",
      dob: "जन्म तिथि",
      address: "पता",
      aadhar: "आधार नंबर",
      verified: "Verified",
      changeInfo: "जानकारी बदलें",
      scan: "स्कैन",
      check: "चेक",
      complete: "समाप्त",
      yesCorrect: "हाँ, यह सही है (आगे बढ़ें)",
    },
    emiSelection: {
      title: "अपना मंथली पेमेंट चुनें",
      trustedLender: "आपका भरोसेमंद लेंडर",
      verified: "Verified",
      offerText: "₹20,000 बेड के लिए हमारे बेस्ट ऑफर्स देखें।",
      approvalConfirmed: "आपका अप्रूवल कन्फर्म है। सबसे आसान ऑप्शन चुनें।",
      listen: "सुनें",
      bestPlan: "आपके लिए बेस्ट ईएमआई प्लान",
      recommended: "अनुशंसित",
      month: "महीने",
      months: "महीने",
      zeroInterest: "0% ब्याज (EMI)",
      interest: "ब्याज",
      extraDiscount: "एक्स्ट्रा डिस्काउंट",
      securityText: "DMI Finance के साथ आपकी ईएमआई पूरी तरह सुरक्षित है। कोई छुपा हुआ शुल्क नहीं।",
      home: "होम",
      offers: "ऑफ़र",
      loan: "लोन",
      profile: "प्रोफ़ाइल",
    },
    paymentSummary: {
      title: "भुगतान सारांश",
      schedule: "भुगतान अनुसूची",
      now: "अभी",
      immediate: "तुरंत भुगतान",
      nextMonth: "अगले महीने",
      emiStart: "EMI शुरू होगी",
      productSummary: "प्रोडक्ट सारांश",
      productName: "Alpha Bed",
      viewDetails: "विवरण देखें",
      priceDetails: "कीमत का विवरण",
      itemPrice: "आइटम की कीमत",
      lenderDiscount: "लेंडर डिस्काउंट",
      totalPayable: "कुल देय राशि",
      securedBy: "फिनटेक द्वारा सुरक्षित एन्क्रिप्शन",
    },
    pinEntry: {
      title: "भुगतान",
      totalAmount: "कुल राशि",
      enterOtp: "OTP दर्ज करें",
      otpSubtitle: "अपने पंजीकृत मोबाइल नंबर पर भेजा गया 6-अंकीय OTP",
      signAndPay: "साइन और ₹18,800 का भुगतान करें",
      securePayment: "100% सुरक्षित भुगतान",
    },
    paymentSuccess: {
      title: "भुगतान",
      paymentSuccess: "भुगतान सफल रहा!",
      paidTo: "{merchant} को ₹{amount} का भुगतान हो गया है",
      congratulations: "बधाई हो! आपका ऑर्डर कन्फर्म हो गया है।",
      orderId: "ऑर्डर आईडी",
      date: "तारीख",
      paymentMethod: "भुगतान का तरीका",
      transactionId: "ट्रांजैक्शन आईडी",
      viewOrderDetails: "ऑर्डर विवरण देखें",
      goHome: "होम पर जाएं",
    },
    common: {
      back: "वापस",
      close: "बंद करें",
      continue: "जारी रखें",
      next: "अगला",
      edit: "एडिट",
      save: "सहेजें",
      hindi: "हिंदी",
      english: "English",
      language: "भाषा",
    },
  },
  en: {
    welcome: {
      storeName: "Teakwood's Furniture",
      heroTitle: "Buy your dream sofa with easy EMI plans",
      heroSubtitle: "Fast, secure, and hassle-free financing in minutes.",
      instantApproval: "Instant Approval",
      instantApprovalDesc: "Get a decision in under 60 seconds.",
      securePayments: "Secure Payments",
      securePaymentsDesc: "Bank-level encryption for your peace of mind.",
      getStarted: "Get Started",
      termsText: "By continuing, you agree to our Terms of Service and Privacy Policy. Credit subject to status and eligibility.",
    },
    login: {
      title: "Login",
      welcomeText: "Welcome to Teakwood's Furniture",
      subtitle: "Get instant EMI approval and buy your dream furniture today.",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      sendOtp: "Send OTP",
      verifyTitle: "Verify Phone",
      otpSubtitle: "Enter the 6-digit code sent to +91 {phone}",
      otpPlaceholder: "Enter OTP",
      resendOtp: "Resend OTP",
      verifyLogin: "Verify & Login",
    },
    verifyIdentity: {
      title: "Verify Identity",
      pageTitle: "Let's verify your identity",
      pageSubtitle: "Please upload your Aadhaar card for faster processing and secure verification. This helps us ensure a safe shopping experience.",
      takePhoto: "Take a Photo",
      cameraDescription: "Use your camera to scan your document in real-time",
      uploadGallery: "Upload from Gallery",
      galleryDescription: "Select an existing photo or PDF from your device storage",
      openCamera: "Open Camera",
      chooseFile: "Choose File",
      secureEncrypted: "Secure & Encrypted",
      scanDocument: "Scan Document",
      scanning: "Scanning document...",
      scanSuccess: "Document Scanned!",
      successSubtitle: "Your Aadhaar details have been extracted successfully.",
      extractedDetails: "Extracted Details",
      scanAgain: "Scan Again",
      continue: "Continue",
      autoFilled: "Auto-filled from scanned document",
    },
    kyc: {
      title: "KYC Verification",
      personalDetails: "Personal Details",
      personalDetailsSubtitle: "Please provide your details as per official documents.",
      fullName: "Full Name (as per PAN)",
      fullNamePlaceholder: "Enter your full name",
      panNumber: "PAN Number",
      panPlaceholder: "ABCDE1234F",
      age: "Age",
      agePlaceholder: "Enter your age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      infoText: "We use this data only for identity verification through government-approved channels. Your data is encrypted and secure.",
      saveContinue: "Save & Continue",
    },
    bureauConsent: {
      title: "Verification",
      shieldTitle: "Secure Your Profile",
      shieldDescription: "We need to check your credit history to unlock the best lenders for your customers. This helps us ensure the highest approval rates for your business.",
      bankSecurity: "Bank-grade Security",
      rbiRegulated: "RBI Regulated Partners",
      consentText: "I provide my consent to fetch my credit bureau profile for business verification purposes. I understand this will not impact my personal credit score.",
      verifyProfile: "Verify Profile",
      securityNote: "100% Secure & Confidential",
    },
    scanProduct: {
      title: "Scan",
      cameraInstruction: "Point your camera at the furniture",
      autoScan: "The scan will start automatically",
      gallery: "Gallery",
      flash: "Flash",
      productScanned: "Product Scanned!",
      productName: "Premium Velvet Sofa",
      productDetails: "Teakwood Furniture",
      emiStarting: "EMI Starting from",
      findLenders: "Find Lenders",
      scanAgain: "Scan Another Product",
    },
    eligibleLenders: {
      title: "Checkout",
      verifiedOffers: "Verified Offers",
      heroTitle: "Your New Sofa is Just a Step Away",
      successTitle: "Success!",
      successSubtitle: "Your credit profile matches our partners.",
      headlineTitle: "Great news! You have unlocked these lenders for your Sofa",
      headlineSubtitle: "Select your preferred financing partner to continue",
      limitUpTo: "Limit Up To",
      interestRate: "Interest Rate",
      processingFee: "Processing Fee",
      bestFor: "Best For",
      select: "Select",
      selected: "Selected",
      continueWithPlan: "Continue with Selected Plan",
      help: "Help",
    },
    offerDetails: {
      title: "Loan Details",
      greatNews: "Great news!",
      approvedAmount: "Your application for ₹50,000 has been approved by our partner.",
      verifiedLender: "Verified Lender",
      selected: "SELECTED",
      monthlyEmi: "Monthly Installment (EMI)",
      tenure: "Tenure",
      interestRate: "Interest Rate",
      processingFeeLabel: "Processing Fee (2%)",
      gstLabel: "GST on Processing Fee",
      totalRepayment: "Total Repayment",
      consentText: "By proceeding, you agree to the lender's digital loan agreement and authorization for auto-debit (eNACH/Mandate).",
      viewOtherOffers: "View other offers",
      confirmProceed: "Confirm & Proceed",
    },
    loanAgreement: {
      title: "Loan Agreement",
      reviewTitle: "Review your agreement",
      reviewSubtitle: "Please read the following terms and conditions carefully before proceeding with your signature.",
      loanAmount: "Loan Amount & Interest",
      repayment: "Repayment Schedule",
      termsConditions: "Terms & Conditions",
      earlyRepayment: "Early Repayment",
      agreementText: "I confirm that I have read and agree to the Loan Agreement and Privacy Policy.",
      signAgreement: "Sign Agreement",
      securityText: "Securely encrypted with 256-bit SSL",
    },
    securityVerification: {
      title: "Final Step",
      verifyTitle: "Verify & Finalize",
      description: "Please enter the 6-digit verification code sent to your registered phone number •••• •••• 82",
      otpPlaceholder: "Enter 6-digit code",
      resendCode: "Resend Code",
      verifyFinalize: "Verify & Finalize",
      disclaimer: "By clicking verify, you agree to our Terms of Service and electronic signature disclosure.",
    },
    success: {
      title: "Success",
      paymentSuccess: "Payment Successful!",
      fundsTransfer: "Funds will be transferred to merchant's account shortly.",
      loanAmount: "Loan Amount",
      firstEmiDate: "First EMI Date",
      goToDashboard: "Go to Dashboard",
      downloadReceipt: "Download Receipt",
    },
    product: {
      storeName: "Rahul Furniture",
      verifiedDealer: "Verified Nilkamal Dealer, Hubli",
      zeroEmi: "0% Additional Cost EMI",
      productName: "Alpha Queen Size Teak Bed",
      currentPrice: "₹20,000",
      originalPrice: "₹23,500",
      subsidyText: "Brand Subsidy Applied: You save ₹3,500!",
      priceGuarantee: "India's Lowest Price Guarantee",
      priceComparison: "Price Comparison",
      bestDeal: "Secure the Best Deal!",
      amazonPrice: "₹22,800",
      flipkartPrice: "₹22,500",
      hereLabel: "Here (Smart Scan)",
      ourPrice: "₹20,000",
      securePayment: "Secure Payment",
      insuredDelivery: "Insured Delivery",
      easyReturns: "Easy Returns",
      viewPaymentOptions: "View Payment Options (Next)",
    },
    idScan: {
      title: "Scan ID",
      scanningTitle: "Verify Identity",
      instruction: "Take a clear photo of your ID card so details are auto-filled.",
      placeHere: "Place ID card here",
      goodLighting: "Keep in good light",
      keepStraight: "Keep card straight",
      notBlurry: "Photo should not be blurry",
      uploadGallery: "Upload from Gallery",
      verifyingIdentity: "Verifying identity...",
    },
    detailsConfirmation: {
      title: "Check Your Details",
      extractedInfo: "We have extracted this information from your ID. Is this correct?",
      voiceAssistant: "Voice Assistant",
      scanSuccess: "ID Scan Successful!",
      detailsFilled: "Your details have been successfully filled",
      verifiedInfo: "Verified Information",
      name: "Name",
      dob: "Date of Birth",
      address: "Address",
      aadhar: "Aadhar Number",
      verified: "Verified",
      changeInfo: "Change Information",
      scan: "Scan",
      check: "Check",
      complete: "Complete",
      yesCorrect: "Yes, this is correct (Continue)",
    },
    emiSelection: {
      title: "Choose Your Monthly Payment",
      trustedLender: "Your Trusted Lender",
      verified: "Verified",
      offerText: "See our best offers for ₹20,000 bed.",
      approvalConfirmed: "Your approval is confirmed. Choose the easiest option.",
      listen: "Listen",
      bestPlan: "Best EMI Plan for You",
      recommended: "Recommended",
      month: "month",
      months: "months",
      zeroInterest: "0% Interest (EMI)",
      interest: "Interest",
      extraDiscount: "Extra Discount",
      securityText: "Your EMI is fully secured with DMI Finance. No hidden charges.",
      home: "Home",
      offers: "Offers",
      loan: "Loan",
      profile: "Profile",
    },
    paymentSummary: {
      title: "Payment Summary",
      schedule: "Payment Schedule",
      now: "Now: ₹0",
      immediate: "Immediate Payment",
      nextMonth: "Next Month",
      emiStart: "EMI will start",
      productSummary: "Product Summary",
      productName: "Alpha Bed",
      viewDetails: "View Details",
      priceDetails: "Price Details",
      itemPrice: "Item Price",
      lenderDiscount: "Lender Discount",
      totalPayable: "Total Payable Amount",
      securedBy: "Secured encryption by Fintech",
    },
    pinEntry: {
      title: "Payment",
      totalAmount: "Total Amount",
      enterOtp: "Enter OTP",
      otpSubtitle: "Enter the 6-digit OTP sent to your registered mobile number",
      signAndPay: "Sign and Pay ₹18,800",
      securePayment: "100% Secure Payment",
    },
    paymentSuccess: {
      title: "Payment",
      paymentSuccess: "Payment Successful!",
      paidTo: "Payment of ₹{amount} has been made to {merchant}",
      congratulations: "Congratulations! Your order is confirmed.",
      orderId: "Order ID",
      date: "Date",
      paymentMethod: "Payment Method",
      transactionId: "Transaction ID",
      viewOrderDetails: "View Order Details",
      goHome: "Go to Home",
    },
    common: {
      back: "Back",
      close: "Close",
      continue: "Continue",
      next: "Next",
      edit: "Edit",
      save: "Save",
      hindi: "हिंदी",
      english: "English",
      language: "Language",
    },
  },
};

export default translations;
