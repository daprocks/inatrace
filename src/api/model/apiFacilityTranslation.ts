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





export interface ApiFacilityTranslation { 
    /**
     * Facility language
     */
    language?: ApiFacilityTranslation.LanguageEnum;
    /**
     * Facility name
     */
    name?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiFacilityTranslation.
 */
export namespace ApiFacilityTranslation {
    /**
     * All properties of ApiFacilityTranslation.
     */
    export enum Properties {
        /**
         * Facility language
         */
        language = 'language',
        /**
         * Facility name
         */
        name = 'name'
    }

    /**
     * All possible values of language.
     */
    export enum LanguageEnum {
        EN = 'EN',
        DE = 'DE',
        RW = 'RW',
        ES = 'ES'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiFacilityTranslation',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiFacilityTranslation.LanguageEnum',
                    required: false,
                    name: 'language',
                    classname: 'ApiFacilityTranslation',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiFacilityTranslation',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                language: [
                ],
                name: [
                ],
            }
        }
    }

  // export const ApiFacilityTranslationValidationScheme = {
  //     validators: [],
  //     fields: {
  //               language: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiFacilityTranslation>;


}


