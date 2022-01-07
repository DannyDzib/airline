import * as types from './types';
import { getApiCharactersApi, getApiCharactersById } from './action-creator';

export const getCharacters = () => async (dispach) => {
    dispach({
        type: types.LOADING
    })
    const response = await getApiCharactersApi();
    if (response.results) {
        dispach({
            type: types.GET_CHARACTERS_SUCCESS,
            payload: response.results
        })
    }
}

export const getCharacterByIdAPI = (id) => async (dispach) => {
    dispach({
        type: types.LOADING
    })
    const response = await getApiCharactersById(id);
    if (response) {
        dispach({
            type: types.GET_CHARACTER_SUCCESS,
            payload: response
        })
    }
}

export const getCharacterById = (id) => async (dispach) => {
    dispach({
        type: types.LOADING
    })
    dispach({
        type: types.GET_CHARACTER_LOCAL_SUCCESS,
        payload: id
    })
}

export const editCharacter = (character) => async (dispach) => {
    dispach({
        type: types.LOADING
    })
    dispach({
        type: types.EDIT_CHARACTER_SUCCES,
        payload: character
    })
}

export const addCharacter = (character) => async (dispach) => {
    dispach({
        type: types.LOADING
    })
    dispach({
        type: types.ADD_CHARACTER_SUCCES,
        payload: character
    })
}

export const deleteCharacter = (id) => async (dispach) => {
    console.log(id)
    dispach({
        type: types.DELETE_CHARACTER_SUCCES,
        payload: id
    })
}