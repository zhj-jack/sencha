/*
 * File: app/store/eng_projectlocation.js
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

Ext.define('liftnet.store.eng_projectlocation', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_projectlocation',
        fields: [
            {
                name: 'projectjnlno'
            },
            {
                name: 'projectname'
            },
            {
                name: 'projectaddress'
            },
            {
                name: 'elevatornum'
            },
            {
                name: 'lon'
            },
            {
                name: 'lat'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        var adapterparm = {
            userid: global.getUserId(),
            searchker:parm.searchker,
            lon:parm.lon,
            lat:parm.lat,
            rangradius:parm.rangradius
        };

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/common/api/1.0/xmdlwzcx';
            callPostAdapter(
                url, adapterparm,
                function(ret) {
                    if(ret.status.code!=200){
                        if(parm.searchker!==''){
                            onFailure('读取项目位置信息失败');
                        }else{
                            onFailure('搜索项目位置信息失败');
                        }

                    }else{
                        me.setData(ret.data);
                        onSuccess(me.getData());
                    }
                },
                function() {
                    if(parm.searchker!==''){
                            onFailure('读取项目位置信息失败');
                        }else{
                            onFailure('搜索项目位置信息失败');
                        }
                }
                );

        } else {

            // 获取项目地址列表-演示数据
        //     this.setData([
        //         {
        //             projectname: '万科四季花园',
        //             projectaddress: '东山湖公园',
        //             lon:'113.2986000000',
        //             lat:'23.1222200000',
        //             elevatornum:10
        //         },
        //         {
        //             projectname: '万科四季花园',
        //             projectaddress: '东山口',
        //             lon:'113.3022230000',
        //             lat:'23.1303380000',
        //             elevatornum:12
        //         },
        //         {
        //             projectname: '万科四季花园',
        //             projectaddress: '长城大厦',
        //             lon:'113.3122170000',
        //             lat:'23.1257610000',
        //             elevatornum:1
        //         },
        //         {
        //             projectname: '万科四季花园',
        //             projectaddress: '金海湾',
        //             lon:'113.3082580000',
        //             lat:'23.1093510000',
        //             elevatornum:5
        //         }


        //     ]);
            this.setData([]);
                onSuccess(this.getData());
                }
    },

    filteDat: function(parm) {
        this.clearFilter();

                if(parm!=='') {
                    this.filterBy(function(item) {
                        var s = item.get("projectname") + ' ' + item.get("projectaddress");
                        return (s.toUpperCase().indexOf(parm.toUpperCase())>=0);
                    });
                }
    }

});