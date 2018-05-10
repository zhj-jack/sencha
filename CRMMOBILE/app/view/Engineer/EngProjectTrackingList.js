/*
 * File: app/view/Engineer/EngProjectTrackingList.js
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

Ext.define('liftnet.view.Engineer.EngProjectTrackingList', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.field.Search',
        'Ext.Label',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'EngProjectTrackingList',
        itemId: 'EngProjectTrackingList',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '项目跟踪',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'EngProjectTracking_ReturnBt',
                        iconCls: 'fa fa-chevron-left'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'EngProjectTracking_BtnAdd',
                        iconCls: 'ln ln-new'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'formpanel',
                        cls: 'liftnet-search-form',
                        height: 105,
                        id: 'ProjectTracking_SearchForm',
                        itemId: 'ProjectTracking_SearchForm',
                        layout: 'vbox',
                        scrollable: false,
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                height: '',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'searchfield',
                                        cls: 'liftnet-font-size12',
                                        id: 'ProjectTracking_SearchKey',
                                        itemId: 'ProjectTracking_SearchKey',
                                        placeHolder: '项目名称、客户名称、业务员'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: [
                                            'liftnet-font-size12',
                                            'liftnet-no-border',
                                            'liftnet-fontColor-darkGray'
                                        ],
                                        docked: 'right',
                                        id: 'ProjectTracking_PStatus',
                                        itemId: 'ProjectTracking_PStatus',
                                        margin: '16 0',
                                        width: 88,
                                        iconAlign: 'right',
                                        iconCls: 'fa fa-angle-down',
                                        text: '全部'
                                    }
                                ]
                            },
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                layout: 'hbox',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'liftnet-fontColor-gray',
                                        docked: 'left',
                                        html: '<i class=\'fa fa-calendar\'></i>',
                                        margin: '18 -4 0 8',
                                        width: 20
                                    },
                                    {
                                        xtype: 'datepickerfield',
                                        flex: 1,
                                        id: 'ProjectTracking_Data1',
                                        itemId: 'ProjectTracking_Data1',
                                        inputCls: 'liftnet-font-center',
                                        placeHolder: '创建开始日期',
                                        dateFormat: 'Y-m-d',
                                        picker: {
                                            slotOrder: [
                                                'year',
                                                'month',
                                                'day'
                                            ],
                                            yearFrom: 2000,
                                            yearTo: 2200,
                                            doneButton: '确定',
                                            cancelButton: '取消'
                                        }
                                    },
                                    {
                                        xtype: 'datepickerfield',
                                        flex: 1,
                                        id: 'ProjectTracking_Data2',
                                        itemId: 'ProjectTracking_Data2',
                                        inputCls: 'liftnet-font-center',
                                        placeHolder: '创建结束日期',
                                        dateFormat: 'Y-m-d',
                                        picker: {
                                            slotOrder: [
                                                'year',
                                                'month',
                                                'day'
                                            ],
                                            yearFrom: 2000,
                                            yearTo: 2200,
                                            doneButton: '确定',
                                            cancelButton: '取消'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        flex: 1,
                        cls: 'liftnet-monitor-elevatorDetail-listBox',
                        id: 'EngProjectTracking_SearchList',
                        itemId: 'EngProjectTracking_SearchList',
                        disableSelection: true,
                        itemTpl: [
                            '<div class="liftnet-Maintenance-TaskRecList" style="height:100px">',
                            '    {urgent}',
                            '	<div class="liftnet-Maintenance-TaskRecList-left" style="left:18px" >',
                            '    	<div class="liftnet-font-size14 liftnet-fontColor-blue">{projectjnlno}</div>',
                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray">{projectname}</div>',
                            '    	<div class="liftnet-font-size12 liftnet-fontColor-gray">{custname}</div>',
                            '    	<div class="liftnet-font-size12 liftnet-fontColor-gray">{createdate}</div>',
                            '    </div>',
                            '	<div class="liftnet-Maintenance-TaskRecList-right" style="padding-top:0px;right:14px">',
                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12">{elevatornum} 台 </div>',
                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12">{creator} </div>',
                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12">{flowtype}</div>',
                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12 {statusColor}">{projectstatusname} <i class="fa fa-circle-o"></i></div>',
                            '    </div>',
                            '</div>'
                        ],
                        pressedCls: ' ',
                        store: 'eng_projecttracking_list'
                    }
                ]
            }
        ]
    }

});