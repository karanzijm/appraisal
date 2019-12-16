import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Proj{
  // loan_amount:number;
  // loan_service_time:number;
  // interest_rate:number;
  business_name:string;
  business_sector:string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  appraisals = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('assets/appraisal.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          // this.loadDevelopers();
          // this.loadProducts();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getProj(): Observable<Proj[]>{
    return this.appraisals.asObservable();
  }

  loadProject(){
     return this.database.executeSql('SELECT * FROM appraisal_data',[]).then(data=>{
       let appraisal: Proj[] = [];

       if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++) {
          appraisal.push({
            business_name: data.rows.item(i).business_name,
            business_sector: data.rows.item(i).business_sector
            // loan_amount : data.rows.item(i).loan_amt,
            // loan_service_time : data.rows.item(i).loan_service_time,
            // interest_rate : data.rows.item(i).interest_rate
          });
        }
       }
       this.appraisals.next(appraisal)

     });
  }

  addProject(business_name,sector){
    let data = [business_name,sector];
    return this.database.executeSql('INSERT INTO appraisal_data (business_name,sector) VALUES (?,?)',data).then
    (data => {
      this.loadProject();
    })
  }
}
