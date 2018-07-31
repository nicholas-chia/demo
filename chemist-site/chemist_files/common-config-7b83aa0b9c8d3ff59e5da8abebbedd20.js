/** (c) Walgreen Co. All rights reserved.**/
var timeStamp = new Date().valueOf();
Clazz.createPackage('com.wag.config');
Clazz.com.wag.config.commonUiConfig = {
"globalContextURL": null,
"breadCrumbTier3": "/breadcrumbs?categoryId=",
"sponsoredCarousel": "/products/productsInfo",
"getPastSearch": "/svc/pastsearch",
"typeahead" : "/svc/typeahead?q=",
"getProfiles": "/svc/profiles",
"productCompare" : "/product/compare?skuIds=",
"findStockByPnl" : "/storeinvsvc/inventory/findStockByPlanogramsAndStore",
"findStockByPnlStores" : "/storeinvsvc/inventory/findStockByPlanogramsAndStores",
"purchaseSearchHistory":"/purchase/history/product/search",
"saveAccountInfo": "/svc/profiles/<profileId>/(AccountInfo)",
"makePrimaryPhone": "/svc/profiles/<profileId>/phones/<phoneId>/(Primary)",
"getPersonalInfo": "/svc/profiles/<profileId>/(PersonalInfo+ProfileInd)?timestamp=" + timeStamp,
"getAccountInfo": "/rest/model/actors/myaccount/AccountActor/getAccountInfo",
"postAccountInfo": "/rest/model/actors/myaccount/AccountActor/saveAccountInfo",
"gettextResponse": "assets/text-message-alert/mock/textResponse.json",
"getAddressBookInfo": "/svc/profiles/<profileId>/addresses",
"postNewAddress": "/svc/profiles/<profileId>/addresses",
"putUpdateAddress": "/svc/profiles/<profileId>/addresses/<addressId>",
"getPaymentInfo": "/rest/model/actors/myaccount/AccountActor/getBillingInfo",
"paymentInfoCar": "/svc/profiles/<profileId>/(BillingInfo)",
"getPaymentInfoCar": "/svc/profiles/<profileId>/(BillingInfo+ProfileInd)",
"postPaymentInfo": "/rest/model/actors/myaccount/PersonalInfoActor/BillingInfo",
"deletePaymentInfo": "/rest/model/actors/myaccount/PersonalInfoActor/deleteBillingInfo",
"deleteInfo": "/assets/delete-express/mock/deleteexpress.json",
"getSecurityInfo": "/rest/model/actors/myaccount/AccountActor/getSecurityInfo",
"registerUser": "/svc/profiles",
"login": "/svc/profiles/login",
"guestCheckout": "/svc/orders/<orderId>/destination?source=guestCheckout",
"signOut": "/svc/profiles/logout?timeStamp=" + timeStamp,
"credential": "/svc/profiles/credentials/(password)",
"decode": "/svc/common/decode",
"upgradeUser": "/svc/profiles/<profileId>",
"attachReview": "/svc/profiles/<profileId>/loyalty/(AttachReview)",
"attachList": "/svc/profiles/<profileId>/loyalty/(AttachList)",
"registrationReview": "/svc/profiles/<profileId>/(RegistrationReview)?timeStamp=" + timeStamp,
"loyaltyattach": "/svc/profiles/<profileId>/loyaltyattach",
"SaveNewPassword":"/svc/profiles/credentials",
"validatePassword":"/svc/profiles/credentials/(PasswordRuleCheck)",
"validatePasswordLoggedIn":"/svc/profiles/<profileId>/credentials/(PasswordRuleCheck)",
"getsecurityinfoedit": "/rest/model/actors/myaccount/AccountActor/getSecurityInfo",
"getsecurityinfotoken": "/rest/model/actors/myaccount/AccountActor/getSessionToken",
"verifyPassword": "/rest/model/actors/myaccount/AccountActor/verifyPassword",
"saveSecurityInfoChanges": "/rest/model/actors/myaccount/AccountActor/updateSecurityInfo",
"updateEmailToLoyalty": "/rest/model/actors/myaccount/AccountActor/updateEmailToLoyalty",
"getShippingInfo": "/rest/model/actors/myaccount/AccountActor/getShippingInfo",
"getUserInfo": "/svc/header",
"addEditInfo": "/assets/add-edit-address/mock/addeditInfo.json",
"addEditInfoToken": "/assets/add-edit-address/mock/token.json",
"getContact": "/app/cntctusforms/js/contact.json",
"postContact": "/svc/contactus",
"storeContact": "/svc/stores/",
"commonContextPath": "",
"selfServeContextPath": "/store",
"pharmacyContextPath": "",
"updateEcommProfile": "/rest/model/actors/myaccount/AccountActor/updateEcommProfileToLoyaltyProfile",
"getrefillprescriptioncart": "assets/refill-prescription-card/mock/refillprescriptioncart.json",
"refillReminderInfo": "/rest/model/actors/myaccount/PreferencesActor/RefillReminder",
"getStoreLocator": "/svc/stores/search",
"getStoreLocation": "/svc/location",
"getStoreLocatorStatus": "/svc/stores/status",
"getStoreLocatorElasticStatus": "/stores/status",
"getStoreLocatorElastic": "/stores/search",
"weeklyadElasticSearch": "/weeklyad/search",
"localStoreServices": "/assets/store-services/js/storeservices_A.json?rnd=" + timeStamp,
"getSecurityQuestions": "/app/create-security-question-widget/mock/SecurityQuestions.json",
"storeDetails": "/assets/store-details/mock/storedetails-page-service-response.json",
"getImmunizationService": "/assets/immunizations-overlay/mock/immunizationservice-response.json",
"retrieveUsername": "/assets/credentials/mock/retrieveUsernameResponse.json",
"resetpasswordWid": "/app/resetpassword-wid/mock/requestResetPassword-response.json",
"createNewPassword": "/assets/credentials/mock/ResetPassword-Response.json",
"getSecurityAnswer": "/app/identity-wid/mock/SecurityAnswer-Response.json",
"getVaccineAvailabilityService": "/assets/vaccine-availability-overlay/mock/vaccineavailability-service-response.json",
"getStoreandaccount": "/svc/profiles/{profileId}/(PreferredStore)?timestamp=" + timeStamp,
"getStoreaccount": "/svc/profiles/{profileId}/(PreferredStore)",
"getPreferredStoreaccount": "/svc/profiles/{profileId}/(GetPreferredStore)",
"putRxStoreAccount": "/svc/rxorders/retails/store",
/*refillReminderLeancheckout put service*/
"putRefillReminderAccount": "/svc/refillreminders/rxorders/store",
"putRxExpressRefillStoreAccount": "/svc/rxorders/expressrefillretailpickup/store",
"getbalancerewards": "/svc/profiles/{profileId}/loyalty/(RewardsInfo)?timestamp=" + timeStamp,
"getScheduleOrderDetails": "/svc/profiles/{profileId}/(scheduledorders)",
"updateQtyFreqService": "/svc/scheduleorders/{scheduleId}",
"addShippingAddressService": "/svc/scheduleorders/{scheduleId}/shippinginfos",
//"addShippingAddressService": "/app/auto-reorder/mock/response/counties_response.json",
"updateShippingAddressService": "/svc/scheduleorders/{scheduleId}/shippinginfos/{Id}",
"arGetSTSOrSTHShippingInfo":"/svc/scheduleorders/{scheduleId}/shippinginfos/{shippinginfoId}/",
//"updateShippingAddressService": "/app/auto-reorder/mock/response/counties_response.json",
"addArAltPickupInfo": "/svc/scheduleorders/{scheduleId}/shippinginfos/{shippinginfoId}/contactinfo/(alt)",
"addARPaymentService": "/svc/scheduleorders/{scheduleId}/paymentinfos",
"addPayPalService": "/svc/scheduleorders/{scheduleId}/paymentinfos/(paypal)",
//"updateARPaymentService": "/app/auto-reorder/mock/response/UpdatePayment_NoMatchFound_AND_NewCardIsFSA_response.json",
"updateARPaymentService": "/svc/scheduleorders/{scheduleId}/paymentinfos/{Id}",
/* Starts - To be removed during service integration. For differentiation of Mass Payment Update Responses*/
"updateARPaymentService1": "/app/auto-reorder/mock/response/UpdateMultiPaymentInfo_yes_response.json",
"updateARPaymentService2": "/app/auto-reorder/mock/response/UpdateMultiPaymentInfo_no_response.json",
/* Ends - To be removed during service integration. For differentiation of Mass Payment Update Responses*/
"skipShipmentService": "/svc/scheduleorders/{scheduleId}",
"removeShipmentService": "/svc/scheduleorders/{scheduleId}",
"updateShipmentDateService": "/svc/scheduleorders/{scheduleId}",
"putRxAutoRefillStoreAccount": "/svc/rxorders/retail/autorefillstore",
"availPoints": "/svc/profiles/<profileId>/loyalty/(RewardsInfo)",
"getTransacService": "/svc/profiles/<profileId>/loyalty/activities",
"getBrReceipt": "/svc/profiles/<profileId>/loyalty/claimPoints",
"getBrSettings": "/svc/profiles/<profileId>/loyalty/(PersonalInfo)?timestamp=" + timeStamp,
"getActivityDetails": "/svc/profiles/<profileId>/loyalty/activities/transactions/<transactionId>",
"getAarrpDetils": "/assets/reg-options/mock/Profiles_GET_response.json",
"getBrNumbers": "/assets/account-home/getAccountHomeBalanceRewardsInfo.json",
"getCoupons": "/svc/coupons/(Recommended)",
"getSearch": "/svc/coupons/search",
"elasticCouponSearch": "/offer/search",
"getParticipatingProducts": "/svc/coupons/products",
"getOtherParticipatingProducts": "/svc/flipp/(otherProducts)",
//"getPreSearch": "/svc/search/typeahead",
"clipCoupons": "/svc/profiles/{profileId}/coupons",
"clipCouponsNodeVOne": "/offers/v1/svc/coupons/clipcoupon",
"getYourcoupons": "/svc/profiles/{profileId}/coupons/(Clipped)",
"getClippedcouponsNodeVOne": "/offers/v1/svc/coupons/clipped",
"getRedeemedcoupons": "/svc/profiles/{profileId}/coupons/(Redeemed)",
"vaccineAvailabilityService": "/svc/stores/<STORENUM>/(vaccineservices)",
"immunizationoverlayservice": "/svc/stores/<STORENUM>/immunizationservices",
"quickRegRxSignin": "/svc/qr/rx/invitations/<token>",
"quickRegLoyalty": "/svc/qr/loyalty/invitations/<token>",
"unclipCoupons": "/svc/profiles/{profileId}/coupons/{couponId}",
"getSavedSearch": "/svc/profiles/{profileId}/(savedSearch)",
"saveSearch": "/svc/profiles/{profileId}/(savedSearch)",
"getStores": "/svc/stores/search/(BasicInfo+StoreHours)",
"authCode": "/svc/profiles/<profileId>/oauth/authcode",
"sessionToken": "/svc/profiles/<profileId>/(SessionToken)",
"passwordVerification": "/svc/profiles/<profileId>/(PasswordVerification)",
"confirmationOverlay": "/register/reg_confirmation.jsp",
"LoyaltyRewardsInfo": "/app/balancerewards/Mock/LoyaltyRewardsInfo.json",
"GetCouponsInfo": "/app/balancerewards/Mock/GetCouponsInfo.json",
"getOptInOffers": "/app/balancerewards/Mock/GetOptInOffers.json",
"AvailOffersSignUp": "/svc/profiles/{profileId}/balancerewards/optIn",
"consent": "/svc/profiles/<profileId>/webmd/consent",
"samlRequest": "/svc/profiles/<profileId>/webmd/saml",
/* hcc partner */
"getPartnerGeoLoader": "/svc/hccpartner/search",
"getPartnerGeoLoaderElastic": "/hccpartner/search",
/* Your Account Insurance */
"getInsurance": "/svc/profiles/{profileid}/rxinsurance",
"navMenuData": "/assets/nav/js/config.json",
"productData": "/svc/products/<<PRODUCTID>>/(PriceInfo+Inventory)",
"relatedProductsCL": "/svc/products/(CAB)?id=<PRODUCTID>&type=cl",
"relatedProductsCLElastic": "/products/(CAB)?id=<PRODUCTID>&type=cl",
"customersAlsoBought": "/svc/products/(CAB)?id=<PRODUCTID>",
"customersAlsoBoughtElastic": "/products/(CAB)?id=<PRODUCTID>",
"addToCart": '/svc/carts/<<CARTID>>/items',
"productMoreData": "/svc/products/<<PRODUCTID>>/(PriceInfo+Inventory+ProductInfo)",
"getProductChange": "/store/assets/product/mock/on-change-service/colorandsizepicker-webpickupstore.json",
"getReviews": "/store/assets/reviews/mock/userReview.json",
"getShopMore": "/store/assets/shop-more/mock/shopmore.json",
"getCartsInfo": "/svc/carts/",
"getCartInfo": "/svc/carts/<cartId>?val=" + timeStamp,
"getCartPromiseDate":"/svc/orders/<orderId>/(promiseDate)",
"getBrInfoPromiseDate":"/svc/orders/<orderId>/(<options>)",
"getBRInfo":"/svc/orders/<orderId>/(brpointsinfo)",
"calculateEstimatedTax": "/svc/carts/<cartId>/(shipping)",
"updateItem": "/svc/carts/<cartId>/items/<itemId>",
"removeItem": "/svc/carts/<cartId>/items/<itemId>",
"applyCoupon": "/svc/carts/<cartId>/(promotions)",
"removeCoupon": "/svc/carts/<cartId>/promotions",
"visaCheckout":"/svc/orders/(visacheckout)",
"proceedToCheckout": "/svc/orders",
"findAtStore": "/svc/products/",
"pickUpStore": "/svc/profiles/<profileId>/(stores)",
"getaddCartOptions": "/store/assets/product/mock/toggling-service/toggling-pu-in-store-in-stock.json",
"getaddCartData": "/svc/carts/<<CARTID>>/items/(Products)",
"getaddCartDataVPD_CL": "/svc/carts/<<CARTID>>/items",
"getarrivalDate": "/store/assets/product/mock/arrival-service/arrival-state-CO.json",
"getOrderSuccess": "/svc/orders/<orderId>",
"getPaymentOrder" : "/svc/orders/<orderId>/paymentinfos",
"getShipAddress" : "/svc/orders/<orderId>/shippinginfos",
"getShipCounty":"/svc/orders/<orderId>/shippinginfos/(counties)",
"updateShipCounty":"/svc/orders/<orderId>/shippinginfos/<SGid>",
"addShipAddress" : "/svc/orders/<orderId>/shippinginfos",
"updateShipAddress" : "/svc/orders/<orderId>/shippinginfos/<SGid>",
"getContactInfo":"/svc/orders/<orderId>/contactinfo",
"addShipContact":"/svc/orders/<orderId>/shippingcontactinfos",
"updateContactInfo":"/svc/orders/<orderId>/contactinfo",
"getShipMethod":"/svc/orders/<Id>/shippingmethodinfos/",
"applyBrSuccess": "/svc/orders/<orderId>/paymentinfos/<PGid>",
"submitOrderSuccess": "/svc/orders/<orderId>",
"DestinationService":"/svc/orders/<orderId>/destination",
"invalidCoupon": "/store/assets/checkout/mock/invalid-coupons.json",
"expiredCoupon": "/store/assets/checkout/mock/expired-coupons.json",
"getStateList": "/svc/common/countries/11/states",
"addShipAddressOrderSuccess": "/svc/orders/<orderId>/shippinginfos",
"getAddressBook": "/svc/profiles/<Id>/addresses/(checkout)",
"updateAddressBookOrder": "/svc/orders/<orderId>/shippinginfos/<SGid>",
"addPaymentOrder": "/svc/orders/<orderId>/paymentinfos",
"updatePaymentOrder": "/svc/orders/<orderId>/paymentinfos/<PGid>",
"updateShipMethod": "/svc/orders/<Id>/shippingmethodinfos/<SGId>",
"getState": "/svc/common/countries/11/states",
"getOrderInfo": "/rest/model/actors/order/OrderSvc/orderSubmissionSvc",
"getFilterResult": "/svc/products/search",
"getShoppingList": "/svc/shoppinglists/0/items/search",
"addToShoppingList": "/svc/shoppinglists/0/items",
"removeShoppingListProduct": "/svc/shoppinglists/0/ListId/<shoppingListId>/items/<itemId>",
"getPrescriberInfo": "/svc/profiles",
"postPrescriberInfo": "/svc/orders/<orderId>/(clpatient+clprescriber)",
"getPrescriberSearchPagination": "/svc/prescribers/search",
"postPrescriberSearch": "/svc/prescribers/search",
"postPrescriberSelect": "/svc/orders/<orderid>/(clprescriber)",
"postContinueCheckout": "/svc/orders/<orderid>/(clprescriber)",
"getclPatientsSuccess": "/svc/profiles/123/(clpatients)",
"getclReorderHistroySuccess": "/rest/model/actors/contactlens/ContactLensSvc/contactLensReOrderSvc",
"addclReorder": "/svc/carts/1234/items",
"getSpecialOfferItems": "/assets/special-offer-items/mock/priceInfo-inventory-multivarient.json",
"signOut": "/svc/profiles/logout",
"searchHealthInfo": "/svc/healthcontents/search",
"getDrugContents": "/svc/drugcontents/search",
"getDrugInfoContents": "/svc/druginfo/search",
"getDrugInfoContentsElastic": "/druginfo/search",
"deleteAddress": "/svc/profiles/<profileId>/addresses/<addressId>",
"expressPaypal": "/svc/orders/(paypal)",
"getRefineURL": "/svc/products/(Refinements)",
"getOrderStatus": "/svc/orders/searchNew",
"postOrderStatus": "/svc/orders/searchNew",
"postPaginationStatus": "/svc/orders/searchNew",
"prescriberSearchResultsURL": "/store/checkout/cl_prescriber_search_results.jsp",
"optimizedCheckoutURL": "/store/checkout/optimizedcheckout/optimize_order_review.jsp",
"checkoutShipURL": "/store/checkout/optimizedcheckout/ship_address.jsp",
"checkoutPaymentURL": "/store/checkout/optimizedcheckout/payment_method.jsp",
"paypalIntermediateURL": "/store/checkout/wag_paypal_express_intermediate_order_review.jsp",
"BMLDetailsURL": "../bml_detail.jsp",
"orderConfimationURL": "/store/checkout/confirmorder_sdd.jsp",
"cartURL": "/store/checkout/cart.jsp",
"getOrderHistory": "/svc/orders/<orderId>/(history)",
"getEcommOrderHistory": "/svc/orders/<orderId>/(history)<purchasetransId>",
"getGrapeOrderHistory": "/svc/grape/<orderId>",
"getStoreOrderHistory": "/svc/store/<purchasetransId>/(history)",
"getUnauthorizedOrderHistory": "/svc/orders/<orderId>/(guest-history)",
"getProfileInfo": "/svc/profiles/<profileId>/(BasicInfo+CartInfo+NotificationInfo+ProfileInd)",
"overlayRegistration": "/svc/profiles",
"newProfile": "/svc/orders/<orderId>/(profile)",
"bmlAddressDetails": "/svc/orders/<orderId>/addresses/(transactionalAddresses)",
"bmlResponse": "/svc/orders/<orderId>/paymentinfos",
"switchPaymentCC": "/svc/orders/<orderId>/paymentinfos/(cc)",
"switchPaymentPP": "/svc/orders/<orderId>/paymentinfos/(paypal)",
"switchPaymentBML": "/svc/orders/<orderId>/paymentinfos/(bml)",
"visaCheckOutPayment": "/svc/orders/<orderId>/paymentinfos/(visacheckout)",
"updateBML": "/svc/orders/<orderId>/paymentinfos/<PGid>",
"getCardList": "/svc/common/CreditCards",
"getGeoStoreList": "/svc/stores/search/(BasicInfo+Hours)",
"getUserStoreDetails": "/svc/profiles/{profileId}/(PreferredStore)",
"setGeoPrefferedStore": "/svc/profiles/{profileId}/(stores)",
//"webStoreDetails":"/store/app/web-pick-up/mock/Get_PickupInfo_response.json",
"webStoreDetails": "/svc/orders/<orderId>/pickupinfo",
"postStoreDetails": "/svc/orders/<orderId>/pickupinfo",
"putStoreDetails": "/svc/orders/<orderId>/pickupinfo",
"getbrpoints":"/store/assets/checkout-balance-rewards/mock/get-br-points-success.json",
"storeAddressInfoUrl": "/svc/store/(StoreInfo)",
"getSecurityOptions": "/svc/profiles/(SecurityOptions)",
"sendPincode": "/svc/profiles/login/authenticate/pincode/send",
"submitPincode": "/svc/profiles/login/authenticate",
"bmlPaycaptureIntermediatePageUrl":"/store/checkout/wag_bml_paycapture_intermediate_order_review.jsp",
"getSurveyOption": "/svc/common/SurveyOptions",
"postSurveyOption": "/svc/preferences/(EmailOptOutSurvey)",
"acceptTermAndCntn":"/svc/profiles/<profileId>/tnc",
"applyMfgCoupons":"/svc/carts/<cartId>/applyMfgCoupons",
"applyMfgCouponsAndBrBanner":"/svc/carts/<cartId>/loyaltyAndDigitalCoupons",
"getDigitalOffers":"/svc/digitaloffers/<offerId>",
"getProductCoupons":"/svc/products/DO/({userState})",
"bmlIframeUrl":"https://www.securecheckout.billmelater.com/paycapture-content/fetch?hash=W5M29SUA&content=/bmlweb/np90drollingiw.html",
"visaBannerBccCall":"/store/checkout/visa-checkout-see-restrictions.jsp?showpage=visa_banner_checkout_see_restrictions_description_CT",
"visaSeeTermsBccCall":"/store/checkout/visa-checkout-see-restrictions.jsp?showpage=visa-checkout-see-restrictions-description-CT",
"shippingfaqBccCall":"/store/checkout/visa-checkout-see-restrictions.jsp?showpage=shipping_detail_overlay_A",
"jingleBannerBccCall":"/store/checkout/visa-checkout-see-restrictions.jsp?showpage=joinnow_banner_CT",
"shopCatBannerBccCall":"/store/checkout/visa-checkout-see-restrictions.jsp?showpage=null_search_page_content_CT",
"stsLearnMoreBccCall":"/pharmacy/store/shiprulesa_popup.jsp?showpage=Upselllearnmore",
"arTermsBccCall":"/pharmacy/store/shiprulesa_popup.jsp?showpage=cancelTermsAR",
"purchaseHistory":"/svc/orders/search",
"getReorderProducts":"/svc/orders/search/(items)",
"getUcePurchaseHistoryCards":"/svc/orders/search/(items)",
"getUceContentCards": "/svc/profiles/<profileId>/healthcontents/articles",
"getUceBrThersholdPoints": "/svc/profiles/<profileId>/healthychoices/trackerpoints",
"getUceCards": "/svc/profiles/<profileId>/(CustomerInsights+Actions)",
"deleteAltPersonInfo":"/svc/orders/<orderId>/shippinginfos/<shippinginfoid>/contactinfo/(alt)",
"surveyService":"/hip/survey/v1/quickpoll/",
//Beauty Club Service Url's
"lookupDetailsPost":"/svc/profiles/loyalty/lookup",
"getSingleMatch":"/svc/profiles/loyalty/lookup/<memberId>",
"postSingleMatch":"/svc/profiles/0/OptInOffers",
"noMatchRegData":"/svc/profiles/loyalty/enroll",
"getPreferenceQuestData":"/svc/profiles/beautypref/questionnaire",
"storeAuthHeader":"/svc/storeauth/header?val="+ timeStamp,
"storeAuthLogout":"/svc/storeauth/logout",
"beautyRewardsInfo":"/svc/profiles/loyalty/<loyaltyId>/(BeautyRewardsInfo)",
//Elastic services
"searchHealthInfoElastic": "/healthcontents/search",
"getDrugContentsElastic": "/druginfo/search",
"productSearchElastic": "/products/search",
"multiVarient": "/products/<<productId>>/sku/<<skuId>>/storeId/0/(skuInfo)",
"recentlyViewedItemsElastic": "/products/(RVI)",
"getBrandsListElastic" : "/brands?categoryId=",
"googleMapAPIJsUrl":"https://maps.google.com/maps/api/js?sensor=false&client=gme-walgreens",
"getTierTwoCauroselsData": "/svc/tier2/<<tier2CatId>>/(topsellers+newestarrival+mostviewed)",
"getTierTwoCauroselsDataForCart": "/svc/tier2/<<tier2CatId>>/(topsellers)",
"getTierSalesandOffers": "/svc/categories/offers",
"getRecommendedProducts": "/svc/products/<memberId>/category/0/(recommended)",
"getBeautyRewardsInfo" : "/svc/profiles/loyalty/<loyaltyId>/(BeautyRewardsInfo)",
"shopLandingPageUrl" : "/store/store/shop.jsp",
"isoDefaultJspUrl":"/iso/default.jsp",
"cartCombinedSvc":"/svc/carts/<cartId>/(<options>)",
"paypalCancelJspUrl":"/store/checkout/paypalcancel.jsp",
"getPackageTrackingDetails":"/svc/orders/<orderId>/track/<trackingId>",
"mfssCall":"/svc/common/mfss/storenumber",
"getRxUpload":"/svc/orders/<orderId>/fileupload/(clprescriber)",
"deleteRxUpload":"/svc/orders/<orderId>/fileupload/(clprescriber)",
"submitRxUpload":"/svc/orders/<orderId>/fileupload/(clprescriber)",
"compressRxImage":"/svc/orders/<orderId>/fileupload/(compress)",
"skipRxUpload":"/svc/orders/<orderId>/destinationskip",
"masterPass":"/svc/orders/<orderId>/(masterpass)",
"masterPassPut":"/svc/orders/<orderId>/paymentinfos/(masterpass)",
"topSellersElasticHome":"/products/topsellers",
"getBeautyProducts": "/products/search",
"getSkinidProducts": "/beauty/recommendation?skinId=",
"getUserType": "/svc/profiles/{{profileID}}/userType",
"skinIdQuestionnireData":"/svc/profiles/skinid/questionnaire",
"getPrestigeBrandSection":"/brands/prestige",
"applePayInitSvc":"/svc/orders/<orderId>/extpayment/applepay/(initialize)",
"applePayMerchantValSvc":"/svc/orders/<orderId>/extpayment/applepay/(merchantvalidation)",
"applePayCancelSvc":"/svc/orders/<orderId>/extpayment/applepay/(cancel)",
"applePayUpdateShippingSvc":"/svc/orders/<orderId>/extpayment/applepay/(shippinginfos)",
"applePayShipMethodSvc":"/svc/orders/<orderId>/extpayment/applepay/(shippingmethodinfos)",
"applePayPaymentAuthSvc":"/svc/orders/<orderId>/extpayment/applepay/(authorize)",
"applePayCompleteOrderSvc":"/svc/orders/<orderId>/extpayment/applepay/",
"applePayClReorderInitSvc":"/svc/orders/extpayment/applepay/(CLReorder)"
}; 
var timeStamp = new Date().valueOf();
var pharmacyContext = "/pharmacy";
Clazz.com.wag.config.pharmacyConfig = {
"getRxReadyStatus": "/svc/profiles/{{profileId}}/prescriptions/search/(insights)",
"getSaveTrip": "/svc/profiles/{{profileId}}/prescriptions/saveatrip",
"getBuyoutPrescriptions": "/svc/profiles/{{profileId}}/buyoutrx/search",
"getRefillPrescriptionCard": "/svc/profiles/{{profileId}}/prescriptions/search",
"requestRefill": "/svc/rxorders",
"getTimeSlot": "/svc/rxorders/retail/store/timeslots/search",
"sendRxInformation": "/svc/rxorders/(newtransferrx)",
"getrxhistory": "/svc/profiles/{{profileId}}/rxfills/search",
"getrxoverlay": "/svc/profiles/{{profileid}}/prescriptions/(autorefillcheck)",
"getninetydayoverlay": "/svc/profiles/{{profileid}}/prescriptions/(ninetydaycheck)",
"getFamilyMemberManagement": "/svc/profiles/{{profileId}}/members/(FullAccess)",
"getFamilyMembersApptSch": "/svc/profiles/{{profileId}}/members",
"getRxStatusInfo": "/svc/profiles/{{profileId}}/prescriptions/search/(status)",
"getReloadStatusInfo": "/svc/profiles/{{profileId}}/prescriptions/{{viewId}}/(status)",
"getLeanCheckout": "/svc/rxorders",
"setLeanCheckout": "/svc/rxorders",
"getLeanCheckoutConfirmation": "" + pharmacyContext + "/app/leancheckout-confirmation/mock/retailMailPlanCombination-conf_A.json?val=" + timeStamp,
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
"continueTextAuthenticationCode": "/svc/profiles/{profileId}/authByText/validateCode",
"sendVerificationCode": "/svc/profiles/{profileId}/authByText/sendVerificationCode",
"getQuestionsNOptionsPrimary": "/svc/profiles/{profileId}/authentication/kba/questions/1",
"getQuestionsNOptionsSecondary": "/svc/profiles/{profileId}/authentication/kba/questions/2",
"getPinVerificationNew": "/svc/profiles/{profileId}/rxauth/pin",
"getPinVerification": "/svc/profiles/{profileId}/authentication/pin",
"getPhoneVerification": "/svc/profiles/{profileId}/authentication/phone",
"getPrescriptionVerification": "/svc/profiles/{profileId}/authentication/prescriptionid",
"getLoyaltyId": "/svc/profiles/{{profileId}}/loyalty/(RewardsInfo)",
"getRxInformation": "/svc/profiles/{{profileId}}/(PrescriptionOptions)",
"getapptview": "/svc/profiles/{{profileId}}/appointments",
"postSearchView": "/svc/appointments/search",
"getProfileInfo": "/svc/profiles/{{profileId}}",
"getimmunizationhistory": "/svc/profiles/{profileId}/immunization/search",
"getvaccinelist": "/svc/profiles/{profileId}/immunizationservices",
"addEditImmunization": "/svc/profiles/{profileId}/immunizations",
"getImmPatientInfo": "/svc/profiles/{{profileId}}",
"getPersonalInfo": "/svc/profiles/{{profileId}}/(PersonalInfo)",
"postVARFormDetails": "/svc/immunizations/consentform",
"hideUnhideImmRec": "/svc/profiles/{profileId}/immunizationrecommendations/{Id}",
"deletePsmMessage": "/svc/profiles/{profileId}/messages/{msgIds}/{msgType}",
"getPsmMessageInbox": "/svc/profiles/{profileId}/messages/{msgType}",
"getPsmMessageDetail": "/svc/messages/{msgId}/{msgType}",
"postPsmReplyMessage": "/svc/profiles/{profileId}/messages/{msgId}",
"getHealthHistory": "/svc/profiles/{profileId}/healthhistory",
/* Refill reminder leancheckout - start*/
"getRefillReminderPrescriptions": "/svc/refillreminders/rxorders",
"setRefillReminderPrescriptions": "/svc/refillreminders/rxorders",
"removeRefillReminderPrescription": "/svc/refillreminders/rxorders/prescriptions/",
"addShippingAddressReminderRetail": "/svc/refillreminders/rxorders/shippingaddress",
"addPaymentReminderRetail": "/svc/refillreminders/rxorders/payment",
/* Refill reminder leancheckout - end*/

/* health test card start*/
"getHealthCheckState": "/svc/profiles/{{profileId}}/healthtests/(minimal)",
/* health test card end*/

/* DrugInfo { */
"getDrugSearch": "/svc/drugcontents/search/{searchchar}",
"getDrugSearchElastic": "/drugcontents/search/{typeAheadReq}?requestType=druginfo",
"getDrugBrowse": "/svc/drugcontents/search/{searchchar}",
"postDrugSearch": "/svc/drugcontents/search",
"getDrugDosage": "/svc/drugdosage",
"getDrugInfo": "/svc/drugdetails/{drugId}",
/* DrugInfo } */

"sendApptCancelRequest": "/svc/appointments/{{appointmentId}}",
"getRefillHubPrescription": "/svc/profiles/{{profileId}}/prescriptions/search",
"getIndividualRefillHubPrescription": "/svc/profiles/{{profileId}}/prescription/{{viewId}}",
"getRefillHubSearchPrescription": "/svc/profiles/{{profileId}}/prescriptions/search/(druginfo)",
"addFamilyMember": "/svc/profiles/{profileId}/members",
"cancelInvitation": "/svc/profiles/{profileId}/invitations",
"saveimmvacdetails": "/svc/immunizations/consentform",
"getStoreServices": "/svc/stores/{{storeNumber}}/pharmacyservices",
"getUserInfo": "/svc/profiles/{{profileId}}/(BasicInfo+CartInfo+NotificationInfo+ProfileInd)",
"getStoreOverlay": "/svc/stores?storeNumber={{storeNumber}}",
"getStoreHours": "/svc/stores/{{storeNumber}}",
"getAppointmentLanding": "/svc/profiles/{{profileId}}/appointments/search",
"manageaccountaccess_Api": "/svc/profiles/{{profileId}}/administrators",
"getauthinfo": "Clazz.com.wag.config.pharmacyConfig.authreleaseinfoApi",
"getmanageaccountaccess": "" + pharmacyContext + "/app/manage-account-access/mock/manageaccountaccess.json",
"getStateInfo": "/svc/common/countries/11/states",
"getAddressBook": "/svc/profiles/{profileId}/addresses",
"postAddressDetails": "/svc/profiles/{profileId}/addresses",
"putEditAdddress": "/svc/profiles/{profileId}/addresses/{addressId}",
"getAddressBookpreffered": "/svc/profiles/{profileId}/addresses/{addressId}",
"deleteAddressBookpreffered": "/svc/profiles/{profileId}/addresses/{addressId}",
"addPaymentRetail": "/svc/rxorders/retail/payment",
"addPaymentExpRetail": "/svc/rxorders/expressRefillRetailMail/payment",
"addPaymentMail": "/svc/rxorders/mailservice/payment",
"addPaymentExpMail": "/svc/rxorders/expressRefillMailPlan/payment",
"addPaymentSpecility": "/svc/rxorders/specilitycleansed/payment",
"addShippingAddressRetail": "/svc/rxorders/retail/shippingaddress",
"addShippingAddressExpRetail": "/svc/rxorders/expressRefillRetailMail/shippingaddress",
"addShippingAddressMail": "/svc/rxorders/mailservice/shippingaddress",
"addShippingAddressExpMail": "/svc/rxorders/expressRefillMailPlan/shippingaddress",
"getSrxPaymentDetails": "/svc/rxorders/specialty/payments", //""+pharmacyContext+"/app/payment-method/mock/rxorders_SrxChangePymt_post_res.json",
"getSrxShippingAddressDetails": "/svc/rxorders/specialty/addresses", //""+pharmacyContext+"/app/address-book/mock/rxorders_SrxAddress_post_res.json",
"setSrxShippingAddressDetails": "/svc/rxorders/specialty/selectaddress",
"getStepsActivities": "/svc/profiles/{{profileId}}/steps/search",
"getImmCard": "/svc/profiles/{{profileId}}/immunization/search",
"hideImmCard": "/svc/profiles/{{profileId}}/immunizationrecommendations/{{serviceId}}",
"addImmCard": "/svc/profiles/{{profileId}}/immunizations",
"getProducts": "" + pharmacyContext + "/assets/hi-product-scroll/mock/products.json",
/*AutoRefill*/
"getAutoRefill": "/svc/profiles/{{profileId}}/rxautorefill?val=" + timeStamp,
"PutAutoRefill": "/svc/profiles/{{profileId}}/rxautorefill?val=" + timeStamp,
"getAutoRefillStore": "/svc/profiles/{{profileId}}/autorefillstore?val=" + timeStamp,
"postRxNum": "/svc/rxorders/(expressrrefill)",
"getAutoRefillPrescription": "/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"getAutoRefillRetailMailPrescription": "/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"turnOnRetailPickupAutoRefill": "/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
"turnOnMailAutoRefill": "/svc/profiles/{{profileId}}/prescription/{{viewId}}/autoRefill/?val=" + timeStamp,
/* Payment Portal */
"findCCType": "/svc/common/creditcardtype/{First4Digits}",
"getRxPayments": "/svc/profiles/{{profileid}}/rxpayments",
"getRxPaymentsFamilyMembers": "/svc/profiles/{{profileId}}/members",
"getPaymentHistory": "/svc/profiles/{{profileid}}/rxpayments/",
"makePayment": "/svc/profiles/{{profileid}}/rxpayment/payment",
"getPaymentPortalStates": "/svc/common/countries/11/states",
"getStatements": "/svc/profiles/{{profileid}}/rxpayment/srxstatements",
"apptReconcile": "/svc/appointments/{{appointmentId}}/(profile)",

/* Insurance Plans and services */
"getInsPlansStoresList": "/svc/stores/search",
"getInsuransPlansList": "/svc/stores/{{storeId}}/insuranceplans",

"turnOffAccessOverlay": "/svc/profiles/{{profileId}}/administrators",
"sendEmail": "/svc/profiles/{profileId}/immunizations/email",

/* HCC card service*/
"getHCCStoreDetails": "/svc/stores/search",
"getZipcodeFromProfileService": "/svc/profiles/{{profileId}}",

/* Rx Settings page*/
"getRxSettings": "/svc/profiles/{profileid}/rxsettings?val=" + timeStamp,
"setLablePref": "/svc/profiles/{profileid}/rxsettings/label",
"setCapPref": "/svc/profiles/{profileid}/rxsettings/cap",
"setExpressPref": "/svc/profiles/{profileid}/rxsettings/expresspay",
"setAlertPref": "/svc/profiles/{profileid}/rxsettings/alerts",

/* Rx Print */
"getrxprintrecords": "/svc/profiles/{{profileId}}/rxprint/search",
"rxprintgetDeatils": "/svc/profiles/{{profileId}}/rxprint",
/* Rx Insurance */
"getInsuranceInfo": "/svc/profiles/{{profileId}}/rxinsurance",
"getRxInformationwithins": "/svc/profiles/{{profileId}}/(PrescriptionOptionsWithInsurance)",
/* Rx Health History */
"gethealthSearch": "/svc/profiles/{{profileId}}/healthhistory",
"gethealthDetailsearch": "/svc/profiles/{{profileId}}/healthhistorydetail",
"gethealthSubmit": "/svc/profiles/{{profileId}}/userhealthhistory",
/* Get server date and time */
"getServerDateTime": "/svc/common/serverdatetime",
/* PlM card service */
"getRxHistory": "/svc/search/plmdrugs",
"getRxSearch": "/svc/search/plmtypeahead",
"getRxSideEffect": "/svc/search/plmtdruginfo",

/* Elastic search */
"getRxHistoryElastic": "/search/plmdrugs",
"getRxSearchElastic": "/search/plmtypeahead",
"getRxSideEffectElastic": "/search/plmtdruginfo",
/* Familt Reg New Flow*/
"acceptDeclineInvite":"/svc/profiles/family/invitations",
"manageAdminSearch": "/svc/profiles/administrators",
"accessTurnOff": "/svc/profiles/family/administrators/{Id}"
};
Clazz.com.wag.config.stateList = {
"states": [
{

"name": "Alabama",
"abbr": "AL"
},
{

"name": "Alaska",
"abbr": "AK"
},
{

"name": "American Samoa",
"abbr": "AS"
},
{

"name": "Arizona",
"abbr": "AZ"
},
{

"name": "Arkansas",
"abbr": "AR"
},
{

"name": "California",
"abbr": "CA"
},
{

"name": "Colorado",
"abbr": "CO"
},
{

"name": "Connecticut",
"abbr": "CT"
},
{

"name": "Delaware",
"abbr": "DE"
},
{

"name": "District of Columbia",
"abbr": "DC"
},
{

"name": "Florida",
"abbr": "FL"
},
{

"name": "Georgia",
"abbr": "GA"
},
{

"name": "Guam",
"abbr": "GU"
},
{

"name": "Hawaii",
"abbr": "HI"
},
{

"name": "Idaho",
"abbr": "ID"
},
{

"name": "Illinois",
"abbr": "IL"
},
{

"name": "Indiana",
"abbr": "IN"
},
{

"name": "Iowa",
"abbr": "IA"
},
{

"name": "Kansas",
"abbr": "KS"
},
{

"name": "Kentucky",
"abbr": "KY"
},
{

"name": "Louisiana",












"abbr": "LA"
},
{

"name": "Maine",




















"abbr": "ME"
},
{

"name": "Maryland",




























"abbr": "MD"
},
{
"name": "Massachusetts",
"abbr": "MA"
},
{
"name": "Michigan",
"abbr": "MI"
},
{
"name": "Minnesota",
"abbr": "MN"
},
{
"name": "Mississippi",
"abbr": "MS"
},
{
"name": "Missouri",
"abbr": "MO"
},
{
"name": "Montana",
"abbr": "MT"
},
{
"name": "Nebraska",
"abbr": "NE"
},
{
"name": "Northern Marianas Islands",
"abbr": "MP"
},
{
"name": "Nevada",
"abbr": "NV"
},
{

"name": "New Hampshire",
"abbr": "NH"
},
{
"name": "New Jersey",
"abbr": "NJ"
},
{
"name": "New Mexico",
"abbr": "NM"
},
{

"name": "New York",
"abbr": "NY"
},
{
"name": "North Carolina",
"abbr": "NC"

},
{
"name": "North Dakota",
"abbr": "ND"
},
{

"name": "Ohio",
"abbr": "OH"
},
{

"name": "Oklahoma",
"abbr": "OK"
},
{

"name": "Oregon",
"abbr": "OR"
},
{
"name": "Pennsylvania",
"abbr": "PA"
},
{
"name": "Puerto Rico",
"abbr": "PR"
},
{

"name": "Rhode Island",
"abbr": "RI"
},
{

"name": "South Carolina",
"abbr": "SC"
},
{

"name": "South Dakota",
"abbr": "SD"
},
{

"name": "Tennessee",
"abbr": "TN"
},
{

"name": "Texas",
"abbr": "TX"
},
{

"name": "Utah",




"abbr": "UT"
},
{

"name": "Vermont",
"abbr": "VT"
},
{

"name": "Virginia",




"abbr": "VA"
},
{
"name": "Virgin Islands",






"abbr": "VI"
},
{
"name": "Washington",
"abbr": "WA"
},
{
"name": "West Virginia",
"abbr": "WV"
},
{
"name": "Wisconsin",
"abbr": "WI"
},
{

"name": "Wyoming",
"abbr": "WY"
},
{

"name": "Armed Forces (Americas)",
"abbr": "AA"
},
{

"name": "Armed Forces (Europe)",
"abbr": "AE"
},
{

"name": "Armed Forces (Pacific)",
"abbr": "AP"
}]
};
Clazz.com.wag.config.creditcardType={
"Visa": "VISA",
"MasterCard": "MasterCard",
"Amex": "Amex",
"Discover": "Discover"
};
Clazz.com.wag.config.qtyNumMaxForCart = 99;
Clazz.com.wag.config.baseIOSAppVersion = "6.9";
Clazz.com.wag.config.cardLengthAndPrefixMap=[{"cardType":"discover","length":["14","16"],"allowedPrefixes":["39","38","36","35","6011","65","64","30","628","626","625","624","622"]},{"cardType":"americanExpress","length":["15"],"allowedPrefixes":["37","34"]},{"blockedPrefixes":["515087"],"cardType":"masterCard","length":["16"],"allowedPrefixes":["27","26","25","56","24","55","23","54","22","53","52","51"]},{"cardType":"visa","length":["13","16"],"allowedPrefixes":["4"]}];
var cac_destination_url={
"ship_to_store":"/store/checkout/optimizedcheckout/ship_address.jsp#/ship_to_store",
"shipping_info":"/store/checkout/optimizedcheckout/ship_address.jsp#/shipping_info",
"shipping_contact_info":"/store/checkout/optimizedcheckout/ship_address.jsp#/shipping_contact_info",
"address_book":"/store/checkout/optimizedcheckout/ship_address.jsp#/address_book",
"county_info":"/store/checkout/optimizedcheckout/ship_address.jsp#/county_info",
"contact_info":"/store/checkout/optimizedcheckout/ship_address.jsp#/contact_info",
"alternate_contact_info":"/store/checkout/optimizedcheckout/ship_address.jsp#/alternate_contact_info",
"shipping_method_info":"/store/checkout/optimizedcheckout/ship_address.jsp#/shipping_method_info",
"loyalty_info":"/store/checkout/optimizedcheckout/payment_method.jsp#/loyalty_info",
"loyalty_info_edit":"/store/checkout/optimizedcheckout/payment_method.jsp#/loyalty_info_edit",
"payment_info":"/store/checkout/optimizedcheckout/payment_method.jsp#/payment_info",
"cl_customer_prescriber":"/store/checkout/cl_customer_prescriber_info.jsp",
"cl_customer_prescriber_info":"/store/checkout/cl_customer_prescriber_info.jsp",
"pickup_info":"/store/checkout/selectpickuptimesdd.jsp",
"optimize_review":"/store/checkout/optimizedcheckout/optimize_order_review.jsp",
"post_login_cart":"/store/checkout/checkout_redirection.jsp",
"iso_shipping":"/store/checkout/postcheckout.jsp",
"cart_info":"/store/checkout/cart.jsp",
"brLookupInfo":"/store/checkout/brmemberlookup.jsp?referral=CAC",
"order_detail_lookup":"/youraccount/orderstatus/order-history-details.jsp#/order_detail_lookup",
"rx_cl_presc_upload":"/store/checkout/rx_file_upload.jsp",
"confirm_order":"/store/checkout/confirmorder_sdd.jsp"
};
//Below variable added for session sharing
var hostNameRegexes = ["drugstore.com", "beauty.com"];
var excludeHostNameRegexes = "walgreens";