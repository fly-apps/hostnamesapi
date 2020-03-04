# Hostnames API (hostnamesapi)

JavaScript examples for working with the new hostnames API on Fly

# To use

* Download/Clone this repository
* Run `npm install` for required packages
* Set FLY_API_TOKEN environment variable to an API token acquired from fly.io (Dashboard -> Account -> Settings -> Access Tokens -> Create Access Token)
* Run `node appname --help` for details of required arguments.

e.g.

```
❯ node getcert -a hellofly -h hellofly.fly.dev
{
  "app": {
    "certificate": {
      "acmeDnsConfigured": true,
      "certificateAuthority": "lets_encrypt",
      "createdAt": "2020-01-17T16:51:24Z",
      "dnsProvider": "dnsimple",
      "dnsValidationInstructions": "CNAME _acme-challenge.hellofly.fly.dev => hellofly.fly.dev.x6dr.flydns.net.",
      "dnsValidationHostname": "_acme-challenge.hellofly.fly.dev",
      "dnsValidationTarget": "hellofly.fly.dev.x6dr.flydns.net",
      "hostname": "hellofly.fly.dev",
      "id": "3AzsPZI7QiZ0HB6FeZTJjU69iR2C56Sq4uBvhjxiQ7hBY",
      "source": "fly",
      "clientStatus": "Ready",
      "issued": {
        "nodes": [
          {
            "type": "ecdsa",
            "expiresAt": "2020-04-16T16:04:19Z"
          },
          {
            "type": "rsa",
            "expiresAt": "2020-04-16T16:04:08Z"
          }
        ]
      }
    }
  }
}
```



