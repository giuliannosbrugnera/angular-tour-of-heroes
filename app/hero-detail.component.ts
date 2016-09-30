import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
    /* selector name that identifies this component's element */
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} details!</h2>
            <div><label>id: </label>{{selectedHero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
        </div>
        `
})

/* export the class to make it available to other components */
export class HeroDetailComponent {
    hero: Hero;
}
