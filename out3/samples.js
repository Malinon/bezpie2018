var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'dir': '_m0/0', 'linked': 2, 'len': 207 },
    { 'url': 'http://127.0.0.1:3000/user/dane/', 'dir': '_m0/1', 'linked': 5, 'len': 150 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'dir': '_m1/0', 'linked': 2, 'len': 333 },
    { 'url': 'http://127.0.0.1:3000/index/', 'dir': '_m1/1', 'linked': 2, 'len': 117 },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'dir': '_m1/2', 'linked': 5, 'len': 183 },
    { 'url': 'http://127.0.0.1:3000/register/', 'dir': '_m1/3', 'linked': 5, 'len': 311 },
    { 'url': 'http://127.0.0.1:3000/user/', 'dir': '_m1/4', 'linked': 2, 'len': 206 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:3000/', 'dir': '_m2/0', 'linked': 2, 'len': 28 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:3000/user/dane/', 'extra': '', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:3000/user/potwierdzenie/', 'extra': '', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': '', 'sid': '0', 'dir': '_i0/3' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:3000/user/', 'extra': '', 'sid': '0', 'dir': '_i1/4' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:3000/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://127.0.0.1:3000/newPass/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://127.0.0.1:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://127.0.0.1:3000/user/dane/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://127.0.0.1:3000/user/potwierdzenie/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://127.0.0.1:3000/user/potwierdzenie/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://127.0.0.1:3000/user/potwierdzenie/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://127.0.0.1:3000/user/potwierdzenie/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://127.0.0.1:3000/user/potwierdzenie/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/21' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/22' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/23' },
    { 'url': 'http://127.0.0.1:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/24' },
    { 'url': 'http://127.0.0.1:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i2/25' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://127.0.0.1:3000/login/', 'extra': 'submit', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'targetAccount', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:3000/user/przelew/', 'extra': 'amount', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:3000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:3000/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:3000/register/', 'extra': 'sessionId', 'sid': '0', 'dir': '_i7/0' } ]
  }
];

