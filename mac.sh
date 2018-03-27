#!/bin/sh
mkdir -p css
mkdir -p img
mkdir -p js
touch  css/styles.css
touch js/scripts.js
curl -o index.html http://ericwolfe.net/download/index.html
curl -o css/bootstrap.css http://ericwolfe.net/download/bootstrap.css
curl -o js/jquery-3.3.1.js http://ericwolfe.net/download/jquery-3.3.1.js
curl -o README.md http://ericwolfe.net/download/README.md
git init                                                                        
curl -o .pairs http://ericwolfe.net/download/.pairs
atom .
open index.html
