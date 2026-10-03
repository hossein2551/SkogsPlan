# SkogsPlan 🌲

SkogsPlan är en fullstack-webbapplikation för digital planering och hantering av skogsområden och skogliga aktiviteter.

Projektet är utvecklat som ett portfolio-projekt för att demonstrera fullstackutveckling med .NET, React, SQL, externa API:er, GIS och molndistribution.

## Tekniker

- C# / .NET 10
- ASP.NET Core Web API
- Entity Framework Core
- Microsoft SQL Server / Azure SQL
- React
- TypeScript
- Vite
- Leaflet / OpenStreetMap
- Open-Meteo API
- xUnit
- Microsoft Azure
- Git / GitHub

## Funktioner

- Skapa, visa, redigera och ta bort skogsområden
- Hantera planerade och genomförda skogsaktiviteter
- Dashboard med statistik över skogsinnehavet
- GIS-karta med geografiska positioner
- Aktuell väderinformation baserad på skogsområdets koordinater
- REST API byggt med ASP.NET Core
- Databaslagring med Entity Framework Core och Azure SQL
- Automatiserade tester med xUnit
- Publicerad frontend och backend

## Live Demo

https://hossein2551.github.io/SkogsPlan/

## Arkitektur

React + TypeScript  
↓ REST API  
ASP.NET Core Web API  
↓ Entity Framework Core  
Azure SQL Database

ASP.NET Core API kommunicerar även med Open-Meteo för aktuell väderinformation.

## Tester

Projektet innehåller automatiserade backendtester med xUnit.

**Teststatus:**
- 3 tester
- 3 godkända
- 0 misslyckade