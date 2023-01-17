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


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for generatePaymentsByCompanyCsvUsingPOST.
 */
export namespace GeneratePaymentsByCompanyCsvUsingPOST {
    /**
     * Parameter map for generatePaymentsByCompanyCsvUsingPOST.
     */
    export interface PartialParamMap {
      /**
       * Company ID
       */
      id: number;
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
       * Preferred way of payment
       */
      preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN';
      /**
       * Payment status
       */
      paymentStatus?: 'UNCONFIRMED' | 'CONFIRMED';
      /**
       * Production date range start
       */
      productionDateStart?: Date;
      /**
       * Production date range end
       */
      productionDateEnd?: Date;
      /**
       * Search by farmer name
       */
      query?: string;
    }

    /**
     * Enumeration of all parameters for generatePaymentsByCompanyCsvUsingPOST.
     */
    export enum Parameters {
      /**
       * Company ID
       */
      id = 'id',
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
       * Preferred way of payment
       */
      preferredWayOfPayment = 'preferredWayOfPayment',
      /**
       * Payment status
       */
      paymentStatus = 'paymentStatus',
      /**
       * Production date range start
       */
      productionDateStart = 'productionDateStart',
      /**
       * Production date range end
       */
      productionDateEnd = 'productionDateEnd',
      /**
       * Search by farmer name
       */
      query = 'query'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of generatePaymentsByCompanyCsvUsingPOST
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GeneratePaymentsByCompanyCsvUsingPOST.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
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
      preferredWayOfPayment: [
      ],
      paymentStatus: [
      ],
      productionDateStart: [
      ],
      productionDateEnd: [
      ],
      query: [
      ],
    };
}

/**
 * Namespace for generatePurchasesByCompanyCsvUsingPOST.
 */
export namespace GeneratePurchasesByCompanyCsvUsingPOST {
    /**
     * Parameter map for generatePurchasesByCompanyCsvUsingPOST.
     */
    export interface PartialParamMap {
      /**
       * Company ID
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
      /**
       * Preferred way of payment
       */
      preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN';
      /**
       * Is women share
       */
      isWomenShare?: boolean;
      /**
       * Production date range start
       */
      productionDateStart?: string;
      /**
       * Production date range end
       */
      productionDateEnd?: string;
      /**
       * Search by farmer name
       */
      query?: string;
    }

