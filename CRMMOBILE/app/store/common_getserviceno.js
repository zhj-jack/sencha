/*
 * File: app/store/common_getserviceno.js
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

Ext.define('liftnet.store.common_getserviceno', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'common_getserviceno',
        fields: [
            {
                name: 'prodno'
            },
            {
                name: 'unitname'
            },
            {
                name: 'modelid'
            },
            {
                name: 'modelname'
            },
            {
                name: 'facid'
            },
            {
                name: 'facname'
            },
            {
                name: 'contractid'
            },
            {
                name: 'floor'
            },
            {
                name: 'stage'
            },
            {
                name: 'door'
            },
            {
                name: 'projectid'
            },
            {
                name: 'projectname'
            },
            {
                name: 'projectaddress'
            },
            {
                name: 'liftloaction'
            },
            {
                name: 'userlin'
            },
            {
                name: 'kman'
            },
            {
                name: 'userlinkphone'
            },
            {
                name: 'elevatorno'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/shouxin/api/1.0/trliftlist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    var d = ret.data;
                    var n = d.length;
                    for(var i=0; i<n; i++) {
                        me.add(d[i]);
                    }
                    onSuccess(n);
                },
                onFailure);
        } else {
            var start = (parm.curpagenum-1)*parm.pagesize+1, end = start + parm.pagesize-1;

            for(var i=start; i<=end; i++) {
                this.add({
                    prodno: i + '-1234-5678-90',
                    unitname: '广州市华越友联科技发展有限公司',
                    elevatorno: '1234-5678-9012',
                    floor: '20',
                    stage: '20',
                    door: '20',
                    specno: '888',
                    modelid:'XH123123',
                    modelname: '888-999',
                    facid:'PP123',
                    facname: '日立牌'
                });
            }
            // 演示数据
            onSuccess(end - start + 1);
        }
    }

});