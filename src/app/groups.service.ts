import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Group } from './model/group.model';
import { IdList } from './model/IdList.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private _url : string = "http://localhost:50778/api/group";

  constructor(private http: HttpClient) { }

  public getGroups(){
    return this.http.get<Array<Group>>(this._url);
  }

  public getGroup(id: string){
    return this.http.get<Group>(this.getResourceUrl(id));
  }

  public postGroup(group: Group){
    return this.http.post<string>(this._url, group);
  }

  public putGroup(id: string, group: Group){
    return this.http.put(this.getResourceUrl(id), group);
  }

  public deleteGroup(id: string){
    return this.http.delete(this.getResourceUrl(id));
  }

  public postGroupContacts(id: string, Ids: IdList){
    console.log("groups service", id);
    return this.http.post(this._url+'?groupId='+id,Ids);
  }
  public deleteGroupContacts(id: string, Ids: IdList){
    console.log("groups service", id);
    return this.http.request("delete",this._url+'?groupId='+id,{body:Ids});
  }

  private getResourceUrl(id: string): string{
    return this._url + `/${id}`;
  }
  
}
