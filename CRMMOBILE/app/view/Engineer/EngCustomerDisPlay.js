/*
 * File: app/view/Engineer/EngCustomerDisPlay.js
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

Ext.define('liftnet.view.Engineer.EngCustomerDisPlay', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.Label',
        'Ext.field.TextArea'
    ],

    config: {
        id: 'EngCustomerDisplay',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '客户维护',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'Customer_ReturnButton',
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
                id: 'EngCustomerForm',
                itemId: 'EngCustomerForm',
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
                                src: 'resources/images/con_icon03.png'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'liftnet-fontColor-green',
                                    'liftnet-font-size24'
                                ],
                                html: '客户级别',
                                id: 'Customer_Levele'
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
                        id: 'Customer_custname',
                        itemId: 'Customer_custname',
                        label: '客户名称',
                        name: 'custname',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_address',
                        itemId: 'Customer_address',
                        label: '营业地址',
                        name: 'address',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_r7',
                        itemId: 'Customer_r7',
                        label: '上级单位',
                        name: 'r7',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_r8',
                        itemId: 'Customer_r8',
                        label: '监控设备',
                        name: 'r8',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_LicenseNumber',
                        itemId: 'Customer_LicenseNumber',
                        label: '营业执照号码',
                        labelWidth: '40%',
                        name: 'licensenumber',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_r9',
                        itemId: 'Customer_r9',
                        label: '客户密码',
                        name: 'r9',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_Principal',
                        itemId: 'Customer_Principal',
                        label: '法定代理人',
                        labelWidth: '40%',
                        name: 'principal',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_Bank',
                        itemId: 'Customer_Bank',
                        label: '开户银行',
                        name: 'bank',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_Accounts',
                        itemId: 'Customer_Accounts',
                        label: '银行账户',
                        name: 'accounts',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_R13',
                        itemId: 'Customer_R13',
                        label: '财务联系人',
                        labelWidth: '40%',
                        name: 'r13',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_PostNo',
                        itemId: 'Customer_PostNo',
                        label: '邮政编码',
                        name: 'postno',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_levelename',
                        itemId: 'Customer_levelename',
                        label: '客户级别',
                        name: 'levelename',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_typename',
                        itemId: 'Customer_typename',
                        label: '客户类型',
                        name: 'typename',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_createname',
                        itemId: 'Customer_createname',
                        label: '创建人',
                        name: 'createname',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_R2',
                        itemId: 'Customer_R2',
                        label: '创建日期',
                        name: 'r2',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_identificationnumber',
                        itemId: 'Customer_identificationnumber',
                        label: '纳税识别号',
                        labelWidth: '40%',
                        name: 'identificationnumber',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_phone',
                        itemId: 'Customer_phone',
                        label: '公司联络电话',
                        labelWidth: '40%',
                        name: 'phone',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_fax',
                        itemId: 'Customer_fax',
                        label: '传真',
                        name: 'fax',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'Customer_rem1',
                        itemId: 'Customer_rem1',
                        label: '备注',
                        name: 'rem1',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        id: 'Customer_linkerStr',
                        itemId: 'Customer_linkerStr',
                        label: '客户联系人',
                        labelWidth: '40%',
                        name: 'linkerStr',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        id: 'Customer_flowuserStr',
                        itemId: 'Customer_flowuserStr',
                        label: '客户跟进人',
                        labelWidth: '40%',
                        name: 'flowuserStr',
                        readOnly: true
                    }
                ]
            }
        ]
    }

});