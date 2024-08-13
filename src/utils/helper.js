
 export const FilterData = (SearchText, Allrestaurants) => {
    const FilterData = Allrestaurants.filter((i) =>
        i.info.name.toLowerCase().includes(SearchText.toLowerCase())
    );
    return FilterData;
}





