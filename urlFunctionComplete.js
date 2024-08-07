
const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, parameter) {
    let urlObj = new URL(url);
    const parameterValue = urlObj.searchParams.get(parameter);
    return parameterValue;
}


const utm_mediumValue = getUrlParameterValue(url, "utm_medium");
const utm_campaignValue = getUrlParameterValue(url, "utm_campaign");

console.log(utm_mediumValue); 
console.log(utm_campaignValue); 
