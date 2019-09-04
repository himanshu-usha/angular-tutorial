import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../api-services/http.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

  brews: Object;
  users: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    }
  );

    this._http.getUsers().subscribe(usersData => {
      this.users = usersData;
      console.log(this.users);
    }
  );
  }


}
