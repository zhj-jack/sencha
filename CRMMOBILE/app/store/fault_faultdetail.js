/*
 * File: app/store/fault_faultdetail.js
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

Ext.define('liftnet.store.fault_faultdetail', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'fault_faultdetail',
        fields: [
            {
                name: 'dtid',
                type: 'string'
            },
            {
                name: 'unitname',
                type: 'string'
            },
            {
                name: 'rpno',
                type: 'string'
            },
            {
                name: 'status',
                type: 'string'
            },
            {
                name: 'trno',
                type: 'string'
            },
            {
                name: 'finishcase',
                type: 'string'
            },
            {
                name: 'finishtime',
                type: 'string'
            },
            {
                name: 'brktime',
                type: 'string'
            },
            {
                name: 'faulttypename',
                type: 'string'
            },
            {
                name: 'procesdesc',
                type: 'string'
            },
            {
                name: 'causeanalysis',
                type: 'string'
            },
            {
                name: 'defectiveparts',
                type: 'string'
            },
            {
                name: 'variantdesc',
                type: 'string'
            },
            {
                name: 'handletime',
                type: 'string'
            },
            {
                name: 'stoptime',
                type: 'string'
            },
            {
                name: 'lifttype',
                type: 'string'
            },
            {
                name: 'storageid',
                type: 'string'
            },
            {
                name: 'istrap',
                type: 'string'
            },
            {
                name: 'traptime',
                type: 'string'
            },
            {
                name: 'trapnum',
                type: 'string'
            },
            {
                name: 'bailcase',
                type: 'string'
            },
            {
                name: 'operuser',
                type: 'string'
            },
            {
                name: 'remark',
                type: 'string'
            },
            {
                name: 'rpuser',
                type: 'string'
            },
            {
                name: 'rptime',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/fault/api/1.0/faultdetail';
            var userid = global.getUserId();
            var adapterParm = {userid:'用户ID', rpno:'报告单号（由后台从URI中获取）'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
            onFailure);
        } else {
            // 查看故障报告书-演示数据
            this.setData();

                onSuccess();
            }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(onSuccess, onFailure, parm) {

    }

});