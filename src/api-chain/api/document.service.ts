/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * coffee-be
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';
import { catchError }                                        from 'rxjs/operators';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for getFile.
 */
export namespace GetFile {
    /**
     * Parameter map for getFile.
     */
    export interface PartialParamMap {
      /**
       * identifier of a file on server
       */
      storageKey: string;
    }

    /**
     * Enumeration of all parameters for getFile.
     */
    export enum Parameters {
      /**
       * identifier of a file on server
       */
      storageKey = 'storageKey'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getFile
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetFile.PartialParamMap]?: [string, ValidatorFn][]} = {
      storageKey: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for uploadFile.
 */
export namespace UploadFile {
    /**
     * Parameter map for uploadFile.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for uploadFile.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of uploadFile
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof UploadFile.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}



@Injectable({
  providedIn: 'root'
})
export class DocumentService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath != null ? configuration.basePath : (basePath != null ? basePath : this.basePath);
        } else {
            this.configuration.basePath = basePath != null ? basePath : this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



  /**
   *  by map.
   * Downloads the document (file) on the server identified by a storageKey.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getFileByMap(
    map: GetFile.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Blob>;
  public getFileByMap(
    map: GetFile.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Blob>>;
  public getFileByMap(
    map: GetFile.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Blob>>;
  public getFileByMap(
    map: GetFile.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getFile(
      map.storageKey,
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Downloads the document (file) on the server identified by a storageKey.
     * @param storageKey identifier of a file on server
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFile(storageKey: string, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Blob>;
    public getFile(storageKey: string, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Blob>>;
    public getFile(storageKey: string, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Blob>>;
    public getFile(storageKey: string, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (storageKey === null || storageKey === undefined) {
            throw new Error('Required parameter storageKey was null or undefined when calling getFile.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get(`${this.configuration.basePath}/chain-api/data/document/download/${encodeURIComponent(String(storageKey))}`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'GetFile')));
        }
        return handle;
    }


  /**
   *  by map.
   * Uploads a file. Returs file info.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public uploadFileByMap(
    map: UploadFile.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<{ [key: string]: any; }>;
  public uploadFileByMap(
    map: UploadFile.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: any; }>>;
  public uploadFileByMap(
    map: UploadFile.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: any; }>>;
  public uploadFileByMap(
    map: UploadFile.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.uploadFile(
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Uploads a file. Returs file info.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadFile(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<{ [key: string]: any; }>;
    public uploadFile(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<{ [key: string]: any; }>>;
    public uploadFile(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<{ [key: string]: any; }>>;
    public uploadFile(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.post<{ [key: string]: any; }>(`${this.configuration.basePath}/chain-api/data/document/upload`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'UploadFile')));
        }
        return handle;
    }

}
