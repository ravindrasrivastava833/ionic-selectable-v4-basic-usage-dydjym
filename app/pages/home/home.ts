import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService } from '../../services/port.service';
import { depsData } from '../../services/test';
import { DepsCode, Port } from '../../types/port.type';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  ports: Port[];
  port: Port;
  depslist: DepsCode[];
  selectDeps: DepsCode[];
  disabledDischargingPorts: DepsCode[];
  isMulti: boolean = false;
  constructor(private portService: PortService) {}

  ngOnInit() {
    this.ports = this.portService.getPorts();
    this.depslist = depsData;
    this.selectDeps = this.depslist.filter((val) => val.default);
    this.disabledDischargingPorts = this.depslist.filter((val) => !val.default);
  }

  portChange(event: { component: IonicSelectableComponent; value: any }) {
    console.log('selectDeps:', event.value, this.selectDeps);
  }
  // disabledDischargingPorts = ( event )=>{
  //   console.log(event)
  //   return event.value.default
  // }
  onSelect(event: {
    component: IonicSelectableComponent;
    item: any;
    isSelected: boolean;
  }) {
    // event.component.clear()
    console.log('selectDepsSS:', event.item, event.isSelected, this.selectDeps);
    if (event.isSelected && event.item.default) {
      // event.component.clear()
      // this.isMulti = false;
      this.disabledDischargingPorts = this.depslist.filter(
        (val) => !val.default
      );
      this.selectDeps = this.depslist.filter((val) => val.default);
    } else if (event.isSelected && !event.item.default) {
      this.disabledDischargingPorts = this.depslist.filter(
        (val) => val.default
      );
      if (this.selectDeps.some((vl) => vl.default)) {
        this.selectDeps = this.selectDeps.filter((val) => !val.default);
        this.selectDeps.push(event.item);
        console.log(this.selectDeps);
      } else {
        this.selectDeps.push(event.item);
      }
    } else {
      // this.isMulti = true;
      console.log(this.selectDeps);
      if (this.selectDeps.some((vl) => event.item.code == vl.code)) {
        const indx = this.selectDeps.findIndex(
          (vl) => event.item.code == vl.code
        );
        console.log({ indx });
        this.selectDeps.splice(indx, 1);
        if (this.selectDeps.some((vl) => !vl.default)) {
          this.disabledDischargingPorts = this.depslist.filter(
            (val) => val.default
          );
        } else {
          this.disabledDischargingPorts = [];
        }
      } else {
        console.log('never say bnever');
        this.disabledDischargingPorts = [];
      }
    }
  }
}
