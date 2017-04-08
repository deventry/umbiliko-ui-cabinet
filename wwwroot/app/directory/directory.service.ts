import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular2-odata";
const platform = platformBrowserDynamic();

@Injectable()
class CollectionsConfig extends ODataConfiguration {
    baseUrl = "odata/collections";
}

class ElementsConfig extends ODataConfiguration {
    baseUrl = "odata/elements";
}

class SourcesConfig extends ODataConfiguration {
    baseUrl = "odata/sources";
}

platform.bootstrapModule(AppModule, [
    { provide: ODataConfiguration, useClass: CollectionsConfig },
    { provide: ODataConfiguration, useClass: ElementsConfig },
    { provide: ODataConfiguration, useClass: SourcesConfig },
    ODataServiceFactory
]);

// Element model interface
interface IElement {
    Id: AAGUID;
    Collection: ICollection;
    CollectionId: AAGUID;
}

// Source model interface
interface ISource {
    Id: AAGUID;
    Name: string;
}

// Collection model interface
interface ICollection {
    Id: AAGUID;
    Issuer: string;
    Name: string;
    Source: ISource;
    SourceId: AAGUID;
    Tag: string;
    Version: Date;
}

//import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class DirectoryService {
    public elements: ODataService<IElement>;
    public collections: ODataService<ICollection>;
    public sources: ODataService<ISource>;
    /*private api = { // URL to web API
        //cancelReservation: 'api/airline/cancel-reservation',
        //flights: 'api/airline/flights',
        //reservations: 'api/airline/reservations',
        //tickets: 'api/tikets'
    };*/

    private static instance: DirectoryService;

    constructor(http: Http,
        private odata: ODataServiceFactory) {
        this.collections = this.odata.CreateService<ICollection>("collection");
        this.elements = this.odata.CreateService<IElement>("element");
        this.sources = this.odata.CreateService<ISource>("source");
    }

    // Return the instance of the service
    public static getInstance(http: Http, odata: ODataServiceFactory): DirectoryService {
        if (DirectoryService.instance === null) {
            DirectoryService.instance = new DirectoryService(http, odata);
        }
        return DirectoryService.instance;
    }

    errorMessage: string;
    //reservations: Observable<ReservationModel[]> = new Observable<ReservationModel[]>();
    
    /*cancelReservation(reservation: ReservationModel): Promise<any> {

        let body = JSON.stringify({
            flightNumber: reservation.flightNumber,
            departing: reservation.departing
        });

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.api.cancelReservation, body, options)
            .toPromise()
            .then((res: Response) => {
                let body = res.json();
                return body;
            })
            .catch(this.handleError);
    }

    filter(model: ReservationFilterModel): Observable<ReservationModel[]> {

        let body = JSON.stringify(model);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.api.reservations, body, options)
            .toPromise()
            .then((res: Response) => {
                let body = res.json();
                if (body.succeeded === true) {
                    this.reservations = body.result.map(data => new ReservationModel(
                        data.passenger,
                        data.flightNumberm,
                        data.origin,
                        new Date(data.departing),
                        data.destination,
                        new Date(data.arriving),
                        data.seatNumber,
                        data.amount,
                        data.currency
                    ));
                }
                return this.reservations || [];
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        alert(errMsg);

        return Promise.reject(errMsg);// Observable.throw(errMsg);
    }*/
}

@Injectable()
export class DirectoryServiceProvider {
    service: DirectoryService;
    constructor(http: Http, odata: ODataServiceFactory) {
        this.service = DirectoryService.getInstance(http, odata);
    }
}
