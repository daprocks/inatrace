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


import { ApiActivityProof } from './apiActivityProof';
import { ApiCompany } from './apiCompany';
import { ApiFacility } from './apiFacility';
import { ApiGradeAbbreviation } from './apiGradeAbbreviation';
import { ApiMeasureUnitType } from './apiMeasureUnitType';
import { ApiSemiProduct } from './apiSemiProduct';
import { ApiStockOrderLocation } from './apiStockOrderLocation';
import { ApiUser } from './apiUser';
import { ApiUserCustomer } from './apiUserCustomer';



export interface ApiStockOrder { 
    /**
     * Activity proofs
     */
    activityProofs?: Array<ApiActivityProof>;
    available?: boolean;
    /**
     * Available quantity
     */
    availableQuantity?: number;
    /**
     * Balance
     */
    balance?: number;
    company?: ApiCompany;
    /**
     * Cost
     */
    cost?: number;
    createdBy?: ApiUser;
    /**
     * ID of the user who has created the stock order
     */
    creatorId?: number;
    /**
     * Currency
     */
    currency?: string;
    /**
     * Delivery time
     */
    deliveryTime?: Date;
    facility?: ApiFacility;
    /**
     * Fulfilled quantity
     */
    fulfilledQuantity?: number;
    gradeAbbreviation?: ApiGradeAbbreviation;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Stock order identifier
     */
    identifier?: string;
    /**
     * Internal LOT number
     */
    internalLotNumber?: string;
    /**
     * Is stock available
     */
    isAvailable?: boolean;
    /**
     * Is order of type PURCHASE_ORDER
     */
    isPurchaseOrder?: boolean;
    /**
     * LOT number
     */
    lotNumber?: string;
    measureUnitType?: ApiMeasureUnitType;
    /**
     * Order type
     */
    orderType?: ApiStockOrder.OrderTypeEnum;
    /**
     * Paid
     */
    paid?: number;
    /**
     * Preferred way of payment
     */
    preferredWayOfPayment?: ApiStockOrder.PreferredWayOfPaymentEnum;
    /**
     * Price per unit
     */
    pricePerUnit?: number;
    producerUserCustomer?: ApiUserCustomer;
    /**
     * Production date
     */
    productionDate?: Date;
    productionLocation?: ApiStockOrderLocation;
    purchaseOrder?: boolean;
    representativeOfProducerUserCustomer?: ApiUserCustomer;
    semiProduct?: ApiSemiProduct;
    /**
     * Total quantity
     */
    totalQuantity?: number;
    /**
     * Timestamp indicates when stock order have been updated
     */
    updateTimestamp?: Date;
    updatedBy?: ApiUser;
    /**
     * Is women share
     */
    womenShare?: boolean;
}

/**
 * Namespace for property- and property-value-enumerations of ApiStockOrder.
 */
