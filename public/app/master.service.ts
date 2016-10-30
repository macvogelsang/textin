import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import * as io from 'socket.io-client/socket.io';

@Injectable()
export class MasterService {
	private url = "silo.cs.indiana.edu:56789";
	// private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }
	createEvent(event) {
		return this.http
		.post('/api/createEvent', event)
		.toPromise()
		.then(res => res)
		.catch(err => console.log(err));
	}
	getAdminDashboard(adminId){
		return this.http
    	.post('/api/getAdminPage', {adminId: adminId})
		.toPromise()
		.then(res => res)
		.catch(err => console.log(err));
	}
	getInitialCheckIns(eventId) {
		return this.http
		.post('/api/getEventPage', {eventId: eventId})
		.toPromise()
		.then(res => res)
		.catch(err => console.log(err));
	}
}
