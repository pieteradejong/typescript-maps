# "Maps" - using TypeScript

Purpose: practice and refine my TypeScript skills, fix any gaps.

Based on Udemy course:
[Udemy: Typescript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## Usage

Use `Parcel` to ~~compile~~ strip `.ts` (TypeScript) code ~~~into~~ of annotations and bundle into `.js` (JavaScript), which can be included in an HTML file.

Install `parcel` and `parcel-bundler`:
```bash
$ npm install -g parcel parce-bundler
```

Run using:
```bash
$ parcel index.html
Server running at [host]
```

## Developer notes
Note: `index.html` file contains an API key, which is obviously generally bad practice and should for example exist in a private config or env variable. In this case, it is already publicly available via a popular online course, so highly unlikely to cause problems. We don't have to nuke the entire repo.

## TODOs
* :white_check_mark: When API key no longer relevant, replace with `<API_KEY>`. While it will still be in source control history, it will be less obvious.

