import React from "react";
import { useTranslation } from "react-i18next";
const SearchInput = ({ city, onCityChange, onSearch }) => {
    const { t } = useTranslation("home");
    return (
        <div className="Search">
            <input
                type="text"
                placeholder={t("search_placeholder")}
                value={city}
                onChange={onCityChange}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={onSearch}></i>
        </div>
    );
};

export default SearchInput;
