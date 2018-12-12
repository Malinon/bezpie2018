var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:3000/login/', 'dir': '_m0/0', 'linked': 5, 'len': 207 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:3000/admin/', 'dir': '_m1/0', 'linked': 2, 'len': 138 },
    { 'url': 'http://localhost:3000/index/', 'dir': '_m1/1', 'linked': 2, 'len': 117 },
    { 'url': 'http://localhost:3000/newPass/', 'dir': '_m1/2', 'linked': 5, 'len': 183 },
    { 'url': 'http://localhost:3000/register/', 'dir': '_m1/3', 'linked': 5, 'len': 311 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:3000/', 'dir': '_m2/0', 'linked': 2, 'len': 28 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:3000/admin/', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:3000/newPass/', 'extra': '', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://localhost:3000/register/', 'extra': 'Responses too slow for time sensitive tests', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:3000/register/', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost:3000/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/6' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:3000/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:3000/register/', 'extra': '', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:3000/admin/', 'extra': 'submit', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:3000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:3000/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:3000/register/', 'extra': 'sessionId', 'sid': '0', 'dir': '_i8/0' } ]
  }
];

