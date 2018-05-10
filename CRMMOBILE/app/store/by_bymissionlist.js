/*
 * File: app/store/by_bymissionlist.js
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

Ext.define('liftnet.store.by_bymissionlist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'by_bymissionlist',
        fields: [
            {
                name: 'BillNo'
            },
            {
                name: 'rowid'
            },
            {
                name: 'ServiceNo'
            },
            {
                name: 'WorkDate'
            },
            {
                name: 'worktype'
            },
            {
                name: 'WorkWeekDay'
            },
            {
                name: 'WorkSTime'
            },
            {
                name: 'WorkETime'
            },
            {
                name: 'WorkAddress'
            },
            {
                name: 'htbh'
            },
            {
                name: 'contractnumber'
            },
            {
                name: 'projectname'
            },
            {
                name: 'projectaddress'
            },
            {
                name: 'url'
            },
            {
                name: 'taskstate'
            },
            {
                name: 'stateUrl'
            },
            {
                name: 'stateColor'
            },
            {
                name: 'titleIcon'
            },
            {
                name: 'titleColor'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        this.setData([]);
        console.log(JsonUtil.convertToString(parm));
        if(global.isWorklight()) {// adapter取数
            var url = '/adapters/by/api/1.0/bymissionlist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    var d = me.decoDat(ret.data);
                    me.setData(d);
                    onSuccess(d.length);
                },
                onFailure);
        } else {
            // 演示数据
            var d = this.decoDat([
                {
                    BillNo:		'BY2015000001',
                    rowid:		'0',
                    ServiceNo:	'SNO-123456',
                    WorkDate:	'2015-12-01',
                    worktype:	'保养',
                    WorkWeekDay:'二',
                    WorkSTime:	'08:00',
                    WorkETime:	'10:00',
                    WorkAddress:'广州凯旋大酒店有限公司',
                    htbh:		'15保110',
                    contractnumber:'10',
                    projectname:'第一项目',
                    projectaddress:'广州凯旋大酒店有限公司',
                    url:		'查询明细url',
                    taskstate:	'全部已分派',
                    stateColor:	'',
                    stateUrl:	'',
                    titleIcon:	'',
                    titleColor:	''
                },
                {
                    BillNo:		'BY2015000002',
                    rowid:		'0',
                    ServiceNo:	'SNO-123456',
                    WorkDate:	'2015-12-01',
                    worktype:	'保养',
                    WorkWeekDay:'二',
                    WorkSTime:	'08:00',
                    WorkETime:	'10:00',
                    WorkAddress:'广州市荔湾区黄沙大道144号大冶有色大厦',
                    htbh:		'15保112',
                    contractnumber:'9',
                    projectname:'第一点五项目',
                    projectaddress:'广州市荔湾区黄沙大道144号大冶有色大厦',
                    url:		'查询明细url',
                    taskstate:	'部分未分派',
                    stateColor:	'',
                    stateUrl:	'',
                    titleIcon:	'',
                    titleColor:	''
                },
                {
                    BillNo:		'BY2015000003',
                    rowid:		'0',
                    ServiceNo:	'SNO-123456',
                    WorkDate:	'2015-12-01',
                    worktype:	'保养',
                    WorkWeekDay:'二',
                    WorkSTime:	'08:00',
                    WorkETime:	'10:00',
                    WorkAddress:'广州市荔湾区黄沙大道4号逸翠湾',
                    htbh:		'15保115',
                    contractnumber:'8',
                    projectname:'第二项目',
                    projectaddress:'广州市荔湾区黄沙大道4号逸翠湾',
                    url:		'查询明细url',
                    taskstate:	'未分派',
                    stateColor:	'',
                    stateUrl:	'',
                    titleIcon:	'',
                    titleColor:	''
                }
            ]);
            this.setData(d);
            onSuccess(d.length);
        }
    },

    decoDat: function(data) {
        // stateUrl:	状态的图片地址
        // stateColor:	状态的颜色
        // titleIcon:	标题的图标
        // titleColor:	标题的颜色

        if(!data) return([]);

        for(var i=0;i<data.length; i++) {
            switch(data[i].taskstate) {
                case '未分派':
                    data[i].stateColor = 'liftnet-fontColor-red';
                    data[i].stateUrl   = 'resources/images/maintenance_icon01.png';
                    data[i].titleIcon  = '<i class="ln ln-message1"></i>';
                    data[i].titleColor = 'liftnet-fontColor-red';
                    break;

                case '全部已分派':
                    data[i].stateColor = 'liftnet-fontColor-blue';
                    data[i].stateUrl   = 'resources/images/maintenance_icon02.png';
                    data[i].titleIcon  = '<i class="ln ln-message1"></i>';
                    data[i].titleColor = 'liftnet-fontColor-blue';
                    break;

                case '部分未分派':
                    data[i].stateColor = 'liftnet-fontColor-orange';
                    data[i].stateUrl   = 'resources/images/maintenance_icon03.png';
                    data[i].titleIcon  = '<i class="ln ln-message1"></i>';
                    data[i].titleColor = 'liftnet-fontColor-orange';
                    break;
            }
        }

        return(data);
    },

    filteDat: function(parm) {
        this.clearFilter();
         console.log(parm);
        if(parm!=='') {
            this.filterBy(function(item) {
                var s = item.get("projectname") + ' ' + item.get("projectaddress") + ' ' + item.get("htbh")+' ' + item.get("taskstate");
                console.log(s);
                return (s.toUpperCase().indexOf(parm.toUpperCase())>=0);
            });
        }
    }

});