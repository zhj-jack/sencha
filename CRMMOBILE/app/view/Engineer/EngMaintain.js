/*
 * File: app/view/Engineer/EngMaintain.js
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

Ext.define('liftnet.view.Engineer.EngMaintain', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '保养业务',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'EngMaintain_ReturnButton',
                        iconCls: 'fa fa-chevron-left'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                id: 'EngMaintain',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        cls: 'liftnet-tabbar-one',
                        id: 'EngMaintain_TpList',
                        items: [
                            {
                                xtype: 'container',
                                title: '保养任务',
                                id: 'EngMaintain_CtnByWorkList',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        cls: 'liftnet-search-form',
                                        height: 52,
                                        id: 'EngMaintain_SearchForm',
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'searchfield',
                                                cls: 'liftnet-font-size12',
                                                id: 'EngMaintain_FldSearch',
                                                itemId: 'EngMaintain_FldSearch',
                                                placeHolder: '请输入关键词'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'list',
                                        flex: 1,
                                        cls: 'liftnet-fault-listBox',
                                        id: 'EngMaintain_ListTask',
                                        itemTpl: [
                                            '<div class="liftnet-Maintenance-BYWorkList">',
                                            '    <div class="liftnet-Maintenance-BYWorkList-left">',
                                            '        <div class="liftnet-font-size16 {titleColor}">{projectname}</div>',
                                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray">{projectaddress}</div>',
                                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray">{htbh}</div>',
                                            '    </div>',
                                            '    <div class="liftnet-Maintenance-BYWorkList-right">',
                                            '',
                                            '        <div class="liftnet-Maintenance-listConBox-state liftnet-font-size12 liftnet-fontColor-gray liftnet-font-right">{contractnumber}台</div>',
                                            '',
                                            '        <div class="liftnet-font-size12 liftnet-font-right {titleColor}">{taskstate} <i class="fa fa-circle-o"></i></div>',
                                            '    </div>',
                                            '</div>'
                                        ],
                                        store: 'by_bymissionlist'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: '派工单',
                                id: 'EngMaintain_CtnPGList',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        cls: 'liftnet-search-form',
                                        height: 52,
                                        id: 'MaintainTaskRec_SearchForm',
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'searchfield',
                                                cls: 'liftnet-font-size12',
                                                id: 'EngMaintainTaskRec_FldSearch',
                                                itemId: 'EngMaintainTaskRec_FldSearch',
                                                placeHolder: '请输入关键词'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'list',
                                        flex: 1,
                                        cls: 'liftnet-fault-listBox',
                                        id: 'EngMaintain_ListTaskRec',
                                        itemTpl: [
                                            '<div class="liftnet-Maintenance-TaskRecList">',
                                            '	<div class="liftnet-Maintenance-TaskRecList-left">',
                                            '    	<div class="liftnet-font-size16 liftnet-fontColor-blue">{ProjectName}</div>',
                                            '    	<div class="liftnet-font-size12 liftnet-fontColor-gray">{ContractNum}台</div>',
                                            '    	<div class="liftnet-font-size12 liftnet-fontColor-gray">{Jnlno}</div>',
                                            '        <div class="liftnet-font-size12 liftnet-fontColor-blue">{FlowStatus}</div>',
                                            '    </div>',
                                            '	<div class="liftnet-Maintenance-TaskRecList-right">',
                                            '    	',
                                            '    	<div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-gray">{TaskNum}台</div>',
                                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray liftnet-font-right">{bybz}</div>',
                                            '        ',
                                            '    	<div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-gray">{ReveStatus}</div>',
                                            '    </div>',
                                            '</div>'
                                        ],
                                        store: 'by_bymaintaintaskreclist'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: '保养计划',
                                items: [
                                    {
                                        xtype: 'panel',
                                        cls: 'liftnet-search-form',
                                        height: '40px',
                                        html: '<div style="line-height:40px;" class="liftnet-font-size16 liftnet-fontColor-darkGray">计划及编制</div>',
                                        id: 'EngMaintain_MainWorkClick',
                                        itemId: 'EngMaintain_MainWorkClick',
                                        layout: 'vbox',
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'button',
                                                flex: 1,
                                                border: 0,
                                                centered: true,
                                                html: '<div style="text-align:left;line-height:40px;" class="liftnet-font-size16 liftnet-fontColor-darkGray">计划及编制</div>',
                                                id: 'EngMaintain_MainWorkClickBtn',
                                                itemId: 'EngMaintain_MainWorkClickBtn',
                                                style: 'background-color:rgba(97%,80%,9%,50%);'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});