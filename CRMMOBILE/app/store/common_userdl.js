/*
 * File: app/store/common_userdl.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('liftnet.store.common_userdl', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'common_userdl',
        fields: [
            {
                name: 'r4',
                type: 'string'
            },
            {
                name: 'username',
                type: 'string'
            },
            {
                name: 'img',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/common/api/1.0/userdl';
            var userid = global.getUserId();
            var adapterParm = {userid: '用户ID', password: '密码'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
            onFailure);
        } else {
            // 登录-演示数据
            this.setData();

                onSuccess();
            }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});