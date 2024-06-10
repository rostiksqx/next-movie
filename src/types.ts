export type Film = {
    id: number;
    title: string;
    director: string;
    year: number;
    description: string;
    image: string;
};

export interface MovieCardProps {
    setSelectedFilm: (film: Film) => void;
    film: Film;
    loading: boolean;
    handleFavorite: (film: Film) => void;
    favorites: Film[];
}