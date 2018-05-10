var logger;
function wlCommonInit() {
	WL.Logger.config({
		capture : false,
		autoSendLogs : false,
		autoUpdateConfig : false
	});
	logger = WL.Logger.create({
		pkg : "App"
	});
	logger.log("Started");
	//返回按钮
	
	WL.App.overrideBackButton(onBackPressed);

	WL.Client.connect({
    	onSuccess: onConnectSuccess,
    	onFailure: onConnectFailure
  	});
	
	WL.App.addActionReceiver('received a message',clickNotification);
}

function clickNotification(received){
	if(received.action==="received a message"){
		console.log(received);//LiftNetMobile 传过来的数据
        var tag = received.data.tag;
        if(tag){
            switch (tag){
                case "trrequestreceiver":
                    viewUtil.goNext('Engineer.EngFaultAccept',{
                    	state:'未接收',
                    	trno :received.data.id,
                    	nextstate:''
                    });
                    break;
                    
                case "byrwreceiver":
                    viewUtil.goNext('Engineer.EngReception',{
                    	jnlno :received.data.id,
                    });
                    break;
            }
                    
        }
	}
}

function onConnectSuccess(){
	console.log('-----ConnectSuccess-----');
}

function onConnectFailure(){
	console.log('-----ConnectFailure-----');
}

var exitTime = 0;
function onBackPressed () {
	var currentView = Ext.Viewport.getActiveItem();
        var currentViewId = currentView.getId();
		if(currentViewId==='EngHome' ||　currentViewId==='ComConnecting' || currentViewId==='ComLogin'){
			//退出应用
			if((new Date().getTime()-exitTime) > 2000){
				Ext.toast('再按一次退出程序');                                 
            	exitTime = new Date().getTime();   
        	} else {
            	WL.App.close();
        	}
		}else{
			//返回上一页
			viewUtil.goLast();
		}
}

function callPostAdapter(url, jsonobj, onSuccessCallback, onFailCallback) {
	var req = new WLResourceRequest(url, WLResourceRequest.POST);
	var parm = jsonobj;
	req.setHeader("Content-Type", "application/json");
	req.send(parm).then(
        function(rep) {
            console.log(url, parm, rep.responseJSON);
            if(onSuccessCallback && typeof (onSuccessCallback) === "function") {
                onSuccessCallback(rep.responseJSON);                
            }
        },
        function(rep) {
            console.log(url, parm, rep);
            if(onFailCallback && typeof (onFailCallback) === "function") {
                onFailCallback();
            }
        }
    );
}


function submitCredentials() {
	console.log("开始Worklight服务器验证...");
	
	loadMask.show();
	
	username = Ext.getCmp('ComLogin_fldUserid').getValue();
	password = Ext.getCmp('ComLogin_fldPassword').getValue();

	var reqURL = '/my_custom_auth_request_url';
	var options = {};
	options.parameters = {
		username : username,
		password : password
	};
	options.headers = {};
	customAuthenticatorRealmChallengeHandler.submitLoginForm(reqURL, options,
        customAuthenticatorRealmChallengeHandler.submitLoginFormCallback);
}

function getSecretData() {
	var invocationData = {
		adapter : "DummyAdapter",
		procedure : "getSecretData",
		parameters : []
	};

	WL.Client.invokeProcedure(invocationData, {
        onSuccess : function() {},
		onFailure : function() {}
	});
}
