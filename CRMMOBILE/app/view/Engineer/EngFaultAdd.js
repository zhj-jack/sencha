/*
 * File: app/view/Engineer/EngFaultAdd.js
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

Ext.define('liftnet.view.Engineer.EngFaultAdd', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Toggle',
        'Ext.field.TextArea'
    ],

    config: {
        id: 'EngFaultAdd',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                id: 'EngFaultAdd_Tbar',
                title: '新增受信',
                items: [
                    {
                        xtype: 'button',
                        id: 'EngFaultAdd_BtnReturn',
                        iconCls: 'fa fa-chevron-left'
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
                height: 1150,
                id: 'EngFaultAdd_Form',
                scrollable: true,
                items: [
                    {
                        xtype: 'panel',
                        cls: [
                            'liftnet-font-center',
                            'liftnet-con-top'
                        ],
                        items: [
                            {
                                xtype: 'image',
                                cls: 'liftnet-con-icon',
                                src: 'resources/images/con_icon01.png'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'liftnet-fontColor-green',
                                    'liftnet-font-size24'
                                ],
                                html: '故障受信'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'liftnet-fontColor-gray',
                                    'liftnet-font-size12'
                                ],
                                html: '建立新的故障受信单',
                                id: 'EngFaultAdd_LblTitle'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'liftnet-con-title',
                        items: [
                            {
                                xtype: 'label',
                                html: '详细资料'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '故障单号',
                        labelWidth: '40%',
                        name: 'trno',
                        placeHolder: '（系统生成）',
                        readOnly: true
                    },
                    {
                        xtype: 'selectfield',
                        cls: 'x-field-picker',
                        id: 'EngFaultAdd_dept',
                        itemId: 'EngFaultAdd_dept',
                        label: '所属部门',
                        labelWidth: '40%',
                        name: 'dept',
                        displayField: 'storagename',
                        store: 'common_getdeptlist',
                        valueField: 'storageid'
                    },
                    {
                        xtype: 'selectfield',
                        cls: 'x-field-picker',
                        id: 'EngFaultAdd_sxly',
                        itemId: 'EngFaultAdd_sxly',
                        label: '受信来源',
                        labelWidth: '40%',
                        name: 'sxly',
                        requiredCls: ' x-field-required',
                        placeHolder: '请选择受信来源',
                        readOnly: false,
                        displayField: 'trresourcename',
                        store: 'common_sxsourcelist',
                        valueField: 'trresourceid',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    //var me = this;
                                    //me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        cls: 'x-field-picker',
                        id: 'EngFaultAdd_requesttype',
                        itemId: 'EngFaultAdd_requesttype',
                        label: '类型',
                        name: 'requesttype',
                        placeHolder: '请选择类型',
                        options: [
                            {
                                text: '即时',
                                value: '1'
                            },
                            {
                                text: '补录',
                                value: '2'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        cls: 'x-field-datetime',
                        id: 'EngFaultAdd_operdate',
                        itemId: 'EngFaultAdd_operdate',
                        clearIcon: false,
                        label: '受理时间',
                        labelWidth: '40%',
                        name: 'operdate',
                        required: true,
                        placeHolder: '请选择受理时间',
                        readOnly: true,
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
                        id: 'EngFaultAdd_reportor',
                        itemId: 'EngFaultAdd_reportor',
                        clearIcon: false,
                        label: '报修人',
                        labelWidth: '40%',
                        name: 'reportor',
                        required: true,
                        placeHolder: '请输入报修人姓名'
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFaultAdd_reportortel',
                        itemId: 'EngFaultAdd_reportortel',
                        clearIcon: false,
                        label: '电话',
                        labelWidth: '40%',
                        name: 'reportortel',
                        required: true,
                        placeHolder: '请输入电话'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'x-field-search',
                        id: 'EngFaultAdd_projectname',
                        itemId: 'EngFaultAdd_projectname',
                        label: '项目名称',
                        labelWidth: '40%',
                        name: 'projectname',
                        required: true,
                        placeHolder: '请选择或填写项目名称',
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
                        id: 'EngFaultAdd_projectaddress',
                        itemId: 'EngFaultAdd_projectaddress',
                        label: '项目地址',
                        name: 'projectaddress',
                        required: true,
                        placeHolder: '请输入项目地址'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'x-field-search',
                        id: 'EngFaultAdd_prodno',
                        itemId: 'EngFaultAdd_prodno',
                        label: '设备注册码',
                        labelWidth: '40%',
                        name: 'prodno',
                        placeHolder: '请选择或输入设备注册码',
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
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_facid',
                        itemId: 'EngFaultAdd_facid',
                        name: 'facid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_facname',
                        itemId: 'EngFaultAdd_facname',
                        name: 'facname'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_modelid',
                        itemId: 'EngFaultAdd_modelid',
                        name: 'modelid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_modelname',
                        itemId: 'EngFaultAdd_modelname',
                        name: 'modelname'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_floor',
                        itemId: 'EngFaultAdd_floor',
                        name: 'floor'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_station',
                        itemId: 'EngFaultAdd_station',
                        name: 'station'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_door',
                        itemId: 'EngFaultAdd_door',
                        name: 'door'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_locationremark',
                        itemId: 'EngFaultAdd_locationremark',
                        name: 'locationremark'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_contractid',
                        itemId: 'EngFaultAdd_contractid',
                        name: 'contractid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultAdd_elevatorno',
                        itemId: 'EngFaultAdd_elevatorno',
                        name: 'elevatorno'
                    },
                    {
                        xtype: 'togglefield',
                        label: '困人',
                        labelWidth: '40%',
                        name: 'istrap',
                        required: true,
                        maxValueCls: 'x-toggle-on-red',
                        minValueCls: 'x-toggle-off-green'
                    },
                    {
                        xtype: 'togglefield',
                        id: 'EngFaultAdd_isrunning',
                        itemId: 'EngFaultAdd_isrunning',
                        label: '电梯是否仍在运行',
                        labelWidth: '50%',
                        name: 'isrunning',
                        required: true,
                        maxValueCls: 'x-toggle-on-red',
                        minValueCls: 'x-toggle-off-green'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'x-field-datetime',
                        id: 'EngFaultAdd_faulthappentime',
                        itemId: 'EngFaultAdd_faulthappentime',
                        label: '故障发生时间',
                        labelWidth: '50%',
                        name: 'faulthappentime',
                        placeHolder: '请选择故障发生时间',
                        readOnly: true,
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
                        clearIcon: false,
                        label: '故障描述',
                        labelWidth: '40%',
                        name: 'calloutcontent',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        cls: 'x-field-search',
                        id: 'EngFaultAdd_assignuser',
                        itemId: 'EngFaultAdd_assignuser',
                        label: '维修人员',
                        labelWidth: '40%',
                        name: 'assignuserStr',
                        placeHolder: '请选择维修人员',
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
                        xtype: 'hiddenfield',
                        id: 'assignuser',
                        itemId: 'assignuser',
                        name: 'assignuser'
                    },
                    {
                        xtype: 'textareafield',
                        label: '修复要求',
                        labelWidth: '50%',
                        name: 'repairask',
                        required: true,
                        placeHolder: '请输入报修人修复要求'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'x-field-datetime',
                        itemId: 'EngFaultAdd_expectarrivetime',
                        clearIcon: false,
                        label: '要求到达时间',
                        labelWidth: '50%',
                        name: 'expectarrivetime',
                        placeHolder: '请选择客户要求到达时间',
                        readOnly: true,
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
                        name: 'requestattention',
                        placeHolder: '请输入注意事项'
                    },
                    {
                        xtype: 'selectfield',
                        cls: 'x-field-search',
                        id: 'EngFaultAdd_reachtimeask',
                        itemId: 'EngFaultAdd_reachtimeask',
                        label: '到达时间要求',
                        labelWidth: '50%',
                        name: 'reachtimeask',
                        placeHolder: '请选择到场时间要求',
                        displayField: 'value',
                        options: [
                            {
                                text: '尽快',
                                value: '尽快'
                            },
                            {
                                text: '15分钟内到',
                                value: '15分钟内到'
                            },
                            {
                                text: '30分钟内到',
                                value: '30分钟内到'
                            },
                            {
                                text: '其他',
                                value: '其他'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFaultAdd_repairfinishtime',
                        itemId: 'EngFaultAdd_repairfinishtime',
                        label: '修复时间要求',
                        labelWidth: '40%',
                        name: 'repairfinishtime',
                        placeHolder: '请输入修复时间要求'
                    },
                    {
                        xtype: 'textareafield',
                        id: 'EngFaultAdd_repairattention',
                        itemId: 'EngFaultAdd_repairattention',
                        label: '修理注意事项',
                        labelWidth: '40%',
                        name: 'repairattention',
                        placeHolder: '请输入修理注意事项'
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'liftnet-button',
                            'liftnet-button-three'
                        ],
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'liftnet-buttonColor-green',
                                hidden: false,
                                id: 'EngFaultAdd_BtnSave',
                                itemId: 'EngFaultAdd_BtnSave',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'EngFaultAdd_BtnAssign',
                                itemId: 'EngFaultAdd_BtnAssign',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'liftnet-buttonColor-red',
                                hidden: false,
                                id: 'EngFaultAdd_BtnClose',
                                itemId: 'EngFaultAdd_BtnClose',
                                text: ''
                            }
                        ]
                    }
                ]
            }
        ]
    }

});