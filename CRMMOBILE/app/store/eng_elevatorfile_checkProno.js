/*
 * File: app/store/eng_elevatorfile_checkProno.js
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

Ext.define('liftnet.store.eng_elevatorfile_checkProno', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_elevatorfile_checkProno',
        fields: [
            {
                name: 'userid'
            },
            {
                name: 'prono'
            }
        ]
    },

    updateDat: function(onSuccess, onFailure, parm) {
        var me = this;
        console.log('调用检测设备注册码接口：');
        console.log(parm);
        if(global.isWorklight()) {
            var url = '/adapters/common/api/1.0/checkprono';
            callPostAdapter(
                url, parm,
                function(ret) {
                    if(ret.status.code===200) {
                        onSuccess(ret.data[0].liftstatus);
                    } else {
                        console.log(ret.status.info);
                        onFailure(ret.status.info);
                    }
                },
                function() {
                    onFailure('(未知)');
                }
            );
        } else {
            //onSuccess(0);
            onSuccess(1);
        }
    }

});