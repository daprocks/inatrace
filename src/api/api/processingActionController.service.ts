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

import { ApiDefaultResponse } from '../model/apiDefaultResponse';
import { ApiPaginatedResponseApiProcessingAction } from '../model/apiPaginatedResponseApiProcessingAction';
import { ApiProcessingAction } from '../model/apiProcessingAction';
import { ApiResponseApiBaseEntity } from '../model/apiResponseApiBaseEntity';
import { ApiResponseApiProcessingAction } from '../model/apiResponseApiProcessingAction';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for createOrUpdateProcessingActionUsingPUT.
 */
export namespace CreateOrUpdateProcessingActionUsingPUT {
    /**
     * Parameter map for createOrUpdateProcessingActionUsingPUT.
     */
    export interface PartialParamMap {
      /**
       * apiProcessingAction
       */
      ApiProcessingAction: ApiProcessingAction;
    }

    /**
     * Enumeration of all parameters for createOrUpdateProcessingActionUsingPUT.
     */
    export enum Parameters {
      /**
       * apiProcessingAction
       */
      ApiProcessingAction = 'ApiProcessingAction'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of createOrUpdateProcessingActionUsingPUT
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof CreateOrUpdateProcessingActionUsingPUT.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for deleteProcessingActionUsingDELETE.
 */
export namespace DeleteProcessingActionUsingDELETE {
    /**
     * Parameter map for deleteProcessingActionUsingDELETE.
     */
    export interface PartialParamMap {
      /**
       * ProcessingAction ID
       */
      id: number;
    }

    /**
     * Enumeration of all parameters for deleteProcessingActionUsingDELETE.
     */
    export enum Parameters {
      /**
       * ProcessingAction ID
       */
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of deleteProcessingActionUsingDELETE
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof DeleteProcessingActionUsingDELETE.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for getProcessingActionDetailUsingGET.
 */
export namespace GetProcessingActionDetailUsingGET {
    /**
     * Parameter map for getProcessingActionDetailUsingGET.
     */
    export interface PartialParamMap {
      /**
       * ProcessingAction ID
       */
      id: number;
    }

    /**
     * Enumeration of all parameters for getProcessingActionDetailUsingGET.
     */
    export enum Parameters {
      /**
       * ProcessingAction ID
       */
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getProcessingActionDetailUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetProcessingActionDetailUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for getProcessingActionListUsingGET.
 */
export namespace GetProcessingActionListUsingGET {
    /**
     * Parameter map for getProcessingActionListUsingGET.
     */
    export interface PartialParamMap {
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType?: 'COUNT' | 'FETCH';
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit?: number;
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset?: number;
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy?: string;
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort?: 'ASC' | 'DESC';
      /**
       * language
       */
      language?: 'EN' | 'DE' | 'RW' | 'ES';
    }

    /**
     * Enumeration of all parameters for getProcessingActionListUsingGET.
     */
    export enum Parameters {
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType = 'requestType',
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit = 'limit',
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset = 'offset',
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy = 'sortBy',
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort = 'sort',
      /**
       * language
       */
      language = 'language'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getProcessingActionListUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetProcessingActionListUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      requestType: [
      ],
      limit: [
      ],
      offset: [
      ],
      sortBy: [
      ],
      sort: [
      ],
      language: [
      ],
    };
}

/**
 * Namespace for getProcessingActionUsingGET.
 */
export namespace GetProcessingActionUsingGET {
    /**
     * Parameter map for getProcessingActionUsingGET.
     */
    export interface PartialParamMap {
      /**
       * ProcessingAction ID
       */
      id: number;
      /**
       * language
       */
      language?: 'EN' | 'DE' | 'RW' | 'ES';
    }

    /**
     * Enumeration of all parameters for getProcessingActionUsingGET.
     */
    export enum Parameters {
      /**
       * ProcessingAction ID
       */
      id = 'id',
      /**
       * language
       */
      language = 'language'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getProcessingActionUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetProcessingActionUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
      language: [
      ],
    };
}

/**
 * Namespace for listProcessingActionsByCompanyUsingGET.
 */
export namespace ListProcessingActionsByCompanyUsingGET {
    /**
     * Parameter map for listProcessingActionsByCompanyUsingGET.
     */
    export interface PartialParamMap {
      /**
       * ProcessingAction ID
       */
      id: number;
      /**
       * language
       */
      language?: 'EN' | 'DE' | 'RW' | 'ES';
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType?: 'COUNT' | 'FETCH';
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit?: number;
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset?: number;
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy?: string;
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort?: 'ASC' | 'DESC';
    }

