/*
 * File: app/view/Engineer/EngInsureContractQuery.js
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

Ext.define('liftnet.view.Engineer.EngInsureContractQuery', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.Search',
        'Ext.Label',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'EngInsureContractQuery',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                id: 'EngInsureContractQuery_Title',
                title: '保险合同查询',
                items: [
                    {
                        xtype: 'button',
                        id: 'EngInsureContractQuery_BtnReturn',
                        iconCls: 'fa fa-chevron-left',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'formpanel',
                cls: 'liftnet-search-form',
                height: 52,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'searchfield',
                        flex: 2,
                        cls: 'liftnet-font-size12',
                        id: 'EngInsureContractQuery_Search',
                        placeHolder: '合同编号、客户名称、项目名称'
                    },
                    {
                        xtype: 'button',
                        cls: [
                            'liftnet-font-size12',
                            'liftnet-no-border',
                            'liftnet-fontColor-darkGray'
                        ],
                        docked: 'right',
                        id: 'EngInsureContractQuery_Staus',
                        margin: '16 0',
                        width: 70,
                        iconAlign: 'right',
                        iconCls: 'fa fa-angle-down',
                        text: '全部'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                cls: 'liftnet-search-form',
                height: 52,
                layout: 'hbox',
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
                        id: 'EngInsureContractQuery_date1',
                        itemId: 'EngInsureContractQuery_date1',
                        inputCls: 'liftnet-font-center',
                        label: '',
                        placeHolder: '保险开始日期',
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
                        id: 'EngInsureContractQuery_date2',
                        itemId: 'EngInsureContractQuery_date2',
                        inputCls: 'liftnet-font-center',
                        label: '',
                        placeHolder: '保险结束日期',
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
            },
            {
                xtype: 'list',
                flex: 1,
                cls: 'liftnet-fault-listBox',
                id: 'EngInsureContractQuery_List',
                disableSelection: true,
                itemTpl: [
                    '<div class="liftnet-Maintenance-TaskRecList" style="height:100px">',
                    '    <div class="liftnet-Maintenance-TaskRecList-left" style="left:14px" >',
                    '        <div class="liftnet-font-size16 {titleColor}">{contractid}&nbsp;</div>',
                    '        <div class="liftnet-font-size12 liftnet-fontColor-darkGray">{acceptanceunit}&nbsp;</div>',
                    '        <div class="liftnet-font-size12 liftnet-fontColor-darkGray">{insurancemanager}&nbsp;</div>',
                    '        <div class="liftnet-font-size12 liftnet-fontColor-darkGray">{insurancestartdate} ~ {insuranceenddate}&nbsp;</div>',
                    '       ',
                    '    </div>',
                    '    <div class="liftnet-Maintenance-TaskRecList-right" style="padding-top:0px;right:14px">',
                    '        <div class="liftnet-font-size12 liftnet-fontColor-darkGray liftnet-font-right">¥{contractamt}&nbsp;</div>',
                    '        <div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-darkGray">{contractnum}&nbsp;台</div>',
                    '        <div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-darkGray">{linkphone}&nbsp;</div>',
                    '        <div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-darkGray">{signdate}&nbsp;</div>',
                    '    </div>',
                    '</div>'
                ],
                store: 'eng_insurecontractquerylist'
            }
        ]
    }

});