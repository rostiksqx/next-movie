"use client"

import { Film, MovieCardProps } from "@/types";
import { Dialog, DialogContent } from "@/components/ui/dialog"
import axios from "axios";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


async function fetchData() {
    try {
        const response = await axios.get("https://666707d9a2f8516ff7a603de.mockapi.io/api/movie/movie");
        return response.data;
    } catch (error) {
        console.error("Error fetching data");
        return [];
    }
}

export default function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [films, setFilms] = useState<Film[]>([]);
    const [favorites, setFavorites] = useState<Film[]>([]);
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function loadFilms() {
            setIsLoading(true);
            const fetchedFilms = await fetchData();
            setFilms(fetchedFilms);
            setIsLoading(false);
        }
        loadFilms();
    }, []);

    const filteredFilms = films.filter((film) => film.title.toLowerCase().includes(searchTerm.toLowerCase()))

    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    function handleFavorite(film: Film) {
        if (favorites.includes(film)) {
            setFavorites(favorites.filter((fav) => fav.id !== film.id));
        } else {
            setFavorites((prev) => [...prev, film]);
        }
    }


    return (
        <>
            <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold mb-3">Films</h1>
                    <div className="w-full max-w-[300px]">
                        <Input
                            type="text"
                            placeholder="Search films..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="bg-white dark:bg-gray-950"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {(isLoading ? [...Array(12)] : filteredFilms).map((film: Film, index) => (
                        <MovieCard
                            key={index}
                            setSelectedFilm={setSelectedFilm}
                            film={film}
                            loading={isLoading}
                            handleFavorite={handleFavorite}
                            favorites={favorites}
                        />
                    ))}
                </div>
            </div>
            {selectedFilm && (
                <Dialog open onOpenChange={() => setSelectedFilm(null)}>
                    <DialogContent className="bg-white dark:bg-gray-950 rounded-lg shadow-md max-w-2xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img
                                src={selectedFilm.image ?? '/placeholder.svg'}
                                alt={selectedFilm.title}
                                width={600}
                                height={800}
                                className="w-full h-80 md:h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                            />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-2xl font-bold">{selectedFilm.title}</h2>
                                    <Button size="icon" variant="ghost" className="w-8 h-" onClick={() => handleFavorite(selectedFilm)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill={favorites.includes(selectedFilm) ? "currentColor" : "none"}
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                        </svg>
                                    </Button>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">
                                    Directed by {selectedFilm.director} ({selectedFilm.year})
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedFilm.description}</p>
                                <Button variant="outline" className="w-full">
                                    Watch Trailer
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}

function MovieCard({ setSelectedFilm, film, loading, handleFavorite, favorites }: MovieCardProps) {
    return (
        <>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={500}
                    height={300}
                    viewBox="0 0 500 300"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="13" y="12" rx="8" ry="8" width="227" height="157" />
                    <rect x="24" y="183" rx="2" ry="2" width="208" height="9" />
                    <rect x="24" y="205" rx="2" ry="2" width="208" height="9" />
                    <rect x="24" y="226" rx="2" ry="2" width="208" height="9" />
                </ContentLoader>
            ) :
                (
                    <div
                        className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedFilm(film)}
                    >
                        <div className="relative">
                            <img
                                src={film.image ?? '/placeholder.svg'}
                                alt={film.title}
                                width={400}
                                height={600}
                                className="w-full h-60 object-cover"
                            />
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute top-2 right-2 w-8 h-8 bg-white hover:bg-gray-300 transition-colors ease-in-out duration-300"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleFavorite(film)
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill={favorites.includes(film) ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                            </Button>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{film.title ?? 'No title'}</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-4">
                                {film.director ?? 'Unknown'} ({film.year ?? 'N/A'})
                            </p>
                        </div>
                    </div>
                )}
        </>
    );
}