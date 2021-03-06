/*
 * File: app/store/ss_guserlist.js
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

Ext.define('liftnet.store.ss_guserlist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'ss_guserlist',
        fields: [
            {
                name: 'userid',
                type: 'string'
            },
            {
                name: 'username',
                type: 'string'
            },
            {
                name: 'phone',
                type: 'string'
            },
            {
                name: 'lat',
                type: 'string'
            },
            {
                name: 'lon',
                type: 'string'
            },
            {
                name: 'addr',
                type: 'string'
            },
            {
                name: 'status',
                type: 'string'
            },
            {
                name: 'time',
                type: 'string'
            },
            {
                name: 'statuscolor',
                type: 'string'
            },
            {
                name: 'statusicon',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/ss/api/1.0/guserlist';
            var userid = global.getUserId();
            var adapterParm = {userid: userid, searchuser:''};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    //me.setData(ret.data);
                    //onSuccess(ret.data.length);
                },
                onFailure);
        } else {
            // 人员信息-演示数据
            // statuscolor ：状态的颜色
            // 字段 statuscolor 根据status设置；
            this.setData([
                {
                    userid:'czl',
                    username: '陈梓路',
                    phone: '13659934422',
                    lat: '23.123709',
                    lon: '113.246256',
                    addr: '荔湾区 新城市逢源轩',
                    status: '维修中',
                    time: '2015-11-28 17:20',
                    statuscolor: 'liftnet-fontColor-red',
                    statusicon: 'resources/images/trackListBox-icon02.png',
                },
                {
                    userid:'ldb',
                    username: '李大白',
                    phone: '13659999999',
                    lat: '23.119762',
                    lon: '113.245991',
                    addr: '荔湾区 恩宁路9号',
                    status: '路途中',
                    time: '2015-11-30 10:10',
                    statuscolor: 'liftnet-fontColor-green',
                    statusicon: 'resources/images/trackListBox-icon01.png',
                },
                {
                    userid:'djm',
                    username: '杜荆门',
                    phone: '13674858458',
                    lat: '23.131204',
                    lon: '113.240938',
                    addr: '荔湾区 中山八路86号',
                    status: '路途中',
                    time: '2015-12-01 08:01',
                    statuscolor: 'liftnet-fontColor-green',
                    statusicon: 'resources/images/trackListBox-icon01.png',
                },
                {
                    userid:'yyz',
                    username: '严远征',
                    phone: '13832762387',
                    lat: '23.123801',
                    lon: '113.230068',
                    addr: '万科柏悦湾',
                    status: '维修中',
                    time: '2015-12-02 12:31',
                    statuscolor: 'liftnet-fontColor-red',
                    statusicon: 'resources/images/trackListBox-icon02.png',
                }
            ]);

            onSuccess(4);
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});