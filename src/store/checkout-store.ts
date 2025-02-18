import { create } from "zustand";

type States = {
    name: string;
    address: {
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
    setAddress: (adress: States["address"]) => void;
}

const initalState: States = {
    name: '',
    address: {
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
    setAddress: (adress) => set(state => ({ ...state, adress }))
}));