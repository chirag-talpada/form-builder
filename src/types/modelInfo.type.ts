import {  Control_Type } from "../constant";

export type ModelInfo={
    control:Control_Type,
    control_desc:({
        type: Control_Type;
        attributes: ({
            name: string;
            desc?: undefined;
        } | {
            name: string;
            desc: string;
        })[];
    } | {
        type: Control_Type;
        attributes: {
            name: string;
            default: boolean;
        }[];
    })[]
}