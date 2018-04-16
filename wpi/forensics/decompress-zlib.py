#!/usr/bin/env python

import zlib
import gzip
import sys

infile = 'image.zlib'
str_object1 = open(infile, 'rb').read()
#str_object2 = zlib.decompress(str_object1, zlib.MAX_WBITS|16)
str_object2 = zlib.decompress(str_object1)
outfile = 'flag'
f = open(outfile, 'wb')
f.write(str_object2)
f.close()

# CHUNKSIZE = 1024
# data2 = zlib.decompressobj()  
# my_file = open('image.zlib', 'rb')  
# buf = my_file.read(CHUNKSIZE)
# # Decompress stream chunks
# while buf:  
#     decompressed_data = data2.decompress(buf)
#     buf = my_file.read(CHUNKSIZE)
# decompressed_data += data2.flush()
# f = open('flag', 'wb')
# f.write(decompressed_data)
# f.close()
# my_file.close() 