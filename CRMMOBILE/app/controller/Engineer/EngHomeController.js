/*
 * File: app/controller/Engineer/EngHomeController.js
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

Ext.define('liftnet.controller.Engineer.EngHomeController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.EngHomeController',

    config: {
        control: {
            "container#EngHome": {
                initialize: 'onEngHomeInitialize'
            },
            "tabpanel#EngHome": {
                show: 'onEngHomeShow',
                activeitemchange: 'onEngHomeActiveItemChange'
            },
            "searchfield#EngHome_FldSearchTodo": {
                keyup: 'onEngHome_FldSearchTodoKeyup',
                clearicontap: 'onEngHome_FldSearchTodoClearicontap'
            },
            "searchfield#EngHome_MixSearchTodo": {
                change: 'onEngHome_MixSearchTodoKeyup'
            },
            "datepickerfield#EngHomeTodo_date1": {
                change: 'onEngHomeTodo_date1Change'
            },
            "datepickerfield#EngHomeTodo_date2": {
                change: 'onEngHomeTodo_date2Change'
            },
            "button#EngHome_btnNav": {
                tap: 'onEngHome_btnNavTap'
            },
            "button#EngHome_BtnAdd": {
                tap: 'onEngHome_BtnAddTap'
            },
            "list#EngHome_ListFault": {
                itemtap: 'onEngHome_ListFaultItemTap'
            },
            "list#EngHome_ListMaintain": {
                itemtap: 'onEngHome_ListMaintainItemTap'
            },
            "list#EngHome_ListReport": {
                itemtap: 'onEngHome_ListReportItemTap'
            },
            "container#EngHome_Home": {
                initialize: 'onEngHome_HomeTodoInitialize'
            },
            "container#EngFault": {
                initialize: 'onEngFaultInitialize'
            },
            "container#EngMaintain": {
                initialize: 'onEngMaintainInitialize'
            },
            "button#EngFault_ReturnButton": {
                tap: 'onEngFault_ReturnButtonTap'
            },
            "button#EngMaintain_ReturnButton": {
                tap: 'onEngMaintain_ReturnButtonTap'
            },
            "button#EngHomeTodo_BtnStatus": {
                tap: 'onEngHomeTodo_BtnStatusTap'
            },
            "button#EngHomeTodoStatus_0": {
                tap: 'onEngHomeTodoStatus_0Tap'
            },
            "button#EngHomeTodoStatus_1": {
                tap: 'onEngHomeTodoStatus_1Tap'
            },
            "button#EngHomeTodoStatus_2": {
                tap: 'onEngHomeTodoStatus_2Tap'
            },
            "button#EngHomeTodoStatus_3": {
                tap: 'onEngHomeTodoStatus_3Tap'
            },
            "button#EngHomeTodoStatus_4": {
                tap: 'onEngHomeTodoStatus_4Tap'
            },
            "button#EngHomeTodoStatus_5": {
                tap: 'onEngHomeTodoStatus_5Tap'
            },
            "list#EngHome_TodoListAll": {
                itemtap: 'onEngHome_TodoListAllItemTap'
            }
        }
    },

    /*

        ********** 首页 标签 **********

    */
    onEngHomeInitialize: function(component, eOpts) {
        var me = this;
        //获取权限
        var userJurisdictionStore = dataUtil.createStore('common_userjurisdiction');
        userJurisdictionStore.loadDat(
            function(ret){
                Ext.getCmp('EngHome_BtnAdd').setHidden(ret.addjurisdiction==='N');
            },
            function(){
                Ext.toast("获取用户权限失败");
            }
        );

        // 初始化主菜单
        var onNavButtonTap = function(button, e, eOpts) {
            var view = button.config.openView;
            if(view!=='') {
                viewUtil.goNext(view);
            }else{
                Ext.toast(button.config.text+'模块正在开发中'+'<br><br>'+'敬请期待！');
            }
        };
        // 4*3
        var navBtnConfig = [
            { icon:'trace', iconColor:'red', text:'项目跟踪', view:'Engineer.EngProjectTrackingList', style:'' },
            { icon:'find', iconColor:'blue', text:'合同查询', view:'Engineer.EngContractType', style:'' },
            { icon:'file', iconColor:'orange', text:'电梯档案', view:'Engineer.EngElevatorFile', style:'' },
            { icon:'customer', iconColor:'green', text:'客户维护', view:'Engineer.EngCustomer', style:'' },

            { icon:'checkmark', iconColor:'green', text:'日常任务', view:'', style:'' },
            { icon:'maintain', iconColor:'orange', text:'保养任务', view:'Engineer.EngMaintainPlan', style:'' },
            { icon:'repair', iconColor:'green', text:'维修任务', view:'Engineer.EngFault', style:'' },
            { icon:'find-voucher', iconColor:'red', text:'质检任务', view:'Engineer.EngQualityCheck', style:'' },//Engineer.EngQualityCheck

            { icon:'tools', iconColor:'red', text:'工具', view:'', style:'' },
            { icon:'book', iconColor:'red', text:'知识库', view:'', style:'' },
            { icon:'notice', iconColor:'blue', text:'公告', view:'Common.ComHomeNews', style:'' },
            { icon:'report', iconColor:'orange', text:'报表', view:'', style:'' },//Engineer.EngReport
        ];
        // 4*4
        // var navBtnConfig = [
        //     { icon:'trace', iconColor:'red', text:'项目跟踪', view:'', style:'' },
        //     { icon:'find', iconColor:'blue', text:'合同查询', view:'', style:'' },
        //     { icon:'file', iconColor:'orange', text:'电梯档案', view:'', style:'' },
        //     { icon:'customer', iconColor:'green', text:'客户维护', view:'', style:'' },

        //     { icon:'install', iconColor:'blue', text:'安装任务', view:'' },
        //     { icon:'maintain', iconColor:'orange', text:'保养任务', view:'Engineer.EngMaintain', style:'' },
        //     { icon:'repair', iconColor:'green', text:'维修任务', view:'Engineer.EngFault', style:'' },
        //     { icon:'find-voucher', iconColor:'red', text:'质检任务', view:'Engineer.EngQualityCheck', style:'' },

        //     { icon:'upgrade', iconColor:'orange', text:'改造任务', view:'', style:'' },
        //     { icon:'checkmark', iconColor:'green', text:'日常任务', view:'', style:'' },
        //     { icon:'tools', iconColor:'red', text:'工具', view:'', style:'' },
        //     { icon:'parts', iconColor:'blue', text:'配件', view:'', style:'' },

        //     { icon:'safe', iconColor:'green', text:'安全', view:'', style:'' },
        //     { icon:'book', iconColor:'red', text:'知识库', view:'', style:'' },
        //     { icon:'notice', iconColor:'blue', text:'公告', view:'Common.ComHomeNews', style:'' },
        //     { icon:'report', iconColor:'orange', text:'报表', view:'Engineer.EngReport', style:'' },
        // ];
        var navBtn = [];
        for(i=0; i<navBtnConfig.length; i++) {
            navBtn[i] = {
                xtype: 'button',
                text: navBtnConfig[i].text,
                iconCls: 'ln3 ln3-' + navBtnConfig[i].icon,
                iconAlign: 'top',
                cls: 'liftnet-home-nav-' + navBtnConfig[i].iconColor,
                style: navBtnConfig[i].style,
                listeners: [
                    {
                        fn: onNavButtonTap,
                        event: 'tap'
                    }
                ],
                openView: navBtnConfig[i].view
            };
        }
        Ext.getCmp('EngHome_NavPanel').setItems(navBtn);

        // 初始化下拉刷新、滑动按钮插件
        var faultList = Ext.getCmp('EngHome_ListFault');
        faultList.setPlugins(
            [
                {
                    autoSnapBack: false,
                    lastUpdatedText: '上次刷新:&nbsp;',
                    loadedText: '已刷新',
                    loadingText: '正在刷新故障待办任务...',
                    pullText: '下拉刷新...',
                    releaseText: '放开开始刷新...',
                    type: 'pullrefresh',
                    listeners : {
                        latestfetched : function() {
                            me.doEngHome_LoadTodoFault();
                        }
                    }
                },
                {
                    xclass: 'ux.SlideActions',
                    openPosition: 100,
                    buttons:
                    [
                        // 按钮1
                        {
                            xtype: 'button',
                            baseCls: 'x-button liftnet-list-button liftnet-bgColor-blue',
                            text: '1',
                            initial: function(button) {
                                liftnet.app.getController('Engineer.EngFaultController').
                                doEngFault_InitialNextStateButton(button, 0);
                            },
                            listeners: {
                                tap: function(button, e){
                                    e.stopPropagation();
                                    return false;
                                },
                                scope: this
                            },
                            handler: function(button, e) {
                                faultList.fireEvent('hide'); // 隐藏列表的滑动按钮组
                                liftnet.app.getController('Engineer.EngFaultController').
                                doEngFault_Process({
                                    record: button.getRecord(),
                                    operationIndex: 0
                                });
                            }
                        },
                        // 按钮2
                        {
                            xtype: 'button',
                            baseCls: 'x-button liftnet-list-button liftnet-bgColor-green',
                            text: '2',
                            initial: function(button) {
                                liftnet.app.getController('Engineer.EngFaultController').
                                doEngFault_InitialNextStateButton(button, 1);
                            },
                            listeners: {
                                tap: function(button, e){
                                    e.stopPropagation();
                                    return false;
                                },
                                scope: this
                            },
                            handler: function(button, e) {
                                faultList.fireEvent('hide'); // 隐藏列表的滑动按钮组
                                liftnet.app.getController('Engineer.EngFaultController').
                                doEngFault_Process({
                                    record: button.getRecord(),
                                    operationIndex: 1
                                });
                            }
                        },
                        // 按钮3
                        {
                            xtype: 'button',
                            baseCls: 'x-button liftnet-list-button liftnet-bgColor-orange',
                            text: '3',
                            initial: function(button) {
                                liftnet.app.getController('Engineer.EngFaultController').
                                doEngFault_InitialNextStateButton(button, 2);
                            },
                            listeners: {
                                tap: function(button, e){
                                    e.stopPropagation();
                                    return false;
                                },
                                scope: this
                            },
                            handler: function(button, e) {
                                faultList.fireEvent('hide'); // 隐藏列表的滑动按钮组
                                liftnet.app.getController('Engineer.EngFaultController').
                                doEngFault_Process({
                                    record: button.getRecord(),
                                    operationIndex: 2
                                });
                            }
                        }
                    ]
                }
            ]
        );

        var maintainList = Ext.getCmp('EngHome_ListMaintain');
        maintainList.setPlugins(
            [
                {
                    autoSnapBack: false,
                    lastUpdatedText: '上次刷新:&nbsp;',
                    loadedText: '已刷新',
                    loadingText: '正在刷新保养待办...',
                    pullText: '下拉刷新...',
                    releaseText: '放开开始刷新...',
                    type: 'pullrefresh',
                    listeners : {
                        latestfetched : function() {
                            me.doEngHome_LoadTodoMaintain();
                        }
                    }
                },
                {
                    xclass: 'ux.SlideActions',
                    openPosition: 75,
                    buttons:
                    [
                        {
                            xtype: 'button',
                            baseCls: 'x-button liftnet-list-button liftnet-bgColor-blue',
                            text: '1',
                            initial: function(button) {
                                liftnet.app.getController('Engineer.EngMaintainController').
                                doEngMaintain_InitialNextStateButton(button, 0);
                            },
                            listeners: {
                                tap: function(button, e){
                                    e.stopPropagation();
                                    return false;
                                },
                                scope: this
                            },
                            handler: function(button, e) {
                                maintainList.fireEvent('hide');
                                liftnet.app.getController('Engineer.EngMaintainController').
                                doEngMaintain_Process({
                                    record: button.getRecord(),
                                    operationIndex: 0
                                });
                            }
                        }
                    ]
                }
            ]
        );

        var reportList = Ext.getCmp('EngHome_ListReport');
        reportList.setPlugins(
            [
                {
                    autoSnapBack: false,
                    lastUpdatedText: '上次刷新:&nbsp;',
                    loadedText: '已刷新',
                    loadingText: '正在刷新故障报告书待办...',
                    pullText: '下拉刷新...',
                    releaseText: '放开开始刷新...',
                    type: 'pullrefresh',
                    listeners : {
                        latestfetched : function() {
                            me.doEngHome_LoadTodoFaultReport();
                        }
                    }
                }
            ]
        );

        //-------------New-----------------

        var allTodoList = Ext.getCmp('EngHome_TodoListAll');
        allTodoList.setPlugins(
            [
                {
                    autoSnapBack: false,
                    lastUpdatedText: '上次刷新:&nbsp;',
                    loadedText: '已刷新',
                    loadingText: '正在刷新待办任务...',
                    pullText: '下拉刷新...',
                    releaseText: '放开开始刷新...',
                    type: 'pullrefresh',
                    listeners : {
                        latestfetched : function() {
                            me.doEngHome_LoadTodoAll();
                        }
                    }
                }
            ]
        );

        var f1 = Ext.getCmp('EngHomeTodo_date1');
        var f2 = Ext.getCmp('EngHomeTodo_date2');
        f1.suspendEvents();
        f2.suspendEvents();
        //当月
        //第一天
        var date1 = new Date();
        var year = date1.getFullYear();
        var month = date1.getMonth();
        var day = '01';
        date1 = new Date(year,month,day);

        //最后一天
        var date2 = new Date(year,month+1,0);

        // var date1 = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 3));
        // var date2 = new Date();
        //f1.setValue(date1);
        //f2.setValue(date2);
        f1.resumeEvents(true);
        f2.resumeEvents(true);

        // 首次取待办
        this.doEngHome_LoadTodoAll();

        /* tab分别加载
        // this.doEngHome_LoadTodoFault();
        // this.doEngHome_LoadTodoMaintain();
        // this.doEngHome_LoadTodoFaultReport();
        */

        // 初始化日期选择
        // var date1 = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 30));
        // var date2 = new Date();
        // /*
        // Ext.getCmp('EngMaintain_date1').setValue(date1);
        // Ext.getCmp('EngMaintain_date2').setValue(date2);
        // Ext.getCmp('EngFault_date1').setValue(date1);
        // Ext.getCmp('EngFault_date2').setValue(date2);
        // Ext.getCmp('EngFaultReport_date1').setValue(date1);
        // Ext.getCmp('EngFaultReport_date2').setValue(date2);
        // */

        // var y = parseInt(Ext.Date.format(new Date(), 'Y'));
        // var p = {
        //     yearFrom: y - 1,
        //     yearTo: y + 1,
        //     doneButton: '确定',
        //     cancelButton: '取消',
        //     slotOrder: ['year','month','day'],
        // };
        // Ext.getCmp('EngMaintain_date1').setPicker(p);
        // Ext.getCmp('EngMaintain_date2').setPicker(p);
        // Ext.getCmp('EngFault_date1').setPicker(p);
        // Ext.getCmp('EngFault_date2').setPicker(p);
        // Ext.getCmp('EngFaultReport_date1').setPicker(p);
        // Ext.getCmp('EngFaultReport_date2').setPicker(p);
    },

    onEngHomeShow: function(component, eOpts) {
        if(component.getActiveItem().getId()!=='EngHome_Nav') {
            return;
        }

        // 用户名、头像
        Ext.getCmp('EngHome_LblUserName').setHtml('<i class="ln ln-settings"></i> ' + global.getUserName());
        Ext.getCmp('EngHome_ImgAvator').setSrc(global.getUserAvatorSrc());

        // 总数、最新发布
        // liftnet.app.getController('ComController')
        //     .doHome_LoadStatic('mainpage_static', 'jixiucount', 'bymissioncount');
        liftnet.app.getController('ComController')
            .doHome_LoadNotisfy('EngHome_PnlNotice');
        loadMask.hide(true);
    },

    onEngHome_FldSearchTodoKeyup: function(textfield, e, eOpts) {
        // 过滤待办任务
        Ext.getCmp('EngHome_ListFault').getStore().filteDat(textfield.getValue());
        Ext.getCmp('EngHome_ListMaintain').getStore().filteDat(textfield.getValue());
        Ext.getCmp('EngHome_ListReport').getStore().filteDat(textfield.getValue());
    },

    onEngHome_MixSearchTodoKeyup: function(textfield, newValue, oldValue, eOpts) {
        // 过滤待办任务
        var me = this;
        Ext.getCmp('EngHome_TodoListAll').getStore().searchDat(textfield.getValue(),me.doEngHome_GetTodoType());
    },

    onEngHomeTodo_date1Change: function(datepickerfield, newDate, oldDate, eOpts) {
        var me = this;
        var formatStartDate = Ext.Date.format(datepickerfield.getValue(),'Y-m-d');
        var start = Date.parse(formatStartDate);

        var formatEndDate2 = Ext.getCmp('EngHomeTodo_date2').getValue();
        if(!formatEndDate2){
            formatEndDate2 = new Date();
        }
        console.log(formatEndDate2);
        var formatEndDate = Ext.Date.format(formatEndDate2,'Y-m-d');
        var end = Date.parse(formatEndDate);

        if(start>Date.parse(new Date())||end>Date.parse(new Date())||start>end){
            datepickerfield.setValue(oldDate);
            Ext.toast('请选择正确的日期区间');
        }else{
            Ext.getCmp('EngHome_TodoListAll').getStore().filteDatByDate
            ({start:start,end:end,type:me.doEngHome_GetTodoType()});
        }

    },

    onEngHomeTodo_date2Change: function(datepickerfield, newDate, oldDate, eOpts) {
        //根据日期过滤(本地)
        var me = this;
        var formatStartDate2 = Ext.getCmp('EngHomeTodo_date1').getValue();
        if(!formatStartDate2){
            formatStartDate2 = new Date();
        }
        var formatStartDate = Ext.Date.format(formatStartDate2,'Y-m-d');
        var start = Date.parse(formatStartDate);
        var formatEndDate = Ext.Date.format(datepickerfield.getValue(),'Y-m-d');
        var end = Date.parse(formatEndDate);
        if(start>Date.parse(new Date())||
           end>Date.parse(new Date())||
           start>end){
            Ext.toast('请选择正确的日期区间');
            datepickerfield.setValue(oldDate);
        }else{
            Ext.getCmp('EngHome_TodoListAll').getStore().filteDatByDate(
            {start:start,end:end,type:me.doEngHome_GetTodoType()});
        }

    },

    onEngHome_FldSearchTodoClearicontap: function(textfield, e, eOpts) {
        // 清除过滤待办任务
        Ext.getCmp('EngHome_ListFault').getStore().filteDat('');
        Ext.getCmp('EngHome_ListMaintain').getStore().filteDat('');
        Ext.getCmp('EngHome_ListReport').getStore().filteDat('');
    },

    onEngHome_btnNavTap: function(button, e, eOpts) {
        //首页-导航按钮
        popMenu.show('Common.ComHomeNav');
    },

    onEngHome_BtnAddTap: function(button, e, eOpts) {
        //首页-新增受信按钮
        viewUtil.goNext('Engineer.EngFaultAdd', {action:'新增', record:null});
    },

    onEngHome_ListFaultItemTap: function(dataview, index, target, record, e, eOpts) {
        //首页待办任务-故障处理
        var nextstate = record.get('nextstate');
        var openAssign = false; // 是否打开派工窗口
        for(var i=0; i<nextstate.length; i++) {
            if(nextstate[i].name==='派工') {
                openAssign = true;
                break;
            }
        }
        if(openAssign) {
            viewUtil.goNext('Engineer.EngFaultAdd', {action:'', record: record});
        } else {
            viewUtil.goNext('Engineer.EngFaultAccept', {record: record});
        }
        /* 使用上面标准做法，废弃用状态决定操作的方式：
        var state = record.get('state');
        if(state==='已退回'||state==='待分配') {
            viewUtil.goNext('Engineer.EngFaultAdd', {action:'', record: record});
        } else {
            viewUtil.goNext('Engineer.EngFaultAccept', {record: record});
        }
        */
    },

    onEngHome_ListMaintainItemTap: function(dataview, index, target, record, e, eOpts) {
        //首页待办任务-保养计划明细
        viewUtil.goNext('Engineer.EngMaintainTask', {record:record});
    },

    onEngHome_ListReportItemTap: function(dataview, index, target, record, e, eOpts) {
        //首页待办任务-故障报告书
        viewUtil.goNext('Engineer.EngFaultReport', {record: record});
    },

    onEngHome_HomeTodoInitialize: function(component, eOpts) {
        // 初始化日期选择
        var y = parseInt(Ext.Date.format(new Date(), 'Y'));
        var p = {
            yearFrom: y - 1,
            yearTo: y,
            doneButton: '确定',
            cancelButton: '取消',
            slotOrder: ['year','month','day'],
            value : new Date()
        };
        Ext.getCmp('EngHomeTodo_date1').setPicker(p);
        Ext.getCmp('EngHomeTodo_date2').setPicker(p);
    },

    onEngFaultInitialize: function(component, eOpts) {
        // 初始化日期选择
        /**var date1 = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 30));
        var date2 = new Date();

        var y = parseInt(Ext.Date.format(new Date(), 'Y'));
        var p = {
            yearFrom: y - 1,
            yearTo: y + 1,
            doneButton: '确定',
            cancelButton: '取消',
            slotOrder: ['year','month','day'],
        };
        Ext.getCmp('EngFault_date1').setPicker(p);
        Ext.getCmp('EngFault_date2').setPicker(p);
        Ext.getCmp('EngFaultReport_date1').setPicker(p);
        Ext.getCmp('EngFaultReport_date2').setPicker(p);*/
    },

    onEngMaintainInitialize: function(component, eOpts) {
        // 初始化日期选择
        // var date1 = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 30));
        // var date2 = new Date();

        // var y = parseInt(Ext.Date.format(new Date(), 'Y'));
        // var p = {
        //     yearFrom: y - 1,
        //     yearTo: y + 1,
        //     doneButton: '确定',
        //     cancelButton: '取消',
        //     slotOrder: ['year','month','day'],
        // };
        // Ext.getCmp('EngMaintain_date1').setPicker(p);
        // Ext.getCmp('EngMaintain_date2').setPicker(p);
    },

    onEngFault_ReturnButtonTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onEngMaintain_ReturnButtonTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onEngHomeTodo_BtnStatusTap: function(button, e, eOpts) {
        //待办任务-类别筛选按钮
        popMenu.show('Engineer.EngHomeTodoStatus', button);
    },

    onEngHomeTodoStatus_0Tap: function(button, e, eOpts) {
        // 全部
        this.doEngHomeTodo_LocalSearch(button,'All');
    },

    onEngHomeTodoStatus_1Tap: function(button, e, eOpts) {
        // 保养计划
        this.doEngHomeTodo_LocalSearch(button,'C');
    },

    onEngHomeTodoStatus_2Tap: function(button, e, eOpts) {
        // 维修任务
        this.doEngHomeTodo_LocalSearch(button,'A');
    },

    onEngHomeTodoStatus_3Tap: function(button, e, eOpts) {
        // 故障报告
        this.doEngHomeTodo_LocalSearch(button,'B');
    },

    onEngHomeTodoStatus_4Tap: function(button, e, eOpts) {
        // 首检任务
        this.doEngHomeTodo_LocalSearch(button,'D');
    },

    onEngHomeTodoStatus_5Tap: function(button, e, eOpts) {
        // 保养任务
        this.doEngHomeTodo_LocalSearch(button,'E');
    },

    onEngHome_TodoListAllItemTap: function(dataview, index, target, record, e, eOpts) {
        switch(record.get('type')){
            case 'A':
            //首页待办任务-故障处理
                var nextstate = record.get('nextstate');
                var openAssign = false; // 是否打开派工窗口
                for(var i=0; i<nextstate.length; i++) {
                    if(nextstate[i].name==='派工') {
                        openAssign = true;
                        break;
                    }
                }
                if(openAssign) {
                    record.set('trno',record.get('r1'));
                    viewUtil.goNext('Engineer.EngFaultAdd', {action:'', record: record});
                } else {
                    record.set('trno',record.get('r1'));
                    record.set('state',record.get('r4'));
                    viewUtil.goNext('Engineer.EngFaultAccept', {record: record});
                }
                break;
            case 'B':
                record.set('rpno',record.get('r1'));
                record.set('state',record.get('r4'));
                viewUtil.goNext('Engineer.EngFaultReport', {record:record});
                break;
            case 'C':
                record.set('pid',record.get('id'));
                var flowstatus;
                switch(record.get('r6')){
                    case '0':
                    case 0:
                        flowstatus = '未开始';
                        break;
                    case '1':
                    case 1:
                        flowstatus = '到场';
                        break;
                    case '2':
                    case 2:
                        flowstatus = '完工';
                        break;
                }
                record.set('flowstatus',flowstatus);
                viewUtil.goNext('Engineer.EngMaintainPlanDetail', {record:record});
                break;

            case 'D':
                //首检任务接收
                record.set('jnl',record.get('id'));
                record.set('status','未接收');
                viewUtil.goNext('Engineer.EngFirstCheckJobAdd',
                                {
                                    record:record,
                                    action:'查看',//只读
                                    url:'/adapters/firstcheck/api/1.0/fcdaduitdetail',//接收、退回 查看
                                    updatejurisdiction:false, //不可修改
                                    //从待办进入才有
                                    nextstate:record.get('nextstate')
                                }
                               );
                break;
            case 'E':
                //保养任务
                record.set('jnlno',record.get('id'));
                viewUtil.goNext('Engineer.EngReception',{record:record});
                break;
        }
    },

    onEngHomeActiveItemChange: function(container, value, oldValue, eOpts) {
        var tab2 = Ext.getCmp('EngHome').getTabBar().items.getAt(1);
        //if(value.id=="EngHome_Home"&&tab2.getBadgeText()){
        //   tab2.setBadgeText();//清除数字提示
        //}
    },

    doEngHome_GetTodoType: function() {
        var type = Ext.getCmp('EngHomeTodo_BtnStatus')._text;
        switch(type){
            case "全部":
                type='All';
                break;
            case "保养计划":
                type='C';
                break;
            case "维修任务":
                type='A';
                break;
            case "故障报告":
                type='B';
                break;
            case "首检任务":
                type='D';
                break;
            case "保养任务":
                type='E';
                break;
        }
        return type;
    },

    /*

        ********** 首页取数方法（加载全部待办事项） **********

    */
    doEngHome_LoadTodoAll: function() {

        var userid = global.getUserId();
        Ext.getCmp('EngHome_TodoListAll').getStore().loadDat(
            function(n) {
                var tbar = Ext.getCmp('EngHome');
                if(!tbar) return;
                //if(tbar.getActiveItem().id!=="EngHome_Home"){
                    tbar.getTabBar().items.getAt(1).setBadgeText(n);
                //}
            },
            function(info) {
                Ext.toast(info);
            }
        );
    },

    /*

        ********** 首页取数方法 **********

    */
    doEngHome_LoadTodoFault: function() {
        // 读取待办-故障处理
        var userid = global.getUserId();
        Ext.getCmp('EngHome_ListFault').getStore().loadDat(
            function(n) {
                var tbar = Ext.getCmp('EngHome');
                if(!tbar) return;
                tbar.getTabBar().items.getAt(1).setBadgeText(n);
                //console.log('故障待办已刷新!');
            },
            function() {
                Ext.toast('暂时未能刷新故障待办!');
            },
            {
                userid: userid,
                workstardate: '',
                workenddate: ''
            }
        );
    },

    doEngHome_LoadTodoMaintain: function() {
        // 读取待办-保养计划
        var userid = global.getUserId();
        Ext.getCmp('EngHome_ListMaintain').getStore().loadDat(
            function(n) {
                var tbar = Ext.getCmp('EngHome_TpnlTodo');
                if(!tbar) return;
                tbar.getTabBar().items.getAt(1).setBadgeText(n>0? n:'');
                //console.log('保养计划待办已刷新!');
            },
            function() {
                Ext.toast('暂时未能刷新保养计划待办!');
            },
            {
                userid: userid,
                state: '全部',
                workstardate: '',
                workenddate: ''
            }
        );
    },

    doEngHome_LoadTodoFaultReport: function() {
        // 读取待办-故障报告书
        var userid = global.getUserId();
        Ext.getCmp('EngHome_ListReport').getStore().loadDat(
            function(n) {
                var tbar = Ext.getCmp('EngHome_TpnlTodo');
                if(!tbar) return;
                tbar.getTabBar().items.getAt(2).setBadgeText(n>0? ' ':'');
                //console.log('故障报告书待办已刷新!');
            },
            function() {
                Ext.toast('暂时未能刷新故障报告书待办!');
            },
            {
                userid: userid,
                startrptime: '',
                endrptime: ''
            }
        );
    },

    /*

        本地搜索，在已加载的数据中搜索

    */
    doEngHomeTodo_LocalSearch: function(button,type) {

        popMenu.getShowBy().setText(button.getText());
        popMenu.hide();
        var keyword = Ext.getCmp('EngHome_MixSearchTodo').getValue();
        Ext.getCmp('EngHome_TodoListAll').getStore().filteDatByType(type,keyword);
    }

});