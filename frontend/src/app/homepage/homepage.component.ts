import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  message: string = '';
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.items = data;
      //this.items = data.map(item => JSON.parse(item)); // Parse before assigning
      console.log(JSON.parse(JSON.stringify(data)))
    });
  }
}