export namespace ApiStockOrder {
    /**
     * All properties of ApiStockOrder.
     */
    export enum Properties {
        /**
         * Activity proofs
         */
        activityProofs = 'activityProofs',
        available = 'available',
        /**
         * Available quantity
         */
        availableQuantity = 'availableQuantity',
        /**
         * Balance
         */
        balance = 'balance',
        company = 'company',
        /**
         * Cost
         */
        cost = 'cost',
        createdBy = 'createdBy',
        /**
         * ID of the user who has created the stock order
         */
        creatorId = 'creatorId',
        /**
         * Currency
         */
        currency = 'currency',
        /**
         * Delivery time
         */
        deliveryTime = 'deliveryTime',
        facility = 'facility',
        /**
         * Fulfilled quantity
         */
        fulfilledQuantity = 'fulfilledQuantity',
        gradeAbbreviation = 'gradeAbbreviation',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Stock order identifier
         */
        identifier = 'identifier',
        /**
         * Internal LOT number
         */
        internalLotNumber = 'internalLotNumber',
        /**
         * Is stock available
         */
        isAvailable = 'isAvailable',
        /**
         * Is order of type PURCHASE_ORDER
         */
        isPurchaseOrder = 'isPurchaseOrder',
        /**
         * LOT number
         */
        lotNumber = 'lotNumber',
        measureUnitType = 'measureUnitType',
        /**
         * Order type
         */
        orderType = 'orderType',
        /**
         * Paid
         */
        paid = 'paid',
        /**
         * Preferred way of payment
         */
        preferredWayOfPayment = 'preferredWayOfPayment',
        /**
         * Price per unit
         */
        pricePerUnit = 'pricePerUnit',
        producerUserCustomer = 'producerUserCustomer',
        /**
         * Production date
         */
        productionDate = 'productionDate',
        productionLocation = 'productionLocation',
        purchaseOrder = 'purchaseOrder',
        representativeOfProducerUserCustomer = 'representativeOfProducerUserCustomer',
        semiProduct = 'semiProduct',
        /**
         * Total quantity
         */
        totalQuantity = 'totalQuantity',
        /**
         * Timestamp indicates when stock order have been updated
         */
        updateTimestamp = 'updateTimestamp',
        updatedBy = 'updatedBy',
        /**
         * Is women share
         */
        womenShare = 'womenShare'
    }

    /**
     * All possible values of orderType.
     */
    export enum OrderTypeEnum {
        PURCHASEORDER = 'PURCHASE_ORDER',
        PROCESSINGORDER = 'PROCESSING_ORDER',
        SALESORDER = 'SALES_ORDER',
        GENERALORDER = 'GENERAL_ORDER',
        TRANSFERORDER = 'TRANSFER_ORDER'
    }

