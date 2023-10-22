# Fork, Commit, Merge - Easy Issue (Laravel)

## Create a Laravel Project With a Greeting Route
*Note: You don't have ask permission to start solving the issue or get assigned, since these issues are supposed to be always open for new contributors. The actions-user bot will reset the file back to previous state for the next contributor after your commit is merged. So you can just simply start working with the issue right away!*

### Description

In this issue, we want you to create a new Laravel project with a greeting route. This route should display a welcome message to a "Contributor".

### How to get started

-   Open your terminal and navigate to correct directory with `cd tasks/laravel/easy`.
-   Create a new Laravel project:
    -    You can either create the new project using Laravel Installer:

```bash
laravel new project-name
```
Or using Composer:

```bash
composer create-project --prefer-dist laravel/laravel project-name
```

-   Navigate to project folder:
```bash
cd project-name
```

-   Create the route: Open the `routes/web.php` file and create a greeting route which should display a welcome message to a "Contributor".
-   You can check out `resources/views/greeting.blade.php` file to find how the actual HTML body is implemented, but do not modify this file.

### Starting the server

Start the Laravel Development Server: If you haven't started the Laravel development server yet, you can do so by running `php artisan serve` in your terminal:

Verify the Route: Visit http://localhost:8000/greet in your web browser and ensure that you see the greeting message.
The text you should see in your browser screen is "Welcome, Contributor!"
If that is the case, you are ready to make a pull request!
