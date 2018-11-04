from multiprocessing import Process
from Crypto.Util.number import long_to_bytes
from Crypto.Cipher import AES
import base64

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

    while(crawler <= end):
        temp = decode(crawler,cryp,iv)
        if(correct(temp)):
            print(str(temp))
        else:
            crawler = crawler + step

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

num=8
key_pref = "fe382c25167f7d87fca323d16fdac123342dfb21f664658e9eb7b156"
iv16 = "45e1356e14c6df37e5d11a61436708b3"
cryp = "D6xwteQcWf5SOnK4ZXod8aThBCf5MHPY8cLMyDwN4MlaVJiJyfH0S54mkwlAhK2aWZA6G55t+/gsxr7B46sPDE0W02sdA2hFHuH6nbsoGWA="

#execute(num,key_pref,iv16,cryp)
procExec(num,key_pref,iv16,cryp)
