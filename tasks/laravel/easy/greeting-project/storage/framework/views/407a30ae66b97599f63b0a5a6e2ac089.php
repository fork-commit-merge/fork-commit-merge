<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['code', 'highlightedLine']));

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

foreach (array_filter((['code', 'highlightedLine']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div
    class="text-sm rounded-b-lg bg-neutral-50 border-t border-neutral-100 dark:bg-neutral-900 dark:border-white/10"
    <?php echo e($attributes); ?>

>
    <?php if (isset($component)) { $__componentOriginal12cb286571f553eebcbe98210b217f94 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal12cb286571f553eebcbe98210b217f94 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.syntax-highlight','data' => ['code' => $code,'language' => 'php','editor' => true,'startingLine' => max(1, $highlightedLine - 5),'highlightedLine' => min(5, $highlightedLine - 1),'class' => 'overflow-x-auto']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::syntax-highlight'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['code' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($code),'language' => 'php','editor' => true,'starting-line' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(max(1, $highlightedLine - 5)),'highlighted-line' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(min(5, $highlightedLine - 1)),'class' => 'overflow-x-auto']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal12cb286571f553eebcbe98210b217f94)): ?>
<?php $attributes = $__attributesOriginal12cb286571f553eebcbe98210b217f94; ?>
<?php unset($__attributesOriginal12cb286571f553eebcbe98210b217f94); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal12cb286571f553eebcbe98210b217f94)): ?>
<?php $component = $__componentOriginal12cb286571f553eebcbe98210b217f94; ?>
<?php unset($__componentOriginal12cb286571f553eebcbe98210b217f94); ?>
<?php endif; ?>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/frame-code.blade.php ENDPATH**/ ?>