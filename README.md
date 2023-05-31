# simpel dark mode package

![63d5ae97684108e603c87bcd_1__l0vaIoI0RQu9_io9pJJIw](https://github.com/mosenn/toggel-npm-package/assets/91747908/dbd62166-c9c9-4e24-8e6c-6348e6eb2318)

## This is simpel package for dark mode

### so much project need dark mode this package helpful to fast create dark mode in you project , this package work for reactjs and nextjs you can customize backgroundColor and Color

### install:

```javascript
npm i toggel
```

### import:

```javascript
import Toggel from "toggel/Toggel";
```

### take darkMode from Toggel() function , then take them { isDark, activeDarkMode, styleOption } from darkMode

```javascript
function App() {
  const darkMode = Toggel();
  const { isDark, activeDarkMode, styleOption } = darkMode;
}
```

### you can check them with console.log:

```javascript
console.log(isDark);
console.log(activeDarkMode);
console.log(styleOption.backgroundColor);
```

| Tables         | type     |
| -------------- | -------- |
| isDark         | boolean  |
| activeDarkMode | function |
| styleOption    | object   |

### You can customize the background color and dark mode

_note : you can set rgb or rgba_

```javascript
function App() {
  styleOption.backgroundColor = "red";
  styleOption.color = "blue";
}
```

### set style in parent in your code

```htm
<div style={{ backgroundColor: isDark && styleOption.backgroundColor, color:
isDark && styleOption.color,}} >
</div>
```

### button for call function dark mode

```htm
<button onClick="{activeDarkMode}">toggel</button>
```

### you have a dark mode enjoy ✌
