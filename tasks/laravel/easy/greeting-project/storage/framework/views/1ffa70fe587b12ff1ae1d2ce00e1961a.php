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

<div class="flex flex-col pt-8 sm:pt-16 overflow-x-auto">
    <div class="flex flex-col gap-5 mb-8">
        <h1 class="text-3xl font-semibold text-neutral-950 dark:text-white"><?php echo e($exception->class()); ?></h1>
        <?php if (isset($component)) { $__componentOriginalfe2bc8d0a6d110d41fdc8740012cee8d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalfe2bc8d0a6d110d41fdc8740012cee8d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.file-with-line','data' => ['frame' => $exception->frames()->first(),'class' => '-mt-3 text-xs']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::file-with-line'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['frame' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->frames()->first()),'class' => '-mt-3 text-xs']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalfe2bc8d0a6d110d41fdc8740012cee8d)): ?>
<?php $attributes = $__attributesOriginalfe2bc8d0a6d110d41fdc8740012cee8d; ?>
<?php unset($__attributesOriginalfe2bc8d0a6d110d41fdc8740012cee8d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalfe2bc8d0a6d110d41fdc8740012cee8d)): ?>
<?php $component = $__componentOriginalfe2bc8d0a6d110d41fdc8740012cee8d; ?>
<?php unset($__componentOriginalfe2bc8d0a6d110d41fdc8740012cee8d); ?>
<?php endif; ?>
        <p class="text-xl font-light text-neutral-800 dark:text-neutral-300">
            <?php echo e($exception->message()); ?>

        </p>
    </div>

    <div class="flex items-start gap-2 mb-8 sm:mb-16">
        <div class="bg-white dark:bg-white/[3%] border border-neutral-200 dark:border-white/10 divide-x divide-neutral-200 dark:divide-white/10 rounded-md shadow-xs flex items-center gap-0.5">
            <div class="flex items-center gap-1.5 h-6 px-[6px] font-mono text-[13px]">
                <span class="text-neutral-400 dark:text-neutral-500">LARAVEL</span>
                <span class="text-neutral-500 dark:text-neutral-300"><?php echo e(app()->version()); ?></span>
            </div>
            <div class="flex items-center gap-1.5 h-6 px-[6px] font-mono text-[13px]">
                <span class="text-neutral-400 dark:text-neutral-500">PHP</span>
                <span class="text-neutral-500 dark:text-neutral-300"><?php echo e(PHP_VERSION); ?></span>
            </div>
        </div>
        <?php if (isset($component)) { $__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.badge','data' => ['type' => 'error']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::badge'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['type' => 'error']); ?>
            <?php if (isset($component)) { $__componentOriginalebc8ec9a834a8051f56913d6745a7050 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalebc8ec9a834a8051f56913d6745a7050 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.alert','data' => ['class' => 'w-2.5 h-2.5']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.alert'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-2.5 h-2.5']); ?>
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
            UNHANDLED
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
        <?php if (isset($component)) { $__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.badge','data' => ['type' => 'error','variant' => 'solid']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::badge'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['type' => 'error','variant' => 'solid']); ?>
            CODE <?php echo e($exception->code()); ?>

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
    </div>

    <?php if (isset($component)) { $__componentOriginalb581a7e3a55d371fae986833ecafa668 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb581a7e3a55d371fae986833ecafa668 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.request-url','data' => ['exception' => $exception,'request' => $exception->request(),'class' => 'relative z-50']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::request-url'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['exception' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception),'request' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->request()),'class' => 'relative z-50']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb581a7e3a55d371fae986833ecafa668)): ?>
<?php $attributes = $__attributesOriginalb581a7e3a55d371fae986833ecafa668; ?>
<?php unset($__attributesOriginalb581a7e3a55d371fae986833ecafa668); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb581a7e3a55d371fae986833ecafa668)): ?>
<?php $component = $__componentOriginalb581a7e3a55d371fae986833ecafa668; ?>
<?php unset($__componentOriginalb581a7e3a55d371fae986833ecafa668); ?>
<?php endif; ?>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/header.blade.php ENDPATH**/ ?>