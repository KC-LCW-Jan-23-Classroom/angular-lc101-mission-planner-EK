import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: object[] = [
    {name: 'Habitat dome', weightKG: 500},
    {name:'Drones', weightKG: 40},
    {name: 'Food containers', weightKG: 10},
    {name: 'Oxygen tanks', weightKG:60}
  ];

  constructor() { }

  ngOnInit() {
  }

}
