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
string changedTrades[][12];
string currentTrades[][12];
string historyTrades[][12];
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
  }
//+------------------------------------------------------------------+

datetime currTimestamp() {
   return TimeCurrent();
}

void getCurrentTrades() {
 for(int i=OrdersTotal(); i>=0; i--)
     {
      if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES)) {
            currentTrades[i][0]=OrderTicket();
            currentTrades[i][1]=OrderOpenTime();
            currentTrades[i][2]=OrderCloseTime();
            currentTrades[i][3]=OrderOpenPrice();
            currentTrades[i][4]=OrderCloseTime();
            currentTrades[i][5]=OrderLots();
            currentTrades[i][6]=OrderType();
            currentTrades[i][7]=OrderSymbol();
            currentTrades[i][8]=OrderStopLoss();
            currentTrades[i][9]=OrderTakeProfit();
            currentTrades[i][10]=OrderCommission();
            currentTrades[i][11]=OrderSwap();
            currentTrades[i][12]=OrderComment();
         }
      }
}

void getHistoryTrades() {
   for(int i=OrdersHistoryTotal(); i>=0; i--)
     {
      if(OrderSelect(i,SELECT_BY_POS,MODE_HISTORY)) {
            historyTrades[i][0]=OrderTicket();
            historyTrades[i][1]=OrderOpenTime();
            historyTrades[i][2]=OrderCloseTime();
            historyTrades[i][3]=OrderOpenPrice();
            historyTrades[i][4]=OrderCloseTime();
            historyTrades[i][5]=OrderLots();
            historyTrades[i][6]=OrderType();
            historyTrades[i][7]=OrderSymbol();
            historyTrades[i][8]=OrderStopLoss();
            historyTrades[i][9]=OrderTakeProfit();
            historyTrades[i][10]=OrderCommission();
            historyTrades[i][11]=OrderSwap();
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
   
    string Query;
    int    i,Cursor,Rows;
    
    int      vId;
    string   vCode;
    datetime vStartTime;
    Query = "SELECT id FROM trades WHERE id IN ("+i+")";
   
    Cursor = MySqlCursorOpen(DB, Query);
    if (Cursor >= 0)
    {
     Rows = MySqlCursorRows(Cursor);
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
    }
      else
    {
     Print ("Cursor opening failed. Error: ", MySqlErrorDescription);
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