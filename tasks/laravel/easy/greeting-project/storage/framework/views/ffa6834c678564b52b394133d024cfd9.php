<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['frames']));

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

foreach (array_filter((['frames']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<?php use \Illuminate\Support\Str; ?>

<div
    x-data="{ expanded: false }"
    class="group rounded-lg border border-neutral-200 dark:border-white/5"
    :class="{
        'bg-white dark:bg-white/5 shadow-xs': expanded,
        'border-dashed border-neutral-300 bg-neutral-50 opacity-90 dark:border-white/10 dark:bg-white/1': !expanded,
    }"
>
    <div
        class="flex h-11 cursor-pointer items-center gap-3 rounded-lg pr-2.5 pl-4 hover:bg-white/50 dark:hover:bg-white/2"
        @click="expanded = !expanded"
    >
        <?php if (isset($component)) { $__componentOriginal6936650fa23142238a13a0689c4bfe24 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal6936650fa23142238a13a0689c4bfe24 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.folder','data' => ['class' => 'w-3 h-3 text-neutral-400','xShow' => '!expanded','xCloak' => true]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.folder'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-neutral-400','x-show' => '!expanded','x-cloak' => true]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal6936650fa23142238a13a0689c4bfe24)): ?>
<?php $attributes = $__attributesOriginal6936650fa23142238a13a0689c4bfe24; ?>
<?php unset($__attributesOriginal6936650fa23142238a13a0689c4bfe24); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal6936650fa23142238a13a0689c4bfe24)): ?>
<?php $component = $__componentOriginal6936650fa23142238a13a0689c4bfe24; ?>
<?php unset($__componentOriginal6936650fa23142238a13a0689c4bfe24); ?>
<?php endif; ?>
        <?php if (isset($component)) { $__componentOriginal94e6c9aa0eb2b7a85f88307a3371880e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal94e6c9aa0eb2b7a85f88307a3371880e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.folder-open','data' => ['class' => 'w-3 h-3 text-blue-500 dark:text-emerald-500','xShow' => 'expanded']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.folder-open'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-blue-500 dark:text-emerald-500','x-show' => 'expanded']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal94e6c9aa0eb2b7a85f88307a3371880e)): ?>
<?php $attributes = $__attributesOriginal94e6c9aa0eb2b7a85f88307a3371880e; ?>
<?php unset($__attributesOriginal94e6c9aa0eb2b7a85f88307a3371880e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal94e6c9aa0eb2b7a85f88307a3371880e)): ?>
<?php $component = $__componentOriginal94e6c9aa0eb2b7a85f88307a3371880e; ?>
<?php unset($__componentOriginal94e6c9aa0eb2b7a85f88307a3371880e); ?>
<?php endif; ?>

        <div class="flex-1 font-mono text-xs leading-3 text-neutral-900 dark:text-neutral-400">
            <?php echo e(count($frames)); ?> vendor <?php echo e(Str::plural('frame', count($frames))); ?>

        </div>

        <button
            x-cloak
            type="button"
            class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md dark:border dark:border-white/8 group-hover:text-blue-500 group-hover:dark:text-emerald-500"
            :class="{
                'text-blue-500 dark:text-emerald-500 dark:bg-white/5': expanded,
                'text-neutral-500 dark:text-neutral-500 dark:bg-white/3': !expanded,
            }"
        >
            <?php if (isset($component)) { $__componentOriginal4400c4a71d3ea90a0e0b846e7d689a28 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal4400c4a71d3ea90a0e0b846e7d689a28 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.chevrons-down-up','data' => ['xShow' => 'expanded']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.chevrons-down-up'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['x-show' => 'expanded']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal4400c4a71d3ea90a0e0b846e7d689a28)): ?>
<?php $attributes = $__attributesOriginal4400c4a71d3ea90a0e0b846e7d689a28; ?>
<?php unset($__attributesOriginal4400c4a71d3ea90a0e0b846e7d689a28); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal4400c4a71d3ea90a0e0b846e7d689a28)): ?>
<?php $component = $__componentOriginal4400c4a71d3ea90a0e0b846e7d689a28; ?>
<?php unset($__componentOriginal4400c4a71d3ea90a0e0b846e7d689a28); ?>
<?php endif; ?>
            <?php if (isset($component)) { $__componentOriginal7348bb70f498d75e0a91acc6a707f136 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal7348bb70f498d75e0a91acc6a707f136 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.chevrons-up-down','data' => ['xShow' => '!expanded']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.chevrons-up-down'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['x-show' => '!expanded']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal7348bb70f498d75e0a91acc6a707f136)): ?>
<?php $attributes = $__attributesOriginal7348bb70f498d75e0a91acc6a707f136; ?>
<?php unset($__attributesOriginal7348bb70f498d75e0a91acc6a707f136); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal7348bb70f498d75e0a91acc6a707f136)): ?>
<?php $component = $__componentOriginal7348bb70f498d75e0a91acc6a707f136; ?>
<?php unset($__componentOriginal7348bb70f498d75e0a91acc6a707f136); ?>
<?php endif; ?>
        </button>
    </div>

    <div x-cloak class="flex flex-col rounded-b-lg divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/5 dark:border-white/5" x-show="expanded">
        <?php $__currentLoopData = $frames; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $frame): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="flex flex-col divide-y divide-neutral-200 dark:divide-white/5">
                <?php if (isset($component)) { $__componentOriginal96f0b6f4219e16dc62468d91b0335b32 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal96f0b6f4219e16dc62468d91b0335b32 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.vendor-frame','data' => ['frame' => $frame]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::vendor-frame'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['frame' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($frame)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal96f0b6f4219e16dc62468d91b0335b32)): ?>
<?php $attributes = $__attributesOriginal96f0b6f4219e16dc62468d91b0335b32; ?>
<?php unset($__attributesOriginal96f0b6f4219e16dc62468d91b0335b32); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal96f0b6f4219e16dc62468d91b0335b32)): ?>
<?php $component = $__componentOriginal96f0b6f4219e16dc62468d91b0335b32; ?>
<?php unset($__componentOriginal96f0b6f4219e16dc62468d91b0335b32); ?>
<?php endif; ?>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/vendor-frames.blade.php ENDPATH**/ ?>