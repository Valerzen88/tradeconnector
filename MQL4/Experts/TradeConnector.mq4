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
//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
  {
//---
    string Host, User, Password, Database, Socket; // database credentials
    int Port,ClientFlag;
    int DB; // database identifier
    
    Print (MySqlVersion());
    Print(TerminalPath());
   
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
    
    string Query;
    int    i,Cursor,Rows;
    
    int      vId;
    string   vCode;
    datetime vStartTime;
    Query = "SELECT * FROM user";
   
    Cursor = MySqlCursorOpen(DB, Query);
    if (Cursor >= 0)
    {
     Rows = MySqlCursorRows(Cursor);
     Print (Rows, " row(s) selected.");
     Print ("Rows affected: ", MySqlRowsAffected(DB)); // just to compare with MySqlCursorRows

     for (i=0; i<Rows; i++)
         if (MySqlCursorFetchRow(Cursor))
            {
             vId = MySqlGetFieldAsInt(Cursor, 0); // id
             vCode = MySqlGetFieldAsString(Cursor, 1); // code
             vStartTime = MySqlGetFieldAsDatetime(Cursor, 2); // start_time
             Print ("ROW[",i,"]: id = ", vId, ", code = ", vCode, ", start_time = ", TimeToStr(vStartTime, TIME_DATE|TIME_SECONDS));
            }
     MySqlCursorClose(Cursor); // NEVER FORGET TO CLOSE CURSOR !!!
    }
      else
    {
     Print ("Cursor opening failed. Error: ", MySqlErrorDescription);
    }
    
    MySqlDisconnect(DB);
   Print ("Disconnected. Script done!");
//---
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
//---
    
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

}

void getHistoryTrades() {

}

void collectUpdatesOfTrades() {

}

void sendUpdatesToAPI() {

}

void saveUpdatesToDB() {

}