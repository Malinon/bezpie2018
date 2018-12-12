var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'dir': '_m0/0', 'linked': 2, 'len': 207 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'dir': '_m1/0', 'linked': 2, 'len': 333 },
    { 'url': 'http://127.0.0.1:3000/index/', 'dir': '_m1/1', 'linked': 2, 'len': 117 },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'dir': '_m1/2', 'linked': 5, 'len': 183 },
    { 'url': 'http://127.0.0.1:3000/register/', 'dir': '_m1/3', 'linked': 5, 'len': 311 },
    { 'url': 'http://127.0.0.1:3000/user', 'dir': '_m1/4', 'linked': 5, 'len': 206 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:3000/', 'dir': '_m2/0', 'linked': 2, 'len': 28 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': '', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': '', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': '', 'sid': '0', 'dir': '_i0/3' } ]
  },
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://127.0.0.1:3000/user', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://127.0.0.1:3000/user/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:3000/user', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': '', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 1, 'type': 20203, 'samples': [
    { 'url': 'http://127.0.0.1:3000/user/przelew/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:3000/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/6' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/7' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/8' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/9' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/10' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/11' },
    { 'url': 'http://127.0.0.1:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/12' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/13' },
    { 'url': 'http://127.0.0.1:3000/user', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/14' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/15' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/16' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/17' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/18' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/19' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': '', 'sid': '0', 'dir': '_i5/2' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'submit', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'targetAccount', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'amount', 'sid': '0', 'dir': '_i6/2' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': '', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:3000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:3000/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'sessionId', 'sid': '0', 'dir': '_i10/0' } ]
  }
];

