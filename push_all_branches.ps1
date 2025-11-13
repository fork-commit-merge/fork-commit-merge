# PowerShell script to push all local branches with unpushed commits
# Run this when GitHub connectivity is restored

$branches = @(
    "aaaron",
    "aaron", 
    "aron",
    "eta",
    "fix-ada-hello",
    "fix-asm-hello-world",
    "fix-bash-create-files",
    "fix-c-sum",
    "fix-clojure-add-numbers",
    "fix-cobol-hello",
    "fix-coffeescript-add-numbers",
    "fix-crystal-server",
    "fix-csharp-hello-user",
    "fix-css-red-class",
    "fix-d-reverse-string",
    "fix-dart-add-numbers",
    "fix-elixir-sum-list",
    "fix-erlang-echo",
    "fix-fortran-triangle-area",
    "fix-fsharp-hello-world",
    "fix-go-hello-world",
    "fix-groovy-hello",
    "fix-haskell-factorial",
    "fix-html-footer",
    "fix-html-navigation",
    "fix-html-simple-tag",
    "fix-java-greeting",
    "fix-javascript-sum",
    "fix-json-users",
    "fix-julia-sum",
    "fix-kotlin-greeting",
    "fix-lisp-factorial",
    "fix-lua-temperature",
    "fix-lua-temperature-converter",
    "fix-markdown-introduction",
    "fix-matlab-addition",
    "fix-mojo-hello",
    "fix-nim-hello",
    "fix-ocaml-sum",
    "fix-octave-factorial",
    "fix-pascal-average",
    "fix-pascal-hello",
    "fix-perl-reverse",
    "fix-perl-reverse-string",
    "fix-php-array",
    "fix-php-hello",
    "fix-php-string-concat",
    "fix-python-hello",
    "fix-r-hello-world",
    "fix-ruby-hello",
    "fix-ruby-sum-function",
    "fix-ruby-sum-of-two-numbers",
    "fix-rust-fibonacci",
    "fix-scala-factorial",
    "fix-smalltalk-factorial",
    "fix-sql-create-users",
    "fix-swift-fibonacci",
    "fix-toml-config",
    "fix-typescript-calculator",
    "fix-typescript-greet",
    "fix-typescript-product-list",
    "fix-xml-bookstore",
    "fix-yaml-basic-config",
    "fix-yaml-config",
    "fix-zig-hello",
    "gyt",
    "isaac",
    "lawrence",
    "saq",
    "task-go-hello",
    "task-java-greeting",
    "task-python-bubble-sort",
    "task-python-hello",
    "task-typescript-greet",
    "vsa",
    "waa"
)

Write-Host "Starting to push all branches..." -ForegroundColor Green

$successCount = 0
$failureCount = 0

foreach ($branch in $branches) {
    Write-Host "Pushing branch: $branch" -ForegroundColor Yellow
    
    # Check if branch exists locally
    $branchExists = git show-ref --verify --quiet refs/heads/$branch
    if ($LASTEXITCODE -eq 0) {
        # Try to push the branch
        git push origin $branch 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ Successfully pushed: $branch" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "✗ Failed to push: $branch" -ForegroundColor Red
            $failureCount++
        }
    } else {
        Write-Host "✗ Branch not found locally: $branch" -ForegroundColor Red
        $failureCount++
    }
    
    Write-Host "----------------------------------------"
}

Write-Host "Push Summary:" -ForegroundColor Cyan
Write-Host "Successful pushes: $successCount" -ForegroundColor Green
Write-Host "Failed pushes: $failureCount" -ForegroundColor Red
Write-Host "Total branches processed: $($branches.Count)" -ForegroundColor Cyan
