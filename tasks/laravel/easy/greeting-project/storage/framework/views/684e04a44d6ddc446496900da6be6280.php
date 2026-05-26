<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['routeParameters']));

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

foreach (array_filter((['routeParameters']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div class="flex flex-col gap-3">
    <h2 class="text-lg font-semibold">Routing parameters</h2>
    <?php if($routeParameters): ?>
    <div class="bg-white dark:bg-white/[2%] border border-neutral-200 dark:border-neutral-800 rounded-md overflow-x-auto p-5 text-sm font-mono shadow-xs">
        <?php if (isset($component)) { $__componentOriginal12cb286571f553eebcbe98210b217f94 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal12cb286571f553eebcbe98210b217f94 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.syntax-highlight','data' => ['code' => $routeParameters,'language' => 'json']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::syntax-highlight'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['code' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($routeParameters),'language' => 'json']); ?>
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
    <?php else: ?>
    <?php if (isset($component)) { $__componentOriginal612ffe32146e3bd2ac6ba6076cca9520 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.empty-state','data' => ['message' => 'No routing parameters']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::empty-state'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['message' => 'No routing parameters']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520)): ?>
<?php $attributes = $__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520; ?>
<?php unset($__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal612ffe32146e3bd2ac6ba6076cca9520)): ?>
<?php $component = $__componentOriginal612ffe32146e3bd2ac6ba6076cca9520; ?>
<?php unset($__componentOriginal612ffe32146e3bd2ac6ba6076cca9520); ?>
<?php endif; ?>
    <?php endif; ?>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/routing-parameter.blade.php ENDPATH**/ ?>