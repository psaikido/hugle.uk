#!/bin/sh
hugo

# For working in dev we output the pagefind index to the local static directory.
npm_config_yes=true npx pagefind --source "public" --bundle-dir ../static/_pagefind
hugo server

# For live the pagefind index default to output to the public directory.
# npx pagefind --source "public" 

