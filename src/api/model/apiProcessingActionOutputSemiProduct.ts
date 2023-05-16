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


import { ApiMeasureUnitType } from './apiMeasureUnitType';
import { ApiSemiProductTranslation } from './apiSemiProductTranslation';



export interface ApiProcessingActionOutputSemiProduct { 
    buyable?: boolean;
    description?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Maximum output weight when repacked outputs
     */
    maxOutputWeight?: number;
    measurementUnitType?: ApiMeasureUnitType;
    name?: string;
    /**
     * Repacked outputs of this output semi-product
     */
    repackedOutput?: boolean;
    sku?: boolean;
    skuendCustomer?: boolean;
    translations?: Array<ApiSemiProductTranslation>;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProcessingActionOutputSemiProduct.
 */
export namespace ApiProcessingActionOutputSemiProduct {
    /**
     * All properties of ApiProcessingActionOutputSemiProduct.
     */
    export enum Properties {
        buyable = 'buyable',
        description = 'description',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Maximum output weight when repacked outputs
         */
        maxOutputWeight = 'maxOutputWeight',
        measurementUnitType = 'measurementUnitType',
        name = 'name',
        /**
         * Repacked outputs of this output semi-product
         */
        repackedOutput = 'repackedOutput',
        sku = 'sku',
        skuendCustomer = 'skuendCustomer',
        translations = 'translations'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProcessingActionOutputSemiProduct',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'buyable',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'maxOutputWeight',
                    classname: 'ApiProcessingActionOutputSemiProduct',
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
                    name: 'measurementUnitType',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'ApiMeasureUnitType',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiMeasureUnitType'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'repackedOutput',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'sku',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'skuendCustomer',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiSemiProductTranslation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'translations',
                    classname: 'ApiProcessingActionOutputSemiProduct',
                    dataType: 'Array&lt;ApiSemiProductTranslation&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiSemiProductTranslation'
                },
            ],
            validators: {
                buyable: [
                ],
                description: [
                ],
                id: [
                ],
                maxOutputWeight: [
                ],
                measurementUnitType: [
                ],
                name: [
                ],
                repackedOutput: [
                ],
                sku: [
                ],
                skuendCustomer: [
                ],
                translations: [
                ],
            }
        }
    }

  // export const ApiProcessingActionOutputSemiProductValidationScheme = {
  //     validators: [],
  //     fields: {
  //               buyable: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               maxOutputWeight: {
  //                   validators: []
  //               },
  //               measurementUnitType: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               repackedOutput: {
  //                   validators: []
  //               },
  //               sku: {
  //                   validators: []
  //               },
  //               skuendCustomer: {
  //                   validators: []
  //               },
  //               translations: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProcessingActionOutputSemiProduct>;


}


