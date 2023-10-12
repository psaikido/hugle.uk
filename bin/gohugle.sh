#!/bin/sh
rm -rf ./public
hugo

# For working in dev we output the pagefind index to the local static directory.
npm_config_yes=true npx pagefind@latest --site "public" --output-subdir "../static/_pagefind"
hugo serve

# For live the pagefind index default to output to the public directory.
# npx pagefind --source "public" 