    /**
     * Enumeration of all parameters for generatePurchasesByCompanyCsvUsingPOST.
     */
    export enum Parameters {
      /**
       * Company ID
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
      sort = 'sort',
      /**
       * Preferred way of payment
       */
      preferredWayOfPayment = 'preferredWayOfPayment',
      /**
       * Is women share
       */
      isWomenShare = 'isWomenShare',
      /**
       * Production date range start
       */
      productionDateStart = 'productionDateStart',
      /**
       * Production date range end
       */
      productionDateEnd = 'productionDateEnd',
      /**
       * Search by farmer name
       */
      query = 'query'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of generatePurchasesByCompanyCsvUsingPOST
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GeneratePurchasesByCompanyCsvUsingPOST.PartialParamMap]?: [string, ValidatorFn][]} = {
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
      preferredWayOfPayment: [
      ],
      isWomenShare: [
      ],
      productionDateStart: [
      ],
      productionDateEnd: [
      ],
      query: [
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class CommonCsvControllerService {

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
   * Generate a csv file with a list of filtered payments by companyId. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public generatePaymentsByCompanyCsvUsingPOSTByMap(
    map: GeneratePaymentsByCompanyCsvUsingPOST.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Blob>;
  public generatePaymentsByCompanyCsvUsingPOSTByMap(
    map: GeneratePaymentsByCompanyCsvUsingPOST.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Blob>>;
  public generatePaymentsByCompanyCsvUsingPOSTByMap(
    map: GeneratePaymentsByCompanyCsvUsingPOST.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Blob>>;
  public generatePaymentsByCompanyCsvUsingPOSTByMap(
    map: GeneratePaymentsByCompanyCsvUsingPOST.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.generatePaymentsByCompanyCsvUsingPOST(
      map.id,
      map.requestType,
      map.limit,
      map.offset,
      map.sortBy,
      map.sort,
      map.preferredWayOfPayment,
      map.paymentStatus,
      map.productionDateStart,
      map.productionDateEnd,
      map.query,
      observe,
      reportProgress
    );
  }


    /**
     * Generate a csv file with a list of filtered payments by companyId.
     * 
     * @param id Company ID
     * @param requestType Only count, only fetch, or return both values (if null)
     * @param limit Number of records to return. Min: 1, default: 100
     * @param offset Number of records to skip before returning. Default: 0, min: 0
     * @param sortBy Column name to be sorted by, varies for each endpoint, default is id
     * @param sort Direction of sorting (ASC or DESC). Default DESC.
     * @param preferredWayOfPayment Preferred way of payment
     * @param paymentStatus Payment status
     * @param productionDateStart Production date range start
     * @param productionDateEnd Production date range end
     * @param query Search by farmer name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public generatePaymentsByCompanyCsvUsingPOST(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', paymentStatus?: 'UNCONFIRMED' | 'CONFIRMED', productionDateStart?: Date, productionDateEnd?: Date, query?: string, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Blob>;
    public generatePaymentsByCompanyCsvUsingPOST(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', paymentStatus?: 'UNCONFIRMED' | 'CONFIRMED', productionDateStart?: Date, productionDateEnd?: Date, query?: string, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Blob>>;
    public generatePaymentsByCompanyCsvUsingPOST(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', paymentStatus?: 'UNCONFIRMED' | 'CONFIRMED', productionDateStart?: Date, productionDateEnd?: Date, query?: string, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Blob>>;
    public generatePaymentsByCompanyCsvUsingPOST(id: number, requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', paymentStatus?: 'UNCONFIRMED' | 'CONFIRMED', productionDateStart?: Date, productionDateEnd?: Date, query?: string, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling generatePaymentsByCompanyCsvUsingPOST.');
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
        if (preferredWayOfPayment !== undefined && preferredWayOfPayment !== null) {
            queryParameters = queryParameters.set('preferredWayOfPayment', <any>preferredWayOfPayment);
        }
        if (paymentStatus !== undefined && paymentStatus !== null) {
            queryParameters = queryParameters.set('paymentStatus', <any>paymentStatus);
        }
        if (productionDateStart !== undefined && productionDateStart !== null) {
            queryParameters = queryParameters.set('productionDateStart', <any>productionDateStart.toISOString());
        }
        if (productionDateEnd !== undefined && productionDateEnd !== null) {
            queryParameters = queryParameters.set('productionDateEnd', <any>productionDateEnd.toISOString());
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream'
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

        const handle = this.httpClient.post(`${this.configuration.basePath}/api/chain/csv/payments/company/${encodeURIComponent(String(id))}`,
            null,
            {
                params: queryParameters,
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'generatePaymentsByCompanyCsvUsingPOST')));
        }
        return handle;
    }


  /**
   * Generate a csv file with a list of filtered purchases by companyId. by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public generatePurchasesByCompanyCsvUsingPOSTByMap(
    map: GeneratePurchasesByCompanyCsvUsingPOST.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<Blob>;
  public generatePurchasesByCompanyCsvUsingPOSTByMap(
    map: GeneratePurchasesByCompanyCsvUsingPOST.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<Blob>>;
  public generatePurchasesByCompanyCsvUsingPOSTByMap(
    map: GeneratePurchasesByCompanyCsvUsingPOST.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<Blob>>;
  public generatePurchasesByCompanyCsvUsingPOSTByMap(
    map: GeneratePurchasesByCompanyCsvUsingPOST.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.generatePurchasesByCompanyCsvUsingPOST(
      map.id,
      map.language,
      map.requestType,
      map.limit,
      map.offset,
      map.sortBy,
      map.sort,
      map.preferredWayOfPayment,
      map.isWomenShare,
      map.productionDateStart,
      map.productionDateEnd,
      map.query,
      observe,
      reportProgress
    );
  }


    /**
     * Generate a csv file with a list of filtered purchases by companyId.
     * 
     * @param id Company ID
     * @param language language
     * @param requestType Only count, only fetch, or return both values (if null)
     * @param limit Number of records to return. Min: 1, default: 100
     * @param offset Number of records to skip before returning. Default: 0, min: 0
     * @param sortBy Column name to be sorted by, varies for each endpoint, default is id
     * @param sort Direction of sorting (ASC or DESC). Default DESC.
     * @param preferredWayOfPayment Preferred way of payment
     * @param isWomenShare Is women share
     * @param productionDateStart Production date range start
     * @param productionDateEnd Production date range end
     * @param query Search by farmer name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public generatePurchasesByCompanyCsvUsingPOST(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', isWomenShare?: boolean, productionDateStart?: string, productionDateEnd?: string, query?: string, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<Blob>;
    public generatePurchasesByCompanyCsvUsingPOST(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', isWomenShare?: boolean, productionDateStart?: string, productionDateEnd?: string, query?: string, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<Blob>>;
    public generatePurchasesByCompanyCsvUsingPOST(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', isWomenShare?: boolean, productionDateStart?: string, productionDateEnd?: string, query?: string, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<Blob>>;
    public generatePurchasesByCompanyCsvUsingPOST(id: number, language?: 'EN' | 'DE' | 'RW' | 'ES', requestType?: 'COUNT' | 'FETCH', limit?: number, offset?: number, sortBy?: string, sort?: 'ASC' | 'DESC', preferredWayOfPayment?: 'CASH' | 'CASH_VIA_COLLECTOR' | 'BANK_TRANSFER' | 'CHEQUE' | 'OFFSETTING' | 'UNKNOWN', isWomenShare?: boolean, productionDateStart?: string, productionDateEnd?: string, query?: string, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling generatePurchasesByCompanyCsvUsingPOST.');
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
        if (preferredWayOfPayment !== undefined && preferredWayOfPayment !== null) {
            queryParameters = queryParameters.set('preferredWayOfPayment', <any>preferredWayOfPayment);
        }
        if (isWomenShare !== undefined && isWomenShare !== null) {
            queryParameters = queryParameters.set('isWomenShare', <any>isWomenShare);
        }
        if (productionDateStart !== undefined && productionDateStart !== null) {
            queryParameters = queryParameters.set('productionDateStart', <any>productionDateStart);
        }
        if (productionDateEnd !== undefined && productionDateEnd !== null) {
            queryParameters = queryParameters.set('productionDateEnd', <any>productionDateEnd);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }

        let headers = this.defaultHeaders;
        if (language !== undefined && language !== null) {
            headers = headers.set('language', String(language));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream'
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

        const handle = this.httpClient.post(`${this.configuration.basePath}/api/chain/csv/purchases/company/${encodeURIComponent(String(id))}`,
            null,
            {
                params: queryParameters,
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'generatePurchasesByCompanyCsvUsingPOST')));
        }
        return handle;
    }

}
