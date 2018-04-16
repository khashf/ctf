#!/usr/bin/env python

import sqlite3
import hashlib

sqlite_file = '/home/khuong/dev/ctf/wpi/vault/mockvault.db'
conn = sqlite3.connect(sqlite_file)
c = conn.cursor()

select_query = """select id, hash, salt from clients where clientname='a' or 1=1;"""
c.execute(select_query)
res = c.fetchone()
#print res
userID, hashtext, salt = res

print res
print userID
print hashtext
print salt

password = 'abc'
calculatedHash = hashlib.sha256(password + salt)
print calculatedHash
print "calculatedHash.hexdigest()="+calculatedHash.hexdigest()
if calculatedHash.hexdigest() != hash:
    print "invalid"