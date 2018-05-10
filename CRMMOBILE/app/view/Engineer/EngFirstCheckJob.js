/*
 * File: app/view/Engineer/EngFirstCheckJob.js
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

Ext.define('liftnet.view.Engineer.EngFirstCheckJob', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea',
        'Ext.field.Hidden'
    ],

    config: {
        id: 'EngFirstCheckJob',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '首检派工',
                items: [
                    {
                        xtype: 'button',
                        id: 'EngFirstCheckJob_ReturnButton',
                        iconCls: 'fa fa-chevron-left',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                cls: [
                    'liftnet-form-info',
                    'liftnet-font-size14',
                    'liftnet-lineHeight34'
                ],
                id: 'EngFirstCheckJob_Form',
                itemId: 'myformpanel',
                items: [
                    {
                        xtype: 'textfield',
                        label: '分派单号',
                        name: 'jnl'
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJob_projectname',
                        itemId: 'mytextfield2',
                        label: '项目名称',
                        name: 'projectname',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var me = this;
                                    me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        label: '项目地址',
                        name: 'projectaddress'
                    },
                    {
                        xtype: 'textfield',
                        label: '项目台数',
                        name: 'liftnum'
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJob_checkednum',
                        itemId: 'mytextfield6',
                        label: '已选择台数',
                        labelWidth: '40%',
                        name: 'checkednum',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var me = this;
                                    me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'datepickerfield',
                        id: 'EngFirstCheckJob_planstartdate',
                        label: '计划开始日期',
                        labelWidth: '40%',
                        name: 'planstartdate',
                        placeHolder: 'mm/dd/yyyy',
                        dateFormat: 'Y-m-d',
                        picker: {
                            slotOrder: [
                                'year',
                                'month',
                                'day'
                            ],
                            doneButton: '确定',
                            cancelButton: '取消'
                        }
                    },
                    {
                        xtype: 'datepickerfield',
                        id: 'EngFirstCheckJob_planenddate',
                        label: '计划结束日期',
                        labelWidth: '40%',
                        name: 'planstartdate',
                        placeHolder: 'mm/dd/yyyy',
                        dateFormat: 'Y-m-d',
                        picker: {
                            slotOrder: [
                                'year',
                                'month',
                                'day'
                            ],
                            doneButton: '确定',
                            cancelButton: '取消'
                        }
                    },
                    {
                        xtype: 'textfield',
                        id: 'Eng_FirstCheckJob_checkuser',
                        itemId: 'Eng_FirstCheckJob_checkuser',
                        label: '检验人员',
                        labelWidth: '40%',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var me = this;
                                    me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'textareafield',
                        label: '注意事项',
                        name: 'remark'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_status',
                        name: 'status'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_dispatchtype',
                        name: 'dispatchtype'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_projectid',
                        name: 'projectid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_contractid',
                        name: 'contractid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_createid',
                        name: 'createid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_createdeptid',
                        name: 'createdeptid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJob_elevator',
                        name: 'elevator'
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'liftnet-button',
                            'liftnet-button-one'
                        ],
                        items: [
                            {
                                xtype: 'button',
                                id: 'EngFirstCheckJob_CommitBtn',
                                text: '提交'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});