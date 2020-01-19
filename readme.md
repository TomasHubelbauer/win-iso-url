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

## Running

When running from the source:

`node .`
