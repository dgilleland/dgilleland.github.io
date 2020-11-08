# Pack for the Journey

> This article is about travelling down the road of automating the building and publishing of your **NuGet packages** on GitHub through **GitHub Actions** in 2020.

As you get further along your journey of learning to code, it's not unusual to find yourself writing the same code over and over for different projects. At that point, you may be thinking "I need to put all this commonly used code in a **library** that I can reuse." After all, you've used libraries othes have made, so why not make your own!

In the world of C# programming, these re-usable libraries are shared and consumes as **NuGet** packages. And, if you are using version control, you've probably stumbled upon git and GitHub. You might have even heard somewhere that GitHub has its own **Package Registry** for NuGet packages.

This article is about travelling down the road of automating the building and publishing of your NuGet packages on GitHub. I'll be your guide, so get ready and ["Pack for the Journey"](#pack-for-the-journey)!

----

## My Learning

![](../images/code_meme.jpg)

- [ ] Try the [Learning Lab](https://lab.github.com/githubtraining/github-actions:-publish-to-github-packages)
- [ ] **Read** [Hosting NuGet Packages on GitHub](https://blog.hildenco.com/2020/07/hosting-nuget-packages-on-github.html)

----

## Take-Aways

> "Move the thing! Grab the thing - and the other thing."
> 
> ![Princess Bride Scene](../images/move-the-thing.jpg)


When publishing NuGet packages for your .Net project on GitHub, it's important to make some distinctions:

- A `.nupkg` is a **file** that contains information about what is in the package
- A **Package Registry** is a centralized location that lists your packages. There are package registries for various systems besides .NET (such as *npm* package registries). When you want to add a NuGet package to your project, you typically look in a *nuget package registry*. There are serveral popular NuGet package registries.
  - Nuget
  - GitHub
  - others
- **GitHub Actions** 

## The "Old" Days

Back when NuGet was a new thing in the .NET world, you typically wound up publishing your libraries directly to NuGet. It involved a lot of manual processes.

- Build your project
- Create a `.nupkg`
- Post it to Nuget.com

All along the way, you had to make sure you were paying attention to your **version numbers** for your project *and* your package. Forget that, and your newly published package may be "[pooched](https://www.urbandictionary.com/define.php?term=Pooched)".

```yml
name: Publish NuGet Package to GitHub Registry
on:
  push:
    branches:
      - master # or main - Default release branch
jobs:
  publish:
    name: build, pack & publish
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v2
      - name: Add GitHub as NuGet source
        run: dotnet nuget add source https://nuget.pkg.github.com/dgilleland/index.json -n github
      - name: Build Solution
        run: dotnet build src\FreeCode.Exceptions\FreeCode.Exceptions.csproj -c Release
      ## Include the following if your .csproj does not automatically generate the .nupkg
      # - name: Create Release package
      #   run: dotnet pack src\FreeCode.Exceptions\FreeCode.Exceptions.csproj -c Release -o out
      - name: Publish package
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: dotnet nuget push src\FreeCode.Exceptions\bin\Release\FreeCode.Exceptions.0.1.0.nupkg --source "github" --skip-duplicate --api-key $env:GITHUB_TOKEN
```
