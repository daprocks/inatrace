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


import { ApiDefaultResponseStatusEnum } from './apiDefaultResponseStatusEnum';
import { ApiValidationErrorDetails } from './apiValidationErrorDetails';
import { PaginatedListChainTransaction } from './paginatedListChainTransaction';



export interface ApiResponsePaginatedListChainTransaction { 
    data?: PaginatedListChainTransaction;
    /**
     * Optional details for unexpected error responses.
     */
    errorDetails?: string;
    /**
     * Simple message to explain client developers the reason for error.
     */
    errorMessage?: string;
    status: ApiDefaultResponseStatusEnum;
    validationErrorDetails?: ApiValidationErrorDetails;
}

/**
 * Namespace for property- and property-value-enumerations of ApiResponsePaginatedListChainTransaction.
 */
export namespace ApiResponsePaginatedListChainTransaction {
    /**
     * All properties of ApiResponsePaginatedListChainTransaction.
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
        status = 'status',
        validationErrorDetails = 'validationErrorDetails'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiResponsePaginatedListChainTransaction',
            vars: [
                {
                    metadata: PaginatedListChainTransaction.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'data',
                    classname: 'ApiResponsePaginatedListChainTransaction',
                    dataType: 'PaginatedListChainTransaction',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'PaginatedListChainTransaction'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'errorDetails',
                    classname: 'ApiResponsePaginatedListChainTransaction',
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
                    classname: 'ApiResponsePaginatedListChainTransaction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDefaultResponseStatusEnum.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'status',
                    classname: 'ApiResponsePaginatedListChainTransaction',
                    dataType: 'ApiDefaultResponseStatusEnum',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDefaultResponseStatusEnum'
                },
                {
                    metadata: ApiValidationErrorDetails.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'validationErrorDetails',
                    classname: 'ApiResponsePaginatedListChainTransaction',
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

  // export const ApiResponsePaginatedListChainTransactionValidationScheme = {
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
  // } as SimpleValidationScheme<ApiResponsePaginatedListChainTransaction>;


}


