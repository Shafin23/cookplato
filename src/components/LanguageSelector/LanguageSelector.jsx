import roman from "../../../public/assets/images/romanien flag.png";
import american from "../../../public/assets/images/american flag.png";
import Select from "react-select";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languageChange = (selectedOption) => {
    const selectedLanguage = selectedOption.value;
    i18n.changeLanguage(selectedLanguage);
    console.log("selected language", selectedOption);
  };

  const options = [
    {
      value: "ro",
      label: (
        <div className="flex space-x-2">
          <img className="w-8 rounded-sm" src={roman} alt="roman" />
          <span className="font-semibold text-gray-600">ro</span>
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div className="flex space-x-2">
          <img className="w-8 rounded-sm" src={american} alt="america" />
          <span className="font-semibold text-gray-600">en</span>
        </div>
      ),
    },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isSelected ? "#FFF1B2" : "#FFFAEA", // Change border color when selected
      "&:hover": {
        borderColor: state.isSelected ? "#FFFAEA" : "#FFFAEA",
      },
      padding: "-5px",
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #fffaea",
      color: state.isSelected ? "#333" : "#666",
      backgroundColor: state.isSelected ? "#f0f0f0" : "transparent",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#333", // Change color of the arrow here
      marginLeft: "-15px", // Adjust the margin to close the gap
    }),
    indicatorSeparator: () => ({
      display: "none", // Remove the line that separates text and the arrow
    }),
  };

  return (
    <>
      <Select
        onChange={languageChange}
        options={options}
        defaultValue={options[0]}
        styles={customStyles}
      />
    </>
  );
};
