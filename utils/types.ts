export interface ResponseFunctions {
    GET?: Function;
    POST?: Function;
    DELETE?: Function;
    PUT?: Function;
}

export interface Character {
    name: string;
    description: string;
    date?: Date;
}