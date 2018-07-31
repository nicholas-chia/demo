/*******************************************************************************
* (c) Walgreen Co. All rights reserved.
******************************************************************************/

var timeStamp = new Date().valueOf();
var pharmacyContext = "/pharmacy";
Clazz.createPackage('com.wag.config');
Clazz.com.wag.config.pharmacyConfig = {
"getBuyoutPrescriptions":"/svc/profiles/{{profileId}}/buyoutrx/search",
"getRefillPrescriptionCard": "/svc/profiles/{{profileId}}/prescriptions/search",
"getRxReadyStatus": "/svc/profiles/{{profileId}}/prescriptions/search/(insights)",
"getSaveTrip": "/svc/profiles/{{profileId}}/prescriptions/saveatrip",
"getPreEnrollment":"/svc/profiles/{{profileId}}/prescriptions/saveatrip/enrollment",
"getsaveTripScheduled":"/svc/profiles/{{profileId}}/prescriptions/saveatrip/enrollment/schedule",
"requestRefill": "/svc/rxorders",
"getTimeSlot":"/svc/rxorders/retail/store/timeslots/search",
"sendRxInformation": "/svc/rxorders/(newtransferrx)",
"sendnewRxInformation":"/svc/rxorders/(newtransfercheckout)",
"getrxhistory":"/svc/profiles/{{profileId}}/rxfills/search",
"getrxoverlay":"/svc/profiles/{{profileid}}/prescriptions/(autorefillcheck)",
"getninetydayoverlay":"/svc/profiles/{{profileid}}/prescriptions/(ninetydaycheck)",
"getFamilyMemberManagement": "/svc/profiles/{{profileId}}/members/(FullAccess)",
"getFamilyMembersApptSch": "/svc/profiles/{{profileId}}/members",
"getRxStatusInfo": "/svc/profiles/{{profileId}}/prescriptions/search/(status)",
"getReloadStatusInfo": "/svc/profiles/{{profileId}}/prescriptions/{{viewId}}/(status)",
"getRxStatusPrescription":"/svc/profiles/{{profileid}}/prescriptions/search/(fullstatus)",
"getRxStatusReloadPrescription":"/svc/profiles/{{profileId}}/prescriptions/{{viewId}}/(fullstatus)",
"getRxStatusLoggedOutPrescription":"/svc/prescriptions/rxtracker/(fullstatus)?flowType={{flowType}}",
"getUpdatedPrice": "/svc/rxorders/confirmorder",
"getLeanCheckout": "/svc/rxorders",
"setLeanCheckout": "/svc/rxorders",
"getLeanCheckoutConfirmation": "" + pharmacyContext + "/app/leancheckout-confirmation/mock/retailMailPlanCombination-conf_A.json?val=" + timeStamp,
"getConfirmAddress": "/svc/rxorders/addressvalidation",
"getdashboardwidgets": "/svc/profiles/{{profileId}}/widgets",
"pharmacyContext": "/pharmacy",
"getSelectService": "/svc/healthservices/search",
"getVaccineInfo": "/svc/appointments/{{appointmentId}}/services",
"getSelectLoc": "/svc/appointments/{{appointmentId}}/timeslots/search",
"getPatientForm": "/svc/appointments/{{appointmentId}}/timeslot",
"sendpatientsInfo": "/svc/appointments/{{appointmentId}}/patients",
"getpatientsinfo": "" + pharmacyContext + "/app/appt-confirmation/mock/apptpatient.json?val=" + timeStamp, 
"removePrescription": "/svc/rxorders/retail/prescriptions/",
"getAuthenticationOptions": "/svc/profiles/{profileId}/authentication/authenticationoptions",
"getAuthenticationOptionsNonLogged": "/svc/authentication/options",
"getTextAuthenticationOptions": "/svc/profiles/{profileId}/authByText/loadAndResendCode",
"continueTextAuthenticationCode": "/svc/profiles/{profileId}/authByText/validateCode",
"sendVerificationCode": "/svc/profiles/{profileId}/authByText/sendVerificationCode",
"getTextAuthenticationOptionsNonLogged": "/svc/authentication/authByText/loadAndResendCode",
"continueTextAuthenticationCodeNonLogged": "/svc/authentication/authByText/validateCode",
"sendVerificationCodeNonLogged": "/svc/authentication/authByText/sendVerificationCode",
"getQuestionsNOptionsPrimary": "/svc/profiles/{profileId}/authentication/kba/questions/1",
"getQuestionsNOptionsSecondary": "/svc/profiles/{profileId}/authentication/kba/questions/2",
"getQuestionsNOptionsPrimaryNonLogged": "/svc/authentication/kba/questions/1",
"getQuestionsNOptionsSecondaryNonLogged": "/svc/authentication/kba/questions/2",
"getPinVerification": "/svc/profiles/{profileId}/authentication/pin",
"getPhoneVerification": "/svc/profiles/{profileId}/authentication/phone",
"getPrescriptionVerification": "/svc/profiles/{profileId}/authentication/prescriptionid",
"getLoyaltyId" : "/svc/profiles/{{profileId}}/loyalty/(RewardsInfo)",
"getHealthHistory" : "/svc/profiles/{profileId}/healthhistory",
"getRxInformation": "/svc/profiles/{{profileId}}/(PrescriptionOptions)?val={{timeStamp}}",
"getnewRxInformation":"/svc/profiles/{{profileId}}/(newPrescriptionOptions)?val={{timeStamp}}",
"getapptview": "/svc/profiles/{{profileId}}/appointments",
"postSearchView":"/svc/appointments/search",
"getProfileInfo": "/svc/profiles/{{profileId}}",
"getimmunizationhistory": "/svc/profiles/{profileId}/immunization/search",
"getvaccinelist": "/svc/profiles/{profileId}/immunizationservices",
"addEditImmunization": "/svc/profiles/{profileId}/immunizations",
"getImmPatientInfo": "/svc/profiles/{{profileId}}",
"getPersonalInfo": "/svc/profiles/{{profileId}}/(PersonalInfo)",
"postVARFormDetails": "/svc/immunizations/consentform",
"hideUnhideImmRec" : "/svc/profiles/{profileId}/immunizationrecommendations/{Id}",
"deletePsmMessage": "/svc/profiles/{profileId}/messages/{msgIds}/{msgType}",
"getPsmMessageInbox": "/svc/profiles/{profileId}/messages/{msgType}",
"getPsmMessageDetail": "/svc/messages/{msgId}/{msgType}",
"postPsmReplyMessage": "/svc/profiles/{profileId}/messages/{msgId}",
"getUpdatedHealthLeancheckout":"/svc/profiles/{profileId}/refreshHealthHistory",
/* hcc partner */
"getPartnerGeoLoader": "/svc/hccpartner/search",
/*Epic Scheduler*/
"getReasonForVisit":"/svc/appointment/servicecatalog/search",
"getPresResponse": "/svc/appointment/servicecriteria",
"getPatientInfoResponse":"/svc/appointment/patientinfo",
/* Refill reminder leancheckout - start*/
"getRefillReminderPrescriptions": "/svc/refillreminders/rxorders",
"setRefillReminderPrescriptions": "/svc/refillreminders/rxorders",
"removeRefillReminderPrescription": "/svc/refillreminders/rxorders/prescriptions/",
"addShippingAddressReminderRetail": "/svc/refillreminders/rxorders/shippingaddress",
"addPaymentReminderRetail": "/svc/refillreminders/rxorders/payment",
"addPaymentReminderSpeciality": "/svc/refillreminders/specialty/selectpayment",
"getReminderSrxPaymentDetails": "/svc/refillreminders/specialty/payments",
"getReminderSrxShippingAddressDetails": "/svc/refillreminders/specialty/addresses",
"setReminderSrxShippingAddressDetails": "/svc/refillreminders/specialty/selectaddress",
/* Refill reminder leancheckout - end*/
/*Refill Lean check out start*/
"getRefillLeanCheckout": "/svc/refillreminders/rxorders",
"setRefillLeanCheckout": "/svc/refillreminders/rxorders",
/*Refill Lean check out ends */

/* Pharmacy Specialty Entrolment */

"sendSrxEnrollment" : "/svc/profiles/{{profileid}}/srxenrollment",

/* health test card start*/
"getHealthCheckState":"/svc/profiles/{{profileId}}/healthtests/(overall)",
/* health test card end*/

/* hippa form start */
"hippaForms": "/svc/profiles/{profileId}/specialty/hippa",
"hippaFormsGetService": "/svc/profiles/{{profileId}}/specialty/hipaaDetails",
"hippaSpecialityUser": "/svc/profiles/{{profileId}}/customer/linkages",
"hippaUserStatus": "/svc/profiles/{{profileId}}/specialty/hipaaUsers",
/* hippa form ends*/

/* DrugInfo { */
"getDrugSearch": "/svc/drugcontents/search/{searchchar}",
"getDrugSearchElastic": "/drugcontents/search/{typeAheadReq}?requestType=druginfo",
"getDrugSearchElasticTransfer": "/drugcontents/search/{typeAheadReq}?requestType=rx",
"getDrugBrowse": "/svc/drugcontents/search/{searchchar}",    
"postDrugSearch": "/svc/drugcontents/search",
"getDrugDosage": "/svc/drugdosage", 
"getDrugInfo": "/svc/drugdetails/{drugId}",
"drugInfoSearchResults":"/svc/druginfo/search",
"drugInfoSearchResultsElastic":"/druginfo/search",
"druginfoPlm":"/svc/search/plmtdruginfo",
"druginfoPlmElastic":"/search/plmtdruginfo",

/* DrugInfo } */

"sendApptCancelRequest": "/svc/appointments/{{appointmentId}}",
"getRefillHubPrescription": "/svc/profiles/{{profileId}}/prescriptions/search",
"getIndividualRefillHubPrescription": "/svc/profiles/{{profileId}}/prescription/{{viewId}}",
"getRefillHubSearchPrescription": "/svc/profiles/{{profileId}}/prescriptions/search/(druginfo)",  
"addFamilyMember": "/svc/profiles/{profileId}/members",
"cancelInvitation": "/svc/profiles/{profileId}/invitations",
"saveimmvacdetails": "/svc/immunizations/consentform",
"getStoreServices":"/svc/stores/{{storeNumber}}/pharmacyservices",
"getUserInfo": "/svc/profiles/{{profileId}}/(BasicInfo+CartInfo+NotificationInfo+ProfileInd)",
"getStoreOverlay":"/svc/stores?storeNumber={{storeNumber}}",
"getStoreHours":"/svc/stores/{{storeNumber}}",
"getAppointmentLanding":"/svc/profiles/{{profileId}}/appointments/search",
"manageaccountaccess_Api":"/svc/profiles/{{profileId}}/administrators",
"getauthinfo":"Clazz.com.wag.config.pharmacyConfig.authreleaseinfoApi",
"getmanageaccountaccess":""+pharmacyContext+"/app/manage-account-access/mock/manageaccountaccess.json",
"getStateInfo":"/svc/common/countries/11/states",
"getAddressBook":"/svc/profiles/{profileId}/addresses",
"postAddressDetails": "/svc/profiles/{profileId}/addresses",
"putEditAdddress": "/svc/profiles/{profileId}/addresses/{addressId}",
"getAddressBookpreffered": "/svc/profiles/{profileId}/addresses/{addressId}",
"deleteAddressBookpreffered": "/svc/profiles/{profileId}/addresses/{addressId}",
"addPaymentRetail":"/svc/rxorders/retail/payment",
"addPaymentExpRetail":"/svc/rxorders/expressRefillRetailMail/payment",
"addPaymentMail":"/svc/rxorders/mailservice/payment",
"addPaymentExpMail":"/svc/rxorders/expressRefillMailPlan/payment",
"addPaymentSpecility":"/svc/rxorders/specilitycleansed/payment",
"addShippingAddressRetail":"/svc/rxorders/retail/shippingaddress",
"addShippingAddressExpRetail":"/svc/rxorders/expressRefillRetailMail/shippingaddress",
"addShippingAddressMail":"/svc/rxorders/mailservice/shippingaddress",
"addShippingAddressExpMail":"/svc/rxorders/expressRefillMailPlan/shippingaddress",
"getSrxPaymentDetails":"/svc/rxorders/specialty/payments",//""+pharmacyContext+"/app/payment-method/mock/rxorders_SrxChangePymt_post_res.json",
"getSrxShippingAddressDetails":"/svc/rxorders/specialty/addresses",//""+pharmacyContext+"/app/address-book/mock/rxorders_SrxAddress_post_res.json",
"setSrxShippingAddressDetails":"/svc/rxorders/specialty/selectaddress",
"getStepsActivities":"/svc/profiles/{{profileId}}/steps/search",
"getImmCard":"/svc/profiles/{{profileId}}/immunization/search",
"hideImmCard":"/svc/profiles/{{profileId}}/immunizationrecommendations/{{serviceId}}",
"addImmCard":"/svc/profiles/{{profileId}}/immunizations",
"getProducts":""+ pharmacyContext + "/assets/hi-product-scroll/mock/products.json",
/*AutoRefill*/
"getAutoRefill":"/svc/profiles/{{profileId}}/rxautorefill?val=" + timeStamp,
"PutAutoRefill":"/svc/profiles/{{profileId}}/rxautorefill?val=" + timeStamp,
"getAutoRefillStore":"/svc/profiles/{{profileId}}/autorefillstore?val=" +timeStamp,
"postRxNum":"/svc/rxorders/(expressrrefill)",
"getAutoRefillPrescription":"/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"getAutoRefillRetailMailPrescription":"/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"turnOnRetailPickupAutoRefill":"/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"turnOnMailAutoRefill":"/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"getRxStoreSearchService":"/svc/stores/search",
/* Payment Portal */
"findCCType":"/svc/common/creditcardtype/{First4Digits}",
"getRxPayments":"/svc/profiles/{{profileid}}/rxpayments",
"getRxPaymentsFamilyMembers":"/svc/profiles/{{profileId}}/members",
"getPaymentHistory":"/svc/profiles/{{profileid}}/rxpayments/",
"makePayment":"/svc/profiles/{{profileid}}/rxpayment/payment",
"getPaymentPortalStates":"/svc/common/countries/11/states",
"getStatements":"/svc/profiles/{{profileid}}/rxpayment/srxstatements",
"apptReconcile":"/svc/appointments/{{appointmentId}}/(profile)",
"hccmakePayment":"/svc/common/rxpayment/payment",
"hccpaymentpersonalinfo":"/svc/profiles/{{profileid}}/(PersonalInfo+ProfileInd)",

/* Insurance Plans and services */
"getInsPlansStoresList":"/svc/stores/search",
"getInsPlansStoresListElastic": "/stores/search",
"getInsuransPlansList": "/svc/stores/{{storeId}}/insuranceplans",

/* DPC-1954 Opt Out Confirmation without login */
"getOptOutEmailNotification":"/svc/spltyGetNotification/getEmailNotification",
"getOptOutUpdateNotification": "/svc/spltyUpdateNotification/getUpdateNotification",

/* DPC PHI Opt Out/In without login */

"getPhiOptInInfo":"/svc/userdobdetails/getuserinfo/",
"getPhiOptOutInfo": "/svc/phioptoutdetails/getphioptoutInfo/",

"turnOffAccessOverlay":"/svc/profiles/{{profileId}}/administrators",
"sendEmail":"/svc/profiles/{profileId}/immunizations/email",

/*rx status */
"getRxStatusByText":"/svc/rxStatusDob/rx/validatedob",
"getRxStatusWaitTimeMsg":"/svc/stores/{{storeId}}/(WaitTimeMessage)",
/* HCC card service*/
"getHCCStoreDetails":"/svc/stores/search",
"getZipcodeFromProfileService":"/svc/profiles/{{profileId}}",

/* Rx Settings page*/
"getRxSettings":"/svc/profiles/{profileid}/rxsettings?val=" + timeStamp,
"setLablePref":"/svc/profiles/{profileid}/rxsettings/label",
"setCapPref":"/svc/profiles/{profileid}/rxsettings/cap",
"setExpressPref":"/svc/profiles/{profileid}/rxsettings/expresspay",
"setAlertPref":"/svc/profiles/{profileid}/rxsettings/alerts",

/* Rx Print */
"getrxprintrecords":"/svc/profiles/{{profileId}}/rxprint/search",
"rxprintgetDeatils":"/svc/profiles/{{profileId}}/rxprint",
/* Rx Insurance */
"getInsuranceInfo":"/svc/profiles/{{profileId}}/rxinsurance",
"getRxInformationwithins":"/svc/profiles/{{profileId}}/(PrescriptionOptionsWithInsurance)?val={{timeStamp}}",
/* Rx Health History */
"gethealthSearch":"/svc/profiles/{{profileId}}/healthhistory",
"gethealthDetailsearch":"/svc/profiles/{{profileId}}/healthhistorydetail",
"gethealthSubmit":"/svc/profiles/{{profileId}}/userhealthhistory",
"gethealthDelete":"/svc/profiles/{{profileId}}/userhealthhistory/{{type}}/{{id}}/{{dtype}}?val={{timeStamp}}",
/* Get server date and time */
"getServerDateTime":"/svc/common/serverdatetime",
/* PlM card service */
"getRxHistory":"/svc/search/plmdrugs",
"getRxSearch":"/svc/search/plmtypeahead",
"getRxSideEffect":"/svc/search/plmtdruginfo",

/* WebMd service*/
"getWebmdArticlesDetails":"/healthcontents/search/(webmd)?catId={{carId}}",
"getWebmdArticleCategoryDetails":"/svc/healthcontents/categories/(webmdCat)",
/* CFS Birthday club */

"sendCfsBirthdayclubForm" : "/svc/healthcontents/cfs/email",

/* Health Center Services */

"getHealthCenterArticlesDetails":"/healthcontents/search/(articles)?catId={{carId}}",
"getHealthCenterProductDetails":"/healthcontents/search/(products)?catId={{carId}}",
"getHealthCenterServicesDetails":"/healthcontents/search/(services)?catId={{carId}}",
"getHealthCenterArtProdDetails":"/healthcontents/search/(articles+products)?catId={{carId}}",
"getHealthCenterAllDetails":"/healthcontents/search/(articles+services+products)?catId={{carId}}"
};