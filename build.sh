#!/bin/sh

cd css
out=build.css
rm -f $out
files=(normalize.min.css font-awesome.min.css simplegrid.css main.css breakpoints.css)
for file in ${files[@]}; do
    cat $file >> $out;
    echo >> $out;
done

cd ../js
out=build.js
rm -f $out
files=(jquery-1.11.2.min.js jquery.scrollTo.min.js parallax.min.js main.js)
for file in ${files[@]}; do
    cat $file >> $out;
    echo >> $out;
done