    /**
     * Enumeration of all parameters for listProcessingActionsByCompanyUsingGET.
     */
    export enum Parameters {
      /**
       * ProcessingAction ID
       */
      id = 'id',
      /**
       * language
       */
      language = 'language',
      /**
       * Only count, only fetch, or return both values (if null)
       */
      requestType = 'requestType',
      /**
       * Number of records to return. Min: 1, default: 100
       */
      limit = 'limit',
      /**
       * Number of records to skip before returning. Default: 0, min: 0
       */
      offset = 'offset',
      /**
       * Column name to be sorted by, varies for each endpoint, default is id
       */
      sortBy = 'sortBy',
      /**
       * Direction of sorting (ASC or DESC). Default DESC.
       */
      sort = 'sort'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of listProcessingActionsByCompanyUsingGET
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ListProcessingActionsByCompanyUsingGET.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
      language: [
      ],
      requestType: [
      ],
      limit: [
      ],
      offset: [
      ],
      sortBy: [
      ],
      sort: [
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class ProcessingActionControllerService {

    protected basePath = 'http://localhost:8080';
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
   * Create or update processing action. If ID is provided, then the entity with the provided ID is updated. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createOrUpdateProcessingActionUsingPUTByMap(
    map: CreateOrUpdateProcessingActionUsingPUT.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiBaseEntity>;
  public createOrUpdateProcessingActionUsingPUTByMap(
    map: CreateOrUpdateProcessingActionUsingPUT.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiBaseEntity>>;
  public createOrUpdateProcessingActionUsingPUTByMap(
    map: CreateOrUpdateProcessingActionUsingPUT.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiBaseEntity>>;
  public createOrUpdateProcessingActionUsingPUTByMap(
    map: CreateOrUpdateProcessingActionUsingPUT.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.createOrUpdateProcessingActionUsingPUT(
      map.ApiProcessingAction,
      observe,
      reportProgress
    );
  }


    /**
     * Create or update processing action. If ID is provided, then the entity with the provided ID is updated.
     * 
     * @param ApiProcessingAction apiProcessingAction
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOrUpdateProcessingActionUsingPUT(ApiProcessingAction: ApiProcessingAction, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiBaseEntity>;
    public createOrUpdateProcessingActionUsingPUT(ApiProcessingAction: ApiProcessingAction, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiBaseEntity>>;
    public createOrUpdateProcessingActionUsingPUT(ApiProcessingAction: ApiProcessingAction, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiBaseEntity>>;
    public createOrUpdateProcessingActionUsingPUT(ApiProcessingAction: ApiProcessingAction, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (ApiProcessingAction === null || ApiProcessingAction === undefined) {
            throw new Error('Required parameter ApiProcessingAction was null or undefined when calling createOrUpdateProcessingActionUsingPUT.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.put<ApiResponseApiBaseEntity>(`${this.configuration.basePath}/api/chain/processing-action`,
            ApiProcessingAction,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'createOrUpdateProcessingActionUsingPUT')));
        }
        return handle;
    }


  /**
   * Deletes a processing action with the provided ID. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteProcessingActionUsingDELETEByMap(
    map: DeleteProcessingActionUsingDELETE.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiDefaultResponse>;
  public deleteProcessingActionUsingDELETEByMap(
    map: DeleteProcessingActionUsingDELETE.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiDefaultResponse>>;
  public deleteProcessingActionUsingDELETEByMap(
    map: DeleteProcessingActionUsingDELETE.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiDefaultResponse>>;
  public deleteProcessingActionUsingDELETEByMap(
    map: DeleteProcessingActionUsingDELETE.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.deleteProcessingActionUsingDELETE(
      map.id,
      observe,
      reportProgress
    );
  }


    /**
     * Deletes a processing action with the provided ID.
     * 
     * @param id ProcessingAction ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProcessingActionUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiDefaultResponse>;
    public deleteProcessingActionUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiDefaultResponse>>;
    public deleteProcessingActionUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiDefaultResponse>>;
    public deleteProcessingActionUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteProcessingActionUsingDELETE.');
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

        const handle = this.httpClient.delete<ApiDefaultResponse>(`${this.configuration.basePath}/api/chain/processing-action/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'deleteProcessingActionUsingDELETE')));
        }
        return handle;
    }


  /**
   * Get a single processing action by the provided ID with all translations. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessingActionDetailUsingGETByMap(
    map: GetProcessingActionDetailUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiProcessingAction>;
  public getProcessingActionDetailUsingGETByMap(
    map: GetProcessingActionDetailUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiProcessingAction>>;
  public getProcessingActionDetailUsingGETByMap(
    map: GetProcessingActionDetailUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiProcessingAction>>;
  public getProcessingActionDetailUsingGETByMap(
    map: GetProcessingActionDetailUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getProcessingActionDetailUsingGET(
      map.id,
      observe,
      reportProgress
    );
  }


    /**
     * Get a single processing action by the provided ID with all translations.
     * 
     * @param id ProcessingAction ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingActionDetailUsingGET(id: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiProcessingAction>;
    public getProcessingActionDetailUsingGET(id: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiProcessingAction>>;
    public getProcessingActionDetailUsingGET(id: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiProcessingAction>>;
    public getProcessingActionDetailUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProcessingActionDetailUsingGET.');
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

        const handle = this.httpClient.get<ApiResponseApiProcessingAction>(`${this.configuration.basePath}/api/chain/processing-action/${encodeURIComponent(String(id))}/detail`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getProcessingActionDetailUsingGET')));
        }
        return handle;
    }


  /**
   * Get a paginated list of processing actions. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessingActionListUsingGETByMap(
    map: GetProcessingActionListUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiPaginatedResponseApiProcessingAction>;
  public getProcessingActionListUsingGETByMap(
    map: GetProcessingActionListUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiPaginatedResponseApiProcessingAction>>;
  public getProcessingActionListUsingGETByMap(
    map: GetProcessingActionListUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiPaginatedResponseApiProcessingAction>>;
  public getProcessingActionListUsingGETByMap(
    map: GetProcessingActionListUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getProcessingActionListUsingGET(
      map.requestType,
      map.limit,
      map.offset,
      map.sortBy,
      map.sort,
      map.language,
      observe,
      reportProgress
    );
  }


    /**
     * Get a paginated list of processing actions.
     * 
     * @param requestType Only count, only fetch, or return both values (if null)
     * @param limit Number of records to return. Min: 1, default: 100
     * @param offset Number of records to skip before returning. Default: 0, min: 0
     * @param sortBy Column name to be sorted by, varies for each endpoint, default is id
     * @param sort Direction of sorting (ASC or DESC). Default DESC.
     * @param language language
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingActionListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiPaginatedResponseApiProcessingAction>;
    public getProcessingActionListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiPaginatedResponseApiProcessingAction>>;
    public getProcessingActionListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiPaginatedResponseApiProcessingAction>>;
    public getProcessingActionListUsingGET(requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', language?: 'EN' | 'DE' | 'RW' | 'ES', observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (requestType !== undefined && requestType !== null) {
            queryParameters = queryParameters.set('requestType', <any>requestType);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>sortBy);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

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

        const handle = this.httpClient.get<ApiPaginatedResponseApiProcessingAction>(`${this.configuration.basePath}/api/chain/processing-action/list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getProcessingActionListUsingGET')));
        }
        return handle;
    }


  /**
   * Get a single processing action with the provided ID. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getProcessingActionUsingGETByMap(
    map: GetProcessingActionUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseApiProcessingAction>;
  public getProcessingActionUsingGETByMap(
    map: GetProcessingActionUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseApiProcessingAction>>;
  public getProcessingActionUsingGETByMap(
    map: GetProcessingActionUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseApiProcessingAction>>;
  public getProcessingActionUsingGETByMap(
    map: GetProcessingActionUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getProcessingActionUsingGET(
      map.id,
      map.language,
      observe,
      reportProgress
    );
  }


    /**
     * Get a single processing action with the provided ID.
     * 
     * @param id ProcessingAction ID
     * @param language language
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessingActionUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseApiProcessingAction>;
    public getProcessingActionUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseApiProcessingAction>>;
    public getProcessingActionUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseApiProcessingAction>>;
    public getProcessingActionUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProcessingActionUsingGET.');
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

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

        const handle = this.httpClient.get<ApiResponseApiProcessingAction>(`${this.configuration.basePath}/api/chain/processing-action/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'getProcessingActionUsingGET')));
        }
        return handle;
    }


  /**
   * Get a list of processing actions by company ID. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listProcessingActionsByCompanyUsingGETByMap(
    map: ListProcessingActionsByCompanyUsingGET.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiPaginatedResponseApiProcessingAction>;
  public listProcessingActionsByCompanyUsingGETByMap(
    map: ListProcessingActionsByCompanyUsingGET.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiPaginatedResponseApiProcessingAction>>;
  public listProcessingActionsByCompanyUsingGETByMap(
    map: ListProcessingActionsByCompanyUsingGET.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiPaginatedResponseApiProcessingAction>>;
  public listProcessingActionsByCompanyUsingGETByMap(
    map: ListProcessingActionsByCompanyUsingGET.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.listProcessingActionsByCompanyUsingGET(
      map.id,
      map.language,
      map.requestType,
      map.limit,
      map.offset,
      map.sortBy,
      map.sort,
      observe,
      reportProgress
    );
  }


    /**
     * Get a list of processing actions by company ID.
     * 
     * @param id ProcessingAction ID
     * @param language language
     * @param requestType Only count, only fetch, or return both values (if null)
     * @param limit Number of records to return. Min: 1, default: 100
     * @param offset Number of records to skip before returning. Default: 0, min: 0
     * @param sortBy Column name to be sorted by, varies for each endpoint, default is id
     * @param sort Direction of sorting (ASC or DESC). Default DESC.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listProcessingActionsByCompanyUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiPaginatedResponseApiProcessingAction>;
    public listProcessingActionsByCompanyUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiPaginatedResponseApiProcessingAction>>;
    public listProcessingActionsByCompanyUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiPaginatedResponseApiProcessingAction>>;
    public listProcessingActionsByCompanyUsingGET(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listProcessingActionsByCompanyUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (requestType !== undefined && requestType !== null) {
            queryParameters = queryParameters.set('requestType', <any>requestType);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>sortBy);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

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

        const handle = this.httpClient.get<ApiPaginatedResponseApiProcessingAction>(`${this.configuration.basePath}/api/chain/processing-action/list/company/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'listProcessingActionsByCompanyUsingGET')));
        }
        return handle;
    }

}
