<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function sayHello()
    {
        return response()->json(['message' => 'hello world']);
    }
}
