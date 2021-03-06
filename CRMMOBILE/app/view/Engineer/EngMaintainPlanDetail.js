/*
 * File: app/view/Engineer/EngMaintainPlanDetail.js
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

Ext.define('liftnet.view.Engineer.EngMaintainPlanDetail', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.Label',
        'Ext.field.Hidden',
        'Ext.ActionSheet',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'EngMaintainPlan',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                id: 'EngMaintainPlan_Toolbar',
                title: '保养计划',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'EngMaintainTask_BtnReturn',
                        iconCls: 'fa fa-chevron-left'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                cls: 'liftnet-tabbar-two',
                id: 'EngMaintainPlan_MTabPanel',
                layout: {
                    type: 'card',
                    animation: 'slide'
                },
                items: [
                    {
                        xtype: 'container',
                        title: '任务信息',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                cls: [
                                    'liftnet-form-info',
                                    'liftnet-font-size14',
                                    'liftnet-lineHeight34'
                                ],
                                id: 'form_by_maintainplan1',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: '项目名称',
                                        labelWidth: '40%',
                                        name: 'projectname',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '项目地址',
                                        labelWidth: '40%',
                                        name: 'projectaddress',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '注册码',
                                        labelWidth: '40%',
                                        name: 'prodno',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '梯号',
                                        labelWidth: '40%',
                                        name: 'liftno',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '层站门',
                                        labelWidth: '40%',
                                        name: 'fsd',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '保养开始日期',
                                        labelWidth: '40%',
                                        name: 'startdate',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '保养结束日期',
                                        labelWidth: '40%',
                                        name: 'enddate',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '保养月数',
                                        labelWidth: '40%',
                                        name: 'planmonths',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '保养次第',
                                        labelWidth: '40%',
                                        name: 'ordernum',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '本次保养类型',
                                        labelWidth: '40%',
                                        name: 'plantype',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '计划保养日期',
                                        labelWidth: '40%',
                                        name: 'plandate',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: '保养人员',
                                        labelWidth: '40%',
                                        name: 'man',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '任务进度',
                        cls: 'liftnet-fault-track',
                        id: 'EngMaintainPlan_TabProcess',
                        layout: 'vbox',
                        scrollable: true,
                        items: [
                            {
                                xtype: 'container',
                                cls: 'liftnet-fault-trackBox',
                                id: 'EngMaintainPlan_PnlFinish',
                                items: [
                                    {
                                        xtype: 'container',
                                        cls: 'liftnet-fault-trackTop',
                                        items: [
                                            {
                                                xtype: 'image',
                                                cls: 'liftnet-fault-trackTop-img',
                                                docked: 'left',
                                                src: 'resources/images/trackListBox-icon02.png'
                                            },
                                            {
                                                xtype: 'label',
                                                cls: 'liftnet-fault-trackTop-title',
                                                docked: 'left',
                                                html: '确认完工',
                                                id: 'EngMaintainPlan_LblFinish'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        cls: [
                                            'liftnet-fault-trackListBox',
                                            'liftnet-font-size12'
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        cls: [
                                            'liftnet-fault-trackListBox',
                                            'liftnet-font-size12'
                                        ],
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: '<span></span>完工地址',
                                                id: 'B_FinishAddress'
                                            },
                                            {
                                                xtype: 'label',
                                                html: '<span></span>YYYY-MM-DD hh:mm',
                                                id: 'B_FinishDate'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                cls: 'liftnet-fault-trackBox',
                                id: 'EngMaintainPlan_PnlArrive',
                                items: [
                                    {
                                        xtype: 'container',
                                        cls: 'liftnet-fault-trackTop',
                                        items: [
                                            {
                                                xtype: 'image',
                                                cls: 'liftnet-fault-trackTop-img',
                                                docked: 'left',
                                                src: 'resources/images/trackListBox-icon01.png'
                                            },
                                            {
                                                xtype: 'label',
                                                cls: 'liftnet-fault-trackTop-title',
                                                docked: 'left',
                                                html: '到达作业地点',
                                                id: 'EngMaintainPlan_LblArrive'
                                            },
                                            {
                                                xtype: 'button',
                                                cls: [
                                                    'liftnet-fault-trackTop-but',
                                                    'liftnet-bgColor-green'
                                                ],
                                                docked: 'right',
                                                id: 'EngMaintainPlan_BtnArrive',
                                                itemId: 'EngMaintainPlan_BtnArrive',
                                                text: '到场'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        cls: [
                                            'liftnet-fault-trackListBox',
                                            'liftnet-font-size12'
                                        ],
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: '<span></span>到场地址',
                                                id: 'B_ArriveAddress'
                                            },
                                            {
                                                xtype: 'label',
                                                html: '<span></span>YYYY-MM-DD hh:mm',
                                                id: 'B_ArriveDate'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                cls: 'liftnet-fault-trackBox',
                                id: 'EngMaintainPlan_PnlStart',
                                items: [
                                    {
                                        xtype: 'container',
                                        cls: 'liftnet-fault-trackTop',
                                        items: [
                                            {
                                                xtype: 'image',
                                                cls: 'liftnet-fault-trackTopEnd-img',
                                                docked: 'left',
                                                src: 'resources/images/trackListBox-icon00.png'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 0.5,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        docked: 'top',
                                        height: 105,
                                        id: 'EngContainer_AcceptMapParent',
                                        style: 'margin-left :15px ;margin-right:15px;',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'liftnet-monitor-map',
                                                height: 75,
                                                id: 'EngContainer_AcceptMap',
                                                style: 'border: 1px solid #DDD;',
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        docked: 'right',
                                                        width: '60%',
                                                        layout: 'vbox',
                                                        items: [
                                                            {
                                                                xtype: 'panel',
                                                                flex: 2,
                                                                cls: [
                                                                    'liftnet-fontColor-darkGray',
                                                                    'liftnet-font-size14'
                                                                ],
                                                                id: 'EngAcceptMap_address',
                                                                itemId: 'EngAcceptMap_address',
                                                                style: 'margin-left:5px;'
                                                            },
                                                            {
                                                                xtype: 'panel',
                                                                flex: 1,
                                                                id: 'EngAcceptMap_location',
                                                                itemId: 'EngAcceptMap_location',
                                                                style: 'margin-left:5px;',
                                                                listeners: [
                                                                    {
                                                                        fn: function(component, eOpts) {
                                                                            var me = this;
                                                                            me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                                                        },
                                                                        event: 'initialize'
                                                                    }
                                                                ],
                                                                items: [
                                                                    {
                                                                        xtype: 'label',
                                                                        cls: [
                                                                            'liftnet-fontColor-blue',
                                                                            'liftnet-font-size14'
                                                                        ],
                                                                        html: '地点微调'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                xtype: 'hiddenfield',
                                                                id: 'EngAcceptMap_lng',
                                                                itemId: 'EngAcceptMap_lng'
                                                            },
                                                            {
                                                                xtype: 'hiddenfield',
                                                                id: 'EngAcceptMap_lat',
                                                                itemId: 'EngAcceptMap_lat'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'image',
                                                        docked: 'left',
                                                        height: 75,
                                                        id: 'EngAcceptMap',
                                                        itemId: 'EngAcceptMap',
                                                        width: '40%'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 2,
                                        docked: 'top',
                                        height: 150,
                                        id: 'EngMaintainContain_Img',
                                        style: 'margin-top:3px;',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        flex: 1,
                                                        items: [
                                                            {
                                                                xtype: 'image',
                                                                cls: 'liftnet-fault-trackTop-img',
                                                                height: '100%',
                                                                id: 'EngMaintainP_photo_1',
                                                                itemId: 'EngMaintainP_camera',
                                                                width: '100%',
                                                                src: 'resources/images/camera.png'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        flex: 1,
                                                        items: [
                                                            {
                                                                xtype: 'image',
                                                                cls: 'liftnet-fault-trackTop-img',
                                                                height: '100%',
                                                                id: 'EngMaintainP_photo_2',
                                                                width: '100%',
                                                                src: 'resources/images/notPhoto.png'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        flex: 1,
                                                        items: [
                                                            {
                                                                xtype: 'image',
                                                                cls: 'liftnet-fault-trackTop-img',
                                                                height: '100%',
                                                                id: 'EngMaintainP_photo_3',
                                                                width: '100%',
                                                                src: 'resources/images/notPhoto.png'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                style: 'margin-top:5px;',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        flex: 1,
                                                        items: [
                                                            {
                                                                xtype: 'image',
                                                                cls: 'liftnet-fault-trackTop-img',
                                                                height: '100%',
                                                                id: 'EngMaintainP_photo_4',
                                                                width: '100%',
                                                                src: 'resources/images/notPhoto.png'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        flex: 1,
                                                        items: [
                                                            {
                                                                xtype: 'image',
                                                                cls: 'liftnet-fault-trackTop-img',
                                                                height: '100%',
                                                                id: 'EngMaintainP_photo_5',
                                                                width: '100%',
                                                                src: 'resources/images/notPhoto.png'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        flex: 1,
                                                        items: [
                                                            {
                                                                xtype: 'image',
                                                                cls: 'liftnet-fault-trackTop-img',
                                                                height: '100%',
                                                                id: 'EngMaintainP_photo_6',
                                                                width: '100%',
                                                                src: 'resources/images/notPhoto.png'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'actionsheet',
                                height: 65,
                                hidden: true,
                                id: 'camera_showM',
                                itemId: 'camera_showM',
                                hideOnMaskTap: true,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        id: 'source_camearM',
                                        itemId: 'source_camearM',
                                        width: 110,
                                        text: '相机'
                                    },
                                    {
                                        xtype: 'spacer',
                                        width: 70
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'source_albumM',
                                        itemId: 'source_albumM',
                                        width: 110,
                                        text: '相册'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '保养单',
                        hidden: false,
                        id: 'EngMaintainCheckContent_List',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                border: '0 0 1 0',
                                cls: 'liftnet-fault-listBox',
                                docked: 'top',
                                height: 50,
                                style: 'border-color:#ccc; border-style: solid;',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'label',
                                        html: '位置',
                                        style: 'line-height:50px;text-align:center;',
                                        width: '15%'
                                    },
                                    {
                                        xtype: 'label',
                                        html: 'NO',
                                        style: 'text-align:center;line-height:50px;',
                                        width: '15%'
                                    },
                                    {
                                        xtype: 'label',
                                        border: '',
                                        html: '作业项目',
                                        style: 'text-align:center;line-height:50px;',
                                        width: '55%'
                                    },
                                    {
                                        xtype: 'label',
                                        html: '结论',
                                        style: 'text-align:center;line-height:50px;',
                                        width: '15%'
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                flex: 1,
                                cls: 'liftnet-fault-listBox',
                                id: 'EngmaintainPlanCCList',
                                disableSelection: true,
                                itemTpl: [
                                    '<div style="width:100%" class="liftnet-font-size14">',
                                    '    <div style="width:15%;float:left;text-align:center;line-height:43px;">{locations}&nbsp;</div>',
                                    '    <div style="width:15%;float:left;text-align:center;line-height:43px;">{lno}&nbsp;</div>',
                                    '    <div style="width:55%;float:left;text-align:left;line-height:43px;overflow:hidden; text-overflow:ellipsis;white-space: nowrap;">{plancontents}&nbsp;</div>',
                                    '    <div style="width:15%;float:left;text-align:center;line-height:43px;">',
                                    '        <tpl if=\'ste == "N"\'>',
                                    '        <tpl if=\'checkverdict == "√"\'>',
                                    '        <!--定义一个id(statusArea)用于识别点击位置',
                                    '            在list的itemtap事件中，用e.target.id可获得被点击对象的id-->',
                                    '        <i id=\'statusArea\' class=\'fa fa-lg fa-check-circle\' style=\'color:green\'></i>',
                                    '    <tpl else>',
                                    '        <!--如果状态为N，显示“红色叉” -->',
                                    '        <tpl if=\'checkverdict == "×"\'>',
                                    '            <i id=\'statusArea\' class=\'fa fa-lg fa-times-circle\' style=\'color:red\'></i>',
                                    '        <tpl else>',
                                    '            <!--默认状态为空，显示“灰色横” -->',
                                    '            <i id=\'statusArea\' class=\'fa fa-lg fa-minus-circle\' style=\'color:#ccc\'></i>',
                                    '        </tpl>',
                                    '    </tpl>',
                                    '        </tpl>',
                                    '        <tpl if=\'ste == "Y"\'>',
                                    '        <tpl if=\'checkverdict == "√"\'>',
                                    '        <!--定义一个id(statusArea)用于识别点击位置',
                                    '            在list的itemtap事件中，用e.target.id可获得被点击对象的id-->',
                                    '        <i class=\'fa fa-lg fa-check-circle\' style=\'color:green\'></i>',
                                    '    <tpl else>',
                                    '        <!--如果状态为N，显示“红色叉” -->',
                                    '        <tpl if=\'checkverdict == "×"\'>',
                                    '            <i class=\'fa fa-lg fa-times-circle\' style=\'color:red\'></i>',
                                    '        <tpl else>',
                                    '            <!--默认状态为空，显示“灰色横” -->',
                                    '            <i class=\'fa fa-lg fa-minus-circle\' style=\'color:#ccc\'></i>',
                                    '        </tpl>',
                                    '    </tpl>',
                                    '        </tpl>',
                                    '        ',
                                    '       </div>',
                                    '</div>	'
                                ],
                                store: 'by_checkcontent'
                            },
                            {
                                xtype: 'panel',
                                html: '',
                                id: 'EngMaintain_signaturePanel'
                            },
                            {
                                xtype: 'panel',
                                cls: [
                                    'liftnet-button-three',
                                    'liftnet-button'
                                ],
                                id: 'EngMaintainPlanCC_PnlOperation',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'liftnet-buttonColor-green',
                                        id: 'EngMaintainPlan_BtnSave',
                                        text: '保存'
                                    },
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'liftnet-buttonColor-green',
                                        id: 'EngMaintainPlan_BtnSub',
                                        text: '提交'
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