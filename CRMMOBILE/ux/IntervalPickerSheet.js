Ext.define('ux.IntervalPickerSheet', {
    extend: 'Ext.Sheet',
    alias: 'ux.intervalpickersheet',

    config: {
        height: 253,
        hidden: true,
        width: '100%',
        hideOnMaskTap: false,
        layout: {
            type: 'hbox'
        },
        bottom: 0,
        enter: 'bottom',
        exit: 'bottom',
        dateFrom: new Date(),
        dateTo: new Date(),
        title: '选择日期范围',
        control: {
            '#confirmbutton': {
                tap: 'confirm'
            },
            '#cancelbutton': {
                tap: 'cancel'
            }
        },
        handler: null
    },
    initialize: function(){
        var options = {
            toolbar: false, 
            cancelButton: null, 
            doneButton: null,
            slotOrder: ['year','month','day']
        };
        this.datePickerFrom = Ext.create('Ext.picker.Date', options);
        this.datePickerTo = Ext.create('Ext.picker.Date', options);
        this.datePickerFrom.setValue(this.config.dateFrom);
        this.datePickerTo.setValue(this.config.dateTo);
        this.setItems([
            {
                xtype: 'container',
                flex: 1,
                margin: '0 0 0 0',
                layout: {
                    type: 'fit'
                },
                items: this.datePickerFrom
            },
            {
                xtype: 'container',
                flex: 1,
                margin: '0 0 0 1',
                layout: {
                    type: 'fit'
                },
                items: this.datePickerTo
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: this.config.title,
                items: [
                    {
                        xtype: 'button',
                        text: '取消',
                        id: 'cancelbutton'
                    },
                    {
                        xtype: 'spacer',
                    },
                    {
                        xtype: 'button',
                        text: '确定',
                        id: 'confirmbutton'
                    }
                ]
            }
        ]);
        Ext.Viewport.add(this);
        this.show();
    },

    confirm: function(){
        this.hide();
        this.config.handler(
            this.datePickerFrom.getValue(true),
            this.datePickerTo.getValue(true));
        this.destroy();
    },
    cancel: function(){
        this.hide();
        this.destroy();
    },
});