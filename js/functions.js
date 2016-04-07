      var ip = 'http://192.168.11.16';
      var allowdl = null;
      var Accountid = null;
      var accountname = null;
      var servicetype = null;
      var meter = null;
      var multiplier = null;
      var previousreading = null;
      var previousreadingdate = null;
      var multiplier = null;
      var low = null;
      var high = null;
      webdb = {};
      webdb.db = null;
     
      function initDB() {
          db = openDatabase("BohecoReaderDB", "1.0", "Meter Reader", 5 * 1024 * 1024);
    		  if(db) {
    			  db.transaction(function(tx) {
      			  // tx.executeSql("CREATE TABLE IF NOT EXISTS [statementheader](ID TEXT PRIMARY KEY ASC,[STATEMENTPERIODID] TEXT,[READINGPERIODID] TEXT,[READINGDATE] [datetime],[STATEMENTDATE] [datetime],[METERSERIAL] TEXT,[SERVICETYPEID] INTEGER,[ACCOUNTID] TEXT,[MULTIPLIER] FLOAT,[DATEFROM] FLOAT,[DATETO] [datetime],[DUEDATE] [datetime],[DISCONNECTIONDATE] [datetime],[PREVIOUSREADING] FLOAT,[CURRENTREADING] FLOAT,[CONSUMPTION] FLOAT,[AMOUNT] FLOAT,[VATABLESALES] FLOAT,[VATAMOUNT] FLOAT,[REMARKS] TEXT,[STATUS] INTEGER,[BRANCHID] INTEGER,[POSID] INTEGER,[EMPNO] INTEGER,[TURNOVERID] INTEGER);", []);
      			  // tx.executeSql("CREATE TABLE IF NOT EXISTS [meter]([SERIAL] TEXT PRIMARY KEY ASC,[TYPE] TEXT,[BRAND] TEXT,[MODEL] TEXT,[ACQUISITIONPERIOD] [datetime],[ACTIVATIONPERIOD] [datetime],[EXPIRYPERIOD] [datetime],[READINGPERIOD] TEXT,[READINGDATE] [datetime],[READING] FLOAT,[READ] INTEGER,[ADD] INTEGER,[ACCTID] TEXT);", []);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [account]([ID] TEXT PRIMARY KEY ASC,[METERSERIAL] TEXT,[SERVICETYPEID] INTEGER,[CUSTNO] INTEGER,[NAME] TEXT,[ADDRESS] TEXT,[TELEPHONE] TEXT,[EMAIL] TEXT,[ZONEID] INTEGER,[TRANSFORMERID] INTEGER,[STATUS] INTEGER,[REMARKS] TEXT,[BALANCE] FLOAT,[CONSUMPTION] FLOAT,[CONSUMPTION2] FLOAT,[CONSUMPTION3] FLOAT,[CONSUMPTION4] FLOAT,[CONSUMPTION5] FLOAT,[CONSUMPTION6] FLOAT,[CONSUMPTION7] FLOAT,[CONSUMPTION8] FLOAT,[CONSUMPTION9] FLOAT,[CONSUMPTION10] FLOAT,[CONSUMPTION11] FLOAT,[CONSUMPTION12] FLOAT,[MULTIPLIER] FLOAT,[READINGPERIOD] TEXT,[READINGPERIOD2] TEXT,[READINGPERIOD3] TEXT,[READINGPERIOD4] TEXT,[READINGPERIOD5] TEXT,[READINGPERIOD6] TEXT,[READINGPERIOD7] TEXT,[READINGPERIOD8] TEXT,[READINGPERIOD9] TEXT,[READINGPERIOD10] TEXT,[READINGPERIOD11] TEXT,[READINGPERIOD12] TEXT,[READINGDATE] [datetime],[SEQ] INTEGER,[READ] INTEGER,[ADD] INTEGER);", []);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [serviceitem]([ID] [int] PRIMARY KEY ASC NOT NULL, [SERVICETYPEID] [int] NULL, [ITEMID] [int] NULL, [RATE] [float] NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [item]([ID] [int] PRIMARY KEY ASC, [CATEGORYID] [int] NULL, [SEQUENCE] [int] NULL, [DESCRIPTION] [char](128) NULL, [VATID] [int] NULL, [QUERY] [char](1024) NULL, [STATUS] [tinyint] NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [vat]([ID] INTEGER PRIMARY KEY ASC, [DESCRIPTION] TEXT, [DIVISOR] FLOAT, [MULTIPLIER] FLOAT);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [zone]([ID] [int] PRIMARY KEY ASC NOT NULL, [DESCRIPTION] [char](128) NULL;",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [feeder]([ID] [int] PRIMARY KEY ASC NOT NULL, [DESCRIPTION] [char](128) NULL, [LATITUDE] [float] NULL, [LONGITUDE] [float] NULL, [STATUS] [tinyint] NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [itemcategory]([ID] [int] PRIMARY KEY ASC NOT NULL, [DESCRIPTION] [char](128) NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [servicetype]([ID] [int] PRIMARY KEY ASC NOT NULL, [DESCRIPTION] [char](128) NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [statementdetail]([ID] [char](30) PRIMARY KEY ASC NOT NULL, [STATEMENTID] [char](20) NULL, [ITEMID] [int] NULL, [BASE] [float] NULL, [RATE] [float] NULL, [AMOUNT] [float] NULL, [VATID] [int] NULL, [VATABLESALE] [float] NULL, [VATAMOUNT] [float] NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [transformer]([ID] [int] PRIMARY KEY ASC NOT NULL, [FEEDERID] [int] NULL, [DESCRIPTION] [char](128) NULL, [LATITUDE] [float] NULL, [LONGITUDE] [float] NULL, [STATUS] [tinyint] NULL, [READINGPERIOD] [char](20) NULL, [READINGDATE] [datetime] NULL, [READING] [float] NULL, [READ] [tinyint] NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [transformerreading](ID] [char](20) PRIMARY KEY ASC NOT NULL, [READINGPERIODID] [char](10) NULL, [TRANSFORMERID] [int] NULL, [GENERATED] [float] NULL, [CONSUMED] [float] NULL, [VARIANCE] [float] NULL, [PREVIOUSREADINGDATE] [datetime] NULL, [PREVIOUSREADING] [float] NULL, [CURRENTREADINGDATE] [datetime] NULL, [CURRENTREADING] [float] NULL, [READINGDATE] [datetime] NULL, [TABLETID] [int] NULL);",[]);
           //    tx.executeSql("CREATE TABLE [readingperiod]( [ID] [char](20) PRIMARY KEY ASC NOT NULL, [DATEFROM] [datetime] NULL, [DATETO] [datetime] NULL, [GENERATED] [float] NULL, [CONSUMED] [float] NULL, [VARIANCE] [float] NULL);",[]);
           //    tx.executeSql("CREATE TABLE [statementperiod]( [ID] [char](10) PRIMARY KEY ASC NOT NULL, [CONSUMPTION] [float] NULL, [AMOUNT] [float] NULL);",[]);
           //    tx.executeSql("CREATE TABLE IF NOT EXISTS [servicerate]([ID] [int] PRIMARY KEY ASC NOT NULL,[SERVICETYPEID] [int] NULL,[LIMIT] [int] NULL,[EFFECTIVITY] [datetime] NULL);",[]);
              tx.executeSql("CREATE TABLE IF NOT EXISTS [account2]( [ID] [int] PRIMARY KEY ASC NOT NULL, [ServicePeriodEnd] [datetime] NULL, [AccountNumber] [varchar](12) NULL, [Route] [varchar](6) NULL, [SequenceNumber] [varchar](6) NULL, [ConsumerName] [varchar](60) NULL, [ConsumerAddress] [varchar](30) NULL, [MeterNumber] [varchar](20) NULL, [PreviousReading2] [float] NULL, [PreviousReading1] [float] NULL, [PreviousReading] [float] NULL, [ReadingDate] [datetime] NULL, [ReadBy] [varchar](60) NULL, [PowerReadings] [int] NULL, [DemandReadings] [int] NULL, [FieldFindings] [int] NULL, [MissCodes] [varchar](20) NULL, [Remarks] [varchar](30) NULL, [UpdateStatus] [varchar](30) NULL, [ConsumerType] [varchar](2) NULL, [AccountStatus] [varchar](10) NULL, [ShortAccountNumber] [varchar](6) NULL, [Multiplier] [smallint] NULL, [MeterDigits] [smallint] NULL, [Coreloss] [smallint] NULL, [CorelossKWHLimit] [varchar](15) NULL, [AdditionalKWH] [smallint] NULL, [TSFRental] [smallint] NULL, [SchoolTag] [varchar](30) NULL, [SDiscountStatus] [varchar](30) NULL, [ConnectionDate] [datetime] NULL, [QCAmount] [float] NULL, [KWHConsumption] [float] NULL, [PCAmount] [float] NULL, [EPAmount] [float] NULL);",[]);
              tx.executeSql("CREATE TABLE IF NOT EXISTS [download]([allowdownload] INTEGER PRIMARY KEY ASC);", []);

              tx.executeSql("DELETE FROM download;", []);
              tx.executeSql("INSERT INTO download (allowdownload) VALUES (?);", [0]);
    			  });
    		 }
      }

        webdb.onError = function(tx, e) {
          alert("There has been an error: " + e.message);
        }

        webdb.onSuccess = function(tx, r) {
           console.log("SUCCESS");
        }

        webdb.addReading = function() {
              // var daysdue = 15;
              var sdate= new Date();
              var month = sdate.getMonth()+1;
              var year = sdate.getFullYear();
              var sdate = year+''+month;
              var rdate= new Date();
              var month = rdate.getMonth();
              var year = rdate.getFullYear();
              var rdate = year+''+month;
            var branchid = 999;
            var posid = 22;
            var empno = 1;
            var StatementPeriod = sdate;
            var ReadingPeriod = rdate;
            var ID = StatementPeriod + '-' + Accountid;
            console.log(StatementPeriod);
            db.transaction(function(tx){
               tx.executeSql("INSERT INTO statementperiod (ID) select ? where not exists(select id from statementperiod where id=?)",[StatementPeriod,StatementPeriod],
                  webdb.onSuccess,
                  webdb.onError);  

               tx.executeSql("INSERT INTO readingperiod (ID) SELECT ? where not exists(select id from readingperiod where id=?)",[ReadingPeriod,ReadingPeriod],
                  webdb.onSuccess,
                  webdb.onError);  

               tx.executeSql("DELETE FROM StatementHeader where id = ?",[ID],
                  webdb.onSuccess,
                  webdb.onError);  

               tx.executeSql("DELETE FROM StatementDetail where Statementid = ?",[ID],
                  webdb.onSuccess,
                  webdb.onError);  
            
                tx.executeSql("INSERT OR REPLACE INTO statementheader (id, statementperiodid,   readingperiodid,   statementdate,   accountid,   servicetypeid,   meterserial,   previousreading,   currentreading,   datefrom,   dateto,   duedate,   consumption,    amount,  readingdate,   branchid,   posid,   empno)  SELECT ?, ?, ?, date('now'), ?, ?, ?, ?, ?, ?, date('now'), date('now', '+15 days'), ?, 0, date('now'), ?, ?, ? WHERE NOT EXISTS (select ID from statementheader where ID = ?)",[ID, StatementPeriod, ReadingPeriod, $('#accID').val(), servicetype, $('#meter').val(), previousreading, $('#currentReading').val(), previousreadingdate, $('#consumption').val(), branchid, posid, empno, ID], 
                  alert("Added successfully!"),
                  webdb.onError); 
                // adding to statement detail
                tx.executeSql("insert into statementdetail select (?||ifnull(sim.itemid,0)) ID,? StatementID,ifnull(sim.itemid,0) itemid,? BASE,ifnull(sim.rate,0) rate, ifnull(sim.rate,0) * ? amount, ifnull(itm.vatid,0) vatid,((ifnull(sim.rate,0) * ?)/(ifnull(1,0))) vatableSale, ((ifnull(sim.rate,0) * ?)-((ifnull(sim.rate,0) * ?)/(ifnull(1,0)))) vatAmount from ServiceItem sim inner join Item itm on itm.id=sim.itemid left join VAT vat on vat.id=itm.vatid where sim.servicetypeid= 1 order by itm.sequence",[ID,StatementPeriod,$('#consumption').val(),$('#consumption').val(),$('#consumption').val(),$('#consumption').val(),$('#consumption').val()], 
                  alert("Added successfully!"),
                  webdb.onError); 

                tx.executeSql("select ifnull(t1.itemid,0),ifnull(t2.sequence,0),ifnull(t1.rate,0),ifnull(t2.vatid,0),ifnull(t3.divisor,0),ifnull(t2.query,'') from ServiceItem t1 inner join Item t2 on t2.id=t1.itemid left join VAT t3 on t3.id=t2.vatid where t1.servicetypeid= servicetype order by t2.sequence",[]);
                // function(tx, results) {
                //       for (var i = 0; i < results.rows.length; i++) {

                //       }
                // }

                        //TODO
                        //     QueryResultSet{prop:sql} ='update' & |
                        //     ' dbo.StatementHeader' & |
                        //     ' set amount = ' & Amount & |
                        //     ' where id=''' & clip(Statementnumber) & ''''
                        //     !message(QueryResultSet{prop:sql})

                        //     clear(QueryResultSet)
                        //     QueryResultSet{prop:sql} ='update dbo.account set readingperiod=t2.READINGPERIODID,consumption=t2.CONSUMPTION,readingdate=t2.READINGDATE,[read]=1' & |
                        //     ' from [dbo].[account] t1 inner join dbo.statementheader t2 on t1.ID=t2.ACCOUNTID where t1.id= ''' & Accountid & ''''



                        // !    clear(QueryResultSet)
                        // !    QueryResultSet{prop:sql} ='update dbo.account' & |
                        // !    ' set [read]=1' & |
                        // !    ' where id= ''' & Accountid & ''''



                        //     if CurrentReading > 0
                        //         clear(QueryResultSet)
                        //         QueryResultSet{prop:sql} ='update' & |
                        //         ' dbo.meter' & |
                        //         ' set [read]=1' & |
                        //         ' where serial= ''' & clip(Meter) & ''''
                        //         !message(QueryResultSet{prop:sql})
                        //     end

                        //     if glo:autoprint then PrintReceipt(Accountid).

                        //     return true

              });
            
        }
     
      function readOnly() {
         $('#accID').attr('readonly', true);
         $('#accID').addClass('input-disabled');
         $('#accName').attr('readonly', true);
         $('#accName').addClass('input-disabled');
         $('#previousReading').attr('readonly', true);
         $('#previousReading').addClass('input-disabled');
         $('#consumption').attr('readonly', true);
         $('#consumption').addClass('input-disabled');
         $('#amount').attr('readonly', true);
         $('#amount').addClass('input-disabled');
      }

      function clear() {
         $('#meter').val('');
         $('#accID').val('');
         $('#accName').val('');
         $('#currentReading').val('');
         $('#previousReading').val('');
         $('#consumption').val('');
         $('#amount').val('');
      }

    //Generic error handler
      function dbError(e) {
        console.log("SQL ERROR");
        console.dir(e);
      }
      
    //Generic utility
      function convertResults(resultset) {
        var results = [];
        for(var i=0,len=resultset.rows.length;i<len;i++) {
          var row = resultset.rows.item(i);
          var result = {};
          for(var key in row) {
            result[key] = row[key];
          }
          results.push(result);
        }
        return results;
      }

      function backup(table) {
        // var def = new $.Deferred();
        db.readTransaction(function(tx) {
          tx.executeSql("select * from "+table, [], function(tx,results) {
            var data = convertResults(results);
            // var date = new Date();
            // var month= date.getMonth()+1;
            // var year= date.getFullYear();
            // var readingperiod="'"+month+"'/'"+year+"'";
            // console.log(readingperiod);
            // var smonth=date.getMonth();
            // var statementperiod ="'"+smonth+"'/'"+year+"'";
            // console.log(statementperiod);

            var lth=data.length;
            for(var i =0;i<lth;i++){
              console.log(data[i].ServicePeriodEnd);
              $.ajax({
                type  : 'POST',
                url   : ""+ip+"/BOHECO_API/insert/account2insert.php",
                dataType: 'json',
                data  : {
                    'ID' : data[i].ID,
                    'ServicePeriodEnd' : data[i].ServicePeriodEnd,
                    'AccountNumber' : data[i].AccountNumber,
                    'Route' : data[i].Route,
                    'SequenceNumber' : data[i].SequenceNumber,
                    'ConsumerName' : data[i].ConsumerName,
                    'ConsumerAddress' : data[i].ConsumerAddress,
                    'MeterNumber' : data[i].MeterNumber,
                    'PreviousReading2' : data[i].PreviousReading2,
                    'PreviousReading1' : data[i].PreviousReading1,
                    'PreviousReading' : data[i].PreviousReading,
                    'ReadingDate' : data[i].ReadingDate,
                    'ReadBy' : data[i].ReadBy,
                    'PowerReadings' : data[i].PowerReadings,
                    'DemandReadings' : data[i].DemandReadings,
                    'FieldFindings' : data[i].FieldFindings,
                    'MissCodes' : data[i].MissCodes,
                    'Remarks' : data[i].Remarks,
                    'UpdateStatus' : data[i].UpdateStatus,
                    'ConsumerType' : data[i].ConsumerType,
                    'AccountStatus' : data[i].AccountStatus,
                    'ShortAccountNumber' : data[i].ShortAccountNumber,
                    'Multiplier' : data[i].Multiplier,
                    'MeterDigits' : data[i].MeterDigits,
                    'Coreloss' : data[i].Coreloss,
                    'CorelossKWHLimit' : data[i].CorelossKWHLimit,
                    'AdditionalKWH' : data[i].AdditionalKWH,
                    'TSFRental' : data[i].TSFRental,
                    'SchoolTag' : data[i].SchoolTag,
                    'SDiscountStatus' : data[i].SDiscountStatus,
                    'ConnectionDate' : data[i].ConnectionDate,
                    'QCAmount' : data[i].QCAmount,
                    'KWHConsumption' : data[i].KWHConsumption,
                    'PCAmount' : data[i].PCAmount,
                    'EPAmount' : data[i].EPAmount,
                },
               success : function(data) {
                  alert("Upload complete.");
                },

              });

              // $.ajax({
              //   type  : 'POST',
              //   url   : ""+ip+"/readerapi/insert/statementheaderinsert.php",
              //   dataType: 'json',
              //   data  : {
              //       'ID' : data[i].ID,
              //       'STATEMENTPERIODID' : data[i].STATEMENTPERIODID,
              //       'READINGPERIODID' : data[i].READINGPERIODID,
              //       'READINGDATE' : data[i].READINGDATE,
              //       'STATEMENTDATE' : data[i].STATEMENTDATE,
              //       'METERSERIAL' : data[i].METERSERIAL,
              //       'SERVICETYPEID' : data[i].SERVICETYPEID,
              //       'ACCOUNTID' : data[i].ACCOUNTID,
              //       'MULTIPLIER' : data[i].MULTIPLIER,
              //       'DATEFROM' : data[i].DATEFROM,
              //       'DATETO' : data[i].DATETO,
              //       'DUEDATE' : data[i].DUEDATE,
              //       'DISCONNECTIONDATE' : data[i].DISCONNECTIONDATE,
              //       'PREVIOUSREADING' : data[i].PREVIOUSREADING,
              //       'CURRENTREADING' : data[i].CURRENTREADING,
              //       'CONSUMPTION' : data[i].CONSUMPTION,
              //       'AMOUNT' : data[i].AMOUNT,
              //       'VATABLESALES' : data[i].VATABLESALES,
              //       'VATAMOUNT' : data[i].VATAMOUNT,
              //       'REMARKS' : data[i].REMARKS,
              //       'STATUS' : data[i].STATUS,
              //       'BRANCHID' : data[i].BRANCHID,
              //       'POSID' : data[i].POSID,
              //       'EMPNO' : data[i].EMPNO,
              //       'TURNOVERID' : data[i].TURNOVERID,
              //       'READINGPERIOD' : data[i].TURNOVERID,
              //       'STATEMENTPERIOD' : data[i].TURNOVERID,
              //   },
              //  success : function(data) {

              //   },

              // });
            }
            console.dir(data);
            // def.resolve(data);
          });
        },dbError);
        // return def;
      }

      $(document).on("click", "#Upload", function(e) {
        // e.preventDefault();
        backup("account2");
        db.transaction(function (tx) {
           tx.executeSql("UPDATE download SET allowdownload = 1",[])
        })
        
      });
      
      $(document).on("click", "#Download", function(e) {
          db.transaction(function(tx) { 
            tx.executeSql("select allowdownload from download", [],
                function(tx, results) {
                    for (var i = 0; i < results.rows.length; i++) {
                        allowdl = results.rows.item(i).allowdownload;  
                    }
                    if (allowdl == 0) 
                      alert("Cannot execute this procedure. Please upload your reading before downloading.");
                    else if(allowdl == 1) {
                     // tx.executeSql("DELETE FROM vat;",[])
                     // tx.executeSql("DELETE FROM zone;",[])
                     // tx.executeSql("DELETE FROM feeder;",[])
                     // tx.executeSql("DELETE FROM transformer;",[])
                     // tx.executeSql("DELETE FROM itemcategory;",[])
                     // tx.executeSql("DELETE FROM item;",[])
                     // tx.executeSql("DELETE FROM ServiceItem;",[])
                     // tx.executeSql("DELETE FROM meter;",[])
                     // tx.executeSql("DELETE FROM account;;",[])
                     // tx.executeSql("DELETE FROM ReadingPeriod;",[])
                     // tx.executeSql("DELETE FROM statementperiod;",[])
                     // tx.executeSql("DELETE FROM transformerreading;",[])
                     // tx.executeSql("DELETE FROM statementheader;",[])
                     // tx.executeSql("DELETE FROM statementdetail;",[])
                      tx.executeSql("DELETE FROM account2;",[]);

                        $.ajax({
                          url : ""+ip+"/BOHECO_API/view/account2.php",
                          dataType: 'jsonp',

                          success: function(data){
                            console.log(data);
                            var lth=data.data.length;
                                if(data){     
                                    db.transaction( function (tx) {
                                      for(var i=0;i<lth;i++){
                                          tx.executeSql("INSERT INTO account2 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",[data.data[i].ID, data.data[i].ServicePeriodEnd.date.substring(0,10),data.data[i].AccountNumber,data.data[i].Route,data.data[i].SequenceNumber,data.data[i].ConsumerName,data.data[i].ConsumerAddress,data.data[i].MeterNumber,data.data[i].PreviousReading2,data.data[i].PreviousReading1,data.data[i].PreviousReading,data.data[i].ReadingDate.date.substring(0,10),data.data[i].ReadBy,data.data[i].PowerReadings,data.data[i].DemandReadings,data.data[i].FieldFindings,data.data[i].MissCodes,data.data[i].Remarks,data.data[i].UpdateStatus,data.data[i].ConsumerType,data.data[i].AccountStatus,data.data[i].ShortAccountNumber,data.data[i].Multiplier,data.data[i].MeterDigits,data.data[i].Coreloss,data.data[i].CorelossKWHLimit,data.data[i].AdditionalKWH,data.data[i].TSFRental,data.data[i].SchoolTag,data.data[i].SDiscountStatus,data.data[i].ConnectionDate.date.substring(0,10),data.data[i].QCAmount,data.data[i].KWHConsumption,data.data[i].PCAmount,data.data[i].EPAmount]) 
                                                                                              // data[i].ServicePeriodEnd,
                                                                                              // data[i].AccountNumber,
                                                                                              // data[i].Route,
                                                                                              // data[i].SequenceNumber,
                                                                                              // data[i].ConsumerName,
                                                                                              // data[i].ConsumerAddress,
                                                                                              // data[i].MeterNumber,
                                                                                              // data[i].PreviousReading2,
                                                                                              // data[i].PreviousReading1,
                                                                                              // data[i].PreviousReading,
                                                                                              // data[i].ReadingDate,
                                                                                              // data[i].ReadBy,
                                                                                              // data[i].PowerReadings,
                                                                                              // data[i].DemandReadings,
                                                                                              // data[i].FieldFindings,
                                                                                              // data[i].MissCodes,
                                                                                              // data[i].Remarks,
                                                                                              // data[i].UpdateStatus,
                                                                                              // data[i].ConsumerType,
                                                                                              // data[i].AccountStatus,
                                                                                              // data[i].ShortAccountNumber,
                                                                                              // data[i].Multiplier,
                                                                                              // data[i].MeterDigits,
                                                                                              // data[i].Coreloss,
                                                                                              // data[i].CorelossKWHLimit,
                                                                                              // data[i].AdditionalKWH,
                                                                                              // data[i].TSFRental,
                                                                                              // data[i].SchoolTag,
                                                                                              // data[i].SDiscountStatus,
                                                                                              // data[i].ConnectionDate,
                                                                                              // data[i].QCAmount,
                                                                                              // data[i].KWHConsumption,
                                                                                              // data[i].PCAmount,
                                                                                              // data[i].EPAmount])
                                        } //end of FOR loop
                                      
                                    }) //end of db.transaction
                                  
                               } //end of IF statement
                          }
                        });

                      //   $.ajax({
                      //     url : ""+ip+"/readerapi/view/zone.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO zone VALUES (?,?);",[data.data[i].ID,data.data[i].DESCRIPTION])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      //    $.ajax({
                      //     url : ""+ip+"/readerapi/view/feeder.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO feeder VALUES (?,?,?,?,?);",[data.data[i].ID,data.data[i].DESCRIPTION,data.data[i].LATITUDE,data.data[i].LONGTITUDE,data.data[i].STATUS])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      //     $.ajax({
                      //     url : ""+ip+"/readerapi/view/transformer.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO transformer VALUES (?,?,?,?,?,?,?,?,?,?);",[data.data[i].ID,data.data[i].FEEDERID,data.data[i].DESCRIPTION,data.data[i].LATITUDE,data.data[i].LONGTITUDE,data.data[i].STATUS,data.data[i].READINGPERIOD,data.data[i].READINGDATE,data.data[i].READING,data.data[i].READ])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      //     $.ajax({
                      //     url : ""+ip+"/readerapi/view/itemcategory.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO itemcategory VALUES (?,?);",[data.data[i].ID,data.data[i].DESCRIPTION])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      //    $.ajax({
                      //     url : ""+ip+"/readerapi/view/servicetype.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO servicetype VALUES (?,?);",[data.data[i].ID,data.data[i].DESCRIPTION])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });


                      //   $.ajax({
                      //     url : ""+ip+"/readerapi/view/account.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO account VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",[data.data[i].ID,data.data[i].METERSERIAL,data.data[i].SERVICETYPEID,data.data[i].CUSTNO,data.data[i].NAME,data.data[i].ADDRESS,data.data[i].TELEPHONE,data.data[i].EMAIL,data.data[i].ZONEID,data.data[i].TRANSFORMERID,data.data[i].STATUS,data.data[i].REMARKS,data.data[i].BALANCE,data.data[i].CONSUMPTION,data.data[i].CONSUMPTION2,data.data[i].CONSUMPTION3,data.data[i].CONSUMPTION4,data.data[i].CONSUMPTION5,data.data[i].CONSUMPTION6,data.data[i].CONSUMPTION7,data.data[i].CONSUMPTION8,data.data[i].CONSUMPTION9,data.data[i].CONSUMPTION10,data.data[i].CONSUMPTION11,data.data[i].CONSUMPTION12,data.data[i].MULTIPLIER,data.data[i].READINGPERIOD,data.data[i].READINGPERIOD2,data.data[i].READINGPERIOD3,data.data[i].READINGPERIOD4,data.data[i].READINGPERIOD5,data.data[i].READINGPERIOD6,data.data[i].READINGPERIOD7,data.data[i].READINGPERIOD8,data.data[i].READINGPERIOD9,data.data[i].READINGPERIOD10,data.data[i].READINGPERIOD11,data.data[i].READINGPERIOD12,data.data[i].READINGDATE,data.data[i].SEQ,data.data[i].READ,data.data[i].ADD])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      // $.ajax({
                      //     url : ""+ip+"/readerapi/view/meter.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO meter VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);",[data.data[i].SERIAL,data.data[i].TYPE,data.data[i].BRAND,data.data[i].MODEL,data.data[i].ACQUISITIONPERIOD,data.data[i].ACTIVATIONPERIOD,data.data[i].EXPIRYPERIOD,data.data[i].READINGPERIOD,data.data[i].READINGDATE,data.data[i].READING,data.data[i].READ,data.data[i].ADD,data.data[i].ACCTID])
                      //                   }
                                      
                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      // $.ajax({
                      //     url : ""+ip+"/readerapi/view/vat.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO vat VALUES (?,?,?,?);",[data.data[i].ID,data.data[i].DESCRIPTION,data.data[i].DIVISOR,data.data[i].MULTIPLIER])
                      //                   }

                      //               })
                                  
                      //          }
                      //     }
                      //   });

                      //  $.ajax({
                      //     url : ""+ip+"/readerapi/view/item.php",
                      //     dataType: 'jsonp',

                      //     success: function(data){
                      //       console.log(data);
                      //       var lth=data.data.length;
                      //           if(data){     
                      //               db.transaction(function (tx) {
                      //                 for(var i=0;i<lth;i++){
                      //                     tx.executeSql("INSERT INTO item VALUES (?,?,?,?,?,?,?);",[data.data[i].ID,data.data[i].CATEGORYID,data.data[i].SEQUENCE,data.data[i].DESCRIPTION,data.data[i].VATID,data.data[i].QUERY,data.data[i].STATUS])
                      //                   }

                      //               })
                                  
                      //          }
                      //     }
                      //   });

                       // $.ajax({
                       //    url : ""+ip+"/readerapi/view/serviceitem.php",
                       //    dataType: 'jsonp',

                       //    success: function(data){
                       //      console.log(data);
                       //      var lth=data.data.length;
                       //          if(data){     
                       //              db.transaction(function (tx) {
                       //                for(var i=0;i<lth;i++){
                       //                    tx.executeSql("INSERT INTO serviceitem VALUES (?,?,?,?);",[data.data[i].ID,data.data[i].SERVICETYPEID,data.data[i].ITEMID,data.data[i].RATE])
                       //                  }

                       //              })
                                  
                       //         }
                       //    }
                       //  });
                       // $.ajax({
                       //    url : ""+ip+"/readerapi/view/servicerate.php",
                       //    dataType: 'jsonp',

                       //    success: function(data){
                       //      console.log(data);
                       //      var lth=data.data.length;
                       //          if(data){     
                       //              db.transaction(function (tx) {
                       //                for(var i=0;i<lth;i++){

                       //                    tx.executeSql("INSERT INTO servicerate VALUES (?,?,?,?);",[data.data[i].ID,data.data[i].SERVICETYPEID,data.data[i].LIMIT,data.data[i].EFFECTIVITY])
                       //                  }

                       //              })
                                  
                       //         }
                       //    }
                       //  });
                        // $.ajax({
                        //   url : ""+ip+"/readerapi/view/statementdetail.php",
                        //   dataType: 'jsonp',

                        //   success: function(data){
                        //     var lth=data.data.length;
                        //         if(data){     
                        //             db.transaction(function (tx) {
                        //               for(var i=0;i<lth;i++){
                        //                   tx.executeSql("INSERT INTO statementdetail VALUES (?,?,?,?,?,?,?,?,?);",[data.data[i].ID,data.data[i].STATEMENTID,data.data[i].ITEMID,data.data[i].BASE,data.data[i].RATE,data.data[i].AMOUNT,data.data[i].VATID,data.data[i].VATABLESALE,data.data[i].VATAMOUNT])
                        //                 }

                        //             })
                                  
                        //        }
                        //   }
                        // });


                    tx.executeSql("")
                        // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountVat()) & ' vat'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountServiceType()) & ' service type'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountZone()) & ' zone'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountFeeder()) & ' feeder'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountTransformer()) & ' transformer'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountItemCategory()) & ' item category'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountItem()) & ' item'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountMeter()) & ' meter'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountAccount()) & ' account'''

                    // clear(QueryResultSet)
                    // QueryResultSet{prop:sql} = 'insert into ' & clip(GLO:remotedb) & '.dbo.synclog' & |
                    // ' select (select ifnull(max(id),0)+1 from ' & clip(GLO:remotedb) & '.dbo.synclog),' & |
                    // glo:id & ',''' & |
                    // format(today(),@d02b) & ' ' & format(clock(),@t04b) & ''',''' & |
                    // 'downloaded ' & clip(CountServiceItem()) & ' service item'''
                    
                        tx.executeSql("UPDATE download SET allowdownload = 0",[])
                        alert("Dowload complete.");
                      }
                }
                ,webdb.onError)
          
     });
   });

       function fillBrowseAccount() {
        var output = [];
        db.transaction(function(tx) {
            tx.executeSql("select ID, METERSERIAL, NAME, ID, CUSTNO, ZONEID, BALANCE from ACCOUNT", [],
              function(tx, results) {
            for (var i = 0; i < results.rows.length; i++) {
              output.push("<tr>"+
                              "<td>" + results.rows.item(i).METERSERIAL + " </td> " +
                              "<td>" + results.rows.item(i).NAME + " </td> " +
                              "<td>" + results.rows.item(i).ID + " </td> " +
                              "<td>" + results.rows.item(i).CUSTNO + " </td> " +
                              "<td>" + results.rows.item(i).ZONEID + " </td> " +
                              "<td>" + results.rows.item(i).BALANCE + " </td> " +
                              "<td><a href='#page2' data-rel='back' class='ui-btn ui-shadow ui-corner-all ui-btn-a selectMeter'>Select</a></td>" +
                          "</tr>");
            }
            $('#account').append(output.join(''));
          });
        });
      }

        function fillInvoiceDetails(){
            var output = [];
            db.transaction(function(tx) {
                // tx.executeSql("select  sim.itemid , itm.sequence , sim.rate , itm.vatid , vat.divisor  from  ServiceItem sim inner join  Item itm on itm.id=sim.itemid left join  VAT vat on vat.id=itm.vatid where sim.rowid=1 order by itm.sequence", [],
                tx.executeSql("SELECT * FROM statementdetail ", [],
                  function(tx, results) {
                    console.log(results);
                for (var i = 0; i < results.rows.length; i++) {
                
                  output.push("<tr>"+
                                  "<td>" + results.rows.item(i).ID + " </td> " +
                                  "<td>" + results.rows.item(i).STATEMENTID + " </td> " +
                                  "<td>" + results.rows.item(i).ITEMID + " </td> " +
                                  "<td>" + results.rows.item(i).BASE + " </td> " +
                                  "<td>" + results.rows.item(i).RATE + " </td> " +
                                  "<td>" + results.rows.item(i).AMOUNT + " </td> " +
                                  "<td>" + results.rows.item(i).VATID + " </td> " +
                                  "<td>" + results.rows.item(i).VATABLESALE + " </td> " +
                                  "<td>" + results.rows.item(i).VATAMOUNT + " </td> " +
                              "</tr>");
                }
                $('#invoicedetails').append(output.join(''));
              });
            });
        }

       

      $(window).load(function(){

        readOnly();
        initDB();
        $('#invoicedetails').hide();
        $('#meterdetails').on("swipe",function(){

            $('#invoicedetails').show();
            $('#meterdetails').hide();
          });
        $('#invoicetable').on("swipe",function(){

            $('#invoicedetails').hide();
            $('#meterdetails').show();
          });
        fillBrowseAccount();
        fillInvoiceDetails();
        $('#account').on('click','.selectMeter',function(){
            var selectedMeter = $(this).closest('tr').find('td:eq(0)').text();
            selectedMeter = selectedMeter.replace(/^\s+|\s+$/g,'');
            $('#meter').val(selectedMeter);
              db.transaction(function(tx) {
                  tx.executeSql("select t1.READING,t2.ID,t2.NAME,t2.SERVICETYPEID,t2.METERSERIAL,t2.MULTIPLIER,t2.READINGDATE,t2.MULTIPLIER,t2.CONSUMPTION from meter t1 inner join account t2 on t1.ACCTID = t2.ID where SERIAL LIKE '"+selectedMeter+"%'", [],
                    function(tx, results) {
                      for (var i = 0; i < results.rows.length; i++) {
                        previousreading = results.rows.item(i).READING;
                        Accountid = results.rows.item(i).ID;
                        accountname = results.rows.item(i).NAME;
                        servicetype = results.rows.item(i).SERVICETYPEID;
                        meter = results.rows.item(i).METERSERIAL;
                        multiplier = results.rows.item(i).MULTIPLIER;
                        previousreadingdate = results.rows.item(i).READINGDATE;
                        multiplier = results.rows.item(i).MULTIPLIER;
                        low = results.rows.item(i).CONSUMPTION;
                        high = results.rows.item(i).CONSUMPTION;
                        $('#accID').val(Accountid);
                        $('#accName').val(accountname);
                        $('#previousReading').val(previousreading);
                        
                      };
                    },webdb.onError);                    
             });
            $(this).attr("href",'#page2');
        });

        $('#currentReading').keyup(function() {
            $('#consumption').val($('#currentReading').val() - $('#previousReading').val());
        });
        
        $('#addItem').click(function() {
            webdb.addReading();
            // clear();        
            var printWindow = window.open('', '', 'height=825,width=637'); 
          var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
          var date = new Date();
          var month= date.getMonth()+1;
          var day = date.getDate();
          var year = date.getFullYear();
          var hrs = date.getHours();
          var mins = date.getMinutes();
          var secs = date.getSeconds();
                  db.transaction(function(tx) {
                  tx.executeSql("SELECT shd.id 'id', shd.statementdate 'stmntdt', shd.duedate 'ddt', shd.disconnectiondate 'dcdt', shd.datefrom 'dtfr', shd.dateto 'dtto', shd.meterserial 'mtser', acc.id 'accid', acc.name 'name',acc.multiplier 'multiplier',  svc.description 'desc', shd.previousreading 'prevread', shd.currentreading 'currentread', shd.consumption 'consump', shd.amount 'amt',  shd.Remarks 'remarks', shd.statementperiodid 'stmtper', shd.[status] 'stats' FROM statementheader shd INNER JOIN account acc  ON acc.id=shd.accountid  INNER JOIN servicetype svc  ON svc.id=shd.servicetypeid  WHERE shd.accountid= ?  ORDER BY shd.statementdate DESC", [$('#accID').val()],
                    function(tx, results) {
                      for (var i = 0; i < results.rows.length; i++) {
                        console.log(results.rows.item(i));
                   printWindow.document.write("<div style='margin-right: 4.5mm''><center>MERCHANT NAME<br>\
                                      MERCHANT ADDRESS<br>\
                                      MERCHANT TELEPHONE<br>\
                                      TIN<br>\
                                      MIN<br>\
                                      STATEMENT OF ACCOUNT</center>\
                                      Bill No. : "+ $.trim(results.rows.item(i).id) +"<br>\
                                      Account No. : "+ $.trim(results.rows.item(i).accid) +"<br>\
                                      "+ $.trim(results.rows.item(i).name) +"<br>\
                                      <hr width=100%>\
                                      Coverage. : "+ $.trim(results.rows.item(i).dtfr) + "-" + $.trim(results.rows.item(i).dtto) + "\
                                      <hr width=100%>\
                                      Billing Month: "+ monthNames[parseInt(results.rows.item(i).stmtper.substring(4, 6),10) + 1] + " " + results.rows.item(i).stmtper.substring(0, 4) + "<br>\
                                      Meter Number: "+ $.trim(results.rows.item(i).mtser) +"<br>\
                                      Service Type: "+ $.trim(results.rows.item(i).desc) + "<br>\
                                      KWH Multiplier : "+ $.trim(results.rows.item(i).multiplier) +"<br>\
                                      <hr width=100%>\
                                      Current Reading : "+ $('#currentReading').val() + "<br>\
                                      Previous Reading : "+ $.trim(results.rows.item(i).prevread) + "<br>\
                                      KWH Used : "+ $('#consumption').val() + "<br>\
                                      <hr width=100%>\
                                      TOTAL AMOUNT DUE : PHP"+ $.trim(results.rows.item(i).amt) + "\
                                      <hr width=100%>\
                                      Reading Date: "+ $.trim(results.rows.item(i).stmntdt) + "<br>\
                                      Due Date: "+ $.trim(results.rows.item(i).ddt) + "\
                                      <hr width=100%>\
                                      <center><p>NOTE: Pls pay in the office 2 days after receipt of the Statement of account and within days from Due Date to avoid Penalty.</p>\
                                      <p>WARNING SUBJECT TO DISCONNECTION</p>\
                                      Printed Date: "+month+"/"+day+"/"+year+"  "+hrs+":"+mins+":"+secs+"</center></div>");
       printWindow.document.close();
          printWindow.print();
          printWindow.close(); 

                     }//end of for loop
                       },webdb.onError);
             });//end of db.transaction
});
    });


