/*
 * File: app/store/common_gzfxlist.js
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

Ext.define('liftnet.store.common_gzfxlist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'common_gzfxlist',
        fields: [
            {
                name: 'faulttype'
            },
            {
                name: 'faultcode'
            },
            {
                name: 'faultanalysis'
            },
            {
                name: 'ladder'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/rpt/api/1.0/gzyyfxlist';

            /*
                dutytime: '值班时间(预留)',
                userid: '用户ID'
            */

            callPostAdapter(
                url, parm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess(ret.data.length);
                },
                onFailure);
        } else {
            // 演示数据
            this.setData([
                {
                    faulttype: '人为原因',
                    faultcode: '101',
                    faultanalysis: '生活垃圾导致开关门受阻,电梯停止运行',
                    ladder:	''
                },
                {
                    faulttype: '人为原因',
                    faultcode: '102',
                    faultanalysis: '野蛮搬运导致门变形,电梯无法运行',
                    ladder:	''
                },
                {
                    faulttype: '人为原因',
                    faultcode: '103',
                    faultanalysis: '装载垃圾导致开关门受阻,电梯停止运行',
                    ladder:	''
                },
                {
                    faulttype: '外部原因',
                    faultcode: '201',
                    faultanalysis: '电梯运行过程中出现的停电',
                    ladder:	''
                },
                {
                    faulttype: '外部原因',
                    faultcode: '202',
                    faultanalysis: '电气部件进水导致的短路故障',
                    ladder:	''
                },
                {
                    faulttype: '外部原因',
                    faultcode: '203',
                    faultanalysis: '机房温度过高,电气控制系统自动保护',
                    ladder:	''
                },
                {
                    faulttype: '门系统',
                    faultcode: '301',
                    faultanalysis: '轿门锁失效',
                    ladder:	''
                },
                {
                    faulttype: '门系统',
                    faultcode: '302',
                    faultanalysis: '厅门锁失效',
                    ladder:	''
                },

            ]);

                onSuccess(2);
             }
    }

});