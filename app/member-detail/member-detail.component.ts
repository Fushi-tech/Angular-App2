import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../mock-members-data';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  members = MEMBERS;
  memberDetail: Member[] | undefined;
  selectedMember: Member | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.memberDetail = this.members.filter(member => member.empId === id);
    this.selectedMember = this.memberDetail[0];
  }

}
