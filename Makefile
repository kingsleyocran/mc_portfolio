gulpb:
	gulp build

gulpw:
	gulp watch

csscheck:
	npx stylelint "**/*.{css,scss}"

cssfix:
	npx stylelint "**/*.{css,scss}" --fix

linthint:
	npx hint .

lhci:
	lhci autorun --upload.target=temporary-public-storage --collect.staticDistDir=.

.PHONY: gulpb gulpw csscheck cssfix linthint