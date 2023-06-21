export namespace MoviesInterface{
    export interface Result {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string; // originalLenguaje mantener consistencia
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }
      export interface MoviesResponse {
        page: number;
        results: Result[];
        total_pages: number;
        total_results: number;
      }
}
