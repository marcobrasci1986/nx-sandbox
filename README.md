# Nx sadbox

## Theory
![nx-getting-started.png](assets%2Fnx-getting-started.png)

## Commands

    npx nx@latest init

    npx nx serve

    npx nx build

When run again you see this:
    
    Nx read the output from the cache instead of running the command for 1 out of 1 tasks.

Caching with tests
    
    npx nx test --watch=false

    npx nx graph

## Integrated Angular app

    npx create-nx-workspace@latest

    npx nx serve angular-integrated-workspace

    npx nx build angular-integrated-workspace

## @nx/angular plugin

    nx g @nx/angular:app appName

    nx g @nx/angular:lib libName

    nx <target-name> <project-name>


## Example

    nx lint angular-integrated-workspace

is the same as

    nx run angular-integrated-workspace:lint