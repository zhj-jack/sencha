/*
 * File: app/view/Engineer/EngMaintainContractStatus.js
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

Ext.define('liftnet.view.Engineer.EngMaintainContractStatus', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Button'
    ],

    config: {
        centered: true,
        hidden: true,
        id: 'EngMaintainContractStatus',
        itemId: 'EngMaintainContractStatus',
        padding: '5 10',
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_0',
                itemId: 'EngMaintainContractStatus_0',
                text: '全部'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_1',
                itemId: 'EngMaintainContractStatus_1',
                text: '新建'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_2',
                itemId: 'EngMaintainContractStatus_2',
                text: '待审'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_3',
                itemId: 'EngMaintainContractStatus_3',
                text: '通过'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_4',
                itemId: 'EngMaintainContractStatus_4',
                text: '不通过'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_5',
                itemId: 'EngMaintainContractStatus_5',
                text: '审批中'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngMaintainContractStatus_6',
                itemId: 'EngMaintainContractStatus_6',
                text: '已取消'
            }
        ]
    }

});