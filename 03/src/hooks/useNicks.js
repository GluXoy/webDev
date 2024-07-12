import {useMemo} from "react";

export const useNicks = (nickNames, query) => {

    const searchedNicks = useMemo(() => {
        return nickNames.filter(nick => nick.toLowerCase().includes(query))
    }, [query, nickNames])

    return searchedNicks;
}