import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private events;

    constructor (private http: Http) {}

    public getEvent(event): Observable<any> {
            const filter = data => {
                        //return specific event
                        if(event){
                            if(data[event]) return data[event]
                            else return false
                        }

                        //return all events
                        else return data
                    }

            if(this.events != null) {
                return Observable.of(this.events)
                            .map(x => filter(x))
                }
            else {
                return this.http
                            .get("/assets/data/events.json")
                            .map(x => x.json())
                            .do(x => this.events = x)
                            .map(x => filter(x))
                }
    }
}
