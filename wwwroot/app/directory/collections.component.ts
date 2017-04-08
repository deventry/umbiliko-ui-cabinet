import { Component, Injectable/*, OnDestroy, OnInit*/ } from '@angular/core';
import { DirectoryServiceProvider } from './directory.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { ODataConfiguration, ODataServiceFactory } from "angular2-odata";
const platform = platformBrowserDynamic();

//import { Observable }                   from 'rxjs/Observable';
//import { Subscription } from 'rxjs/Subscription';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Injectable()
class ODataCollectionsConfig extends ODataConfiguration {
    baseUrl = "odata/collections";
}

platform.bootstrapModule(AppModule, [
    { provide: ODataConfiguration, useClass: ODataCollectionsConfig },
    ODataServiceFactory
]);

@Component({
    providers: [DirectoryServiceProvider],
    selector: 'collection-datatable',
    //templateUrl: 'app/collections/grid.component.html',
    template: `
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>
    `
})
export class CollectionsComponent {
    constructor(
        private directory: DirectoryServiceProvider
        ) {
    }

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];
    count: number = 0;
    offset: number = 0;
    limit: number = 10;

    rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];

    ngOnDistroy() {
    }

    ngOnInit() {
    }

    page() {
        this.directory.service.collections
            .Query()                    //Creates a query object
            .Top(this.limit)
            .Skip(this.offset)
            .Expand("Source")
            .OrderBy("Name asc")
            //.Filter("")
            .Exec()                     //Fires the request
            .subscribe(                 //Subscribes to Observable<Array<T>>
                data => {
                    //this.data = data;     //Do something with the result
                },
                error => {
                    //Local error handler
                });
    }
}