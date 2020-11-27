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





export interface ApiGlobalSettingsValue { 
    /**
     * Can be accessed via public api
     */
    isPublic?: boolean;
    /**
     * Global settings value
     */
    value?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiGlobalSettingsValue.
 */
export namespace ApiGlobalSettingsValue {
    /**
     * All properties of ApiGlobalSettingsValue.
     */
    export enum Properties {
        /**
         * Can be accessed via public api
         */
        isPublic = 'isPublic',
        /**
         * Global settings value
         */
        value = 'value'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiGlobalSettingsValue',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'isPublic',
                    classname: 'ApiGlobalSettingsValue',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'value',
                    classname: 'ApiGlobalSettingsValue',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                isPublic: [
                ],
                value: [
                ],
            }
        }
    }

  // export const ApiGlobalSettingsValueValidationScheme = {
  //     validators: [],
  //     fields: {
  //               isPublic: {
  //                   validators: []
  //               },
  //               value: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiGlobalSettingsValue>;


}


