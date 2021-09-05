export const BaseURL = "http://localhost:82/"

export const LangDict = {
  "py": "Python3",
  "cpp": "C++",
  "default": "Python3"
}

export const ToLangName = (name) => {
  return LangDict.hasOwnProperty(name) ? LangDict[name] : LangDict["default"];
}