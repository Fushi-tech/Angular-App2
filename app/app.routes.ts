import { Routes } from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';

export const routes: Routes = [
  {path: '', component: MembersComponent},
  {path: 'detail/:id', component: MemberDetailComponent}

];
