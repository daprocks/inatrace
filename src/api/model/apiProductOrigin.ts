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


import { ApiLocation } from './apiLocation';



export interface ApiProductOrigin { 
    /**
     * origin - farmer location
     */
    locations?: Array<ApiLocation>;
    /**
     * origin - text and quantity input - Briefly describe where the product or its ingredients are produced
     */
    text?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProductOrigin.
 */
export namespace ApiProductOrigin {
    /**
     * All properties of ApiProductOrigin.
     */
    export enum Properties {
        /**
         * origin - farmer location
         */
        locations = 'locations',
        /**
         * origin - text and quantity input - Briefly describe where the product or its ingredients are produced
         */
        text = 'text'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProductOrigin',
            vars: [
                {
                    metadata: ApiLocation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'locations',
                    classname: 'ApiProductOrigin',
                    dataType: 'Array&lt;ApiLocation&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiLocation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'text',
                    classname: 'ApiProductOrigin',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                locations: [
                ],
                text: [
                ],
            }
        }
    }

  // export const ApiProductOriginValidationScheme = {
  //     validators: [],
  //     fields: {
  //               locations: {
  //                   validators: []
  //               },
  //               text: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProductOrigin>;


}


