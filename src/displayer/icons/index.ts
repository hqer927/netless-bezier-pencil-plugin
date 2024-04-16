export type IconConfig = {
    [key: string]: string,
};
const icons = {
    "delete": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDZ2NmEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlY2aDBtMS0yYTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAyaDBNMyA0aDEwIiBzdHJva2U9IiM0NDRFNjAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    "duplicate": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMSAySDZhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjRoMGwtMi0yeiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTExIDJ2MWExIDEgMCAwIDAgMSAxaDFsLTItMnoiLz48cGF0aCBkPSJNOSAxNEg0YTEgMSAwIDAgMS0xLTFWNWgwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9zdmc+",
    "layer-pressed": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2IDEwLTYgNCA2IDQgNi00em0tNiA4IDYgNCA2LTQiIHN0cm9rZT0iIzMzODFGRiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
    "layer": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2IDEwLTYgNCA2IDQgNi00em0tNiA4IDYgNCA2LTQiIHN0cm9rZT0iIzQ0NEU2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
    "rotate": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTEzIDZhNiA2IDAgMSAxLTMuNzA5IDEuMjgzIi8+PHBhdGggZD0ibTEzIDYgMS40MTQgMi40NUwxMyA2bDIuNDUtMS40MTQiLz48L2c+PC9zdmc+",
    "rotation-button": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBvcGFjaXR5PSIuMDEiIGQ9Ik0wIDI0VjBoMjR2MjR6Ii8+PHBhdGggZD0iTTUuNzI0IDUuNzI0QTguODQ3IDguODQ3IDAgMCAxIDEyIDMuMTI1YzIuMjcxIDAgNC41NDMuODY2IDYuMjc2IDIuNmE4Ljg0NiA4Ljg0NiAwIDAgMSAyLjU5OCA2LjE0IDguODQ5IDguODQ5IDAgMCAxLTIuNTU5IDYuMzdsLTEuNS0uOTgzQTcuMTA1IDcuMTA1IDAgMCAwIDE5LjEyNSAxMmE3LjEwMyA3LjEwMyAwIDAgMC0yLjA4Ny01LjAzOEE3LjEwMyA3LjEwMyAwIDAgMCAxMiA0Ljg3NWE3LjEwMyA3LjEwMyAwIDAgMC01LjAzOCAyLjA4NyA3LjEwMSA3LjEwMSAwIDAgMC0yLjA4NiA0LjkyIDcuMTAzIDcuMTAzIDAgMCAwIDEuNzY2IDQuODE1bDEuOTQ1LTEuNTg0IDIuMzk0IDcuMTgyLTcuMjIyLTIuNDA4IDEuNzkxLTEuNzlBOC44NDYgOC44NDYgMCAwIDEgMy4xMjUgMTJjMC0yLjI3MS44NjYtNC41NDMgMi42LTYuMjc2eiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9Ii41IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+",
    "rotation": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBvcGFjaXR5PSIuMDEiIGQ9Ik0wIDI0VjBoMjR2MjR6Ii8+PHBhdGggZD0iTTUuNzI0IDUuNzI0QTguODQ3IDguODQ3IDAgMCAxIDEyIDMuMTI1YzIuMjcxIDAgNC41NDMuODY2IDYuMjc2IDIuNmE4Ljg0NiA4Ljg0NiAwIDAgMSAyLjU5OCA2LjE0IDguODQ5IDguODQ5IDAgMCAxLTIuNTU5IDYuMzdsLTEuNS0uOTgzQTcuMTA1IDcuMTA1IDAgMCAwIDE5LjEyNSAxMmE3LjEwMyA3LjEwMyAwIDAgMC0yLjA4Ny01LjAzOEE3LjEwMyA3LjEwMyAwIDAgMCAxMiA0Ljg3NWE3LjEwMyA3LjEwMyAwIDAgMC01LjAzOCAyLjA4NyA3LjEwMSA3LjEwMSAwIDAgMC0yLjA4NiA0LjkyIDcuMTAzIDcuMTAzIDAgMCAwIDEuNzY2IDQuODE1bDEuOTQ1LTEuNTg0IDIuMzk0IDcuMTgyLTcuMjIyLTIuNDA4IDEuNzkxLTEuNzlBOC44NDYgOC44NDYgMCAwIDEgMy4xMjUgMTJjMC0yLjI3MS44NjYtNC41NDMgMi42LTYuMjc2eiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9Ii41IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+",
    "font-colors-active": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQgMTEgNC05IDQgOU02IDdoNCIgc3Ryb2tlPSIjMzM4MUZGIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
    "font-colors": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQgMTEgNC05IDQgOU02IDdoNCIgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
    "to-bottom": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEwdjhtMCAwLTItMm0yIDIgMi0ybS00IDZoMTJtLTYtNGg2bS02LTRoNm0tNi00aDYiIHN0cm9rZT0iIzQ0NEU2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
    "to-top": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIydi04bTAgMC0yIDJtMi0yIDIgMm0tNC02aDEybS02IDRoNm0tNiA0aDZtLTYgNGg2IiBzdHJva2U9IiM0NDRFNjAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    "bold-active": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNSAySDhhMi41IDIuNSAwIDAgMSAwIDVINS41aDBtLTEgMGg0YTMgMyAwIDAgMSAwIDZoLTQgMG0wIDFWMiIgc3Ryb2tlPSIjMzM4MUZGIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
    "bold": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNSAySDhhMi41IDIuNSAwIDAgMSAwIDVINS41aDBtLTEgMGg0YTMgMyAwIDAgMSAwIDZoLTQgMG0wIDFWMiIgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
    "underline-active": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJ2NWE0IDQgMCAxIDEtOCAwVjJoME0zIDE0aDEwIiBzdHJva2U9IiMzMzgxRkYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    "underline": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJ2NWE0IDQgMCAxIDEtOCAwVjJoME0zIDE0aDEwIiBzdHJva2U9IiM0NDRFNjAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    "line-through-active": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgOGg4bS0xLTNhMyAzIDAgMCAwLTMtM2gtLjkzOEEyLjY0IDIuNjQgMCAwIDAgNC41IDRhMi41NyAyLjU3IDAgMCAwIDEuMzQ0IDIuOTIybDQuMzEyIDIuMTU2QTIuNTcgMi41NyAwIDAgMSAxMS41IDEyYTIuNjQgMi42NCAwIDAgMS0yLjU2MiAySDdhMyAzIDAgMCAxLTMtM2gwIiBzdHJva2U9IiMzMzgxRkYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    "line-through": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgOGg4bS0xLTNhMyAzIDAgMCAwLTMtM2gtLjkzOEEyLjY0IDIuNjQgMCAwIDAgNC41IDRhMi41NyAyLjU3IDAgMCAwIDEuMzQ0IDIuOTIybDQuMzEyIDIuMTU2QTIuNTcgMi41NyAwIDAgMSAxMS41IDEyYTIuNjQgMi42NCAwIDAgMS0yLjU2MiAySDdhMyAzIDAgMCAxLTMtM2gwIiBzdHJva2U9IiM0NDRFNjAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
    "italic-active": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQgOSAyTTUgMTRoNE03IDJoNCIgc3Ryb2tlPSIjMzM4MUZGIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
    "italic": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQgOSAyTTUgMTRoNE03IDJoNCIgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",  
} as IconConfig;

export function IconURL(name: string): string {
    return icons[name];
}