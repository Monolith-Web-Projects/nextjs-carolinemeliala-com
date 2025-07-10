import { NextApiRequest, NextApiResponse } from "next";
import { useState, useEffect } from "react";
import { urlConfig } from "@/lib/urlConfig";

export const useFashionSlides = () => {
    const [fashionSlides, setFashionSlides] = useState([]);
    useEffect(() => {
        const fetchFashionSlides = async () => {
            const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
            const data = await res.json();
            setFashionSlides(data.fashion);
        }
        fetchFashionSlides();
    }, []);
    return fashionSlides;
}

export const useCommercialSlides = () => {
    const [commercialSlides, setCommercialSlides] = useState([]);
    useEffect(() => {
        const fetchCommercialSlides = async () => {
            const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
            const data = await res.json();
            setCommercialSlides(data.commercial);
        }
        fetchCommercialSlides();
    }, []);
    return commercialSlides;
}

export const useEditorialSlides = () => {
    const [editorialSlides, setEditorialSlides] = useState([]);
    useEffect(() => {
        const fetchEditorialSlides = async () => {
            const res = await fetch(`${urlConfig.apiBaseUrl}/slides/`);
            const data = await res.json();
            setEditorialSlides(data.editorial);
        }
        fetchEditorialSlides();
    }, []);
    return editorialSlides;
}









// export const fashionSlides = slides.fashion;
// export const commercialSlides = slides.commercial;
// export const editorialSlides = slides.editorial;