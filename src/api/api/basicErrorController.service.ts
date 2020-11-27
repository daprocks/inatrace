/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * INATrace Services API
 * Abelium INATrace Services API swagger documentation
 *
 * OpenAPI spec version: 1.0
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

import { ModelAndView } from '../model/modelAndView';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for errorHtmlUsingDELETE.
 */
export namespace ErrorHtmlUsingDELETE {
    /**
     * Parameter map for errorHtmlUsingDELETE.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingDELETE.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingDELETE
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingDELETE.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for errorHtmlUsingGET.
 */
export namespace ErrorHtmlUsingGET {
    /**
     * Parameter map for errorHtmlUsingGET.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingGET.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for errorHtmlUsingHEAD.
 */
export namespace ErrorHtmlUsingHEAD {
    /**
     * Parameter map for errorHtmlUsingHEAD.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingHEAD.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingHEAD
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingHEAD.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for errorHtmlUsingOPTIONS.
 */
export namespace ErrorHtmlUsingOPTIONS {
    /**
     * Parameter map for errorHtmlUsingOPTIONS.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingOPTIONS.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingOPTIONS
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingOPTIONS.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for errorHtmlUsingPATCH.
 */
export namespace ErrorHtmlUsingPATCH {
    /**
     * Parameter map for errorHtmlUsingPATCH.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingPATCH.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingPATCH
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingPATCH.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for errorHtmlUsingPOST.
 */
export namespace ErrorHtmlUsingPOST {
    /**
     * Parameter map for errorHtmlUsingPOST.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingPOST.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingPOST
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingPOST.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for errorHtmlUsingPUT.
 */
export namespace ErrorHtmlUsingPUT {
    /**
     * Parameter map for errorHtmlUsingPUT.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for errorHtmlUsingPUT.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of errorHtmlUsingPUT
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ErrorHtmlUsingPUT.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}



@Injectable({
  providedIn: 'root'
})
export class BasicErrorControllerService {

    protected basePath = '';
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
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingDELETEByMap(
    map: ErrorHtmlUsingDELETE.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingDELETEByMap(
    map: ErrorHtmlUsingDELETE.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingDELETEByMap(
    map: ErrorHtmlUsingDELETE.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingDELETEByMap(
    map: ErrorHtmlUsingDELETE.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingDELETE(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingDELETE(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingDELETE(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingDELETE(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingDELETE(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.delete<ModelAndView>(`${this.configuration.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingDELETE')));
        }
        return handle;
    }


  /**
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingGETByMap(
    map: ErrorHtmlUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingGETByMap(
    map: ErrorHtmlUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingGETByMap(
    map: ErrorHtmlUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingGETByMap(
    map: ErrorHtmlUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingGET(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingGET(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingGET(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingGET(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingGET(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.get<ModelAndView>(`${this.configuration.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingGET')));
        }
        return handle;
    }


  /**
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingHEADByMap(
    map: ErrorHtmlUsingHEAD.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingHEADByMap(
    map: ErrorHtmlUsingHEAD.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingHEADByMap(
    map: ErrorHtmlUsingHEAD.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingHEADByMap(
    map: ErrorHtmlUsingHEAD.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingHEAD(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingHEAD(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingHEAD(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingHEAD(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingHEAD(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.head<ModelAndView>(`${this.configuration.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingHEAD')));
        }
        return handle;
    }


  /**
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingOPTIONSByMap(
    map: ErrorHtmlUsingOPTIONS.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingOPTIONSByMap(
    map: ErrorHtmlUsingOPTIONS.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingOPTIONSByMap(
    map: ErrorHtmlUsingOPTIONS.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingOPTIONSByMap(
    map: ErrorHtmlUsingOPTIONS.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingOPTIONS(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingOPTIONS(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingOPTIONS(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingOPTIONS(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingOPTIONS(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.options<ModelAndView>(`${this.configuration.basePath}/error`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingOPTIONS')));
        }
        return handle;
    }


  /**
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingPATCHByMap(
    map: ErrorHtmlUsingPATCH.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingPATCHByMap(
    map: ErrorHtmlUsingPATCH.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingPATCHByMap(
    map: ErrorHtmlUsingPATCH.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingPATCHByMap(
    map: ErrorHtmlUsingPATCH.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingPATCH(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingPATCH(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingPATCH(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingPATCH(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingPATCH(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.patch<ModelAndView>(`${this.configuration.basePath}/error`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingPATCH')));
        }
        return handle;
    }


  /**
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingPOSTByMap(
    map: ErrorHtmlUsingPOST.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingPOSTByMap(
    map: ErrorHtmlUsingPOST.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingPOSTByMap(
    map: ErrorHtmlUsingPOST.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingPOSTByMap(
    map: ErrorHtmlUsingPOST.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingPOST(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingPOST(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingPOST(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingPOST(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingPOST(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.post<ModelAndView>(`${this.configuration.basePath}/error`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingPOST')));
        }
        return handle;
    }


  /**
   * errorHtml by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingPUTByMap(
    map: ErrorHtmlUsingPUT.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ModelAndView>;
  public errorHtmlUsingPUTByMap(
    map: ErrorHtmlUsingPUT.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingPUTByMap(
    map: ErrorHtmlUsingPUT.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingPUTByMap(
    map: ErrorHtmlUsingPUT.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.errorHtmlUsingPUT(
      observe,
      reportProgress
    );
  }


    /**
     * errorHtml
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public errorHtmlUsingPUT(observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ModelAndView>;
    public errorHtmlUsingPUT(observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ModelAndView>>;
    public errorHtmlUsingPUT(observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ModelAndView>>;
    public errorHtmlUsingPUT(observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/html'
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

        const handle = this.httpClient.put<ModelAndView>(`${this.configuration.basePath}/error`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'errorHtmlUsingPUT')));
        }
        return handle;
    }

}
