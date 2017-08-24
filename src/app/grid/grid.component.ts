import { Component, OnInit } from '@angular/core';

import { DragulaDirective }  from 'ng2-dragula/ng2-dragula';
import { DragulaService }  from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  todo: string = 'Todo';
  today: string = 'Today';
  inProgress: string = 'In progress';
  done: string = 'Done';

  groups: any[];

  constructor(private dragulaService:DragulaService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

   }

  /* ngOnInit() {
    this.groups = [
      { name: this.todo, items:[] },
      { name: this.today, items:[] },
      { name: this.inProgress, items:[] },
      { name: this.done, items:[] }
    ]
  } */

  ngOnInit() {
    this.groups = [
      { 
        name: this.todo, 
        items:[
          {
            id: 6,
            name: 'Créer le tableau du style Kanban',
            description: 'loreum ipsum ceci cela tableau du style Kanban'
          },
          {
            id: 7,
            name: 'Persister',
            description: 'Persist dans un mongo ou firebase'
          },
          {
            id: 8,
            name: 'Authentification',
            description: 'Ajouter Auth'
          }
        ] 
      },
      { 
        name: this.today, 
        items:[
          {
            id: 9,
            name: 'Init Gitflow',
            description: 'loreum ipsum loreum ipsum'
          },
          {
            id: 10,
            name: 'Env Test CI',
            description: 'loreum ipsum loreum ipsum'
          },
          {
            id: 11,
            name: 'Prod',
            description: 'loreum ipsum loreum ipsum'
          }
        ] 
      },
      { 
        name: this.inProgress, 
        items:[
          {
            id: 12,
            name: 'Design',
            description: 'loreum ipsum loreum ipsum'
          },
          {
            id: 13,
            name: 'Maquette HTML/CSS',
            description: 'loreum ipsum loreum ipsum'
          },
          {
            id: 14,
            name: 'Intégration',
            description: 'loreum ipsum loreum ipsum'
          }
        ] 
      },
      { 
        name: this.done, 
        items:[
          {
            id: 14,
            name: 'Intégration',
            description: 'loreum ipsum loreum ipsum'
          }
        ] 
      }
    ]
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'red lighten-3');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'red lighten-3');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'red lighten-3');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'red lighten-3');
  }

}
