import React, { useEffect, useState } from "react";

const RenderSelectBox = ({langs}) => {
  const [selectedLanguage,setSelectedLanguage] = useState("");
  const [dateTime,setDateTime] = useState("");

  useEffect(() => {
    if(selectedLanguage){
      let date = new Intl.DateTimeFormat(selectedLanguage, {

            year: 'numeric', month: 'numeric', day: 'numeric',

            hour: 'numeric', minute: 'numeric', second: 'numeric'

      }).format().toString();
      setDateTime(date)
    }
  },[selectedLanguage])
  return (
    <>
        <select className="selectbox" onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option key={1} value={""}>{"Pleace select Language..."}</option>
          {langs && langs.length > 0 && langs.map((lang) => {
              return(
                <option key={lang} value={lang}>{lang}</option>
              )
          })}
        </select>
        <div className="result">
        {selectedLanguage ? selectedLanguage : "Pleace select Language..."}
        </div>
        
        <div className="result">
        {dateTime ? dateTime : ""}
        </div>
    </>
  );
};

export default RenderSelectBox;