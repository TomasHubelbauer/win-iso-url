# Windows 10 ISO URL

A script for obtaining Windows 10 ISO download URLs from Microsoft.

Useful for spinning up VMs. This is not the Media Creation tool Windows users
are redirected to when trying to download this ISO on the Microsoft website from
a Windows machine.

## Installation

`npm i https://github.com/TomasHubelbauer/win-iso-url`

## Usage

`npx https://github.com/TomasHubelbauer/win-iso-url` will create `win.url`.

In PowerShell, you can do:

```powershell
$winIsoUrl = $(npx https://github.com/TomasHubelbauer/win-iso-url)
```

## Rate Limit

Microsoft rate-limits this endpoint pretty heavily, you won't be able to run
this script more than three times in a row.

It's not clear how long the GUID in the URL takes to expire.

## Running

When running from the source:

`node .`

## To-Do

### Make sure this still works

I did some refactoring and now I'm being rate limited.

### Find out the approximate expiration of the GUID in the ISO URL
