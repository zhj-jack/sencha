/*
 * File: app/store/firstcheck_sjfpxmlist.js
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

Ext.define('liftnet.store.firstcheck_sjfpxmlist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'firstcheck_sjfpxmlist',
        fields: [
            {
                name: 'projectid'
            },
            {
                name: 'contractid'
            },
            {
                name: 'projectname'
            },
            {
                name: 'projectaddress'
            },
            {
                name: 'custname'
            },
            {
                name: 'elevatornum'
            },
            {
                name: 'dispatchtype'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/firstcheck/api/1.0/sjfpxmlist';
        //     var userid = global.getUserId();
        //     var adapterParm = {userid: userid};

            callPostAdapter(
                url, parm,
                function(ret) {
        //             me.setData(ret.data);
        //             onSuccess(ret.data.length);
                    //分页用法，在原有数据上继续添加
                    var d = ret.data;
                    var n = d.length;
                    for(var i=0; i<n; i++) {
                        me.add(d[i]);
                    }
                    onSuccess(n);
                },
                onFailure);
        } else {

            // 获项目列表-演示数据

            var start = (parm.curpagenum-1)*parm.pagesize+1, end = start + parm.pagesize-1;

            for(var i=start; i<=end; i++) {
                this.add({
                    projectid:'projectid'+(i+1),
                    contractid:'contractid'+(i+1),
                    custname:'custname'+(i+1),
                    elevatornum:i+1,
                    dispatchtype:'dispatchtype'+(i+1),
                    projectname: '广州市华越友联科技发展有限公司.' + (i + 1),
                    projectaddress: '广州市荔湾区黄沙大道144号大冶有色大厦1001室',
                });
            }
            // 演示数据
            onSuccess(end - start + 1);

        }
        //     var start = parm.pageno,
        //         end = parm.pageno + parm.pagelen - 1;
        //             end = end>58? 58:end;

        //             for(var i=start; i<=end; i++) {
        //                 this.add({
        //                     projectid:'projectid'+(i+1),
        //                     contractid:'contractid'+(i+1),
        //                     custname:'custname'+(i+1),
        //                     elevatornum:i+1,
        //                     dispatchtype:'dispatchtype'+(i+1),
        //                     projectname: '广州市华越友联科技发展有限公司.' + (i + 1),
        //                     projectaddress: '广州市荔湾区黄沙大道144号大冶有色大厦1001室',
        //                 });
        //             }
        //             // 演示数据
        //             onSuccess(end - start + 1);
        // }
    }

});