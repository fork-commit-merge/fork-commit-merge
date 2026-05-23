<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        @fonts

        <!-- Styles / Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="flex justify-center items-center flex-col">
        <h1 class="text-4xl">Welcome!</h1>
        <a href="/greet" class="text-blue-500 text-3xl list-item">Go Greet</a>
    </body>

</html>
