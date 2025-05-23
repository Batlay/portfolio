module.exports = {
  extends: [
    "stylelint-config-standard-scss", 
  ],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": "^[a-zA-Z0-9]+([_-][a-zA-Z0-9]+)*$",
    "order/properties-order": [
      [
        {
          "groupName": "display",
          "properties": [
            "content",
            "appearance",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "display",
            "flex",
            "flex-direction",
            "flex-basis",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "align-content",
            "align-items",
            "justify-content",
            "justify-items"
          ]
        },
        {
          "groupName": "grid",
          "properties": [
            "grid",
            "grid-area",
            "grid-template",
            "grid-template-areas",
            "grid-template-rows",
            "grid-template-columns",
            "grid-row",
            "grid-row-start",
            "grid-row-end",
            "grid-column",
            "grid-column-start",
            "grid-column-end",
            "grid-auto-rows",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-gap",
            "grid-row-gap",
            "grid-column-gap",
            "gap"
          ]
        },
        {
          "groupName": "dimensions",
          "properties": [
            "width",
            "max-width",
            "min-width",
            "height",
            "max-height",
            "min-height"
          ]
        },
        {
          "groupName": "margin and padding",
          "properties": [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left"
          ]
        },
        {
          "groupName": "border and background",
          "properties": [
            "box-sizing",
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-radius",
            "outline",
            "box-shadow",
            "background",
            "background-color",
            "background-image"
          ]
        },
        {
          "groupName": "font",
          "properties": [
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-weight",
            "line-height",
            "color",
            "text-decoration",
            "font-smoothing"
          ]
        }
      ]],
  },
  
}