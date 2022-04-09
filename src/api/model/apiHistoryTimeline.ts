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


import { ApiHistoryTimelineItem } from './apiHistoryTimelineItem';



export interface ApiHistoryTimeline { 
    /**
     * The items in the history timeline
     */
    items?: Array<ApiHistoryTimelineItem>;
    /**
     * The items in the journey of history timeline
     */
    journeyMarkers?: Array<ApiHistoryTimelineItem>;
}

/**
 * Namespace for property- and property-value-enumerations of ApiHistoryTimeline.
 */
export namespace ApiHistoryTimeline {
    /**
     * All properties of ApiHistoryTimeline.
     */
    export enum Properties {
        /**
         * The items in the history timeline
         */
        items = 'items',
        /**
         * The items in the journey of history timeline
         */
        journeyMarkers = 'journeyMarkers'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiHistoryTimeline',
            vars: [
                {
                    metadata: ApiHistoryTimelineItem.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'items',
                    classname: 'ApiHistoryTimeline',
                    dataType: 'Array&lt;ApiHistoryTimelineItem&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiHistoryTimelineItem'
                },
                {
                    metadata: ApiHistoryTimelineItem.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'journeyMarkers',
                    classname: 'ApiHistoryTimeline',
                    dataType: 'Array&lt;ApiHistoryTimelineItem&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiHistoryTimelineItem'
                },
            ],
            validators: {
                items: [
                ],
                journeyMarkers: [
                ],
            }
        }
    }

  // export const ApiHistoryTimelineValidationScheme = {
  //     validators: [],
  //     fields: {
  //               items: {
  //                   validators: []
  //               },
  //               journeyMarkers: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiHistoryTimeline>;


}


