/*
 * File: app/store/sx_reportlist_todo.js
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

Ext.define('liftnet.store.sx_reportlist_todo', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'sx_reportlist_todo',
        fields: [
            {
                name: 'rpno'
            },
            {
                name: 'dtid'
            },
            {
                name: 'unitname'
            },
            {
                name: 'addr'
            },
            {
                name: 'brktime'
            },
            {
                name: 'faulttypename'
            },
            {
                name: 'procesdesc'
            },
            {
                name: 'causeanalysis'
            },
            {
                name: 'operuser'
            },
            {
                name: 'rpuser'
            },
            {
                name: 'rptime'
            },
            {
                name: 'clientscore'
            },
            {
                name: 'url'
            },
            {
                name: 'state'
            },
            {
                name: 'nextstate'
            },
            {
                name: 'color'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        //console.log(JsonUtil.convertToString(parm));
        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/sx/api/1.0/reportlist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    var d = me.decoDat(ret.data);
                    me.setData(d);
                    onSuccess(d.length);
                },
                onFailure);
        } else {

            // 故障业务-故障报告书列表-演示数据
            var d = this.decoDat([
                {
                    rpno:			'20151201001', //报告编号
                    dtid:			'1234-5678-9000',
                    unitname:		'广州市华越友联科技发展有限公司',
                    addr:			'故障地址',
                    brktime:		'2015-11-30', //故障发生时间
                    faulttypename:	'故障现象',
                    procesdesc:		'故障处理结果',
                    causeanalysis:	'故障原因分析',
                    operuser:		'李小明',
                    rpuser:			'报告人',
                    rptime:			'2015-12-01 10:00:00', //报告时间
                    clientscore:	'客户评价',
                    url:			'查询明细url',
                    state:			'待提交', //处理状态(当前状态)
                    nextstate: [
                        {name:"提交",url:"http://127.0.0.1/提交"}
                    ],
                },
                {
                    rpno:			'20151201002', //报告编号
                    dtid:			'1234-5678-9000',
                    unitname:		'广州市荔湾区黄沙大道4号逸翠湾',
                    addr:			'故障地址',
                    brktime:		'2015-11-30', //故障发生时间
                    faulttypename:	'故障现象',
                    procesdesc:		'故障处理结果',
                    causeanalysis:	'故障原因分析',
                    operuser:		'作业人员',
                    rpuser:			'张三丰',
                    rptime:			'2015-12-01 10:00:00', //报告时间
                    clientscore:	'客户评价',
                    url:			'查询明细url',
                    state:			'待提交', //处理状态(当前状态)
                    nextstate: [
                        {name:"提交",url:"http://127.0.0.1/提交"}
                    ],
                },
                {
                    rpno:			'20151201003', //报告编号
                    dtid:			'1234-5678-9000',
                    unitname:		'广州市华越友联科技发展有限公司',
                    addr:			'故障地址',
                    brktime:		'2015-11-30', //故障发生时间
                    faulttypename:	'故障现象',
                    procesdesc:		'故障处理结果',
                    causeanalysis:	'故障原因分析',
                    operuser:		'作业人员',
                    rpuser:			'李四',
                    rptime:			'2015-12-01 10:00:00', //报告时间
                    clientscore:	'客户评价',
                    url:			'查询明细url',
                    state:			'已完成', //处理状态(当前状态)
                    nextstate: [
                    ],
                },
                {
                    rpno:			'20151201003', //报告编号
                    dtid:			'1234-5678-9000',
                    unitname:		'广州市华越友联科技发展有限公司',
                    addr:			'故障地址',
                    brktime:		'2015-11-30', //故障发生时间
                    faulttypename:	'故障现象',
                    procesdesc:		'故障处理结果',
                    causeanalysis:	'故障原因分析',
                    operuser:		'作业人员',
                    rpuser:			'李四',
                    rptime:			'2015-12-01 10:00:00', //报告时间
                    clientscore:	'客户评价',
                    url:			'查询明细url',
                    state:			'已审核', //处理状态(当前状态)
                    nextstate: [
                    ],
                },
            ]
            );
            this.setData(d);
            onSuccess(d.length);
        }
    },

    filteDat: function(parm) {
        this.clearFilter();

        if(parm!=='') {
            this.filterBy(function(item) {
                var s = item.get("unitname") + ' ' + item.get("addr");
                return (s.toUpperCase().indexOf(parm.toUpperCase())>=0);
            });
        }
    },

    decoDat: function(data) {
        if(!data) return([]);

        for(var i=0;i<data.length; i++) {
            switch(data[i].state) {
                case '待提交':
                    data[i].color = 'liftnet-fontColor-green';
                    break;

                case '已完成':
                    data[i].color = 'liftnet-fontColor-orange';
                    break;

                case '已审核':
                    data[i].color = 'liftnet-fontColor-darkGray';
                    break;
            }
        }

        return(data);
    }

});