    /**
     * All possible values of preferredWayOfPayment.
     */
    export enum PreferredWayOfPaymentEnum {
        CASH = 'CASH',
        CASHVIACOLLECTOR = 'CASH_VIA_COLLECTOR',
        BANKTRANSFER = 'BANK_TRANSFER',
        CHEQUE = 'CHEQUE',
        OFFSETTING = 'OFFSETTING',
        UNKNOWN = 'UNKNOWN'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiStockOrder',
            vars: [
                {
                    metadata: ApiActivityProof.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'activityProofs',
                    classname: 'ApiStockOrder',
                    dataType: 'Array&lt;ApiActivityProof&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiActivityProof'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'available',
                    classname: 'ApiStockOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'availableQuantity',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'balance',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiCompany.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'company',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiCompany',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompany'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'cost',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUser.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'createdBy',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiUser',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUser'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'creatorId',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'currency',
                    classname: 'ApiStockOrder',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'deliveryTime',
                    classname: 'ApiStockOrder',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiFacility.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'facility',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiFacility',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFacility'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'fulfilledQuantity',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiGradeAbbreviation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'gradeAbbreviation',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiGradeAbbreviation',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiGradeAbbreviation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'identifier',
                    classname: 'ApiStockOrder',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'internalLotNumber',
                    classname: 'ApiStockOrder',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'isAvailable',
                    classname: 'ApiStockOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'isPurchaseOrder',
                    classname: 'ApiStockOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'lotNumber',
                    classname: 'ApiStockOrder',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiMeasureUnitType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'measureUnitType',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiMeasureUnitType',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiMeasureUnitType'
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiStockOrder.OrderTypeEnum',
                    required: false,
                    name: 'orderType',
                    classname: 'ApiStockOrder',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'paid',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiStockOrder.PreferredWayOfPaymentEnum',
                    required: false,
                    name: 'preferredWayOfPayment',
                    classname: 'ApiStockOrder',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'pricePerUnit',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUserCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'producerUserCustomer',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiUserCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserCustomer'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'productionDate',
                    classname: 'ApiStockOrder',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiStockOrderLocation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'productionLocation',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiStockOrderLocation',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiStockOrderLocation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'purchaseOrder',
                    classname: 'ApiStockOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUserCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'representativeOfProducerUserCustomer',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiUserCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserCustomer'
                },
                {
                    metadata: ApiSemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'semiProduct',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiSemiProduct',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiSemiProduct'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'totalQuantity',
                    classname: 'ApiStockOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'updateTimestamp',
                    classname: 'ApiStockOrder',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUser.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'updatedBy',
                    classname: 'ApiStockOrder',
                    dataType: 'ApiUser',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUser'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'womenShare',
                    classname: 'ApiStockOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                activityProofs: [
                ],
                available: [
                ],
                availableQuantity: [
                ],
                balance: [
                ],
                company: [
                ],
                cost: [
                ],
                createdBy: [
                ],
                creatorId: [
                ],
                currency: [
                ],
                deliveryTime: [
                ],
                facility: [
                ],
                fulfilledQuantity: [
                ],
                gradeAbbreviation: [
                ],
                id: [
                ],
                identifier: [
                ],
                internalLotNumber: [
                ],
                isAvailable: [
                ],
                isPurchaseOrder: [
                ],
                lotNumber: [
                ],
                measureUnitType: [
                ],
                orderType: [
                ],
                paid: [
                ],
                preferredWayOfPayment: [
                ],
                pricePerUnit: [
                ],
                producerUserCustomer: [
                ],
                productionDate: [
                ],
                productionLocation: [
                ],
                purchaseOrder: [
                ],
                representativeOfProducerUserCustomer: [
                ],
                semiProduct: [
                ],
                totalQuantity: [
                ],
                updateTimestamp: [
                ],
                updatedBy: [
                ],
                womenShare: [
                ],
            }
        }
    }

  // export const ApiStockOrderValidationScheme = {
  //     validators: [],
  //     fields: {
  //               activityProofs: {
  //                   validators: []
  //               },
  //               available: {
  //                   validators: []
  //               },
  //               availableQuantity: {
  //                   validators: []
  //               },
  //               balance: {
  //                   validators: []
  //               },
  //               company: {
  //                   validators: []
  //               },
  //               cost: {
  //                   validators: []
  //               },
  //               createdBy: {
  //                   validators: []
  //               },
  //               creatorId: {
  //                   validators: []
  //               },
  //               currency: {
  //                   validators: []
  //               },
  //               deliveryTime: {
  //                   validators: []
  //               },
  //               facility: {
  //                   validators: []
  //               },
  //               fulfilledQuantity: {
  //                   validators: []
  //               },
  //               gradeAbbreviation: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               identifier: {
  //                   validators: []
  //               },
  //               internalLotNumber: {
  //                   validators: []
  //               },
  //               isAvailable: {
  //                   validators: []
  //               },
  //               isPurchaseOrder: {
  //                   validators: []
  //               },
  //               lotNumber: {
  //                   validators: []
  //               },
  //               measureUnitType: {
  //                   validators: []
  //               },
  //               orderType: {
  //                   validators: []
  //               },
  //               paid: {
  //                   validators: []
  //               },
  //               preferredWayOfPayment: {
  //                   validators: []
  //               },
  //               pricePerUnit: {
  //                   validators: []
  //               },
  //               producerUserCustomer: {
  //                   validators: []
  //               },
  //               productionDate: {
  //                   validators: []
  //               },
  //               productionLocation: {
  //                   validators: []
  //               },
  //               purchaseOrder: {
  //                   validators: []
  //               },
  //               representativeOfProducerUserCustomer: {
  //                   validators: []
  //               },
  //               semiProduct: {
  //                   validators: []
  //               },
  //               totalQuantity: {
  //                   validators: []
  //               },
  //               updateTimestamp: {
  //                   validators: []
  //               },
  //               updatedBy: {
  //                   validators: []
  //               },
  //               womenShare: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiStockOrder>;


}


