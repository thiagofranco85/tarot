import type { DeckType } from "../../types/DeckType";


interface PlayLenormandProps {
    question: string;
    subjects: string[];
    cards: string[];
}

type PlayTarotProps = PlayLenormandProps;

const API_URL = import.meta.env.VITE_API_URL;


export async function getFormatedSubjects() {
    const res = await fetch(`${API_URL}/formated-subjects`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        throw new Error(`Erro HTTP ${res.status}`);
    }

    const result = await res.json(); // precisa do await
    return result.data;
}



export async function getDeckCards(deckType: DeckType) {
    const res = await fetch(`${API_URL}/${deckType}-cards`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        throw new Error(`Erro HTTP ${res.status}`);
    }

    const result = await res.json(); // precisa do await
    return result.data;
}

export async function playLenormand({ question, subjects, cards }: PlayLenormandProps) {

    const res = await fetch(`${API_URL}/play/lenormand`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            question,
            subjects,
            cards
        })
    })

    const data = await res.json();

    return data
}


export async function playTarot({ question, subjects, cards }: PlayTarotProps) {

    const res = await fetch(`${API_URL}/play/tarot`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            question,
            subjects,
            cards
        })
    })

    const data = await res.json();

    return data
}