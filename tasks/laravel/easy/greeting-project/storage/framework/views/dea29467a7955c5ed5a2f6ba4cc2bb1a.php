<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames(([
    'code',
    'language',
    'editor' => false,
    'startingLine' => 1,
    'highlightedLine' => null,
    'truncate' => false,
]));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter(([
    'code',
    'language',
    'editor' => false,
    'startingLine' => 1,
    'highlightedLine' => null,
    'truncate' => false,
]), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<?php
    $fallback = $truncate ? '<pre class="truncate"><code>' : '<pre><code>';

    if ($editor) {
        $lines = explode("\n", $code);

        foreach ($lines as $index => $line) {
            $lineNumber = $startingLine + $index;
            $highlight = $highlightedLine === $index;
            $lineClass = implode(' ', [
                'block px-4 py-1 h-7 even:bg-white odd:bg-white/2 even:dark:bg-white/2 odd:dark:bg-white/4',
                $highlight ? 'bg-rose-200! dark:bg-rose-900!' : '',
            ]);
            $lineNumberClass = implode(' ', [
                'mr-6 text-neutral-500! dark:text-neutral-600!',
                $highlight ? 'dark:text-white!' : '',
            ]);

            $fallback .= '<span class="' . $lineClass . '">';
            $fallback .= '<span class="' . $lineNumberClass . '">' . $lineNumber . '</span>';
            $fallback .= htmlspecialchars($line);
            $fallback .= '</span>';
        }

    } else {
        $fallback .= htmlspecialchars($code);
    }

    $fallback .= '</code></pre>';
?>

<div
    x-data="{ highlightedCode: null }"
    x-init="
        highlightedCode = window.highlight(
            <?php echo e(Illuminate\Support\Js::from($code)); ?>,
            <?php echo e(Illuminate\Support\Js::from($language)); ?>,
            <?php echo e(Illuminate\Support\Js::from($truncate)); ?>,
            <?php echo e(Illuminate\Support\Js::from($editor)); ?>,
            <?php echo e(Illuminate\Support\Js::from($startingLine)); ?>,
            <?php echo e(Illuminate\Support\Js::from($highlightedLine)); ?>

        );
    "
    <?php echo e($attributes); ?>

>
    <div
        x-cloak
        x-html="highlightedCode"
    ></div>
    <div x-show="!highlightedCode"><?php echo $fallback; ?></div>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/syntax-highlight.blade.php ENDPATH**/ ?>