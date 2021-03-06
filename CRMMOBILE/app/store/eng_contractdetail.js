/*
 * File: app/store/eng_contractdetail.js
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

Ext.define('liftnet.store.eng_contractdetail', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_contractdetail',
        fields: [
            {
                name: 'billno'
            },
            {
                name: 'clientunit'
            },
            {
                name: 'projectname'
            },
            {
                name: 'projectaddress'
            },
            {
                name: 'vulnerableamount'
            },
            {
                name: 'needingattention'
            },
            {
                name: 'contractnumber'
            },
            {
                name: 'allprice'
            },
            {
                name: 'maid'
            },
            {
                name: 'maname'
            },
            {
                name: 'r9'
            },
            {
                name: 'contractid'
            },
            {
                name: 'lotdate'
            },
            {
                name: 'mugstartdate'
            },
            {
                name: 'mugenddate'
            },
            {
                name: 'r18'
            },
            {
                name: 'createdept'
            },
            {
                name: 'createdeptname'
            },
            {
                name: 'createnameShow'
            },
            {
                name: 'contracttypeid'
            },
            {
                name: 'contracttypename'
            },
            {
                name: 'createid'
            },
            {
                name: 'createname'
            },
            {
                name: 'operdate'
            },
            {
                name: 'paytypeid'
            },
            {
                name: 'paytypename'
            },
            {
                name: 'paystyleid'
            },
            {
                name: 'paystylename'
            },
            {
                name: 'masterrem'
            },
            {
                name: 'operationid'
            },
            {
                name: 'operationname'
            },
            {
                name: 'r1'
            },
            {
                name: 'r1name'
            },
            {
                name: 'liftinfo'
            },
            {
                name: 'client'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/bycontract/api/1.0/bycontractdetail';
            var adapterparm = {
                userid:global.getUserId(),
                billno:parm.billno
            };
            callPostAdapter(
                url, adapterparm,
                function(ret) {
                    if(ret.status.code!=200){
                        onFailure('获取合同明细失败');
                    }else{
                        var d = me.decoDat(ret.data);
                        me.setData(d);
                        onSuccess(d);
                    }
                },
                function() {
                    onFailure('获取合同明细失败');
                }
                );
        } else {

            var d = [
                {
                    billno:'billno123 ',
                    clientunit:'clientunit',
                    projectname:'projectname',
                    projectaddress:'projectaddress',
                    vulnerableamount:'500.0',
                    needingattention:'needingattention',
                    contractnumber:'20',
                    allprice:'18000',
                    maid:'maid',
                    maname:'maname',
                    r9:'r9',
                    contractid:'contractid',
                    lotdate:'2015-06-12',
                    mugstartdate:'2015-06-15',
                    mugenddate:'2016-06-15',
                    r18:'12',
                    createdept:'createdept',
                    createdeptname:'createdeptname',
                    contracttypeid:'contracttypeid',
                    contracttypename:'contracttypename',
                    createid:'createid',
                    createname:'createname',
                    operdate:'operdate',
                    paytypeid:'paytypeid',
                    paytypename:'paytypename',
                    paystyleid:'paystyleid',
                    paystylename:'paystylename',
                    masterrem:'masterrem',
                    operationid:'operationid',
                    operationname:'operationname',
                    r1:'r1',
                    r1name:'r1name',
                    client:[{
                        cstname:'cstname',
                        principal:'principal',
                        purveyor:'purveyor',
                        address:'address',
                        mugaddress:'mugaddress',
                        phone:'10086',
                        fax:'fax',
                        postno:'postno',
                        bank:'bank',
                        accounts:'accounts',
                        identificationnumber:'identificationnumber',
                        licensenumber:'licensenumber',
                        sort:'sort',
                        levelid:'levelid',
                        levelename:'levelename',
                        typeid:'typeid',
                        typename:'typename',
                        r7:'r7',
                        r2:'',
                        r13:'r13',
                        rem1:'rem1',
                        createname:'createname',
                        createdept:'createdept',
                        linkerbean:[
                            {
                                contractman:'contractman1',mbphone:'mbphone1',
                                ob1:'ob11',othercontact:'othercontact',remail:'remail'
                            },
                            {
                                contractman:'contractman2',mbphone:'mbphone2',
                                ob1:'ob12',othercontact:'othercontact2',remail:'remail2'
                            }
                        ],
                        flowuserlist:[
                            {flowuser:'flowuser1',storagename:'storagename1',remark:'remark1'},
                            {flowuser:'flowuser2',storagename:'storagename2',remark:'remark2'}
                        ]
                    }],
                    liftinfo:[
                        {
                            liftautono:'3110-123456-123456-0001',
                            pordid:'',
                            ladderno:'A1',
                            regularno:'101202303',
                            r15:'6,000',
                            yearcheckprice:'0',
                            r18:'12',
                            price:'500',fsd:'10/10/10',
                            elevatorid:'elevatorid11',
                            elevatorname:'MCA-CO105',
                            facid:'facid11',
                            facname:'日立',
                            surrenderflag:'surrenderflag11',
                            detailstatus:'新签'
                        },
                        {
                            liftautono:'3110-123456-123456-0002',
                            pordid:'3110-123456-123456-0002',
                            ladderno:'A2',
                            regularno:'101202303',
                            r15:'6,000',
                            yearcheckprice:'0',
                            r18:'12',
                            price:'500',fsd:'10/10/10',
                            elevatorid:'elevatorid11',
                            elevatorname:'MCA-CO105',
                            facid:'facid11',
                            facname:'日立',
                            surrenderflag:'surrenderflag11',
                            detailstatus:'新签'
                        },
                        {
                            liftautono:'3110-123456-123456-0003',
                            pordid:'3110-123456-123456-0003',
                            ladderno:'A3',
                            regularno:'101202303',
                            r15:'6,000',
                            yearcheckprice:'0',
                            r18:'12',
                            price:'500',fsd:'10/10/10',
                            elevatorid:'elevatorid11',
                            elevatorname:'MCA-CO105',
                            facid:'facid11',
                            facname:'日立',
                            surrenderflag:'surrenderflag11',
                            detailstatus:'续签'
                        },
                    ]
                }
            ];
            var data = this.decoDat(d);
            this.setData(data);
            onSuccess(data);
        }
    },

    decoDat: function(data) {
        if(!data){
            return ([]);
        }
        //修改合同创建人显示
        data[0].createnameShow = data[0].createname + '(' +
            data[0].createdeptname +')';
        if(data[0].operdate!==''){
            data[0].operdate = data[0].operdate.substring(0,10);
        }
        //修改客户创建人显示
        var client = data[0].client[0];
        if(client.r2!==''){
            client.r2 = client.r2.substring(0,10);
        }
        client.createnameShow = client.createname +'('+
            client.createdept+')';

        //修改联系人、跟进人显示
        //组拼联系人
        var linkerbeanShow = '';
        var linkerbeanList = client.linkerbean;
        var length = linkerbeanList.length;
        var i;
        for(i = 0; i < length; i++){
            linkerbeanShow += linkerbeanList[i].contractman+',';
        }
        linkerbeanShow = linkerbeanShow.substring(0,linkerbeanShow.length-1);
        client.linkerbeanShow = linkerbeanShow;

        //组拼跟进人
        var flowuserlistShow = '';
        var flowuserList = client.flowuserlist;
        length = flowuserList.length;
        for(i = 0; i < length; i++){
            flowuserlistShow += flowuserList[i].flowuser+',';
        }
        flowuserlistShow = flowuserlistShow.substring(0,flowuserlistShow.length-1);
        client.flowuserlistShow = flowuserlistShow;

        data[0].client[0] = client;

        //电梯增加保养开始日期-保养结束日期
        var liftinfo = data[0].liftinfo;
        length = liftinfo.length;
        for(i = 0; i < length; i++){
            liftinfo[i].mugstartdate = data[0].mugstartdate;
            liftinfo[i].mugenddate = data[0].mugenddate;
            liftinfo[i].r15 = '¥'+liftinfo[i].r15;
            liftinfo[i].price = '¥'+liftinfo[i].price;
            liftinfo[i].yearcheckprice = '¥'+liftinfo[i].yearcheckprice;
        }
        data[0].liftinfo = liftinfo;

        return data;
    }

});