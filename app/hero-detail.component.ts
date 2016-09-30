// Keep the Input import for now, we'll remove it later:
import {Component, Input, OnInit}   from '@angular/core';
import {ActivatedRoute, Params}     from '@angular/router';
import {Location}                   from '@angular/common';

import {Hero}                       from './hero';
import {HeroService}                from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            // The hero id is a number. Route parameters are always strings.
            // So we convert the route parameter value to a number with the JavaScript (+) operator.
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }
}
