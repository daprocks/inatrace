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
import { ApiFacility } from './apiFacility';
import { ApiStockOrder } from './apiStockOrder';



export interface ApiProductOrder { 
    customer?: ApiCompanyCustomer;
    /**
     * The delivery deadline of this order
     */
    deliveryDeadline?: Date;
    facility?: ApiFacility;
    /**
     * Entity id
     */
    id?: number;
    /**
     * The ordered items(final products) of this order
     */
    items?: Array<ApiStockOrder>;
    /**
     * Require organic coffee
     */
    requiredOrganic?: boolean;
    /**
     * Require only women's coffee
     */
    requiredWomensOnly?: boolean;
    /**
     * Timestamp indicates when product order have been updated
     */
    updateTimestamp?: Date;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProductOrder.
 */
export namespace ApiProductOrder {
    /**
     * All properties of ApiProductOrder.
     */
    export enum Properties {
        customer = 'customer',
        /**
         * The delivery deadline of this order
         */
        deliveryDeadline = 'deliveryDeadline',
        facility = 'facility',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * The ordered items(final products) of this order
         */
        items = 'items',
        /**
         * Require organic coffee
         */
        requiredOrganic = 'requiredOrganic',
        /**
         * Require only women's coffee
         */
        requiredWomensOnly = 'requiredWomensOnly',
        /**
         * Timestamp indicates when product order have been updated
         */
        updateTimestamp = 'updateTimestamp'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProductOrder',
            vars: [
                {
                    metadata: ApiCompanyCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'customer',
                    classname: 'ApiProductOrder',
                    dataType: 'ApiCompanyCustomer',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyCustomer'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'deliveryDeadline',
                    classname: 'ApiProductOrder',
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
                    classname: 'ApiProductOrder',
                    dataType: 'ApiFacility',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFacility'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiProductOrder',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiStockOrder.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'items',
                    classname: 'ApiProductOrder',
                    dataType: 'Array&lt;ApiStockOrder&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiStockOrder'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'requiredOrganic',
                    classname: 'ApiProductOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'requiredWomensOnly',
                    classname: 'ApiProductOrder',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'updateTimestamp',
                    classname: 'ApiProductOrder',
                    dataType: 'Date',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                customer: [
                ],
                deliveryDeadline: [
                ],
                facility: [
                ],
                id: [
                ],
                items: [
                ],
                requiredOrganic: [
                ],
                requiredWomensOnly: [
                ],
                updateTimestamp: [
                ],
            }
        }
    }

  // export const ApiProductOrderValidationScheme = {
  //     validators: [],
  //     fields: {
  //               customer: {
  //                   validators: []
  //               },
  //               deliveryDeadline: {
  //                   validators: []
  //               },
  //               facility: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               items: {
  //                   validators: []
  //               },
  //               requiredOrganic: {
  //                   validators: []
  //               },
  //               requiredWomensOnly: {
  //                   validators: []
  //               },
  //               updateTimestamp: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProductOrder>;


}


