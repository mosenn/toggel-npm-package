# simpel dark mode package

![movie-2](https://github.com/mosenn/toggel-npm-package/assets/91747908/3fdbc98e-a43c-4b59-bfdf-1b860c2cfde0)

**npm i toggel**
`import Toggel from "toggel/Toggel";`

**call isDark, activeDarkMode, styleOption from Toggel()**

`const { isDark, activeDarkMode, styleOption } = darkMode;`

### you can console.log them :

`console.log(isDark);`
`console.log(activeDarkMode);`
`console.log(styleOption.backgroundColor);`

###### isDark boolean

###### activeDarkMode function

###### styleOption you can set backgroundColor and color

# for set your backgroundColor and Color do this :

## note : you can set rgb or rgba

```javascript
styleOption.backgroundColor = "red";
styleOption.color = "blue";
```

# set style in your parent you want use darkMode for childrens

```htm
`<div style={{ backgroundColor: isDark && styleOption.backgroundColor, color:
isDark && styleOption.color,}} >
```

# define button for call function dark mode

`<button onClick={activeDarkMode}>toggel</button>`


# you have dark mode is your project enjoy ✌
