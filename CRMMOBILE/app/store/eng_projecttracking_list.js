/*
 * File: app/store/eng_projecttracking_list.js
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

Ext.define('liftnet.store.eng_projecttracking_list', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_projecttracking_list',
        fields: [
            {
                name: 'projectjnlno'
            },
            {
                name: 'custname'
            },
            {
                name: 'creator'
            },
            {
                name: 'projectname'
            },
            {
                name: 'elevatornum'
            },
            {
                name: 'flowtype'
            },
            {
                name: 'createdate'
            },
            {
                name: 'projectstatusname'
            },
            {
                name: 'contractstatusname'
            },
            {
                name: 'statusColor'
            },
            {
                name: 'urgent'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm, action) {
        var me = this;

        if(global.isWorklight()) {
            var url = '/adapters/projecttrack/api/1.0/xmgzlist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    var info;
                    if(ret.status.code!=200){
                        if(parm.searchkey!==''){
                            onFailure('搜索项目跟踪列表失败');
                            return;
                        }
                        onFailure('读取项目跟踪列表失败');
                    }else{
                        if(ret.data.length===0){
                            if(parm.curpagenum===1){
                                switch(action){
                                    case 'refresh':
                                        info = '没有项目跟踪数据';
                                        break;
                                    case 'loadmore':
                                        break;
                                    case 'firstload':
                                        info = '没有项目跟踪数据';
                                        break;
                                    case 'search':
                                        info = '没有相关项目跟踪数据';
                                        break;
                                }

                                me.setData(ret.data);
                                onFailure(info);
                            }else{
                                onFailure('没有更多数据！');
                            }

                            return;
                        }

                        var d = me.decoDat(ret.data);
                        //第一次加载直接设置数据
                        if(parm.curpagenum==1){
                            me.setData(d);
                        }else{
                            //分页用法，在原有数据上继续添加
                            var n = d.length;
                            for(var i=0; i<n; i++) {
                                me.add(d[i]);
                            }
                        }

                        if(action==='loadmore'){
                            onSuccess(d.length);
                        }else{
                            onSuccess('resetCurPage');
                        }
                    }
                },
                function() {
                    var info;
                    switch(action){
                        case 'refresh':
                            info = '刷新项目跟踪数据失败';
                            break;
                        case 'loadmore':
                            info = '加载更多项目跟踪数据失败';
                            break;
                        case 'firstload':
                            info = '获取项目跟踪数据失败';
                            break;
                        case 'search':
                            info = '搜索项目跟踪失败';
                            break;
                    }
                    onFailure(info);

                }
            );


        } else {
            //分页模拟
            var start = (parm.curpagenum-1)*20,
                end = parm.curpagenum * parm.pagesize;

            if(end>60){
                onFailure('没有更多数据！');
                return;
            }

            for(var i=start; i<end; i++) {
                this.add({
                    projectjnlno: 		'XM160422002',//项目编号
                    custname:			'广州中梯物联测试.'+(i),//客户名称
                    creator:			'吴维',//业务员
                    projectname: 		'广州中梯物联测试.' + (i + 1),//项目名称
                    elevatornum: 		2,//电梯台数
                    flowtype:			'普通',//跟进形式
                    createdate:			'2016-04-22',//创建日期
                    projectstatusname:	'允许跟进',//项目状态名
                    contractstatusname:	'通过' //合同状态名


                });
            }
            if(action=='firstload'||action=='refresh'||action=='search'){
                onSuccess('resetCurPage');
                return;
            }

            onSuccess(end - start + 1);

        }
    },

    decoDat: function(data) {
        if(!data) return([]);

        var statusArr = [];

        statusArr['新建']= { code:'1',   color:'green' };
        statusArr['待审']= { code:'2', color:'gray' };
        statusArr['退出跟进']= { code:'3', color:'red' };
        statusArr['暂停跟进']= { code:'4', color:'orange' };
        statusArr['允许跟进']= { code:'5', color:'blue' };




        for(var i=0;i<data.length; i++) {
            var state = data[i].projectstatusname;
            if(!statusArr[state]) {
                Ext.toast('sx_sxlist 未知状态：' + state);
                continue;
            }

            data[i].statusColor = 'liftnet-fontColor-' + statusArr[state].color;

            if(state==='新建') {
                data[i].urgent = '<div class="liftnet-remindBg liftnet-remindBg-orange"></div><div class="liftnet-remind liftnet-font-size12">新</div>';
            }
        }

        return(data);
    }

});