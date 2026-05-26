<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['exception']));

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

foreach (array_filter((['exception']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div class="flex flex-col gap-2.5 bg-neutral-50 dark:bg-white/1 border border-neutral-200 dark:border-neutral-800 rounded-xl p-2.5 shadow-xs">
    <div class="flex items-center gap-2.5 p-2">
        <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/5 rounded-md w-6 h-6 flex items-center justify-center p-1">
            <?php if (isset($component)) { $__componentOriginalebc8ec9a834a8051f56913d6745a7050 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalebc8ec9a834a8051f56913d6745a7050 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.alert','data' => ['class' => 'w-2.5 h-2.5 text-blue-500 dark:text-emerald-500']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.alert'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-2.5 h-2.5 text-blue-500 dark:text-emerald-500']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalebc8ec9a834a8051f56913d6745a7050)): ?>
<?php $attributes = $__attributesOriginalebc8ec9a834a8051f56913d6745a7050; ?>
<?php unset($__attributesOriginalebc8ec9a834a8051f56913d6745a7050); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalebc8ec9a834a8051f56913d6745a7050)): ?>
<?php $component = $__componentOriginalebc8ec9a834a8051f56913d6745a7050; ?>
<?php unset($__componentOriginalebc8ec9a834a8051f56913d6745a7050); ?>
<?php endif; ?>
        </div>
        <h3 class="text-base font-semibold text-neutral-900 dark:text-white">Exception trace</h3>
    </div>

    <div class="flex flex-col gap-1.5">
        <?php $__currentLoopData = $exception->frameGroups(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $group): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if($group['is_vendor']): ?>
                <?php if (isset($component)) { $__componentOriginal449787012edfba29f0e80f325065fad5 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal449787012edfba29f0e80f325065fad5 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.vendor-frames','data' => ['frames' => $group['frames']]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::vendor-frames'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['frames' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($group['frames'])]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal449787012edfba29f0e80f325065fad5)): ?>
<?php $attributes = $__attributesOriginal449787012edfba29f0e80f325065fad5; ?>
<?php unset($__attributesOriginal449787012edfba29f0e80f325065fad5); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal449787012edfba29f0e80f325065fad5)): ?>
<?php $component = $__componentOriginal449787012edfba29f0e80f325065fad5; ?>
<?php unset($__componentOriginal449787012edfba29f0e80f325065fad5); ?>
<?php endif; ?>
            <?php else: ?>
                <?php $__currentLoopData = $group['frames']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $frame): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if (isset($component)) { $__componentOriginalc7c58c6d16fe849872fb25ad6e9b8407 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc7c58c6d16fe849872fb25ad6e9b8407 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.frame','data' => ['frame' => $frame]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::frame'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['frame' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($frame)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc7c58c6d16fe849872fb25ad6e9b8407)): ?>
<?php $attributes = $__attributesOriginalc7c58c6d16fe849872fb25ad6e9b8407; ?>
<?php unset($__attributesOriginalc7c58c6d16fe849872fb25ad6e9b8407); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc7c58c6d16fe849872fb25ad6e9b8407)): ?>
<?php $component = $__componentOriginalc7c58c6d16fe849872fb25ad6e9b8407; ?>
<?php unset($__componentOriginalc7c58c6d16fe849872fb25ad6e9b8407); ?>
<?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/trace.blade.php ENDPATH**/ ?>