_satellite.pushAsyncScript(function(event, target, $variables){
  function loadAdvertiseScript(src, callback) {
	var advertiseScript = document.createElement('script');
	advertiseScript.src = src;
	advertiseScript.type = 'text/javascript';
	advertiseScript.onreadystatechange = advertiseScript.onerror = function() {
    var state = advertiseScript.readyState;
    if (!callback.done && (!state || /loaded|complete/.test(state))) {
			callback.done = true;
			callback();
		}
	};
	document.body.appendChild(advertiseScript);
}
loadAdvertiseScript('/share/jslib/custom/advertise.js', function() {
	if (window.isAdvertiseJSBlocked === undefined) {
		$(document).trigger("triggerDTM", "WAG_Ad_Blocker_EVAR83");
	}
});

setTimeout(function(){
var url = window.location.href;
if (url.indexOf('verify_identity.jsp?fromTab') > -1) {
  $("a[href='tel:8772505823']").parent().hide();
	$("a[href='tel:8772505823']").parent().prev().hide();
} }, 30);


setTimeout(function(){
var url = window.location.href;
if (url.indexOf('/register/regpersonalinfo.jsp') > -1) {
  if(encodedJsonVal){
$("#wagHeaderLogoContainer").hide();
$("#wag-footer-main-container").hide();
$("#wag-aconfomin-signin1").parent().hide();
$("#wag-aconfomin-signin1").parent().next().hide(); 
$("#new-nav-main-menu").hide();    
}
} }, 30);

});
