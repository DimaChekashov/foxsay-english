import { handleError, handleResponse } from "./apiUtils";

const dictionaryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function getWord(word: string) {
    return fetch(dictionaryUrl + word, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((data) => handleResponse(data))
        .catch(handleError);
}