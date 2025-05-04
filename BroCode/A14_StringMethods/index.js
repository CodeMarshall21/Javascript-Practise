// Input fields
const inputString = document.getElementById("string");
const inputResult = document.getElementById("result");
const inputCharAt = document.getElementById("charat");
const inputIndexOf = document.getElementById("indexof");
const inputLastIndexOf = document.getElementById("lastindexof");
const inputLength = document.getElementById("length");
const inputTrim = document.getElementById("trim");
const inputToUpperCase = document.getElementById("touppercase");
const inputToLowerCase = document.getElementById("tolowercase");
const inputRepeat = document.getElementById("repeat");
const inputStartsWith = document.getElementById("startswith");
const inputEndsWith = document.getElementById("endswith");
const inputReplaceAll1 = document.getElementById("str1");
const inputReplaceAll2 = document.getElementById("str2");
const inputPadStart1 = document.getElementById("padsstr1");
const inputPadStart2 = document.getElementById("padsstr2");
const inputPadEnd1 = document.getElementById("padestr1");
const inputPadEnd2 = document.getElementById("padestr2");
const inputIncludes = document.getElementById("includes");

// Buttons
const btnSubmit = document.getElementById("submit");
const btnCharAt = document.getElementById("charatbtn");
const btnIndexOf = document.getElementById("indexofbtn");
const btnLastIndexOf = document.getElementById("lastindexofbtn");
const btnLength = document.getElementById("lengthbtn");
const btnTrim = document.getElementById("trimbtn");
const btnToUpperCase = document.getElementById("touppercasebtn");
const btnToLowerCase = document.getElementById("tolowercasebtn");
const btnRepeat = document.getElementById("repeatbtn");
const btnStartsWith = document.getElementById("startswithbtn");
const btnEndsWith = document.getElementById("endswithbtn");
const btnReplaceAll = document.getElementById("replaceallbtn");
const btnPadStart = document.getElementById("padstartbtn");
const btnPadEnd = document.getElementById("padendbtn");
const btnIncludes = document.getElementById("includesbtn");

let string = "";

btnSubmit.onclick = function () {
    string = inputString.value;
};

btnCharAt.onclick = function () {
    inputResult.value = string.charAt(Number(inputCharAt.value));
};

btnIndexOf.onclick = function () {
    inputResult.value = string.indexOf(inputIndexOf.value);
};

btnLastIndexOf.onclick = function () {
    inputResult.value = string.lastIndexOf(inputLastIndexOf.value);
};

btnLength.onclick = function () {
    inputResult.value = string.length;
};

btnTrim.onclick = function () {
    inputResult.value = inputTrim.value.trim();
};

btnToUpperCase.onclick = function () {
    inputResult.value = inputToUpperCase.value.toUpperCase();
};

btnToLowerCase.onclick = function () {
    inputResult.value = inputToLowerCase.value.toLowerCase();
};

btnRepeat.onclick = function () {
    inputResult.value = string.repeat(Number(inputRepeat.value));
};

btnStartsWith.onclick = function () {
    inputResult.value = string.startsWith(inputStartsWith.value);
};

btnEndsWith.onclick = function () {
    inputResult.value = string.endsWith(inputEndsWith.value);
};

btnReplaceAll.onclick = function () {
    inputResult.value = string.replaceAll(inputReplaceAll1.value, inputReplaceAll2.value);
};

btnPadStart.onclick = function () {
    inputResult.value = string.padStart(Number(inputPadStart2.value), inputPadStart2.value);
};

btnPadEnd.onclick = function () {
    inputResult.value = inputPadEnd1.value.padEnd(Number(inputPadEnd2.value), inputPadEnd2.value);
};

btnIncludes.onclick = function () {
    inputResult.value = string.includes(inputIncludes.value);
};
