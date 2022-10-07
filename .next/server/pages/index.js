(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"root": "Home_root__wfVGa",
	"input": "Home_input__ZarWZ",
	"form": "Home_form__k2xMg",
	"description": "Home_description__41Owk",
	"name": "Home_name__Je8n6",
	"submit": "Home_submit__TkaQg",
	"characters_container": "Home_characters_container__JoO_O",
	"title": "Home_title__T09hD",
	"error": "Home_error__m2kA6"
};


/***/ }),

/***/ 179:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "character-item_item__FPEbg",
	"name": "character-item_name__2qvFD",
	"description": "character-item_description__N9FEb",
	"date": "character-item_date__zkXvu"
};


/***/ }),

/***/ 693:
/***/ ((module) => {

// Exports
module.exports = {
	"list_container": "character-list_list_container__ALNrt"
};


/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/character-item.module.css
var character_item_module = __webpack_require__(179);
var character_item_module_default = /*#__PURE__*/__webpack_require__.n(character_item_module);
;// CONCATENATED MODULE: ./components/character-item.tsx



const CharacterItem = ({ character  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (character_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (character_item_module_default()).description,
                children: character.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (character_item_module_default()).name,
                        children: character.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (character_item_module_default()).date,
                        children: new Date(character.date).toDateString()
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/character-list.module.css
var character_list_module = __webpack_require__(693);
var character_list_module_default = /*#__PURE__*/__webpack_require__.n(character_list_module);
;// CONCATENATED MODULE: ./components/character-list.tsx



const CharacterList = ({ characters  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (character_list_module_default()).list_container,
        children: characters.sort((a, b)=>Number(new Date(b.date)) - Number(new Date(a.date))).map((character, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CharacterItem, {
                character: character
            }, index + character.name))
    });
};

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.tsx






const domain = process.env.DOMAIN || "https://create-and-display-digital-characters.vercel.app/";
const Home = ({ characters  })=>{
    const { 0: characterDescription , 1: setCharacterDescription  } = (0,external_react_.useState)("");
    const { 0: characterName , 1: setCharacterName  } = (0,external_react_.useState)("");
    // const [characters, setCharacters] = useState<Character[]>([]);
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { 0: characterList , 1: setCharacterList  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setCharacterList(characters);
    }, []);
    const submitCharacter = async (event)=>{
        event.preventDefault();
        if (characterName === "" && characterDescription !== "") {
            setError("Please enter your character name.");
        } else if (characterDescription === "" && characterName !== "") {
            setError("Please enter a description of your character.");
        } else if (characterName === "" && characterDescription === "") {
            setError("Please enter your character details.");
        } else {
            try {
                const response = await fetch(`/api/characters/new`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: characterName,
                        description: characterDescription
                    })
                });
                const data = await response.json();
                setCharacterList([
                    data.character,
                    ...characterList
                ]);
                setCharacterDescription("");
                setCharacterName("");
                setError("");
            } catch (error) {
                setError("Error saving new character. Please try again.");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Characters"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "An application for adding Avatar ID."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).root,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 300,
                        height: 300,
                        src: "/images/—Pngtree—color highlights abstract light effects_5528945.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (Home_module_default()).title,
                        children: "Digital Characters"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).input,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (Home_module_default()).heading,
                                        children: "Add your character identity. Be creative."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: (Home_module_default()).form,
                                        onSubmit: (event)=>submitCharacter(event),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: (Home_module_default()).name,
                                                placeholder: "Your name goes here...",
                                                value: characterName,
                                                onChange: (event)=>setCharacterName(event.target.value)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                className: (Home_module_default()).description,
                                                placeholder: "Description of your character (e.g., I turn rain into wine. Stars into dust. Sun into lava.)",
                                                value: characterDescription,
                                                onChange: (event)=>setCharacterDescription(event.target.value)
                                            }),
                                            error !== "" && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (Home_module_default()).error,
                                                children: error
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: (Home_module_default()).submit,
                                                children: "Create"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).characters_container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Characters in realm"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CharacterList, {
                                        characters: characterList
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps() {
    const response = await fetch(`${domain}/api/characters`);
    const data = await response.json();
    return {
        props: {
            characters: data ? data.characters : []
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(36)));
module.exports = __webpack_exports__;

})();