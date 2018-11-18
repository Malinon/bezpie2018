from multiprocessing import Process
from Crypto.Util.number import long_to_bytes
from Crypto.Cipher import AES
import base64
import time

def decode(num,cryptogram,iv):
    return str((AES.new(long_to_bytes(num,32), AES.MODE_CBC,iv)).decrypt(base64.b64decode(cryptogram)))


def correct(temp):
    return all(ord(c) < 128 for c in temp)


def execute(num,key_pref,iv16,cryp):
    baseVal = int(key_pref,16)
    baseEx = 16**(64-num)
    max = (16**num - 1) * baseEx

    crawler = baseVal
    print(baseVal)
    print(baseEx*10)
    iv = long_to_bytes(int(iv16,16))
    print(len(iv))
    while(crawler <= max):
        print(crawler+baseVal)
        temp = decode(crawler+baseVal,cryp,iv)
        if(correct(temp)):
            print(str(temp))
            break
        else:
            crawler = crawler + baseEx



def procF(start,end,iv,cryp,step):

    crawler = start
    start = time.time()
    while(crawler <= end):
        temp = decode(crawler,cryp,iv)
        if(correct(temp)):
            print(str(temp))
            print(time.time()-start)
        crawler = crawler + step

    end = time.time()
    print(end-start)

def procExec(num,key_pref,iv16,cryp):
        baseVal = int(key_pref,16)
        baseEx = 16**(64-num)
        max = (16**num - 1) * baseEx
        start2 = (baseVal + max)/2
        iv = long_to_bytes(int(iv16,16))

        p1 = Process(target=procF, args=(baseVal, start2,iv,cryp,baseEx))
        p2 = Process(target=procF, args=(start2,max,iv,cryp,baseEx))
        p1.start()
        p2.start()

#p = Process(target=procF,args(baseVal,)

num=6
key_pref = "3120d51a73de8d657676f4a0ea2b1b6e48bdbbbb0e1ed3016e517c71160"
iv16 = "f74840d77983e8d423a5505ef490e396"
cryp = "Xcekr23lLeG5bxnsQTQEwvXE887+Nmi/esZirw8UYJE="

#execute(num,key_pref,iv16,cryp)
procExec(num,key_pref,iv16,cryp)
