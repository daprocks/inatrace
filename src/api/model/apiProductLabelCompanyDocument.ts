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


import { ApiDocument } from './apiDocument';



export interface ApiProductLabelCompanyDocument { 
    active?: boolean;
    /**
     * document category
     */
    category?: ApiProductLabelCompanyDocument.CategoryEnum;
    /**
     * description of this document
     */
    description?: string;
    document?: ApiDocument;
    /**
     * Entity id
     */
    id?: number;
    /**
     * link
     */
    link?: string;
    /**
     * name
     */
    name?: string;
    /**
     * quote of this document
     */
    quote?: string;
    /**
     * type of the document (link, file)
     */
    type?: ApiProductLabelCompanyDocument.TypeEnum;
}

/**
 * Namespace for property- and property-value-enumerations of ApiProductLabelCompanyDocument.
 */
export namespace ApiProductLabelCompanyDocument {
    /**
     * All properties of ApiProductLabelCompanyDocument.
     */
    export enum Properties {
        active = 'active',
        /**
         * document category
         */
        category = 'category',
        /**
         * description of this document
         */
        description = 'description',
        document = 'document',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * link
         */
        link = 'link',
        /**
         * name
         */
        name = 'name',
        /**
         * quote of this document
         */
        quote = 'quote',
        /**
         * type of the document (link, file)
         */
        type = 'type'
    }

    /**
     * All possible values of category.
     */
    export enum CategoryEnum {
        VIDEO = 'VIDEO',
        PRODUCTIONRECORD = 'PRODUCTION_RECORD',
        MEETTHEFARMER = 'MEET_THE_FARMER'
    }

    /**
     * All possible values of type.
     */
    export enum TypeEnum {
        LINK = 'LINK',
        FILE = 'FILE'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiProductLabelCompanyDocument',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'active',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProductLabelCompanyDocument.CategoryEnum',
                    required: false,
                    name: 'category',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'description',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'document',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'ApiDocument',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'link',
                    classname: 'ApiProductLabelCompanyDocument',
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
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'quote',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiProductLabelCompanyDocument.TypeEnum',
                    required: false,
                    name: 'type',
                    classname: 'ApiProductLabelCompanyDocument',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                active: [
                ],
                category: [
                ],
                description: [
                ],
                document: [
                ],
                id: [
                ],
                link: [
                ],
                name: [
                ],
                quote: [
                ],
                type: [
                ],
            }
        }
    }

  // export const ApiProductLabelCompanyDocumentValidationScheme = {
  //     validators: [],
  //     fields: {
  //               active: {
  //                   validators: []
  //               },
  //               category: {
  //                   validators: []
  //               },
  //               description: {
  //                   validators: []
  //               },
  //               document: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               link: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               quote: {
  //                   validators: []
  //               },
  //               type: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiProductLabelCompanyDocument>;


}


