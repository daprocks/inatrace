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


import { ApiCompanyBase } from './apiCompanyBase';
import { ApiFacilityLocation } from './apiFacilityLocation';
import { ApiFacilitySemiProduct } from './apiFacilitySemiProduct';
import { ApiFacilityType } from './apiFacilityType';



export interface ApiFacility { 
    company?: ApiCompanyBase;
    facilityLocation?: ApiFacilityLocation;
    /**
     * List of semi products for this facility
     */
    facilitySemiProductList?: Array<ApiFacilitySemiProduct>;
    facilityType?: ApiFacilityType;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Is collection facility
     */
    isCollectionFacility?: boolean;
    /**
     * Is public facility
     */
    isPublic?: boolean;
    /**
     * Facility name
     */
    name?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiFacility.
 */
export namespace ApiFacility {
    /**
     * All properties of ApiFacility.
     */
    export enum Properties {
        company = 'company',
        facilityLocation = 'facilityLocation',
        /**
         * List of semi products for this facility
         */
        facilitySemiProductList = 'facilitySemiProductList',
        facilityType = 'facilityType',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Is collection facility
         */
        isCollectionFacility = 'isCollectionFacility',
        /**
         * Is public facility
         */
        isPublic = 'isPublic',
        /**
         * Facility name
         */
        name = 'name'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiFacility',
            vars: [
                {
                    metadata: ApiCompanyBase.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'company',
                    classname: 'ApiFacility',
                    dataType: 'ApiCompanyBase',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiCompanyBase'
                },
                {
                    metadata: ApiFacilityLocation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'facilityLocation',
                    classname: 'ApiFacility',
                    dataType: 'ApiFacilityLocation',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFacilityLocation'
                },
                {
                    metadata: ApiFacilitySemiProduct.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'facilitySemiProductList',
                    classname: 'ApiFacility',
                    dataType: 'Array&lt;ApiFacilitySemiProduct&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiFacilitySemiProduct'
                },
                {
                    metadata: ApiFacilityType.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'facilityType',
                    classname: 'ApiFacility',
                    dataType: 'ApiFacilityType',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiFacilityType'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiFacility',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'isCollectionFacility',
                    classname: 'ApiFacility',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'isPublic',
                    classname: 'ApiFacility',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiFacility',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                company: [
                ],
                facilityLocation: [
                ],
                facilitySemiProductList: [
                ],
                facilityType: [
                ],
                id: [
                ],
                isCollectionFacility: [
                ],
                isPublic: [
                ],
                name: [
                ],
            }
        }
    }

  // export const ApiFacilityValidationScheme = {
  //     validators: [],
  //     fields: {
  //               company: {
  //                   validators: []
  //               },
  //               facilityLocation: {
  //                   validators: []
  //               },
  //               facilitySemiProductList: {
  //                   validators: []
  //               },
  //               facilityType: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               isCollectionFacility: {
  //                   validators: []
  //               },
  //               isPublic: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiFacility>;


}


