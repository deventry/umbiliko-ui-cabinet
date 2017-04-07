import { Component/*, OnDestroy, OnInit*/ } from '@angular/core';
import { /*Router,*/ ActivatedRoute }       from '@angular/router';

//import { Observable }                   from 'rxjs/Observable';
import { Subscription }                 from 'rxjs/Subscription';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title: "Umbiliko Cabinet"
    subtitle: string = "Small CMS";
    routePath: string;
    private sub: Subscription;
    constructor(
        private route: ActivatedRoute/*,
        private router: Router*/) { }

    ngOnDistroy() {
        this.sub.unsubscribe();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.routePath = params['fragment'] || '';
        });
    }
}