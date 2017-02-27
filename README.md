# Website
Our Website

# Prerequisites

node v6+, hexo v3+

Hexo have to be installed globally

```bash
npm install hexo-cli -g
```

# Local installation

```bash
yarn
# or
npm install

# then
hexo server

# then visit localhost:4000
```

# Data files

Data files are stored in `src/_data`

# Language files

Language files are stored in `themes/canvas/languages`. If you want to add or remove some key, remember to update every files in that directory.

Data file contain 3 objects: `data`, `layout`, `partial`

 - data - translations for data files
 - layout - translations for page layouts
 - partial - translations for partial files
