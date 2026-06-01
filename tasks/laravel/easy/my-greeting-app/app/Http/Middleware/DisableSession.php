<?php

namespace App\Http\Middleware;

use Closure;

class DisableSession
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
