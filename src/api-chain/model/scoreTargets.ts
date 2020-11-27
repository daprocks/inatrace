/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * coffee-be
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */




/**
 * Defines score targets for an order. Typically an integer counting amount of documents.
 */

export interface ScoreTargets { 
    /**
     * Fairness target score
     */
    fairness: number;
    /**
     * Provenance target score
     */
    provenance: number;
    /**
     * Quality target score
     */
    quality: number;
    /**
     * Quality level (e.g. A+) - TBD enum
     */
    qualityLevel: string;
    /**
     * Required share of women's coffee (0 - 1).
     */
    womenShare: number;
    /**
     * Order target score
     */
    order: number;
    /**
     * Payment target score
     */
    payment: number;
}

/**
 * Namespace for property- and property-value-enumerations of ScoreTargets.
 */
export namespace ScoreTargets {
    /**
     * All properties of ScoreTargets.
     */
    export enum Properties {
        /**
         * Fairness target score
         */
        fairness = 'fairness',
        /**
         * Provenance target score
         */
        provenance = 'provenance',
        /**
         * Quality target score
         */
        quality = 'quality',
        /**
         * Quality level (e.g. A+) - TBD enum
         */
        qualityLevel = 'qualityLevel',
        /**
         * Required share of women's coffee (0 - 1).
         */
        womenShare = 'womenShare',
        /**
         * Order target score
         */
        order = 'order',
        /**
         * Payment target score
         */
        payment = 'payment'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ScoreTargets',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'fairness',
                    classname: 'ScoreTargets',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'provenance',
                    classname: 'ScoreTargets',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'quality',
                    classname: 'ScoreTargets',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'qualityLevel',
                    classname: 'ScoreTargets',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'womenShare',
                    classname: 'ScoreTargets',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'order',
                    classname: 'ScoreTargets',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'payment',
                    classname: 'ScoreTargets',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                fairness: [
                        ['required'],
                ],
                provenance: [
                        ['required'],
                ],
                quality: [
                        ['required'],
                ],
                qualityLevel: [
                        ['required'],
                ],
                womenShare: [
                        ['required'],
                ],
                order: [
                        ['required'],
                ],
                payment: [
                        ['required'],
                ],
            }
        }
    }

  // export const ScoreTargetsValidationScheme = {
  //     validators: [],
  //     fields: {
  //               fairness: {
  //                   validators: []
  //               },
  //               provenance: {
  //                   validators: []
  //               },
  //               quality: {
  //                   validators: []
  //               },
  //               qualityLevel: {
  //                   validators: []
  //               },
  //               womenShare: {
  //                   validators: []
  //               },
  //               order: {
  //                   validators: []
  //               },
  //               payment: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ScoreTargets>;


}


