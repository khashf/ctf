#!/bin/sh -e

for i in {0..255}; do 
    ./change_palette.py $1 "single-color-${i}.png" "${i}"
done
