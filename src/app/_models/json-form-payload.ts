import { Type } from "@angular/core";

export interface RootObject{
}


export interface BaseFormPayload {
    contentTag: string;
    formType: string;
    fields: RootObject[]
}

export interface JsonFormPayload extends RootObject {
    field: string;
    type: string;
    value: JsonFormPayload|JsonFormPayload[]
}