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


import { ApiCompany } from './apiCompany';
import { ApiFacility } from './apiFacility';
import { ApiFinalProduct } from './apiFinalProduct';
import { ApiMeasureUnitType } from './apiMeasureUnitType';
import { ApiSemiProduct } from './apiSemiProduct';
import { ApiStockOrder } from './apiStockOrder';



export interface ApiTransaction { 
    company?: ApiCompany;
    /**
     * Currency
     */
    currency?: string;
    finalProduct?: ApiFinalProduct;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Initiator user ID
     */
    initiationUserId?: number;
    inputMeasureUnitType?: ApiMeasureUnitType;
    /**
     * Input quantity
     */
    inputQuantity?: number;
    /**
     * Is order of type processing
     */
    isProcessing?: boolean;
    /**
     * Output quantity
     */
    outputQuantity?: number;
    /**
     * Price per unit
     */
    pricePerUnit?: number;
    /**
     * Reject comment
     */
    rejectComment?: string;
    semiProduct?: ApiSemiProduct;
    /**
     * Shipment ID
     */
    shipmentId?: number;
    sourceFacility?: ApiFacility;
    sourceStockOrder?: ApiStockOrder;
    /**
     * Transaction status
     */
    status?: ApiTransaction.StatusEnum;
    targetStockOrder?: ApiStockOrder;
}

/**
 * Namespace for property- and property-value-enumerations of ApiTransaction.
 */
export namespace ApiTransaction {
    /**
     * All properties of ApiTransaction.
     */
    export enum Properties {
        company = 'company',
        /**
         * Currency
         */
        currency = 'currency',
        finalProduct = 'finalProduct',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Initiator user ID
         */
        initiationUserId = 'initiationUserId',
        inputMeasureUnitType = 'inputMeasureUnitType',
        /**
         * Input quantity
         */
        inputQuantity = 'inputQuantity',
        /**
         * Is order of type processing
         */
        isProcessing = 'isProcessing',
        /**
         * Output quantity
         */
        outputQuantity = 'outputQuantity',
        /**
         * Price per unit
         */
        pricePerUnit = 'pricePerUnit',
        /**
         * Reject comment
         */
        rejectComment = 'rejectComment',
        semiProduct = 'semiProduct',
        /**
         * Shipment ID
         */
        shipmentId = 'shipmentId',
        sourceFacility = 'sourceFacility',
        sourceStockOrder = 'sourceStockOrder',
        /**
         * Transaction status
         */
        status = 'status',
        targetStockOrder = 'targetStockOrder'
    }

    /**
     * All possible values of status.
     */
    export enum StatusEnum {
        PENDING = 'PENDING',
        CANCELED = 'CANCELED',
        EXECUTED = 'EXECUTED'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiTransaction',
            vars: [
                {
                    metadata: ApiCompany.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'company',
                    classname: 'ApiTransaction',
                    dataType: 'ApiCompany',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompany'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'currency',
                    classname: 'ApiTransaction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFinalProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'finalProduct',
                    classname: 'ApiTransaction',
                    dataType: 'ApiFinalProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFinalProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiTransaction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'initiationUserId',
                    classname: 'ApiTransaction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiMeasureUnitType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'inputMeasureUnitType',
                    classname: 'ApiTransaction',
                    dataType: 'ApiMeasureUnitType',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiMeasureUnitType'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'inputQuantity',
                    classname: 'ApiTransaction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'isProcessing',
                    classname: 'ApiTransaction',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'outputQuantity',
                    classname: 'ApiTransaction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'pricePerUnit',
                    classname: 'ApiTransaction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'rejectComment',
                    classname: 'ApiTransaction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiSemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'semiProduct',
                    classname: 'ApiTransaction',
                    dataType: 'ApiSemiProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiSemiProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'shipmentId',
                    classname: 'ApiTransaction',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFacility.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'sourceFacility',
                    classname: 'ApiTransaction',
                    dataType: 'ApiFacility',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFacility'
                },
                {
                    metadata: ApiStockOrder.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'sourceStockOrder',
                    classname: 'ApiTransaction',
                    dataType: 'ApiStockOrder',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiStockOrder'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiTransaction.StatusEnum',
                    required: false,
                    name: 'status',
                    classname: 'ApiTransaction',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiStockOrder.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'targetStockOrder',
                    classname: 'ApiTransaction',
                    dataType: 'ApiStockOrder',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiStockOrder'
                },
            ],
            validators: {
                company: [
                ],
                currency: [
                ],
                finalProduct: [
                ],
                id: [
                ],
                initiationUserId: [
                ],
                inputMeasureUnitType: [
                ],
                inputQuantity: [
                ],
                isProcessing: [
                ],
                outputQuantity: [
                ],
                pricePerUnit: [
                ],
                rejectComment: [
                ],
                semiProduct: [
                ],
                shipmentId: [
                ],
                sourceFacility: [
                ],
                sourceStockOrder: [
                ],
                status: [
                ],
                targetStockOrder: [
                ],
            }
        }
    }

  // export const ApiTransactionValidationScheme = {
  //     validators: [],
  //     fields: {
  //               company: {
  //                   validators: []
  //               },
  //               currency: {
  //                   validators: []
  //               },
  //               finalProduct: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               initiationUserId: {
  //                   validators: []
  //               },
  //               inputMeasureUnitType: {
  //                   validators: []
  //               },
  //               inputQuantity: {
  //                   validators: []
  //               },
  //               isProcessing: {
  //                   validators: []
  //               },
  //               outputQuantity: {
  //                   validators: []
  //               },
  //               pricePerUnit: {
  //                   validators: []
  //               },
  //               rejectComment: {
  //                   validators: []
  //               },
  //               semiProduct: {
  //                   validators: []
  //               },
  //               shipmentId: {
  //                   validators: []
  //               },
  //               sourceFacility: {
  //                   validators: []
  //               },
  //               sourceStockOrder: {
  //                   validators: []
  //               },
  //               status: {
  //                   validators: []
  //               },
  //               targetStockOrder: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiTransaction>;


}


