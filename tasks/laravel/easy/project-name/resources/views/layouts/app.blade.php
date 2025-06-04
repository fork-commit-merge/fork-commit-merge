<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @vite('resources/css/app.css')
    <title>
        @yield('title')
    </title>
</head>

<body>

    <div>
        @yield('content')
    </div>

</body>

</html>