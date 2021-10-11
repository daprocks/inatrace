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


import { ApiCompanyCustomer } from './apiCompanyCustomer';
import { ApiValidationErrorDetails } from './apiValidationErrorDetails';


/**
 * Generic API response. See documentation for data type for specific type details.
 */

export interface ApiResponseApiCompanyCustomer { 
    data?: ApiCompanyCustomer;
    /**
     * Optional details for unexpected error responses.
     */
    errorDetails?: string;
    /**
     * Simple message to explain client developers the reason for error.
     */
    errorMessage?: string;
    /**
     * Response status. OK for successful reponses.
     */
    status: ApiResponseApiCompanyCustomer.StatusEnum;
    validationErrorDetails?: ApiValidationErrorDetails;
}

/**
 * Namespace for property- and property-value-enumerations of ApiResponseApiCompanyCustomer.
 */
export namespace ApiResponseApiCompanyCustomer {
    /**
     * All properties of ApiResponseApiCompanyCustomer.
     */
    export enum Properties {
        data = 'data',
        /**
         * Optional details for unexpected error responses.
         */
        errorDetails = 'errorDetails',
        /**
         * Simple message to explain client developers the reason for error.
         */
        errorMessage = 'errorMessage',
        /**
         * Response status. OK for successful reponses.
         */
        status = 'status',
        validationErrorDetails = 'validationErrorDetails'
    }

    /**
     * All possible values of status.
     */
    export enum StatusEnum {
        OK = 'OK',
        ERROR = 'ERROR',
        REQUESTBODYERROR = 'REQUEST_BODY_ERROR',
        VALIDATIONERROR = 'VALIDATION_ERROR',
        TOOMANYREQUESTS = 'TOO_MANY_REQUESTS',
        UNAUTHORIZED = 'UNAUTHORIZED',
        AUTHERROR = 'AUTH_ERROR',
        UPSTREAMHTTPERROR = 'UPSTREAM_HTTP_ERROR',
        INVALIDREQUEST = 'INVALID_REQUEST',
        INVALIDOREXPIREDSTORAGEKEY = 'INVALID_OR_EXPIRED_STORAGE_KEY',
        NOTIMPLEMENTED = 'NOT_IMPLEMENTED'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiResponseApiCompanyCustomer',
            vars: [
                {
                    metadata: ApiCompanyCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'data',
                    classname: 'ApiResponseApiCompanyCustomer',
                    dataType: 'ApiCompanyCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyCustomer'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'errorDetails',
                    classname: 'ApiResponseApiCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'errorMessage',
                    classname: 'ApiResponseApiCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiResponseApiCompanyCustomer.StatusEnum',
                    required: true,
                    name: 'status',
                    classname: 'ApiResponseApiCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiValidationErrorDetails.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'validationErrorDetails',
                    classname: 'ApiResponseApiCompanyCustomer',
                    dataType: 'ApiValidationErrorDetails',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiValidationErrorDetails'
                },
            ],
            validators: {
                data: [
                ],
                errorDetails: [
                ],
                errorMessage: [
                ],
                status: [
                        ['required'],
                ],
                validationErrorDetails: [
                ],
            }
        }
    }

  // export const ApiResponseApiCompanyCustomerValidationScheme = {
  //     validators: [],
  //     fields: {
  //               data: {
  //                   validators: []
  //               },
  //               errorDetails: {
  //                   validators: []
  //               },
  //               errorMessage: {
  //                   validators: []
  //               },
  //               status: {
  //                   validators: []
  //               },
  //               validationErrorDetails: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiResponseApiCompanyCustomer>;


}


