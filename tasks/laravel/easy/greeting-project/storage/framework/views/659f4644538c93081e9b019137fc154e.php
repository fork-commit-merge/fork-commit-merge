<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['frame']));

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

foreach (array_filter((['frame']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div
    x-data="{
        expanded: <?php echo e($frame->isMain() ? 'true' : 'false'); ?>,
        hasCode: <?php echo e($frame->snippet() ? 'true' : 'false'); ?>

    }"
    class="group rounded-lg border border-neutral-200 dark:border-white/10 overflow-hidden shadow-xs"
    :class="{ 'dark:border-white/5': expanded }"
>
    <div
        class="flex h-11 items-center gap-3 bg-white pr-2.5 pl-4 overflow-x-auto dark:bg-white/3"
        :class="{
            'cursor-pointer hover:bg-white/50 dark:hover:bg-white/5 hover:[&_svg]:stroke-emerald-500': hasCode,
            'dark:bg-white/5 rounded-t-lg': expanded,
            'dark:bg-white/3 rounded-lg': !expanded
        }"
        @click="hasCode && (expanded = !expanded)"
    >
        
        <div class="flex size-3 items-center justify-center flex-shrink-0">
          <div
          class="size-2 rounded-full"
          :class="{
            'bg-rose-500 dark:bg-neutral-400': expanded,
            'bg-rose-200 dark:bg-neutral-700': !expanded
          }"
          ></div>
        </div>

        <div class="flex flex-1 items-center justify-between gap-6 min-w-0">
            <?php if (isset($component)) { $__componentOriginalc33171fb5f34409a0ad661ae1625dcb2 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc33171fb5f34409a0ad661ae1625dcb2 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.formatted-source','data' => ['frame' => $frame]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::formatted-source'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['frame' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($frame)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc33171fb5f34409a0ad661ae1625dcb2)): ?>
<?php $attributes = $__attributesOriginalc33171fb5f34409a0ad661ae1625dcb2; ?>
<?php unset($__attributesOriginalc33171fb5f34409a0ad661ae1625dcb2); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc33171fb5f34409a0ad661ae1625dcb2)): ?>
<?php $component = $__componentOriginalc33171fb5f34409a0ad661ae1625dcb2; ?>
<?php unset($__componentOriginalc33171fb5f34409a0ad661ae1625dcb2); ?>
<?php endif; ?>
            <?php if (isset($component)) { $__componentOriginalfe2bc8d0a6d110d41fdc8740012cee8d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalfe2bc8d0a6d110d41fdc8740012cee8d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.file-with-line','data' => ['frame' => $frame,'direction' => 'rtl']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::file-with-line'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['frame' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($frame),'direction' => 'rtl']); ?>
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
        </div>

        <div class="flex-shrink-0">
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
    </div>

    <?php if($snippet = $frame->snippet()): ?>
        <?php if (isset($component)) { $__componentOriginala7df34c267a7ce6efa01f63b793ef234 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginala7df34c267a7ce6efa01f63b793ef234 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.frame-code','data' => ['code' => $snippet,'highlightedLine' => $frame->line(),'xShow' => 'expanded','xCloak' => !$frame->isMain()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::frame-code'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['code' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($snippet),'highlightedLine' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($frame->line()),'x-show' => 'expanded','x-cloak' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(!$frame->isMain())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginala7df34c267a7ce6efa01f63b793ef234)): ?>
<?php $attributes = $__attributesOriginala7df34c267a7ce6efa01f63b793ef234; ?>
<?php unset($__attributesOriginala7df34c267a7ce6efa01f63b793ef234); ?>
<?php endif; ?>
<?php if (isset($__componentOriginala7df34c267a7ce6efa01f63b793ef234)): ?>
<?php $component = $__componentOriginala7df34c267a7ce6efa01f63b793ef234; ?>
<?php unset($__componentOriginala7df34c267a7ce6efa01f63b793ef234); ?>
<?php endif; ?>
    <?php endif; ?>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/frame.blade.php ENDPATH**/ ?>