# simpel dark mode package

![63d5ae97684108e603c87bcd_1__l0vaIoI0RQu9_io9pJJIw](https://github.com/mosenn/toggel-npm-package/assets/91747908/dbd62166-c9c9-4e24-8e6c-6348e6eb2318)

<h1>This is simpel package for dark mode <h1>
<p style='font-size:16px; color:red;'>
so much project need dark mode this package helpful to fast create dark mode in you project , this package work for reactjs and nextjs 
you can customize backgroundColor and Color . 
</p>


### install:
```javascript
npm i toggel
```
### import:
```javascript
import Toggel from "toggel/Toggel";
```

### call isDark, activeDarkMode, styleOption from Toggel()

```javascript
const { isDark, activeDarkMode, styleOption } = darkMode;
```

### you can console.log them :

```javascript
console.log(isDark);
console.log(activeDarkMode);
console.log(styleOption.backgroundColor);
```

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
<div style={{ backgroundColor: isDark && styleOption.backgroundColor, color:
isDark && styleOption.color,}} >
</div>
```

# define button for call function dark mode
```htm
<button onClick={activeDarkMode}>toggel</button>
```

# you have dark mode is your project enjoy ✌
