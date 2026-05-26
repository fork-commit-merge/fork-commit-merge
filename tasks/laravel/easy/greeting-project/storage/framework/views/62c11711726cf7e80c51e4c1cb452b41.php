<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['routing']));

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

foreach (array_filter((['routing']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div class="flex flex-col gap-3">
    <h2 class="text-lg font-semibold">Routing</h2>
    <div class="flex flex-col">
        <?php $__empty_1 = true; $__currentLoopData = $routing; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
        <div class="flex max-w-full items-baseline gap-2 h-10 text-sm font-mono">
            <div class="uppercase text-neutral-500 dark:text-neutral-400 shrink-0"><?php echo e($key); ?></div>
            <div class="min-w-6 grow h-3 border-b-2 border-dotted border-neutral-300 dark:border-white/20"></div>
            <div class="truncate text-neutral-900 dark:text-white">
                <span data-tippy-content="<?php echo e($value); ?>">
                    <?php echo e($value); ?>

                </span>
            </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
        <?php if (isset($component)) { $__componentOriginal612ffe32146e3bd2ac6ba6076cca9520 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.empty-state','data' => ['message' => 'No routing context']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::empty-state'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['message' => 'No routing context']); ?>
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
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/routing.blade.php ENDPATH**/ ?>