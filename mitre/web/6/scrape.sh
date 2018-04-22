#!/bin/bash -e

cd users
for i in `seq 1 1000`
do
    url='http://138.247.115.176/users/'$i
    echo 'scraping '$url
    file='user'$i
    echo 'saving response to '$file
    curl $url > $file
done
