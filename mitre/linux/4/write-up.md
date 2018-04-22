# Description
I’ve opened vim and can’t exit! Can you help me?
To connect: ssh ctf@138.247.115.162

# Solution
:set shell=bash
:!find "flag" / > tmp.txt 2>&1
:e tmp.txt
and find the file containing the flag

# Flag

