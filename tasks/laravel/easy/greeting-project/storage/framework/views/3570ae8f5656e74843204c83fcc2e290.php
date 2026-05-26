<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['method']));

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

foreach (array_filter((['method']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<?php
$type = match ($method) {
    'GET', 'OPTIONS', 'ANY' => 'default',
    'POST' => 'success',
    'PUT', 'PATCH' => 'primary',
    'DELETE' => 'error',
    default => 'default',
};
?>

<?php if (isset($component)) { $__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.badge','data' => ['type' => ''.e($type).'']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::badge'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['type' => ''.e($type).'']); ?>
    <?php if (isset($component)) { $__componentOriginalba2eecb54ab69c011eea9820c76048d8 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalba2eecb54ab69c011eea9820c76048d8 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.globe','data' => ['class' => 'w-2.5 h-2.5']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.globe'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-2.5 h-2.5']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalba2eecb54ab69c011eea9820c76048d8)): ?>
<?php $attributes = $__attributesOriginalba2eecb54ab69c011eea9820c76048d8; ?>
<?php unset($__attributesOriginalba2eecb54ab69c011eea9820c76048d8); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalba2eecb54ab69c011eea9820c76048d8)): ?>
<?php $component = $__componentOriginalba2eecb54ab69c011eea9820c76048d8; ?>
<?php unset($__componentOriginalba2eecb54ab69c011eea9820c76048d8); ?>
<?php endif; ?>
    <?php echo e($method); ?>

 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb)): ?>
<?php $attributes = $__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb; ?>
<?php unset($__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb)): ?>
<?php $component = $__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb; ?>
<?php unset($__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb); ?>
<?php endif; ?>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/http-method.blade.php ENDPATH**/ ?>