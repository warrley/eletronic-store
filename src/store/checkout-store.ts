import { create } from "zustand";

type States = {
    name: string;
    adress: {
        street: string;
        number: string;
        complement?: string | undefined;
        district: string;
        city: string;
        state: string;
    }
}

type Actions = {
    setName: (name: States["name"]) => void;
    setAdress: (adress: States["adress"]) => void;
}

const initalState: States = {
    name: '',
    adress: {
        street: '',
        number: '',
        complement: '' ,
        district: '',
        city: '',
        state: '',
    }
}

export const userCheckoutStore = create<States & Actions>()(set => ({
    ...initalState,
    setName: (name) => set(state => ({ ...state, name })),
    setAdress: (adress) => set(state => ({ ...state, adress }))
}));