import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {type: 'Habitat dome', weightKG: 500},
    {type:'Drones', weightKG: 40},
    {type: 'Food containers', weightKG: 10},
    {type: 'Oxygen tanks', weightKG: 60}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(equipmentType: string, equipmentWeight: string) {
    this.equipment.push({type: equipmentType, weightKG: equipmentWeight})
  }

  remove(selectedEquipment: object) {
    let index = this.equipment.indexOf(selectedEquipment);
    this.equipment.splice(index, 1);
  }

}
