//+------------------------------------------------------------------+
//|                                               TradeConnector.mq4 |
//|                                         Copyright 2022,VBApps.co |
//|                                                https://vbapps.co |
//+------------------------------------------------------------------+
#property copyright "Copyright 2022,VBApps.co"
#property link      "https://vbapps.co"
#property version   "1.00"
#property strict
#include <MQLMySQL.mqh>

string INI;
string Host, User, Password, Database, Socket; // database credentials
int Port,ClientFlag;
int DB; // database identifier
//tradeId,openTime,closeTime,openPrice,closePrice,lots,orderType,symbol,sl,tp,commision,swap,comment
string changedTrades[][13];
string currentTrades[][13];
string historyTrades[][13];
//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
  {
//---
    INI = TerminalPath()+"\\MQL4\\Files\\MyConnection.ini";
    
    // reading database credentials from INI file
    Host = ReadIni(INI, "MYSQL", "Host");
    User = ReadIni(INI, "MYSQL", "User");
    Password = ReadIni(INI, "MYSQL", "Password");
    Database = ReadIni(INI, "MYSQL", "Database");
    Port     = StrToInteger(ReadIni(INI, "MYSQL", "Port"));
    Socket   = ReadIni(INI, "MYSQL", "Socket");
    ClientFlag = StrToInteger(ReadIni(INI, "MYSQL", "ClientFlag"));  
   
    Print ("Host: ",Host, ", User: ", User, ", Database: ",Database);
    
    // open database connection
    Print ("Connecting...");
    
    DB = MySqlConnect(Host, User, Password, Database, Port, Socket, ClientFlag);
    
    if (DB == -1) { Print ("Connection failed! Error: "+MySqlErrorDescription); } else { Print ("Connected! DBID#",DB);}
    
    getCurrentTrades();
    getHistoryTrades();
    collectUpdatesOfTrades();
//---
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
//---
   MySqlDisconnect(DB);
   Print ("Disconnected. Script done!");
  }
//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
  {
//---
   // get current timestamp
   // check all current trades
   // check last 10 history trades
   // get last trade on timestamp
   // collect new trades or updates on current trades
   // send updates to api
   // save to db
    getCurrentTrades();
    getHistoryTrades();
    collectUpdatesOfTrades();
  }
//+------------------------------------------------------------------+

datetime currTimestamp() {
   return TimeCurrent();
}

void getCurrentTrades() {
 for(int i=OrdersTotal(); i>=0; i--)
     {
      ArrayResize(currentTrades,OrdersTotal());
      if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES)) {
            currentTrades[i][0]=IntegerToString(OrderTicket());
            currentTrades[i][1]=TimeToStr(OrderOpenTime(),TIME_SECONDS);
            currentTrades[i][2]=TimeToStr(OrderCloseTime(),TIME_SECONDS);
            currentTrades[i][3]=DoubleToString(OrderOpenPrice(),5);
            currentTrades[i][4]=DoubleToString(OrderCloseTime(),5);
            currentTrades[i][5]=DoubleToString(OrderLots(),5);
            currentTrades[i][6]=IntegerToString(OrderType());
            currentTrades[i][7]=OrderSymbol();
            currentTrades[i][8]=DoubleToString(OrderStopLoss(),5);
            currentTrades[i][9]=DoubleToString(OrderTakeProfit(),5);
            currentTrades[i][10]=DoubleToString(OrderCommission(),5);
            currentTrades[i][11]=DoubleToString(OrderSwap(),5);
            currentTrades[i][12]=OrderComment();
         }
      }
}

