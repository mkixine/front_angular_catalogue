import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-top',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-top.component.html',
  styleUrls: ['./admin-top.component.scss'],
})
export class AdminTopComponent {}
