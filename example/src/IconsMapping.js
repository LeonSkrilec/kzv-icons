import React from "react";
import useIcons from "./hooks/useIcons";

export default function IconsMapping() {
  const types = [
    "bivak",
    "cerkev",
    "drugo",
    "dvorec",
    "ferata",
    "grad",
    "hrib",
    "izvir",
    "jama",
    "jezero",
    "koca",
    "kopalisce",
    "muzej-na-prostem",
    "planina",
    "razgledni-stolp",
    "slap",
    "soteska",
    "sup-tocka",
  ];
  const interests = [
    "feratanje",
    "kultura",
    "naravne-lepote",
    "pohodnistvo",
    "poletna-osvezitev",
    "raziskovanje",
    "supanje",
  ];

  const { poiTypesIcons, interestsIcons } = useIcons();

  const iconWrapStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  };
  const iconStyle = {
    marginLeft: 5,
    width: 30,
    height: 30,
    transform: "translateZ(0)",
  };

  return (
    <div>
      <h2>Tipi</h2>
      {types.map((type, index) => {
        const Icon = poiTypesIcons[type];
        return (
          <div className="icon" key={index} style={iconWrapStyle}>
            <span>{type} </span>
            <Icon style={iconStyle} />
          </div>
        );
      })}
      <h2>Interesi</h2>
      {interests.map((interest, i) => {
        const Icon = interestsIcons[interest];
        return (
          <div className="icon" key={i} style={iconWrapStyle}>
            <span>{interest} </span>
            {<Icon style={iconStyle}></Icon>}
          </div>
        );
      })}
    </div>
  );
}
