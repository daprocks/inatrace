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





export interface ApiProductLabelCreate { 
    /**
     * Fields
     */
    fields?: Array<string>;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Product id
     */
    productId?: number;
    /**
     * label title
     */
    title?: string;
    /**
     * Product label uuid (for url)
     */
    uuid?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProductLabelCreate.
 */
export namespace ApiProductLabelCreate {
    /**
     * All properties of ApiProductLabelCreate.
     */
    export enum Properties {
        /**
         * Fields
         */
        fields = 'fields',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * Product id
         */
        productId = 'productId',
        /**
         * label title
         */
        title = 'title',
        /**
         * Product label uuid (for url)
         */
        uuid = 'uuid'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProductLabelCreate',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'fields',
                    classname: 'ApiProductLabelCreate',
                    dataType: 'Array&lt;string&gt;',
                    isPrimitiveType: true,
                    isListContainer: true,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiProductLabelCreate',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'productId',
                    classname: 'ApiProductLabelCreate',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'title',
                    classname: 'ApiProductLabelCreate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'uuid',
                    classname: 'ApiProductLabelCreate',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                fields: [
                ],
                id: [
                ],
                productId: [
                ],
                title: [
                ],
                uuid: [
                ],
            }
        }
    }

  // export const ApiProductLabelCreateValidationScheme = {
  //     validators: [],
  //     fields: {
  //               fields: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               productId: {
  //                   validators: []
  //               },
  //               title: {
  //                   validators: []
  //               },
  //               uuid: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProductLabelCreate>;


}


