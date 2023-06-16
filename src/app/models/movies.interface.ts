// export interface MoviesI {
//     page: number, 
//     results: string[], 
//     total_pages: number, 
//     total_results: number
//     // "adult": boolean,
//     // "backdrop_path": string,
//     // "genre_ids": number[],
//     // "id": number,
//     // "original_language": string,
//     // "original_title": string,
//     // "overview": string,
//     // "popularity": number,
//     // "poster_path": string,
//     // "release_date": string,
//     // "title": string,
//     // "video": boolean,
//     // "vote_average": number,
//     // "vote_count": number
// }
// export interface MoviesI{
//     results: { [key: string]: any } = [];
// }

// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface MoviesI {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Fi = "fi",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toWelcome(json: string): MoviesI {
        return JSON.parse(json);
    }

    public static welcomeToJson(value: MoviesI): string {
        return JSON.stringify(value);
    }
}
