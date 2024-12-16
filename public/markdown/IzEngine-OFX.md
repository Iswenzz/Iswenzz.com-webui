# IzEngine-OFX

![](https://i.imgur.com/EHZLrDo.png)

IzEngine-OFX is an extension for external softwares such as Vegas, Natron, Nuke, Adobe, Autodesk. It provides a text rendering engine using the pango and cairo libraries, freetype and fontconfig. It includes effects such as text generator, text layers and a demo rendering effect using CoD4DM1.

## Text Rendering

-   Font support
-   Font weight, style, hint, metrics, antialiasing, stretch and subpixel
-   Text layers support
-   Text stroke with dash pattern support
-   Text horizontal and vertical alignment
-   Translation, rotation and scale
-   Skew matrix
-   Circle layout
-   Angle layout

## CoD4 Rendering

-   Draw demo informations
-   Reflection from demo configuration
-   Jump velocity algorithm
-   Angles algorithm
-   Weapon shake effect

## Instructions

In order to use this OpenFX plugin, place the `IzEngine.ofx.bundle` directory in any compatible `OFX Video Plug-Ins` directory.

## Fonts

Add custom fonts to `~/.fonts` directory.

## Building

1. [CMake](https://cmake.org/) and [vcpkg](https://vcpkg.io/en/)
2. [Visual Studio](https://visualstudio.microsoft.com/)

_Build Command:_

    mkdir build && cd build
    cmake .. --preset windows
    cmake --build . --config Release
    cmake --install . --prefix ../dist

### [Download](https://github.com/Iswenzz/IzEngine-OFX/releases)

## Contributors

**_Note:_** If you would like to contribute to this repository, feel free to send a pull request, and I will review your code.
Also feel free to post about any problems that may arise in the issues section of the repository.
