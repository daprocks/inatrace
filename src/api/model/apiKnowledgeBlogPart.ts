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



export interface ApiKnowledgeBlogPart { 
    /**
     * Content
     */
    content?: string;
    /**
     * Date
     */
    date?: string;
    /**
     * Documents
     */
    documents?: Array<ApiDocument>;
    /**
     * Abstract (summary)
     */
    summary?: string;
    /**
     * Name
     */
    title?: string;
    /**
     * Youtube URL
     */
    youtubeUrl?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiKnowledgeBlogPart.
 */
export namespace ApiKnowledgeBlogPart {
    /**
     * All properties of ApiKnowledgeBlogPart.
     */
    export enum Properties {
        /**
         * Content
         */
        content = 'content',
        /**
         * Date
         */
        date = 'date',
        /**
         * Documents
         */
        documents = 'documents',
        /**
         * Abstract (summary)
         */
        summary = 'summary',
        /**
         * Name
         */
        title = 'title',
        /**
         * Youtube URL
         */
        youtubeUrl = 'youtubeUrl'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiKnowledgeBlogPart',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'content',
                    classname: 'ApiKnowledgeBlogPart',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'date',
                    classname: 'ApiKnowledgeBlogPart',
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
                    name: 'documents',
                    classname: 'ApiKnowledgeBlogPart',
                    dataType: 'Array&lt;ApiDocument&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'summary',
                    classname: 'ApiKnowledgeBlogPart',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'title',
                    classname: 'ApiKnowledgeBlogPart',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'youtubeUrl',
                    classname: 'ApiKnowledgeBlogPart',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                content: [
                ],
                date: [
                ],
                documents: [
                ],
                summary: [
                ],
                title: [
                ],
                youtubeUrl: [
                ],
            }
        }
    }

  // export const ApiKnowledgeBlogPartValidationScheme = {
  //     validators: [],
  //     fields: {
  //               content: {
  //                   validators: []
  //               },
  //               date: {
  //                   validators: []
  //               },
  //               documents: {
  //                   validators: []
  //               },
  //               summary: {
  //                   validators: []
  //               },
  //               title: {
  //                   validators: []
  //               },
  //               youtubeUrl: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiKnowledgeBlogPart>;


}


