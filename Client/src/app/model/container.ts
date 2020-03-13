import {IDocumentResource} from "ngx-jsonapi/interfaces/data-object";
import {IDataResource} from "ngx-jsonapi/interfaces/data-resource";

export class Container {
    uniqueId: String;
    names: String;
    image: String;
    state: String;
    ports: [];
    created: Number;
    status: String;
}
