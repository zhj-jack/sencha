/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */
var customAuthenticatorRealmChallengeHandler = WL.Client.createChallengeHandler("CustomAuthenticatorRealm");

customAuthenticatorRealmChallengeHandler.isCustomResponse = function(response) {
    if (!response || !response.responseJSON) {
        return false;
    }

    if (response.responseJSON.authStatus)
        return true;
    else
        return false;
};

customAuthenticatorRealmChallengeHandler.handleChallenge = function(response) {
    var authStatus = response.responseJSON.authStatus;
    console.log('handleChallenge', authStatus);
    if (authStatus == "required") {
        viewUtil.go("Common.ComLogin");
        if(global.getClickLoginButton()){
            Ext.toast('用户名或密码错误！');
        }
    } else if (authStatus == "complete") {
        var un = Ext.getCmp('ComLogin_fldUserid').getValue();
        var pw = Ext.getCmp('ComLogin_fldPassword').getValue();
        var url = '/adapters/common/api/1.0/userdl';
        var adapterParm = {
            userid : un,
            password : pw
        };

        callPostAdapter(url, adapterParm, 
                        function(data) {
                        }, 
                        function() {
                            Ext.toast('密码错误，请重新登录！');
                        }
                       );

        customAuthenticatorRealmChallengeHandler.submitSuccess();
    }
};

customAuthenticatorRealmChallengeHandler.submitLoginFormCallback = 
    function(response) {
    var isLoginFormResponse = customAuthenticatorRealmChallengeHandler.isCustomResponse(response);
    if (isLoginFormResponse) {
        customAuthenticatorRealmChallengeHandler.handleChallenge(response);
    }
};