void getHistoryTrades() {
   for(int i=OrdersHistoryTotal(); i>=0; i--)
     {
      ArrayResize(historyTrades,OrdersHistoryTotal());
      if(OrderSelect(i,SELECT_BY_POS,MODE_HISTORY)) {
            historyTrades[i][0]=IntegerToString(OrderTicket());
            historyTrades[i][1]=TimeToStr(OrderOpenTime(),TIME_SECONDS);
            historyTrades[i][2]=TimeToStr(OrderCloseTime(),TIME_SECONDS);
            historyTrades[i][3]=DoubleToString(OrderOpenPrice(),5);
            historyTrades[i][4]=DoubleToString(OrderCloseTime(),5);
            historyTrades[i][5]=DoubleToString(OrderLots(),5);
            historyTrades[i][6]=IntegerToString(OrderType());
            historyTrades[i][7]=OrderSymbol();
            historyTrades[i][8]=DoubleToString(OrderStopLoss(),5);
            historyTrades[i][9]=DoubleToString(OrderTakeProfit(),5);
            historyTrades[i][10]=DoubleToString(OrderCommission(),5);
            historyTrades[i][11]=DoubleToString(OrderSwap(),5);
            historyTrades[i][12]=OrderComment();
         }
      }
}

void collectUpdatesOfTrades() {
   // get current trades array
   // get amount of trades from db
   // if amount of trades form db is
   // smaller than amount of current trades
   // then add new trade to db and to array
   // of the changed tickets
   // if amount of trades from db is
   // bigger than amount of current trades
   // get history trades and find trades,
   // which are not in the list of current trades,
   // but in the list of current db trades
   
    string Query,Query_NOT,tmp,tmp_history;
    int    i,Cursor,Cursor_NOT,Rows;
    
    int      vId;
    string   vCode;
    datetime vStartTime;
    for(i=0;i<ArrayRange(currentTrades,0);i++) {
      StringAdd(tmp,"'"+currentTrades[i][0]+"',");
    }
    tmp = StringSubstr(tmp,0,StringLen(tmp)-1);
    for(i=0;i<ArrayRange(historyTrades,0);i++) {
      StringAdd(tmp_history,"'"+historyTrades[i][0]+"',");
    }
    tmp_history = StringSubstr(tmp_history,0,StringLen(tmp_history)-1);
    Print("str_len_tmp="+IntegerToString(StringLen(tmp)));
    if(StringLen(tmp)>0){
       Query = "SELECT tradeId FROM orders WHERE tradeId IN ("+tmp+")";
       Print("Query="+Query);
       Query_NOT = "SELECT tradeId FROM orders WHERE tradeId NOT IN ("+tmp+")";
       Print("Query_Not="+Query_NOT);
      
       Cursor = MySqlCursorOpen(DB, Query);
       Cursor_NOT = MySqlCursorOpen(DB, Query_NOT);
       if (Cursor >= 0)
       {
        Rows = MySqlCursorRows(Cursor);
        if(ArrayRange(currentTrades,0)>0){
           if(Rows==0) {
            //add all trades to db
           } else if (Rows<ArrayRange(currentTrades,0)) {
            // add only new trads to db
           } else {
            // update existing lines in db
           }
        }
        Print (Rows, " row(s) selected.");
        Print ("Rows affected: ", MySqlRowsAffected(DB)); // just to compare with MySqlCursorRows
        
        if(Rows<OrdersTotal()) {
         //add new trades to db and to array
         for (i=0; i<Rows; i++)
            if (MySqlCursorFetchRow(Cursor))
               {
                
                vId = MySqlGetFieldAsInt(Cursor, 0); // id
                vCode = MySqlGetFieldAsString(Cursor, 1); // code
                vStartTime = MySqlGetFieldAsDatetime(Cursor, 2); // start_time
                Print ("ROW[",i,"]: id = ", vId, ", code = ", vCode, ", start_time = ", TimeToStr(vStartTime, TIME_DATE|TIME_SECONDS));
               }
        }  
        
        MySqlCursorClose(Cursor); // NEVER FORGET TO CLOSE CURSOR !!!
        MySqlCursorClose(Cursor_NOT);
       }
         else
       {
        Print ("Cursor opening failed. Error: ", MySqlErrorDescription);
       }
    }else{
      Print("No current trades found!");
    }
   
}

void sendUpdatesToAPI() {
   // get array with changed tickets
   // build update statements
   // send update statements to api
}

void saveUpdatesToDB() {
   // get array with changed tickets
   // build update sql
   // save to db
   // write response to log
}