//Created By AListair Dewar: 20/02/2018
//Type definition for CauseItem collection and all behaviours...

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from '../auth/auth';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Companies {
 
  constructor(public http: Http, public authService: Auth) {
 
  }
 
  getCompanies(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
 
      this.http.get('https://ionic2-qcf-auth.herokuapp.com/api/companies/getCompanies', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }

getCompanyByCompanyID(id){

    return new Promise((resolve, reject) => {
        
             let headers = new Headers();
             headers.append('Authorization', this.authService.token);
        
             this.http.get('https://ionic2-qcf-auth.herokuapp.com/api/companies/getCompanyByCompanyID/' + id, {headers: headers})
               .map(res => res.json())
               .subscribe(data => {
                 resolve(data);
               }, (err) => {
                 reject(err);
               });
           });
}

createCompany(company){

    return new Promise((resolve, reject) => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.token);
        
        console.log(JSON.stringify(company));
        this.http.post('https://ionic2-qcf-auth.herokuapp.com/api/companies/createCompany', JSON.stringify(company), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });

    });

}

deleteCompany(id){

    return new Promise((resolve, reject) => {

        let headers = new Headers();
        headers.append('Authorization', this.authService.token);

        this.http.delete('https://ionic2-qcf-auth.herokuapp.com/api/companies/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });   

    });

}


CheckDataValid(value):boolean {
    console.log("Value was:" + value);
    if(value !== null){
        return true;

    }else{
        return false;
    }
}

}