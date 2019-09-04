import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../api-services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: Object;

  constructor(private route: ActivatedRoute, private userData: UserService) {
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.userData.getUser(this.user$).subscribe(
      userData => this.user$ = userData
    );
  }

}
