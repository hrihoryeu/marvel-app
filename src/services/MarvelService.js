import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp()

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=397d67250d0c0adc5966f621f65f7646';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset) => {
        const response = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)
        return response.data.results.map(_transformComic)
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 197)}...` : 'There is no information about this character.',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComic = (com) => {
        return {
            id: com.id,
            title: com.title,
            description: com.description ? `${com.description.slice(0, 197)}...` : 'There is no information about this character.',
            thumbnail: com.thumbnail.path + '.' + com.thumbnail.extension,
            price: com.prices[0].price ? com.prices[0].price : 'NOT AVAILABLE'
        }
    }

    return { loading, error, getAllCharacters, getCharacter, getAllComics, clearError }
}

export default useMarvelService;